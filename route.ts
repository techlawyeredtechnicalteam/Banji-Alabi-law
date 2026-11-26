import { NextResponse } from "next/server";
import { z } from "zod";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(120),
  email: z.string().trim().email("Enter a valid email address.").max(200),
  phone: z
    .string()
    .trim()
    .max(40)
    .refine((v) => v === "" || /^[+\d][\d\s\-()]{6,}$/.test(v), "Enter a valid phone number.")
    .optional()
    .default(""),
  area: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(10, "Tell us a little more (at least 10 characters).").max(5000),
  consent: z.string().optional().default("").refine((v) => v === "yes", "Please tick the box to continue."),
  website: z.string().optional().default(""), // honeypot
});

// Simple in-memory rate limit: 5 enquiries per IP per 10 minutes.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return NextResponse.json(
      { message: "You have sent several enquiries in a short time. Please wait a few minutes or call us." },
      { status: 429 },
    );
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ message: "The request was not valid." }, { status: 400 });
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!errors[key]) errors[key] = issue.message;
    }
    return NextResponse.json({ message: "Please correct the highlighted fields.", errors }, { status: 400 });
  }

  const d = parsed.data;

  // Bots fill the honeypot. Pretend success and drop the message.
  if (d.website) return NextResponse.json({ ok: true });

  const received = new Date().toISOString();
  const text = [
    `New website enquiry`,
    ``,
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Phone: ${d.phone || "not given"}`,
    `Practice area: ${d.area || "not specified"}`,
    `Received: ${received}`,
    ``,
    `Message:`,
    d.message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  let delivered = false;

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.ENQUIRY_FROM ?? `${site.name} <enquiries@banjialabilaw.com>`,
          to: [process.env.ENQUIRY_TO ?? site.email],
          reply_to: d.email,
          subject: `Website enquiry: ${d.area || "General"} (${d.name})`,
          text,
        }),
      });
      delivered = res.ok;
      if (!res.ok) console.error("Resend error:", res.status, await res.text());
    } catch (e) {
      console.error("Enquiry email failed:", e);
    }
  } else {
    console.error("RESEND_API_KEY is not set. Enquiry not delivered:\n" + text);
  }

  if (!delivered) {
    return NextResponse.json(
      { message: "We could not send your enquiry right now. Please call or message us on WhatsApp." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
