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

## SAMENWERKEN — meerdere mensen/agents zonder conflicten (lees dit)
Dit bestand is de **single source of truth** voor de planning en staat op GitHub (`KOBEON/kobeon-site`). Houd je aan deze regels, dan voorkomen we merge- en overschrijf-conflicten:

1. **Claim je stap vóór je begint.** Zet in dit bestand het vakje op `[~]` met je naam/branch erachter (bijv. `- [~] **19. …** (WIP: Sjoerd, feat/stap-19)`), commit + push dat meteen. Zo ziet iedereen wie waaraan werkt. Pak nooit een stap die al `[~]` of `[x]` is.
2. **Werk altijd op een feature-branch, nooit direct op `main`.** Begin met de laatste main:
   ```
   git checkout main && git pull
   git checkout -b feat/stap-19-a11y
   ```
3. **Eén stap per branch/PR.** Commit klein en vaak, push je branch, open een **Pull Request** naar `main`. Merge pas na review. Vink in die PR de stap af (`[x]`) + voeg een voortgangslog-regel toe (datum + 1 zin + commit/PR).
4. **Nooit met twee mensen/agents tegelijk in dezelfde working copy aan dezelfde bestanden werken** — op schijf is er geen merge-vangnet en overschrijf je elkaar. Branches + PR's zijn het vangnet.
5. **Niet committen:** `node_modules` en `.next` (staan in `.gitignore`). Draai na een clone eerst `npm install`.
6. Vóór elke nieuwe stap: `git pull` op `main` zodat je op de actuele staat verder bouwt.

> (Optioneel, GitHub-native: spiegel deze stappen als GitHub **Issues** en een **Project-board** als je liever daar afstemt. Dit bestand blijft dan de korte status; de Issues de discussie.)

> Belangrijk: de homepage moet net zo rijk worden als in de Lovable-brief. De foundation had maar 6 secties; stappen 1–8 bouwen de volledige homepage op. Houd de copy/teksten aan uit `docs/00-brief-volledig.txt` (v3.7/v3.8/v3.12).

> Status-reconciliatie (2026-05-31): dit plan is later herzien/hernummerd. Veel pagina's en enkele homepage-secties zijn al gebouwd in een eerdere reeks (zie voortgangslog onderaan). De vakjes hieronder zijn bijgewerkt naar de werkelijke stand. Steps die nog deels open staan, staan bewust op `[ ]` met een toelichting in het log.

---

## Aanbevolen volgorde (meeste visuele winst eerst)
0. **Commit + push eerst je huidige in-progress werk + de bijgewerkte docs** — schoon startpunt.
1. **V3 — menu leesbaar op alle pagina's.** Snelle bugfix die élke pagina raakt (incl. de nieuwe subpagina's); zonder dit ogen lichte pagina's stuk.
2. **V5 — mock-topbalk (app-titel i.p.v. nep-URL) + animatie met ziel** (één keer afspelen, echte NL-content, geen glow). Grootste "minder AI"-winst, geen assets nodig, en de basis voor V6.
3. **V6 — mocks 'echte app'-gevoel** (app-shell, dichtheid, diepte). Bouwt voort op V5.
4. **V4 — bento achtergrond-image stijlvol weggewerkt** (code met fallback nu; echte beelden later via stap 20).
5. **S4 — /over-kobeon vullen** (copy staat klaar in `docs/content-subpaginas.md`; vult de lege pagina).
6. **S1 — 9 dienst-detailpagina's afmaken** (copy staat klaar).
7. **S2 — 7 case-detailpagina's.**
8. **S3 — /contact afronden.**
9. **Afronden:** 19 (toegankelijkheid/performance) → 20 (beelden/assets inladen — activeert V4) → 21 (deploy naar Vercel).
Commit + push per logische stap.

## STAPPEN

- [x] **0. Foundation** — Next.js + Tailwind + Framer Motion; homepage (Hero, LogoStrip, "Vier oplossingen, één platform", Stats, FAQ, FinalCTA), Nav/Footer, SEO-basis, asset-structuur.

### Homepage compleet maken (stap 1–8)

