import type { MetadataRoute } from "next";
import { site } from "@/lib/siteConfig";

const routes = ["", "/oplossingen", "/diensten", "/projecten", "/sectoren", "/sectoren/sierteelt", "/sectoren/detachering", "/sectoren/semi-publiek", "/sectoren/onderwijs", "/sectoren/kinderopvang", "/sectoren/maakindustrie", "/werkwijze", "/over-kobeon", "/werken-bij", "/vacatures", "/discovery-sessie"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
