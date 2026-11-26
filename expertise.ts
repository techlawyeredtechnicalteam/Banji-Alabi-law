export type Area = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  services: string[];
};

const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const raw: [string, string, string, string[]][] = [
  ["Litigation and alternative dispute resolution", "Courtroom and arbitration advocacy, and negotiated settlement.", "We act for individuals, companies and families in contested matters, and we say early what a case is likely to cost and how long it may take. Where a settlement serves the client better than a trial, we pursue it.", ["Civil and commercial litigation", "Land and property disputes", "Arbitration and mediation", "Enforcement of judgments", "Appeals"]],
  ["Maritime and shipping", "Vessel, cargo and port matters.", "We handle disputes and transactions that arise from carrying goods and operating vessels, including arrests, cargo claims and charterparty questions.", ["Admiralty claims and vessel arrest", "Cargo loss and damage", "Charterparties and bills of lading", "Ship finance and registration", "Port and terminal agreements"]],
  ["Aviation law", "Advice for operators, lessors, financiers and passengers.", "Aviation work is governed by national law and international conventions. We help clients read both and apply them to leases, operations and claims.", ["Aircraft leasing and financing", "Operator and licensing matters", "Passenger and cargo claims", "Airport and ground-handling agreements", "Regulatory advice"]],
  ["Banking and project finance", "Practical financing counsel for lenders, borrowers and sponsors.", "We advise on how credit is structured, secured and recovered, and on the documents that hold a financed project together.", ["Loan and facility agreements", "Mortgages and other security", "Project finance documentation", "Perfection of security", "Debt recovery"]],
  ["Investment law", "Structuring and protecting investments in Nigeria.", "We help investors choose a sound structure, understand the approvals involved and document the arrangement so that it can be enforced.", ["Investment structuring", "Joint-venture and shareholder agreements", "Regulatory approvals", "Due diligence", "Exits and restructuring"]],
  ["Tax and revenue consultancy", "Tax planning, compliance and revenue advisory.", "A practice with a long-standing bias toward taxation and revenue generation, supported by membership of the Chartered Institute of Taxation of Nigeria.", ["Tax planning and advisory", "Compliance and returns", "Tax disputes and audits", "Revenue generation advisory", "Taxation of property transactions"]],
  ["Oil and gas advisory", "Commercial and legal advice for the oil and gas sector.", "Drawing on long experience inside the industry, we advise on the commercial and contractual questions that arise for operators, service companies and investors.", ["Upstream and midstream contracts", "Joint-venture and cash-call matters", "Local-content and regulatory advice", "Service and supply agreements", "Sector disputes"]],
  ["Labour and employment", "Contracts, workplace policy and employment disputes.", "We advise employers and employees on the terms of work, on ending it fairly, and on resolving disagreements before they escalate.", ["Employment contracts and handbooks", "Termination and severance", "Workplace investigations", "Employment disputes", "Executive and director agreements"]],
  ["Immigration", "Visas, permits and residence for individuals and employers.", "We guide individuals and companies through the documents and procedures that govern entry, work and residence.", ["Business and work permits", "Expatriate quota matters", "Residence and regularisation", "Corporate immigration compliance"]],
  ["Intellectual property", "Trademarks, copyright and the protection of brands.", "We help businesses and creators register, license and defend what they have built.", ["Trademark registration", "Copyright and licensing", "Brand protection", "IP agreements", "Infringement disputes"]],
];

export const areas: Area[] = raw.map(([title, summary, intro, services]) => ({ slug: slugify(title), title, summary, intro, services }));

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);

export type TileData = { href: string; title: string; summary: string };

export const tiles: TileData[] = [
  { href: "/real-estate-conveyancing", title: "Real estate and conveyancing", summary: "Title, transfer and registration for buyers, sellers, developers and landlords." },
  ...areas.map((a) => ({ href: `/expertise/${a.slug}`, title: a.title, summary: a.summary })),
];

export const FORM_AREAS = [
  "Real estate and conveyancing",
  "Estates and plots (Metro Smart City, Nicon Town, Lekki, Victoria Island, Ikoyi)",
  ...areas.map((a) => a.title),
  "Other",
];

/** Maps the ?area= value used in links to a form option. */
export function resolveArea(param?: string) {
  if (!param) return "";
  if (param === "real") return FORM_AREAS[0];
  if (param === "estates") return FORM_AREAS[1];
  const bySlug = areas.find((a) => a.slug === param);
  if (bySlug) return bySlug.title;
  return FORM_AREAS.includes(param) ? param : "";
}
