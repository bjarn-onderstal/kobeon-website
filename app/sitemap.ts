import type { MetadataRoute } from "next";
import { site, vacancies } from "@/lib/siteConfig";

const routes = ["", "/diensten", "/projecten", "/sectoren", "/sectoren/sierteelt", "/sectoren/detachering", "/sectoren/semi-publiek", "/sectoren/onderwijs", "/sectoren/kinderopvang", "/sectoren/maakindustrie", "/werkwijze", "/quickscan", "/over-kobeon", "/werken-bij", "/vacatures", "/discovery-sessie"];

export default function sitemap(): MetadataRoute.Sitemap {
  const vacancyRoutes = vacancies.filter((v) => !v.open).map((v) => `/vacatures/${v.slug}`);
  return [...routes, ...vacancyRoutes].map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
