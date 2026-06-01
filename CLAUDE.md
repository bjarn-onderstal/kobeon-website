# Kobeon website — projectregels (lees dit eerst)

Je bouwt de productie-website voor **Kobeon**, een Nederlandse **Mendix + AI implementatiepartner**. Stack: **Next.js (App Router) + TypeScript + Tailwind + Framer Motion**. De volledige briefing staat in `/docs/00-brief-volledig.txt` (v3.11) — dat is leidend. Hieronder de kern die je altijd aanhoudt.

## Merk & visuele stijl
- Kleuren (Tailwind tokens in `tailwind.config.ts`): purple #3A0CA3, purple.deep #2A0870, purple.med #5348CE, teal #13A6A6, teal.light #14C8C8, yellow #FFB703, ink #161616, canvas #F7F7FB, purplebg #EDE7F6, tealbg #E0F7FA, line #E6E6EF, muted #6B6B7B.
- Fonts: koppen serif (DM Serif Display, `.h-display`), body Ubuntu.
- **Licht-eerst.** Lead light; donker (purple.deep) alleen als accent. Vermijd grote near-black vlakken en neon/glow. Diepte = zachte schaduwen (`shadow-soft`, `shadow-lift`).
- Mock-UI's en device-frames hebben een `theme="light"|"dark"`-prop; default light, volg de sectie-achtergrond.

## Iconen & kaarten (vastgesteld)
- **Diensten:** line-iconen via `components/Icon.tsx` (`<Icon name={slug} />`), in een zacht getinte accent-cirkel. Eén consistente line-stijl; **geen emoji**.
- **Sectoren:** **typografie-gedreven, geen iconen** — een korte accentbalk in de merkkleur + de sectornaam in de serif (`.h-display`). Zie `components/SectorCard.tsx` en de hero-chip in `SectorPage.tsx`.
- **Kaarten zijn altijd licht en consistent:** witte kaart op canvas, `rounded-2xl`, `border-line`, `shadow-soft`; hover = `-translate-y-1` + `shadow-lift` + accentrand (paars/teal/geel). Géén donkere image-slabs. Dit geldt voor diensten-bento, sector-kaarten en case-kaarten.
- **Diensten-bento:** asymmetrisch ritme via `span`; grote feature-tegels (`mock` gezet) tonen een lichte `MiniMock` i.p.v. een icoon.

## Toon van de copy (belangrijk)
- Aanspreekvorm: **je / jouw** (nooit u/uw).
- **Enterprise, zelfverzekerd, bewijs-gedreven** — niet gemoedelijk/folksy. Geen "trots op je software", geen knipogen.
- Voordeel/resultaat eerst, niet "wij bieden…". Cijfers en namen boven bijvoeglijke naamwoorden.
- **Geen Nederengels / letterlijke vertalingen.** Fout→goed: privaat→eigen/privé · uit de doos→standaard · real-time→actueel/realtime · selfservice→zelfservice · coming soon→binnenkort · big bang→in één keer. Behoud vakjargon: Mendix, low-code, MVP, agentic AI, governance, compliance, API, ISO 27001, AVG, BIO, NIS2.

## Integraties (let op)
- **Homepage = enterprise + sterke NL-namen:** Microsoft Dynamics 365, SAP, AWS, Azure, AFAS, Exact, Salesforce (+ Mendix, Siemens, OpenAI). Géén branche-niche op de homepage.
- **Sectorpagina's = branche-specifiek:** horticultuur → Agriware, Infor, Metacom (Meijel) + BKD; staffing → AFAS, Nmbrs.

## SEO (niet onderhandelbaar)
- Elke pagina: unieke `metadata` (title 50–60, description 150–160, keyword + bewijs + CTA), één semantische H1, OG-tags.
- JSON-LD: Organization (sitebreed, in `components/JsonLd.tsx`), plus FAQPage / Service / BreadcrumbList / JobPosting waar relevant.
- `app/sitemap.ts` en `app/robots.ts` up-to-date houden bij nieuwe routes.
- Beschrijvende alt-teksten; comprimeer beeld; bewaak Core Web Vitals.

## Architectuur-conventies
- Secties via `<Section tone=...>`. Herbruikbare visuals in `/components` (DeviceFrame, MockDashboard/Workflow/Agent/Training/Integration/Portal, MiniMock, FloatingMetric, StatCounter, ServiceTile, SectorCard, Icon). Content/copy-constanten in `lib/siteConfig.ts`.
- Animaties: Framer Motion, subtiel, `viewport={{ once: true }}`, respecteer `prefers-reduced-motion` (staat in globals.css).
- Assets met fallback: `/public/visuals` (Nano Banana), `/public/screens` + `screens.config.json` (echte screenshots). Werkt ook zonder assets.

## Wat al staat
Homepage: Hero, LogoStrip, WatWeBouwen (4 taken), Introductie + snelheid, HoeWeWerken, MendixVoordeel, ModellenDataCloud, Onderzoek, Projecten, DienstenBento, FAQ, FinalCTA. Pagina's: /diensten, /projecten, /sectoren (+ 6 detailpagina's), /werkwijze, /werken-bij, /vacatures, /quickscan, /discovery-sessie, /over-kobeon. Nav + Footer + SEO-basis. De abstracte "Vier oplossingen"-sectie is verwijderd.

## Wat nog moet (volgorde)
1. Service-demo-rijen (licht) met de mock-componenten uit de brief (MockWorkflow/MockAgent/MockTraining/MockIntegration/MockPortal — bouw die nog).
2. Diensten-bento / video-tegels (v3.5) op lichte achtergrond.
3. Projecten (case-cards met device-mockups), Sectoren (6), Werkwijze, Werken bij + vacatures, Quickscan, Discovery-sessie.
4. Onderzoek/autoriteit-strook (v3.9). Mendix-voordeel + "Je modellen, je data, je cloud".
5. Per-pagina SEO + schema afmaken.
Werk steeds met kleine, afgebakende stappen en commit vaak.

## Bouwplan
Volg `NEXT-STEPS.md`. Als de gebruiker zegt "pak de volgende stap op", volg het PROTOCOL bovenaan dat bestand: doe één stap, vink af, log de voortgang, commit, en stop voor review.
