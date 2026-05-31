# Kobeon website (Next.js)

Productie-foundation voor de Kobeon-site, gebouwd volgens de briefing in `/docs/00-brief-volledig.txt`.

## Starten
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # productiebuild
```
Node 18+ aanbevolen.

## Wat erin zit
- Next.js App Router + TypeScript + Tailwind + Framer Motion
- Merk-tokens in `tailwind.config.ts`, copy/constanten in `lib/siteConfig.ts`
- Homepage: Hero, klant-logostrip, "Vier oplossingen, één platform", Stats, FAQ, Final CTA
- Herbruikbare componenten met light/dark-thema: DeviceFrame, MockDashboard, FloatingMetric, StatCounter, SolutionCard
- SEO: per-pagina metadata, Organization JSON-LD, `sitemap.ts`, `robots.ts`
- Asset-structuur met fallback: `/public/visuals`, `/public/screens` + `screens.config.json`
- Placeholder-pagina's voor de overige routes

## Verder bouwen met Claude Code
1. Open deze map in Claude Code. `CLAUDE.md` wordt automatisch geladen (merk, toon, integraties, SEO-regels).
2. Gebruik plan mode en werk per stap. Suggestie-prompt om te starten:

> "Lees CLAUDE.md en docs/00-brief-volledig.txt. Bouw als volgende stap de sectie 'Wat we bouwen' als lichte, alternerende demo-rijen met de mock-componenten MockWorkflow, MockAgent, MockTraining en MockIntegration (licht thema, Framer Motion, zwevende metric-kaartjes). Houd je aan de merk-tokens, je/jouw, en de licht-eerst stijl. Voeg de sectie toe aan de homepage onder de hero."

3. Daarna: diensten-bento, projecten, sectoren, werkwijze, werken bij, quickscan, discovery-sessie — zie de "Wat nog moet"-lijst in `CLAUDE.md`.

## Deploy
Aanbevolen: Vercel (Next.js native). `vercel` of koppel de repo. Zet de basis-URL in `lib/siteConfig.ts` (`site.url`).

## Assets toevoegen
- Beelden in `/public/visuals` (zie `docs/visual-brief.md`).
- Echte screenshots in `/public/screens` + vul `public/screens.config.json` (zie `docs/screenshot-brief.md`). Zonder assets toont de site de gecodeerde mocks.
