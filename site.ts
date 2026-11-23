export const site = {
  name: "Banji Alabi & Co",
  legalName: "Banji Alabi & Co",
  tagline: "Legal practitioners, notaries and conveyancers",
  phone: "+234 803 535 0705",
  phoneHref: "tel:+2348035350705",
  whatsappNumber: "2348035350705",
  email: "info@banjialabilaw.com",
  // Add the office address here and it appears on the Contact page and footer.
  address: "Petrodus, 4th Floor, Standard Alliance Building (BOI), Plot 1 Providence Street, Lekki 1, Lagos",
  hours: "Monday to Friday, 8:30am to 5:00pm (WAT)",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.banjialabilaw.com",
};

export function whatsappLink(message = "Hello Banji Alabi & Co, I would like to make an enquiry.") {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/practice-areas", label: "Practice areas" },
  { href: "/real-estate-conveyancing", label: "Real estate and conveyancing" },
  { href: "/insights", label: "Insights" },
  { href: "/team", label: "Our team" },
  { href: "/contact", label: "Contact" },
];