- [x] **1. Mock-componenten (alle 6, light + dark)**
  Bouw `MockWorkflow`, `MockAgent`, `MockTraining`, `MockIntegration`, `MockPortal` (naast de bestaande `MockDashboard`) in `/components`, elk met `theme="light"|"dark"` en lichte stijl uit v3.11 (witte vlakken, zachte schaduw, geen neon). Deze worden hergebruikt in de demo-rijen.

- [x] **13. "WAT WE BOUWEN" — de 4 taken in actie (de ontbrekende homepage-opbouw)**
  Voeg direct onder de hero de sectie **"Wat we bouwen"** toe: 4 alternerende, lichte demo-rijen (tekst links/mock rechts, dan omgekeerd), elk met een mock-component + een zwevend metric-kaartje. De 4 taken (zoals in Lovable):
  1. **Procesautomatisering** → MockWorkflow + kaart "−62% doorlooptijd" — "Repetitief en denkwerk geautomatiseerd op Mendix, met een volledig audit-spoor."
  2. **Agentic AI** → MockAgent (met 'mens keurt goed'-stap) + kaart "40+ u/week terug" — "AI-agenten die kenniswerk zelfstandig uitvoeren. Geregisseerd door Mendix, altijd controleerbaar."
  3. **AI Development** → MockTraining + kaart "94% accuraat" — "AI-modellen getraind op je eigen data. Jij houdt de data, wij bouwen het model."
  4. **Systeemintegratie** → MockIntegration + kaart "8 systemen verbonden" — "Microsoft Dynamics, SAP, REST/API — je systemen werken eindelijk samen."
  Onder de rijen: een dunne logo-marquee (Mendix · Microsoft Dynamics 365 · SAP · AWS · Azure · AFAS · Exact · Salesforce · OpenAI · Siemens). Licht thema, Framer Motion, demo's loopen pas in beeld.
  **VERVANGT de bestaande abstracte sectie "Vier oplossingen, één platform" (Automatiseren / Bouwen / Verbinden / AI inzetten) — die categorieën zijn te nietszeggend en gaan eruit.** Verwijder de `solutions`-array uit `lib/siteConfig.ts` en de component `Solutions.tsx`/`SolutionCard.tsx` (of herbouw ze rond deze 4 concrete taken). Behoud wél de smalle diep-paarse band **"Eén platform: Mendix"** (ISO 27001, governance, 10–100.000 gebruikers, Siemens, 9× Gartner) direct ónder de 4 demo-rijen — die regel is sterk.
  Klaar wanneer: de 4 concrete demo-rijen staan onder de hero, de abstracte categorieën-sectie is weg, de "Eén platform: Mendix"-band staat eronder, build slaagt.

- [x] **2. Introductie-sectie**
  Kop "Je bent gegroeid. Je systemen niet." + body (v3.8) + 3 kernvoordeel-tegels (Snel / Enterprise-kwaliteit / Schaalbaar). Licht. Voeg de **jaren → maanden → weken** snelheidsvergelijking toe (lange balk "high-code: maanden tot jaren" → korte gele balk "Kobeon op Mendix: 6 weken").

- [x] **3. "Hoe we werken" — tempo (proces-stepper op de homepage)**
  Horizontale stepper met getekende stippellijn: 01 Discovery (1–2 wk) → 02 Design & Prototype (1–2 wk) → 03 MVP bouwen (4–6 wk) → 04 Implementatie & training (1 wk) → geel kaartje "∞ 90-daagse cycli". Maakt het tempo zichtbaar. Link naar /werkwijze.

- [x] **4. Mendix-voordeel + "Je modellen, je data, je cloud"**
  2×2 voordeel-tegels (Standaard veilig · Enterprise-schaalbaarheid · Governance & audit trails · Siemens als fundament) + Gartner-quote. Plus de licht-band "Je modellen. Je data. Je cloud." (geen lock-in, 3 kaarten).

- [x] **5. Onderzoek/autoriteit-strook**
  Horizontale "inzicht"-kaarten met gebronde quotes (v3.9, McKinsey State of AI bovenaan; quotes als te-verifiëren placeholders mét bron). Licht, gegronde achtergronden.

- [x] **6. Projecten + Sectoren-spotlight + Testimonials (homepage)**
  Projecten: case-kaarten met device-mockup + "van X naar Y"-regel (7 cases). Sectoren-spotlight: 3×2 kaarten (6 sectoren). Testimonials: carrousel met placeholders. Allemaal licht.

