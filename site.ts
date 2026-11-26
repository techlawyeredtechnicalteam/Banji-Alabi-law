export const site = {
  name: "Banji Alabi & Co",
  legalName: "Banji Alabi & Co",
  tagline: "Lawyers and conveyancers in Lekki, Lagos",
  phone: "+234 803 535 0705",
  phoneHref: "tel:+2348035350705",
  whatsappNumber: "2348035350705",
  email: "info@banjialabilaw.com",
  address: "Petrodus, 4th Floor, Standard Alliance Building (BOI), Plot 1 Providence Street, Lekki 1, Lagos",
  hours: "Monday to Friday, 8:30am to 5:00pm (WAT)",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.banjialabilaw.com",
};

export function whatsappLink(message = "Hello Banji Alabi & Co, I would like to make an enquiry.") {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/expertise", label: "Expertise" },
  { href: "/real-estate-conveyancing", label: "Real estate" },
  { href: "/people", label: "People" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];
