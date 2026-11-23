export type PracticeArea = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  services: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "litigation-adr",
    title: "Litigation and alternative dispute resolution",
    summary: "Representation in the courts and in arbitration and mediation.",
    intro: "We act for individuals, companies and families in contested matters, and we say early what a case is likely to cost and how long it may take. Where a settlement serves the client better than a trial, we pursue it.",
    services: ["Civil and commercial litigation", "Land and property disputes", "Arbitration and mediation", "Enforcement of judgments", "Appeals"],
  },
  {
    slug: "maritime-shipping",
    title: "Maritime and shipping",
    summary: "Vessel, cargo and port matters.",
    intro: "We handle disputes and transactions that arise from carrying goods and operating vessels, including arrests, cargo claims and charterparty questions.",
    services: ["Admiralty claims and vessel arrest", "Cargo loss and damage", "Charterparties and bills of lading", "Ship finance and registration", "Port and terminal agreements"],
  },
  {
    slug: "aviation-law",
    title: "Aviation law",
    summary: "Advice for operators, lessors, financiers and passengers.",
    intro: "Aviation work is governed by national law and international conventions. We help clients read both and apply them to leases, operations and claims.",
    services: ["Aircraft leasing and financing", "Operator and licensing matters", "Passenger and cargo claims", "Airport and ground-handling agreements", "Regulatory advice"],
  },
  {
    slug: "banking-project-finance",
    title: "Banking and project finance",
    summary: "Facilities, security and structuring for lenders, borrowers and sponsors.",
    intro: "We advise on how credit is structured, secured and recovered, and on the documents that hold a financed project together.",
    services: ["Loan and facility agreements", "Mortgages and other security", "Project finance documentation", "Perfection of security", "Debt recovery"],
  },
  {
    slug: "investment-law",
    title: "Investment law",
    summary: "Structuring and protecting investments in Nigeria.",
    intro: "We help investors choose a sound structure, understand the approvals involved and document the arrangement so that it can be enforced.",
    services: ["Investment structuring", "Joint-venture and shareholder agreements", "Regulatory approvals", "Due diligence", "Exits and restructuring"],
  },
  {
    slug: "tax-revenue",
    title: "Tax and revenue consultancy",
    summary: "Tax planning, compliance and revenue advisory.",
    intro: "A practice with a long-standing bias toward taxation and revenue generation, supported by membership of the Chartered Institute of Taxation of Nigeria.",
    services: ["Tax planning and advisory", "Compliance and returns", "Tax disputes and audits", "Revenue generation advisory", "Taxation of property transactions"],
  },
  {
    slug: "oil-gas-advisory",
    title: "Oil and gas advisory",
    summary: "Commercial and legal advice for the oil and gas sector.",
    intro: "Drawing on long experience inside the industry, we advise on the commercial and contractual questions that arise for operators, service companies and investors.",
    services: ["Upstream and midstream contracts", "Joint-venture and cash-call matters", "Local-content and regulatory advice", "Service and supply agreements", "Sector disputes"],
  },
  {
    slug: "labour-employment",
    title: "Labour and employment",
    summary: "Contracts, workplace policy and employment disputes.",
    intro: "We advise employers and employees on the terms of work, on ending it fairly, and on resolving disagreements before they escalate.",
    services: ["Employment contracts and handbooks", "Termination and severance", "Workplace investigations", "Employment disputes", "Executive and director agreements"],
  },
  {
    slug: "immigration",
    title: "Immigration",
    summary: "Visas, permits and residence for individuals and employers.",
    intro: "We guide individuals and companies through the documents and procedures that govern entry, work and residence.",
    services: ["Business and work permits", "Expatriate quota matters", "Residence and regularisation", "Corporate immigration compliance"],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual property",
    summary: "Trademarks, copyright and the protection of brands.",
    intro: "We help businesses and creators register, license and defend what they have built.",
    services: ["Trademark registration", "Copyright and licensing", "Brand protection", "IP agreements", "Infringement disputes"],
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((p) => p.slug === slug);
}
