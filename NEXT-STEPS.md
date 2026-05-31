# NEXT-STEPS — bouwplan Kobeon-site

Gedeelde takenlijst. De gebruiker zegt "pak de volgende stap op"; jij (Claude Code) werkt één stap af en werkt dit bestand bij.

## PROTOCOL — zo gebruik je dit bestand (Claude Code, lees dit elke keer)
Wanneer de gebruiker zegt **"pak de volgende stap op"**:
1. Open dit bestand, zoek de **eerste stap met `[ ]`**.
2. Lees `CLAUDE.md` en de bij die stap genoemde stukken uit `/docs` (vooral `docs/00-brief-volledig.txt`).
3. Voer **alleen die ene stap** uit. Houd je aan: je/jouw, enterprise-toon, licht-eerst, merk-tokens, integratiebeleid en SEO-regels.
4. Controleer dat `npm run build` slaagt (of dev draait zonder errors).
5. **Vink de stap af** (`[ ]` → `[x]`) en zet een regel in het **Voortgangslog** (datum + 1 zin + commit).
6. **Commit** met een duidelijke message.
7. Geef kort terug wát je deed en **stop voor review**. Begin niet automatisch aan de volgende stap.

> Belangrijk: de homepage moet net zo rijk worden als in de Lovable-brief. De foundation had maar 6 secties; stappen 1–8 bouwen de volledige homepage op. Houd de copy/teksten aan uit `docs/00-brief-volledig.txt` (v3.7/v3.8/v3.12).

> Status-reconciliatie (2026-05-31): dit plan is later herzien/hernummerd. Veel pagina's en enkele homepage-secties zijn al gebouwd in een eerdere reeks (zie voortgangslog onderaan). De vakjes hieronder zijn bijgewerkt naar de werkelijke stand. Steps die nog deels open staan, staan bewust op `[ ]` met een toelichting in het log.

---

## STAPPEN

- [x] **0. Foundation** — Next.js + Tailwind + Framer Motion; homepage (Hero, LogoStrip, "Vier oplossingen, één platform", Stats, FAQ, FinalCTA), Nav/Footer, SEO-basis, asset-structuur.

### Homepage compleet maken (stap 1–8)

- [x] **1. Mock-componenten (alle 6, light + dark)**
  Bouw `MockWorkflow`, `MockAgent`, `MockTraining`, `MockIntegration`, `MockPortal` (naast de bestaande `MockDashboard`) in `/components`, elk met `theme="light"|"dark"` en lichte stijl uit v3.11 (witte vlakken, zachte schaduw, geen neon). Deze worden hergebruikt in de demo-rijen.

- [ ] **13. "WAT WE BOUWEN" — de 4 taken in actie (de ontbrekende homepage-opbouw)**
  Voeg direct onder de hero de sectie **"Wat we bouwen"** toe: 4 alternerende, lichte demo-rijen (tekst links/mock rechts, dan omgekeerd), elk met een mock-component + een zwevend metric-kaartje. De 4 taken (zoals in Lovable):
  1. **Procesautomatisering** → MockWorkflow + kaart "−62% doorlooptijd" — "Repetitief en denkwerk geautomatiseerd op Mendix, met een volledig audit-spoor."
  2. **Agentic AI** → MockAgent (met 'mens keurt goed'-stap) + kaart "40+ u/week terug" — "AI-agenten die kenniswerk zelfstandig uitvoeren. Geregisseerd door Mendix, altijd controleerbaar."
  3. **AI Development** → MockTraining + kaart "94% accuraat" — "AI-modellen getraind op je eigen data. Jij houdt de data, wij bouwen het model."
  4. **Systeemintegratie** → MockIntegration + kaart "8 systemen verbonden" — "Microsoft Dynamics, SAP, REST/API — je systemen werken eindelijk samen."
  Onder de rijen: een dunne logo-marquee (Mendix · Microsoft Dynamics 365 · SAP · AWS · Azure · AFAS · Exact · Salesforce · OpenAI · Siemens). Licht thema, Framer Motion, demo's loopen pas in beeld.
  **VERVANGT de bestaande abstracte sectie "Vier oplossingen, één platform" (Automatiseren / Bouwen / Verbinden / AI inzetten) — die categorieën zijn te nietszeggend en gaan eruit.** Verwijder de `solutions`-array uit `lib/siteConfig.ts` en de component `Solutions.tsx`/`SolutionCard.tsx` (of herbouw ze rond deze 4 concrete taken). Behoud wél de smalle diep-paarse band **"Eén platform: Mendix"** (ISO 27001, governance, 10–100.000 gebruikers, Siemens, 9× Gartner) direct ónder de 4 demo-rijen — die regel is sterk.
  Klaar wanneer: de 4 concrete demo-rijen staan onder de hero, de abstracte categorieën-sectie is weg, de "Eén platform: Mendix"-band staat eronder, build slaagt.

