export type Member = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  photo?: string; // file name (without extension) inside public/images
};

export const team: Member[] = [
  {
    slug: "banji-alabi",
    name: "Banji Alabi, Esq.",
    role: "Principal partner",
    bio: "Barrister and Solicitor of the Supreme Court of Nigeria, member of the Nigerian Bar Association and the Chartered Institute of Taxation of Nigeria. He spent 24 years at Chevron Nigeria Limited before founding the firm.",
    photo: "banji-alabi",
  },
  {
    slug: "omolola-banji-alabi",
    name: "Mrs Omolola Banji-Alabi",
    role: "Co-principal",
    bio: "A Chartered Banker and former staff of Union Homes and Oceanic Bank, she is a co-principal of the firm and one of the professionals with whom it was established.",
    photo: "omolola-banji-alabi",
  },
];
