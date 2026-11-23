export type Insight = {
  slug: string;
  title: string;
  date: string; // ISO
  category: string;
  excerpt: string;
  body: string[];
};

// Sample articles. Replace with Mr Alabi's own writing before launch.
export const insights: Insight[] = [
  {
    slug: "before-you-pay-for-land",
    title: "Before you pay for land: five checks worth making",
    date: "2026-10-20",
    category: "Real estate",
    excerpt: "A short list of what to verify before any money changes hands on a land purchase.",
    body: [
      "Most land disputes begin before the purchase is complete. The buyer paid first and asked questions later. A few checks, made in the right order, prevent most of them.",
      "Start with the title. Ask the seller for the title documents and have your lawyer conduct a search at the relevant land registry to confirm who holds the interest and whether any mortgage, caveat or other encumbrance is recorded against it.",
      "Next, confirm the land itself. A survey plan should match the physical plot, and your surveyor should confirm that the land is not caught by a government acquisition or a committed layout.",
      "Then check that the person you are dealing with has the authority to sell. Where a family or company owns the land, ask for the document that shows who may sign on its behalf.",
      "Finally, agree the paperwork before you pay. The sale agreement, the deed of assignment and the steps that follow, including any consent that the law requires, should all be settled with your lawyer first.",
      "This article is general information, not legal advice on your transaction. Speak to us before you commit funds.",
    ],
  },
  {
    slug: "what-conveyancing-covers",
    title: "What conveyancing covers, and what it does not",
    date: "2026-09-29",
    category: "Conveyancing",
    excerpt: "Professional fees for conveyancing are separate from the cost of the property itself.",
    body: [
      "Conveyancing is the legal work of transferring an interest in land from one person to another. It includes investigating title, preparing and reviewing the transfer documents, handling the formal steps that make the transfer effective, and registering it.",
      "It is separate from the property transaction. The price of the land, agency commissions and government charges are costs of the property deal. Conveyancing fees pay for the legal work. Keeping the two apart makes budgeting clearer for everyone.",
      "We set out our fees in writing at the start, so that a client knows what is being paid for and to whom.",
    ],
  },
  {
    slug: "why-a-will-protects-property",
    title: "Why a will protects the property you leave behind",
    date: "2026-09-08",
    category: "Probate",
    excerpt: "Property is the most common source of conflict in families after a death.",
    body: [
      "When someone dies without a valid will, their estate is shared according to rules that may not reflect what they wanted. Property is where this is felt most sharply.",
      "A clear will names who receives what, appoints someone to carry out its terms, and reduces the room for argument. It should be reviewed whenever property is bought or sold, or when family circumstances change.",
      "If you are unsure whether your existing arrangements still match your wishes, a short review is usually enough to find out.",
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}