- [ ] **2. Introductie-sectie**
  Kop "Je bent gegroeid. Je systemen niet." + body (v3.8) + 3 kernvoordeel-tegels (Snel / Enterprise-kwaliteit / Schaalbaar). Licht. Voeg de **jaren → maanden → weken** snelheidsvergelijking toe (lange balk "high-code: maanden tot jaren" → korte gele balk "Kobeon op Mendix: 6 weken").

- [ ] **3. "Hoe we werken" — tempo (proces-stepper op de homepage)**
  Horizontale stepper met getekende stippellijn: 01 Discovery (1–2 wk) → 02 Design & Prototype (1–2 wk) → 03 MVP bouwen (4–6 wk) → 04 Implementatie & training (1 wk) → geel kaartje "∞ 90-daagse cycli". Maakt het tempo zichtbaar. Link naar /werkwijze.

- [x] **4. Mendix-voordeel + "Je modellen, je data, je cloud"**
  2×2 voordeel-tegels (Standaard veilig · Enterprise-schaalbaarheid · Governance & audit trails · Siemens als fundament) + Gartner-quote. Plus de licht-band "Je modellen. Je data. Je cloud." (geen lock-in, 3 kaarten).

- [x] **5. Onderzoek/autoriteit-strook**
  Horizontale "inzicht"-kaarten met gebronde quotes (v3.9, McKinsey State of AI bovenaan; quotes als te-verifiëren placeholders mét bron). Licht, gegronde achtergronden.

- [ ] **6. Projecten + Sectoren-spotlight + Testimonials (homepage)**
  Projecten: case-kaarten met device-mockup + "van X naar Y"-regel (7 cases). Sectoren-spotlight: 3×2 kaarten (6 sectoren). Testimonials: carrousel met placeholders. Allemaal licht.

- [ ] **7. Quickscan-teaser (homepage)**
  Licht-paarse band met URL-invoer + "Start Quickscan" + 3 preview-chips. Linkt naar /quickscan.

- [ ] **8. Homepage-volgorde controleren**
  Volgorde: Hero → Wat we bouwen (4 taken) + "Eén platform: Mendix"-band → Introductie + snelheid → Stats → Hoe we werken → Mendix-voordeel → Je modellen/data/cloud → Onderzoek-strook → Projecten → Sectoren → Testimonials → Quickscan-teaser → FAQ → Final CTA. (Geen aparte abstracte "Vier oplossingen"-sectie meer.) Check ritme licht/donker (max ~4 donkere blokken) en dat de Discovery-CTA 3× terugkomt.

### Pagina's (stap 9–16)

- [x] **9. /projecten** — volledige case-grid + filters.
- [x] **10. /sectoren** — overzicht (6) + herbruikbaar sectortemplate; werk sierteelt (Agriware, Infor, Metacom + BKD) en staffing (AFAS, Nmbrs, Wet DBA) uit.
- [x] **11. Resterende sectorpagina's** — semi-publiek, onderwijs, kinderopvang, maakindustrie.
- [x] **12. /werkwijze** — 5 fasen als rijen + 90-daagse-cycli + CTA (uitgebreide versie van de homepage-stepper).
- [x] **14. /werken-bij + /vacatures + vacature-detail** — cultuur, teamgrid, generieke vacatures, JobPosting-schema.
- [x] **15. /quickscan** — 3 stappen (input → laden → resultaten).
- [x] **16. /discovery-sessie** — hero, "wat je meekrijgt", Calendly-placeholder, FAQ.
- [x] **17. /diensten** — 9 diensten als lichte bento met (optioneel) video-tegels (v3.5).

