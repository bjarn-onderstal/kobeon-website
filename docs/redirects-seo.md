# Redirects & SEO-herstel na launch (kobeon.nl)

> Bron: Google Search Console (`sc-domain:kobeon.nl`), Pagina-indexering, gelezen 12 jun 2026.
> Canonical host = **www.kobeon.nl** (bewust gehouden; site draait er al consistent op — apex → www redirect staat live, robots + sitemap wijzen naar www).

## Status in Search Console (12 jun 2026)
- **7 pagina's geïndexeerd**, 36 niet geïndexeerd (6 redenen).
- **13 × "Niet gevonden (404)"** ← oude URL's van de vorige site die nu 404 geven. **Hoofdprobleem → 301-redirects (hieronder).**
- 3 × "Pagina met omleiding" — al redirectend (apex→www); oké.
- 1 × "Uitgesloten door tag noindex" — **komt niet uit de huidige code** (geen `noindex` in de repo). Restant van de oude site; veroudert vanzelf. Geen actie nodig.
- 1 × "Dubbele pagina zonder canonical" — los op met self-referencing canonical per pagina (zie §3).
- 16 + 2 × "Gevonden/Gecrawld - momenteel niet geïndexeerd" — normaal voor een verse launch; versnellen via URL-inspectie → "Indexering aanvragen" voor de hoofdpagina's (zie §4).

## 1. De 13 oude 404-URL's → nieuwe bestemming (301)
| Oude URL (404) | Nieuwe bestemming |
|---|---|
| /over-ons | /over-kobeon |
| /about | /over-kobeon |
| /careers | /werken-bij |
| /jobs/mendix-consultant | /vacatures/mendix-consultant-solution-architect |
| /digitalisering-in-de-maakindustrie | /sectoren/maakindustrie |
| /onze-diensten/business-financial-services | /diensten |
| /solutions/innovation | /diensten |
| /mendix-meets-ai | /diensten/agentic-ai |
| /klanttevredenheid | /projecten |
| /blog | / |
| /events | / |
| /mendixmeetup | / |
| /insights/algemene-voorwaarden | / *(geen voorwaardenpagina op de nieuwe site — bevestig of er één moet komen; anders → home)* |

## 2. Implementatie — `next.config.mjs`
Vervang de huidige `next.config.mjs` door:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/over-ons", destination: "/over-kobeon", permanent: true },
      { source: "/about", destination: "/over-kobeon", permanent: true },
      { source: "/careers", destination: "/werken-bij", permanent: true },
      { source: "/jobs/mendix-consultant", destination: "/vacatures/mendix-consultant-solution-architect", permanent: true },
      { source: "/digitalisering-in-de-maakindustrie", destination: "/sectoren/maakindustrie", permanent: true },
      { source: "/onze-diensten/business-financial-services", destination: "/diensten", permanent: true },
      { source: "/onze-diensten/:path*", destination: "/diensten", permanent: true },
      { source: "/solutions/innovation", destination: "/diensten", permanent: true },
      { source: "/solutions/:path*", destination: "/diensten", permanent: true },
      { source: "/mendix-meets-ai", destination: "/diensten/agentic-ai", permanent: true },
      { source: "/klanttevredenheid", destination: "/projecten", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
      { source: "/events", destination: "/", permanent: true },
      { source: "/mendixmeetup", destination: "/", permanent: true },
      { source: "/insights/:path*", destination: "/", permanent: true },
      { source: "/jobs/:path*", destination: "/vacatures", permanent: true },
    ];
  },
};
export default nextConfig;
```

De `:path*`-regels vangen ook varianten/onderpagina's van diezelfde oude secties af.

## 3. Canonical-hygiëne (lost "dubbele pagina zonder canonical" op)
Zet per pagina een self-referencing canonical via de Next metadata-API, bv. in elke `page.tsx`:
```ts
export const metadata = { alternates: { canonical: "/diensten" } };  // relatief pad per route
```
`metadataBase` (= `site.url`, www) staat al in `app/layout.tsx`, dus relatieve canonicals worden absolute www-URL's. Begin met home + de hoofdroutes en de dynamische `[slug]`-pagina's (canonical = het eigen pad).

## 4. Search Console — na deploy (met go-ahead per stap)
1. **Sitemap**: al ingediend (`https://www.kobeon.nl/sitemap.xml`, wordt gelezen). Geen nieuwe submit nodig zolang www canonical blijft.
2. **404-validatie**: open Pagina-indexering → "Niet gevonden (404)" → **Probleemoplossing valideren**. Na deploy schuiven die URL's naar "Pagina met omleiding" (verwacht en oké).
3. **Indexering aanvragen** voor de live hoofdpagina's die nog niet geïndexeerd zijn: home, /diensten, /sectoren, /projecten, /over-kobeon, /werken-bij, /werkwijze, /contact — via URL-inspectie per URL.

## 5. Sitemap-filter (verificatie, waarschijnlijk oké)
`app/sitemap.ts` regel 7: `vacancies.filter((v) => !v.open)` sluit alleen de generieke **open-sollicitatie** uit en neemt alle echte vacatures wél op. Bevestig dat dat de bedoeling is (open-sollicitatie bewust níét in sitemap).