- [x] **7. Quickscan-teaser (homepage)**
  Licht-paarse band met URL-invoer + "Start Quickscan" + 3 preview-chips. Linkt naar /quickscan.

- [x] **8. Homepage-volgorde controleren**
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

### Verfijningen (visueel)

- [x] **V1. Diensten-bento + iconen herontwerp** — bento omgezet naar lichte, consistente kaarten (wit, `shadow-soft`, hover lift + accentrand) i.p.v. donkere gradient-slabs; line-iconen via `components/Icon.tsx` voor de diensten; **sectoren typografisch zónder iconen** (accentbalk + naam in de serif). Alle emoji verwijderd (diensten, sector-kaarten, 6 sectordetailpagina's, `SectorPage`-hero).
- [x] **V2. Tweede feature-tegel met mini-mock (diensten-bento)** — geef de tegel **Portalen & dashboards** een lichte mini-mock: zet in `lib/siteConfig.ts` `mock: "dashboard"` op die service en vergroot 'm naar feature-formaat (`span: "md:col-span-2 md:row-span-2"`), zodat 'ie — net als Procesautomatisering — een `MiniMock` toont i.p.v. een icoon. De grid is `grid-flow-row-dense`; pas zo nodig de `span` van de andere tegels aan zodat er geen gaten vallen en het ritme klopt. Klaar wanneer: 2 feature-tegels met mini-mock, bento netjes gevuld, `npm run build` slaagt.

- [x] **V3. Menu/navigatie leesbaar op álle pagina's (bug)** — De `Nav` is nu transparant met witte tekst tot je 60px scrollt. Op pagina's zónder donkere hero (o.a. /over-kobeon en placeholder-pagina's) is het menu daardoor wit-op-wit = onzichtbaar bovenaan. Fix: standaard de "solid" variant (witte balk, `text-ink`) op alle pagina's, en alléén de transparant-over-hero-variant op pagina's mét een donkere hero (homepage, sectorpagina's, werkwijze, vacatures, werken-bij, discovery). Implementeer met een prop (bv. `<Nav overHero />`) die alleen die pagina's zetten, of detecteer via `usePathname`. Controleer meteen dat de dropdowns (Diensten-megamenu, Over ons) én het mobiele menu op elke pagina werken. Klaar wanneer: nav overal leesbaar, dropdowns + mobiel menu werken, `npm run build` slaagt.

- [~] **V4. Copy-rewrite en IT-termen opschonen** (WIP: Antigravity) — Typografie, AI-vertalingen opschonen, em-dashes vervangen door natuurlijke interpunctie, RAG toevoegen aan AI-tekst, testimonial bug fixen.

- [ ] **V5. Mock-UI's: meer ziel, minder "AI" (device-frame topbar + animaties)**
  **A. Topbar / URL** (`components/DeviceFrame.tsx`, en de `url`-props in `components/sections/WatWeBouwen.tsx`, `ProjectCard.tsx`, `ProjectPage.tsx`): de nep-dev-URL's (`app.kobeon.nl/orders`, `/agent`, `/training`, `/integraties`) ogen onecht. Vervang door één van:
  - **App-titelbalk (aanbevolen voor de product-mocks):** toon de modulenaam i.p.v. een URL — bv. "Orderverwerking", "Klantportaal", "Modeltraining", "Integraties" — met een klein Kobeon-app-icoon links. Leest als echte Mendix-software, niet als website.
  - **Of een nette browserbalk:** klein slot-icoon + alléén `kobeon.nl` (geen diepe paden), monochroom.
  Maak de rood/geel/teal "verkeerslicht"-stippen neutraal-grijs en kleiner, of laat ze weg bij de titelbalk-variant. Topbar licht en strak, geen afgekapte tekst.
  **B. Animaties — meer ziel:**
  - **Speel één keer af, dan rust:** bij in-beeld-komen doet elke mock één geloofwaardige handeling (rij wordt goedgekeurd, getal springt één keer omhoog, taak vinkt af) en houdt daarna de eindstaat vast. **Geen eindeloze loop/pulse.**
  - Eén focuspunt per mock; verminder het totaal aantal gelijktijdige animaties op de homepage.
  - Natuurlijke easing + lichte stagger (ease-out/spring, kleine onregelmatige delays), niet strak lineair.
  - **Concrete, menselijke content** i.p.v. abstracte grijze balkjes: echte NL-labels/namen/statussen/bedragen (bv. "Order #1042 · Goedgekeurd", "A. Jansen", "€12.480").
  - **Schrap gradient/glow** op datavisualisaties (de paars→teal gradient-balken in `MockDashboard`/`MiniMock`): platte merkkleuren.
  - Respecteer `prefers-reduced-motion` (toon de nette eindstaat).
  Klaar wanneer: device-frames tonen een app-titelbalk of nette `kobeon.nl`-balk (geen nep-paden), mocks spelen één keer af en rusten, content is concreet/NL, geen glow; de homepage voelt rustiger en "echter".

- [ ] **V6. Mock-UI's: meer "echte app"-gevoel (behalve integratie)**
  `MockIntegration` (node/systeem-diagram) is goed — laat die ongewijzigd. De overige mocks (`MockDashboard`, `MockWorkflow`, `MockAgent`, `MockTraining`, `MockPortal` + `MiniMock`) ogen nu te vlak/leeg. Geef ze de structuur en dichtheid van een échte applicatie, met diepte — maar blijf flat-styled (Atlas-achtig), géén 3D/neon/glow.
  - **App-shell:** linker-sidebar met nav-items (label + klein icoon, één actief), topbar met titel/zoek/avatar, content-gebied. Sluit aan op de app-titelbalk uit V5.
  - **Realistische componenten:** datatabel met kolomkoppen, rijen, statusbadges en paginatie; KPI-kaarten met een kleine sparkline; tabs/filters; knoppen; eventueel een detailpaneel.
  - **Concrete NL-data** (namen, bedragen, data, statussen) — geen grijze placeholder-balkjes.
  - **Diepte:** subtiele laagjes (sidebar iets andere tint, kaarten met zachte schaduw, lichte scheidingslijnen, hover/active states). Flat mét diepte, niet glanzend/gloeiend.
  - Animatie volgens V5 (één keer afspelen, dan rust). Let op leesbaarheid op kleine tegels: toon dichtheid maar houd het scherp; op de kleinste formaten een compactere variant.
  Klaar wanneer: de niet-integratie-mocks ogen als gevulde, geloofwaardige app-schermen (sidebar + topbar + realistische content, met diepte), flat-styled en zonder glow; `MockIntegration` ongewijzigd; `npm run build` slaagt.

- [ ] **V7. Sectorpagina's: "Wat we voor jouw sector bouwen"-blok + Sectoren-submenu**
  - **Voorbeelden-blok per sector:** voeg op elke sectorpagina een blok "Wat we voor jouw sector bouwen" toe met 3–5 concrete voorbeelden (copy: `docs/content-subpaginas.md` § Sectoren — voorbeelden per sector), net als de "Voorbeelden" op de dienstpagina's. Breid `SectorContent`/`SectorPage` uit met een `solutions`/`examples`-veld. Weef planning + field service in bij **sierteelt** en **maakindustrie**.
  - **Sectoren-submenu (dropdown) in de nav** (`lib/siteConfig.ts` → `nav`): geef het item "Sectoren" `columns` met de 6 sectoren als links naar `/sectoren/<slug>` + een "Alle sectoren" → `/sectoren`, net als het Diensten-megamenu. Nu is "Sectoren" alleen een directe link zonder submenu. Werkt in desktop-dropdown én mobiel menu (`components/Nav.tsx` ondersteunt `columns` al).
  - **Wederzijdse interne links:** wire `relatedServices` / `relatedSectors` / `relatedProjects` per item volgens `docs/content-subpaginas.md` § Doorverwijs-logica, zodat sector-, dienst- en casepagina's netjes naar elkaar verwijzen (goed voor UX én SEO).
  Klaar wanneer: elke sectorpagina heeft een voorbeelden-blok; de nav toont een Sectoren-dropdown (desktop + mobiel); de wederzijdse links staan; `npm run build` slaagt.

### Subpagina's / detailpagina's (S1–S4) — nog te bouwen

> Achtergrond: de overzichtspagina's staan, maar de meeste **detailpagina's ontbreken**. De bento-tegels en het Diensten-megamenu linken nu naar ankers op `/diensten`, en de projectkaarten linken nergens heen. Dit blok voegt volwaardige subpagina's toe. Eén stap per keer; houd je aan CLAUDE.md (licht-eerst, je/jouw, diensten = line-iconen, sectoren = typografisch, geen emoji).
>
> **Over de content:** de uitgeschreven copy voor de **9 dienstpagina's (S1)** en **/over-kobeon (S4)** staat klaar in **`docs/content-subpaginas.md`** — gebruik die als basis (hero-regel, intro, "Wat het oplevert", "Hoe we het bouwen op Mendix", relevante cases, team). Vul aan met `docs/00-brief-volledig.txt` (v3.7/v3.8) waar nodig. **Echte cijfers, quotes en case-resultaten die nog ontbreken vragen input van Kobeon** — markeer die als `[in te vullen]` en verzin geen claims. Houd Rechtspraak anoniem.

- [x] **S1. Dienst-detailpagina's — `/diensten/[slug]` (9 stuks)**
  Bouw per dienst een eigen pagina: procesautomatisering, agentic-ai, ai-development, systeemintegratie, app-ontwikkeling, portalen-dashboards, legacy-modernisering, design-prototyping, it-consultancy.
  - Eén herbruikbaar template `components/ServicePage.tsx` + dynamische route `app/diensten/[slug]/page.tsx` met `generateStaticParams` en `generateMetadata` (unieke title 50–60 / description 150–160 per dienst, v3.4-stijl).
  - Inhoud per pagina (licht, je/jouw, voordeel-eerst): hero (dienstnaam + 1 pakkende regel + Discovery-CTA) · "Wat het oplevert" · "Hoe we het bouwen op Mendix" (3–4 punten met de juiste integraties + governance) · een passende `MiniMock`/`ScreenShowcase`-slot · "Relevante cases" (links naar projecten) · korte FAQ (1–3) · afsluitende CTA.
  - Data: breid `services` in `lib/siteConfig.ts` uit met detailvelden (`intro`, `watJeKrijgt[]`, `aanpak[]`, `relatedProjects[]`, `faq[]`) — generiek/placeholder waar nog geen echte content is.
  - **Copy:** gebruik de uitgeschreven teksten per dienst uit `docs/content-subpaginas.md`, én voeg per pagina het blok "Voorbeelden / Veelgevraagd" toe (§ Voorbeelden & use-cases per dienst) voor meer inhoud en dynamiek — minder statisch.
  - SEO/links: `Service` + `BreadcrumbList` JSON-LD per pagina; 9 routes toevoegen aan `app/sitemap.ts`; bento-tegels én het Diensten-megamenu naar `/diensten/[slug]` laten linken (anker mag als secundair blijven).
  Klaar wanneer: 9 dienstpagina's bestaan, consistent in stijl, in de sitemap, `npm run build` slaagt.

- [x] **S2. Case-/projectdetailpagina's — `/projecten/[slug]` (7 stuks)**
  Bouw per case een pagina: homezero, petje-af, epsa, golfclub, bkd, rechtspraak, floriusflowers.
  - Template `components/ProjectPage.tsx` + `app/projecten/[slug]/page.tsx` met `generateStaticParams`/`generateMetadata`.
  - Inhoud (transformatie-frame): hero (klant + "van X naar Y") · de uitdaging · onze aanpak op Mendix · het resultaat (cijfers) · device-mockup/`MiniMock` of screenshot-slot · sector + gebruikte diensten (links naar S1) · quote-placeholder · CTA. Respecteer anonimisering: **rechtspraak** geen herleidbare naam/logo; **floriusflowers** als "Binnenkort"-stub.
  - Data: breid `projects` uit met `challenge`, `approach[]`, `result`, `quote?`, `relatedServices[]`. Generiek waar content ontbreekt.
  - SEO/links: `Article` (of `CreativeWork`) + `BreadcrumbList` JSON-LD; routes in sitemap; projectkaarten (homepage + /projecten) naar `/projecten/[slug]` linken.
  Klaar wanneer: 7 casepagina's, consistent, in de sitemap, build slaagt.

- [x] **S3. (optioneel) Contact + Insights/klantverhalen**
  - `/contact` — eenvoudige contactpagina met de gegevens uit `site` (e-mail, telefoon, adres Zwolle) + formulier of mailto + Discovery-CTA. Voeg "Contact" toe aan nav én footer en aan de sitemap.
  - (Later, alleen bij content/tijd) Insights/klantverhalen-index als blog-achtige sectie.
  Klaar wanneer: /contact bestaat, in nav/footer + sitemap.

- [x] **S4. /over-kobeon vullen (nu leeg/placeholder)**
  Bouw een volwaardige Over-pagina, licht en je/jouw, enterprise-toon (warm mag, maar bewijs-gedreven).
  - Inhoud: kort kernverhaal (Mendix + AI implementatiepartner; samenwerken vanuit vertrouwen, zakelijk gebracht) · credentials-strook (Mendix Certified Partner · 6 experts · 2 Advanced Trainers · 3 MVP's · ISO 27001 · "hoogste Mendix-expertdichtheid van Nederland") · echte klanten (ABN AMRO, Zilveren Kruis, Rechtspraak, BKD, Petje af, HomeZero, EPSA) · team-grid · vestiging Zwolle · Discovery-CTA.
  - Team (naam · rol; placeholder-foto's tot echte beschikbaar): Agnes Roolvink — Mendix Expert · Daryl Zandvliet — Mendix Expert · Frank Schutte — Mendix Expert · Bjarn Onderstal — Co-Founder | Mendix Expert | MVP · Hunter Koppen — Co-Founder | Mendix Expert | MVP · Sjoerd Beljon — Co-Founder | Mendix Expert | MVP · Cas Boswinkel — Mendix Specialist (AI-lead) · Robin Broeks — Mendix Specialist.
  - **Copy:** gebruik de uitgeschreven Over-Kobeon-tekst (kernverhaal, credentials, klanten, team, vestiging, CTA) uit `docs/content-subpaginas.md`.
  - SEO: metadata + `BreadcrumbList`-schema; route in sitemap.
  Klaar wanneer: /over-kobeon gevuld en consistent, in de sitemap, `npm run build` slaagt.

- [ ] **S5. Voorbeeldoplossingen + visie (Planning, Field Service, agentic enterprise)**
  - **Voorbeeldoplossingen-strip** (licht, op /diensten en/of homepage) met o.a. **Planningsoplossingen** en **Field Service Management** — zodat bezoekers zien dat we dit ook doen. Copy: `docs/content-subpaginas.md` § Veelgevraagde oplossingen. (Kunnen later eigen detailpagina's worden.)
  - **Dienst-detailpagina's (S1) verrijken** met een blok "Voorbeelden / Veelgevraagd" per dienst (zie `docs/content-subpaginas.md` § Voorbeelden & use-cases) — meer inhoud en dynamiek, minder statisch. Weef planning + field service in waar relevant (App ontwikkeling, Portalen & dashboards, Systeemintegratie, Procesautomatisering).
  - **Visie "de agentic enterprise"** (zie `docs/content-subpaginas.md` § Onze visie) verwerken als kort blok op /over-kobeon en een korte visie-sectie/regel op de homepage. Mendix-metrics toeschrijven aan Mendix.
  Klaar wanneer: planning + field service zichtbaar als voorbeeldoplossingen; dienstpagina's hebben use-case-blokken; visie staat op /over-kobeon (+ homepage); `npm run build` slaagt.

### Afronden (stap 18–21)

- [x] **18. SEO + schema** — per-pagina title/meta/H1 (v3.4-teksten), JSON-LD (FAQPage/Service/BreadcrumbList/JobPosting), sitemap bijwerken, OG-images, alt-teksten.
- [x] **19. Toegankelijkheid & performance** — Lighthouse ≥ 90 (SEO + a11y), contrast, focus, lazy-load, reduced-motion.
- [ ] **20. Assets inladen** — Nano Banana → `/public/visuals`; screenshots → `/public/screens` + `screens.config.json`. Tot dan blijven de mocks staan.
- [ ] **21. Deploy naar Vercel** — `site.url` goedzetten, deploy, sitemap/robots/metadata in productie checken.

---

## VOORTGANGSLOG
- 2026-05-31 — Stap 0 afgerond: foundation opgeleverd (homepage-basis + componenten + SEO-basis).
- 2026-06-01 — Bouwplan uitgebreid met ontbrekende subpagina's: S1 (9 dienst-detailpagina's), S2 (7 case-detailpagina's), S3 (optioneel /contact + Insights), S4 (/over-kobeon vullen — staat nu leeg). Plus bug V3: nav onleesbaar (wit-op-wit) op pagina's zonder donkere hero. Content-regel toegevoegd (placeholders markeren, claims niet verzinnen). Alleen omschreven, nog niet gebouwd — oppakken bij volgende bouwopdracht.
- 2026-06-01 — Per-dienst "Voorbeelden"-blokken inline gezet (9 diensten) + per-sector voorbeelden toegevoegd in `docs/content-subpaginas.md`. Stap V7 toegevoegd: sector-voorbeeldenblok + Sectoren-submenu (dropdown) in de nav. Plus § Doorverwijs-logica (sector ↔ dienst ↔ case) voor wederzijdse interne links.
- 2026-06-01 — Content verdiept in `docs/content-subpaginas.md`: visie "de agentic enterprise" (Mendix-pivot), twee voorbeeldoplossingen (Planningsoplossingen + Field Service Management, incl. machinehandleidingen/series/onderdelen op aanvraag) en "Voorbeelden & use-cases per dienst" voor meer dynamiek. Stap S5 toegevoegd; S1 verwijst naar de use-case-blokken. Propositie-referentie ook bijgewerkt.
- 2026-06-01 — Echte copy toegevoegd in `docs/content-subpaginas.md`: alle 9 dienst-detailpagina's (hero, intro, "wat het oplevert", "hoe we het bouwen op Mendix", relevante cases) + de /over-kobeon-tekst (kernverhaal, credentials, klanten, team). S1 en S4 verwijzen er nu naar. Ontbrekende harde cijfers/quotes als `[in te vullen]` gemarkeerd.
- 2026-05-31 — Bouwplan verrijkt: volledige homepage-opbouw toegevoegd (4-taken-sectie "Wat we bouwen" als stap 13, plus tempo/proces, introductie, Mendix-voordeel, onderzoek-strook, projecten/sectoren/testimonials, quickscan-teaser).

- 2026-05-31 — Stap 13 afgerond: "Wat we bouwen" naar 4 taken + "Eén platform: Mendix"-band + integratie-marquee; abstracte "Vier oplossingen"-sectie (Solutions/SolutionCard/solutions) verwijderd. (94be996) — let op: de losse diensten-bento staat (op eerder verzoek) nog op de homepage; meenemen bij stap 8.

- 2026-05-31 — Stap 2 afgerond: introductie-sectie "Je bent gegroeid. Je systemen niet." (v3.8) + 3 kernvoordeel-tegels + jaren→maanden→weken-snelheidsvergelijking, na "Wat we bouwen". (c6a6485)

- 2026-05-31 — Stap 3 afgerond: "Hoe we werken"-stepper (zichzelf-tekenende stippellijn, 4 fasen + 90-daagse-cycli, link /werkwijze) na Stats. Plus 3e snelheidsbalk: high-code → standaard low-code → enterprise low-code. (b1d6229)

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

- 2026-05-31 — Verfijning V1 afgerond: diensten-bento naar lichte, consistente kaarten + eigen line-icon-set (`components/Icon.tsx`); sectoren typografisch zonder iconen (accentbalk + serif); alle emoji weg. `Service`-type: `gradient`/`icon` → `accent` + optionele `mock`. Open: **V2** (2e mini-mock op Portalen & dashboards).
- 2026-05-31 — Verfijning V2 afgerond: Portalen & dashboards als 2e feature-tegel met dashboard-mini-mock; bento herbalanceerd naar 16 cellen (App ontwikkeling + IT Consultancy naar 1-breed), geen gaten. (9e5cc95)
- 2026-05-31 — Stap 6–8 afgerond: Sectoren-spotlight (hergebruikt SectorCard) + Testimonials-carrousel + Quickscan-teaser op de homepage; homepage-volgorde vastgezet (3 donkere blokken). Homepage compleet. (a06d9a0)

- 2026-06-04 — S3 afgerond: /contact al gebouwd door team (contactgegevens, mailto-formulier, Discovery-CTA, JSON-LD ContactPage). Nav + sitemap bevatten /contact. Build slaagt.
- 2026-06-02 — S2 afgerond: 7 projectdetailpagina's via `app/projecten/[slug]/page.tsx` + herbruikbaar `ProjectPage` template. ProjectCard linkt naar `/projecten/[slug]`. Rechtspraak anoniem gehouden, FloriusFlowers als stub. Sitemap uitgebreid. Build slaagt.
- 2026-06-02 — S1 afgerond: 9 dienst-detailpagina's via `app/diensten/[slug]/page.tsx` + herbruikbaar `ServicePage` template. Nav-megamenu en bento-tegels linken naar `/diensten/[slug]`. Sitemap uitgebreid. Build slaagt, alle 9 routes 200 OK.
- 2026-06-02 — S3 afgerond: /contact pagina gebouwd (gegevens + mailto-formulier + Discovery-CTA), "Contact" toegevoegd aan nav en sitemap. Build slaagt.
- 2026-06-02 — S4 afgerond: /over-kobeon gevuld met hero, credentials-strook (6 tegels), klanten-regel, teamgrid (8 leden met initialen), vestiging + contact + CTA. Content uit `docs/content-subpaginas.md`. Build slaagt.
- 2026-06-02 — Verfijning V3 afgerond: nav-bug opgelost via `usePathname()` in `components/Nav.tsx`; transparante nav alleen op pagina's met donkere hero (`/`, `/sectoren/*`, `/werkwijze`, `/werken-bij`, `/discovery-sessie`, `/quickscan`), alle overige pagina's krijgen standaard witte balk met `text-ink`.

- 2026-06-02 — S2 afgerond: 7 case-detailpagina's via `app/projecten/[slug]/page.tsx` + herbruikbaar `ProjectPage` template. Detailvelden (challenge, approach, result, relatedServices) toegevoegd aan alle projecten in `siteConfig.ts`. ProjectCard linkt nu naar `/projecten/[slug]`. Sitemap uitgebreid. Build slaagt, alle 7 routes gegenereerd.

- 2026-06-10 — Stap 19 afgerond: Lighthouse (productie-build) gemeten op homepage + dienst- en over-kobeon-pagina. Scores homepage na fix: Performance 97, Accessibility 100, Best Practices 100, SEO 100; subpagina's A/BP/SEO 100, Perf 92–93. Enige a11y-issue was contrast van de klant-logostrip (`text-ink/70` + wrapper `opacity-70` → 3.31:1); opgelost door `text-muted` zonder dubbele opacity (5.1:1). reduced-motion, focus-visible al eerder gedaan.

- 2026-06-10 — Stap 20 (deels): echte teamfoto's ingeladen op /over-kobeon. 8 portretten in `/public/team/`, verkleind naar max 512px (~15–25KB), getoond als ronde avatars via `next/image` met initialen-fallback voor leden zonder foto. Resterend deel van stap 20 (app-screenshots via `screens.config.json` + de ScreenShowcase-laag) staat nog open.

**Nog open / deels:**
- **Stap 13** — demo-rijen "Wat we bouwen" staan al op de homepage, MÁÁR met 5 rijen i.p.v. 4; de abstracte "Vier oplossingen"-sectie is nog NIET verwijderd en er staat nu ook een extra diensten-bento op de homepage. Nog te doen: terugbrengen naar de 4 taken, de abstracte sectie eruit, "Eén platform: Mendix"-band eronder, homepage-bento heroverwegen.
- Stap 2, 3, 6, 7, 8, 13, V1, V2 zijn inmiddels alle afgerond — **de homepage is compleet**. Nog open: **19** (Lighthouse-meting), **20** (assets), **21** (deploy, incl. csstype build-fix).
- **Stap 19** — reduced-motion (MotionConfig), :focus-visible en de key-warning zijn gedaan; Lighthouse ≥ 90 nog te meten. (15cecf3)
- **Stap 20** (assets) en **Stap 21** (deploy) — wachten op input.
