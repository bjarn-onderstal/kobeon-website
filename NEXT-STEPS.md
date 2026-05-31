# NEXT-STEPS — bouwplan Kobeon-site

Dit is de gedeelde takenlijst. De gebruiker zegt "pak de volgende stap op"; jij (Claude Code) werkt één stap af en werkt dit bestand bij.

## PROTOCOL — zo gebruik je dit bestand (Claude Code, lees dit elke keer)
Wanneer de gebruiker zegt **"pak de volgende stap op"** (of iets vergelijkbaars):
1. Open dit bestand en zoek de **eerste stap met `[ ]`** (nog niet afgevinkt).
2. Lees `CLAUDE.md` en de bij die stap genoemde stukken uit `/docs` (vooral `docs/00-brief-volledig.txt`).
3. Voer **alleen die ene stap** uit. Houd je aan: je/jouw, enterprise-toon, licht-eerst, merk-tokens, integratiebeleid en SEO-regels.
4. Controleer dat `npm run build` slaagt (of dev draait zonder errors).
5. **Vink de stap af** (`[ ]` → `[x]`) en voeg een regel toe aan het **Voortgangslog** onderaan (datum + 1 zin + commit-hash).
6. **Commit** met een duidelijke message (bv. `feat: wat-we-bouwen demo-rijen`).
7. Geef kort terug wát je deed en **stop voor review**. Begin niet automatisch aan de volgende stap.
Als een stap te groot blijkt, splits 'm in dit bestand in substappen en doe alleen de eerste.

---

## STAPPEN

- [x] **0. Foundation** — Next.js + Tailwind + Framer Motion, homepage (Hero, LogoStrip, Solutions, Stats, FAQ, FinalCTA), Nav/Footer, SEO-basis, asset-structuur. (al opgeleverd)

- [ ] **1. Mock-componenten + sectie "Wat we bouwen"**
  Bouw `MockWorkflow`, `MockAgent`, `MockTraining`, `MockIntegration`, `MockPortal` in `/components`, elk met `theme="light"|"dark"` (zie v3.11 voor de lichte stijl). Voeg onder de hero de sectie **"Wat we bouwen"** toe: 4 alternerende, lichte demo-rijen (tekst + mock + zwevend metric-kaartje) voor Procesautomatisering, Agentic AI, AI Development, Systeemintegratie. Integratie-namen = enterprise (Dynamics, SAP, AWS…).
  Klaar wanneer: sectie staat op de homepage, mocks animeren licht, build slaagt.

- [ ] **2. Mendix-voordeel + "Je modellen, je data, je cloud" + onderzoek-strook**
  Voeg toe: het 2×2 "Mendix-voordeel"-blok (Standaard veilig · Enterprise-schaalbaarheid · Governance & audit trails · Siemens als fundament) met Gartner-quote; de band "Je modellen. Je data. Je cloud." (geen lock-in, 3 kaarten); en de **onderzoek/autoriteit-strook** (v3.9, quotes als placeholders mét bron, markeer als 'te verifiëren').
  Klaar wanneer: drie blokken op de homepage, licht, met bronvermelding bij quotes.

- [ ] **3. Projecten (homepage-sectie + /projecten)**
  Case-kaarten met een device-mockup (browser/phone) en een "van X naar Y"-regel + sectortag + resultaatcijfer. 7 cases uit de brief. Filters op /projecten. Hergebruik `DeviceFrame`.
  Klaar wanneer: homepage-sectie + volledige /projecten-pagina, build slaagt.

- [ ] **4. Sectoren — overzicht + template (sierteelt, staffing)**
  /sectoren met 6 sectorkaarten (3×2). Maak een herbruikbaar sector-paginatemplate; werk **sierteelt** (Agriware, Infor, Metacom + BKD) en **staffing** (AFAS, Nmbrs, Wet DBA) uit volgens de Challenger-structuur (probleem → aanpak → case → CTA).
  Klaar wanneer: /sectoren + /sectoren/sierteelt + /sectoren/detachering live.

- [ ] **5. Resterende sectorpagina's**
  /sectoren/semi-publiek, /onderwijs, /kinderopvang, /maakindustrie met het template en de juiste branche-systemen/cases uit de brief.
  Klaar wanneer: alle 6 sectorpagina's bestaan, in sitemap.

- [ ] **6. /werkwijze**
  5 fasen als lichte, alternerende rijen (Discovery → Design & Prototype → Heldere afspraken → MVP bouwen → Implementatie & training) + 90-daagse-cycli-blok + Discovery-CTA. Mock-visuals per fase.
  Klaar wanneer: /werkwijze compleet, build slaagt.

- [ ] **7. /werken-bij + /vacatures + vacature-detail**
  Werken-bij (hero, cultuurkaarten, teamgrid placeholder, sollicitatieproces-stepper). /vacatures met generieke vacaturekaarten + filters. Herbruikbaar vacature-detailtemplate met formulier. JobPosting-schema.
  Klaar wanneer: drie onderdelen live, vacatures generiek gehouden.

- [ ] **8. /quickscan (3 stappen)**
  Input → laad-animatie (3s) → resultaten (score-gauge 62/100, 5 dimensie-kaarten, top-3 aanbevelingen, CTA). Donker mag hier als accent, maar houd het licht waar kan.
  Klaar wanneer: de 3 states werken met query-param voor de URL.

- [ ] **9. /discovery-sessie**
  Hero, "wat je meekrijgt" (4 kaarten), Calendly-embed-placeholder, FAQ-accordion (3). Discovery-CTA.
  Klaar wanneer: pagina compleet.

- [ ] **10. Diensten-overzicht (/diensten) + bento/video-tegels**
  De 9 diensten als lichte bento met achtergrond-beelden (v3.3/v3.5). ServiceTile met optionele video-achtergrond (poster + mp4/webm, fallback naar still/mock). Op een lichte sectie-achtergrond.
  Klaar wanneer: /diensten compleet, geen zwart slab.

- [ ] **11. SEO + schema afronden**
  Per pagina unieke title/meta/H1 (zie v3.4 voor teksten), JSON-LD FAQPage/Service/BreadcrumbList/JobPosting, sitemap bijwerken, OG-images, alt-teksten.
  Klaar wanneer: elke route heeft eigen metadata + relevant schema.

- [ ] **12. Toegankelijkheid & performance**
  Lighthouse-check, contrast, focus-states, `prefers-reduced-motion`, lazy-load beeld, Core Web Vitals. Fix wat opvalt.
  Klaar wanneer: Lighthouse SEO + a11y ≥ 90.

- [ ] **13. Assets inladen (wanneer beschikbaar)**
  Nano Banana-beelden → `/public/visuals`; echte screenshots → `/public/screens` + `screens.config.json` invullen (status 'live' + anonymized). Tot dan blijven de mocks staan.

- [ ] **14. Deploy naar Vercel**
  Zet `site.url` in `lib/siteConfig.ts` goed, deploy, controleer sitemap/robots en metadata in productie.

---

## VOORTGANGSLOG
- 2026-05-31 — Stap 0 afgerond: foundation opgeleverd (homepage + componenten + SEO-basis).