### Afronden (stap 18–21)

- [x] **18. SEO + schema** — per-pagina title/meta/H1 (v3.4-teksten), JSON-LD (FAQPage/Service/BreadcrumbList/JobPosting), sitemap bijwerken, OG-images, alt-teksten.
- [ ] **19. Toegankelijkheid & performance** — Lighthouse ≥ 90 (SEO + a11y), contrast, focus, lazy-load, reduced-motion.
- [ ] **20. Assets inladen** — Nano Banana → `/public/visuals`; screenshots → `/public/screens` + `screens.config.json`. Tot dan blijven de mocks staan.
- [ ] **21. Deploy naar Vercel** — `site.url` goedzetten, deploy, sitemap/robots/metadata in productie checken.

---

## VOORTGANGSLOG
- 2026-05-31 — Stap 0 afgerond: foundation opgeleverd (homepage-basis + componenten + SEO-basis).
- 2026-05-31 — Bouwplan verrijkt: volledige homepage-opbouw toegevoegd (4-taken-sectie "Wat we bouwen" als stap 13, plus tempo/proces, introductie, Mendix-voordeel, onderzoek-strook, projecten/sectoren/testimonials, quickscan-teaser).

### Reconciliatie met eerder gebouwd werk (2026-05-31)
Onderstaande was al gebouwd vóór deze planherziening (commits op het schone pad):
- **Stap 1** — 5 mock-componenten (light/dark) + MockDashboard; demo's loopen, eindcijfers bevriezen. (959d572, d501e6c, 699c8f0)
- **Stap 4** — Mendix-voordeel (2×2 + Gartner-quote) + "Je modellen. Je data. Je cloud." op de homepage. (7ccea1d)
- **Stap 5** — Onderzoek/autoriteit-strook (responsieve grid met gebronde kaarten). (7ccea1d, cdaabdd)
- **Stap 9** — /projecten volledige case-grid + filters (7 cases, MiniMock, ProjectCard). (7b210c4)
- **Stap 10** — /sectoren overzicht + SectorPage-template + sierteelt + detachering. (c90d76e)
- **Stap 11** — sectorpagina's semi-publiek, onderwijs, kinderopvang, maakindustrie. (ed19c82)
- **Stap 12** — /werkwijze (5 fasen + 90-daagse cycli + CTA). (d41c253)
- **Stap 14** — /werken-bij + /vacatures + vacature-detail (JobPosting). (d8d44db, 3a1fee1)
- **Stap 15** — /quickscan (3 states). (9b369b5)
- **Stap 16** — /discovery-sessie. (9df4dfd)
- **Stap 17** — /diensten lichte bento (9 ServiceTiles). (afcc608)
- **Stap 18** — JSON-LD (FAQPage/Service/BreadcrumbList/JobPosting), per-pagina metadata + OG, sitemap. (15cecf3) — open: exacte v3.4-teksten en echte OG-images/alt (wacht op assets).
- **Extra (buiten plan)** — diensten-bento óók op de homepage (1d77c0d); navigatie herstructureerd met Diensten-megamenu + Over ons-dropdown + mobiel menu (2ab4dc5).

**Nog open / deels:**
- **Stap 13** — demo-rijen "Wat we bouwen" staan al op de homepage, MÁÁR met 5 rijen i.p.v. 4; de abstracte "Vier oplossingen"-sectie is nog NIET verwijderd en er staat nu ook een extra diensten-bento op de homepage. Nog te doen: terugbrengen naar de 4 taken, de abstracte sectie eruit, "Eén platform: Mendix"-band eronder, homepage-bento heroverwegen.
- **Stap 2** (introductie + snelheidsvergelijking), **Stap 3** (homepage tempo-stepper), **Stap 6** (Sectoren-spotlight + Testimonials op de homepage — Projecten-sectie staat al), **Stap 7** (Quickscan-teaser op de homepage), **Stap 8** (homepage-volgorde) — nog niet gebouwd.
- **Stap 19** — reduced-motion (MotionConfig), :focus-visible en de key-warning zijn gedaan; Lighthouse ≥ 90 nog te meten. (15cecf3)
- **Stap 20** (assets) en **Stap 21** (deploy) — wachten op input.
