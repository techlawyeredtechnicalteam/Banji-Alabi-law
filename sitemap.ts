import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { practiceAreas } from "@/lib/practice-areas";
import { insights } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/practice-areas", "/real-estate-conveyancing", "/insights", "/team", "/contact"];
  return [
    ...staticPaths.map((p) => ({ url: `${site.url}${p}` })),
    ...practiceAreas.map((p) => ({ url: `${site.url}/practice-areas/${p.slug}` })),
    ...insights.map((i) => ({ url: `${site.url}/insights/${i.slug}`, lastModified: i.date })),
  ];
}
