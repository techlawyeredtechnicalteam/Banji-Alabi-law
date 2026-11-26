import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { areas } from "@/lib/expertise";
import { insights } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/expertise", "/real-estate-conveyancing", "/people", "/articles", "/contact"];
  return [
    ...staticPaths.map((p) => ({ url: `${site.url}${p}` })),
    ...areas.map((a) => ({ url: `${site.url}/expertise/${a.slug}` })),
    ...insights.map((i) => ({ url: `${site.url}/articles/${i.slug}`, lastModified: i.date })),
  ];
}
