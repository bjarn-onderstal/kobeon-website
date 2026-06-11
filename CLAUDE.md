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
- **Diensten-bento:** asymmetrisch ritme via `span`; **elke tegel toont een lichte `MiniMock` als mini-voorbeeld** (niet alleen een icoon), zodat je per dienst voelt wat er kan. Grote feature-tegels mogen een rijkere/grotere mock; kleine tegels een compacte variant.

## Mock-UI's & animaties (vastgesteld)
- **Echte app-uitstraling.** De mock-UI's (behalve `MockIntegration`, die is goed) moeten ogen als een gevuld applicatiescherm: app-shell (sidebar + topbar/titel + content), realistische componenten (datatabel met kolomkoppen/rijen/statusbadges, KPI-kaarten, tabs, knoppen) en **concrete NL-data** (namen, bedragen, statussen) — geen grijze placeholder-balkjes.
- **Flat ≠ leeg.** Houd het flat-styled (Atlas-achtig), met diepte via zachte schaduwen en subtiele laagjes. **Geen** 3D, neon of glow.
- **Topbalk:** app-titelbalk met modulenaam (of strak slot + `kobeon.nl`) — geen nep-dev-URL's, geen rood/geel/teal "verkeerslicht"-stippen.
- **Animatie met ziel:** speel bij in-beeld-komen één geloofwaardige handeling af (rij goedgekeurd, getal springt één keer, taak vinkt af) en hou daarna de eindstaat vast. **Geen eindeloze loop/pulse.** Eén focuspunt per mock, natuurlijke easing, `prefers-reduced-motion` gerespecteerd.

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

## Wat nog moet (zie NEXT-STEPS.md voor de actuele lijst)
De overzichtspagina's en de homepage-secties staan grotendeels. Open punten:
- **Subpagina's** — (S1) dienst-detailpagina's `/diensten/[slug]` (9), (S2) case-detailpagina's `/projecten/[slug]` (7), (S3, optioneel) `/contact`.
- **/over-kobeon vullen** — staat nu leeg (S4): kernverhaal, credentials, echte klanten, team, Zwolle, CTA.
- **Menu-fix (V3)** — de nav is wit-op-wit (onzichtbaar) op pagina's zónder donkere hero; overal leesbaar maken.
- Homepage-restanten: Sectoren-spotlight + Testimonials (stap 6), Quickscan-teaser (stap 7), volgorde-check (stap 8).
- Toegankelijkheid/performance (Lighthouse ≥ 90), assets inladen, deploy naar Vercel.

Content-regel voor (sub)pagina's: trek copy uit `docs/00-brief-volledig.txt` (v3.7/v3.8) en echte klant-/dienstinfo waar beschikbaar; markeer placeholder-tekst duidelijk en overdrijf geen claims. De structuur mag al staan; echte cijfers, quotes en cases vragen input van Kobeon.

Werk steeds met kleine, afgebakende stappen en commit vaak (één schrijver tegelijk).

## Bouwplan
Volg `NEXT-STEPS.md`. Als de gebruiker zegt "pak de volgende stap op", volg het PROTOCOL bovenaan dat bestand: doe één stap, vink af, log de voortgang, commit, en stop voor review.
