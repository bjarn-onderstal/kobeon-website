# Onboarding — Kobeon-site

Welkom! Dit is de marketing-/pitchsite van **Kobeon** (Mendix + AI-partner). Hieronder staat alles om lokaal aan de slag te gaan en op dezelfde manier door te bouwen.

## Wat het is
- **Next.js 14** (App Router) + **TypeScript** · **Tailwind CSS** · **Framer Motion**.
- Statische, marketinggerichte site (geen externe API's; alle "demo's" zijn gecodeerde animaties).
- Meertalige toon: **Nederlands**, aanspreekvorm **je/jouw**, enterprise-toon.

## Projectlocatie
```
C:\Users\SjoerdBeljon\Documents\Claude\Projects\kobeon-site
```
> Gebruik **deze** map. Een oudere kopie onder `…\Kobeon - Branding \ pitchdeck\kobeon-site` heeft een spatie aan het eind van een mapnaam waardoor **git daar niet werkt** — niet gebruiken.

## Eenmalige setup
**Vereisten:** Node 18+ en Git. Op deze machine staan ze niet op de systeem-PATH:
- Node v24 → `C:\Program Files\nodejs`
- Git → `C:\Program Files\Git`

Zet die op je PATH, of prefix je commando's. In PowerShell per sessie:
```powershell
$env:Path = "C:\Program Files\nodejs;C:\Program Files\Git\cmd;" + $env:Path
```

**Installeren & starten:**
```powershell
npm install        # gebruikt de aanwezige package-lock.json
npm run dev        # draait op http://localhost:3000
```
`npm run build` voor een productie-build; `npm run lint` voor linting.

## Hoe we doorbouwen — het bouwplan
- **`NEXT-STEPS.md`** is de gedeelde takenlijst met een **PROTOCOL** bovenaan. Lees dat altijd eerst.
- Werkwijze: zeg tegen Claude Code **"pak de volgende stap op"** → het pakt de eerste `[ ]`-stap, voert **alleen die ene stap** uit, vinkt 'm af, zet een regel in het **Voortgangslog** met de commit-hash, commit, en stopt voor review.
- Inhoud/teksten komen uit **`docs/00-brief-volledig.txt`** (de Lovable-brief, versies v3.x). `CLAUDE.md` bevat de huisregels.

## Huisregels (uit CLAUDE.md)
- **je/jouw** (nooit u/uw), enterprise-toon, **licht-eerst** (donker alleen als accent; diep-paars #2A0870 i.p.v. zwart).
- **Merk-tokens** gebruiken (Tailwind): `purple` #3A0CA3 / `purple-deep` #2A0870 / `teal` #13A6A6 / `yellow` #FFB703; koppen `font-serif` (Atyp Display), body Ubuntu.
- **Integratiebeleid:** op de homepage enterprise + NL-namen (Mendix, Microsoft Dynamics 365, SAP, AWS, Azure, AFAS, Exact, Salesforce, OpenAI, Siemens); branche-niche (Agriware, Infor, Metacom, Nmbrs) alleen op sectorpagina's.
- **Animatie-regel:** demo's mogen loopen als video; **optellende eindcijfers tellen één keer op en blijven dan staan** (zie `StatCounter`).
- **SEO:** per pagina unieke `title`/`description`/canonical/OG + relevante JSON-LD; route toevoegen aan `app/sitemap.ts`.
- Herbruik bestaande componenten (`Section`, `DeviceFrame`, `FloatingMetric`, de `Mock*`-demo's).

## Goed om te weten
- **framer-motion is gepind op 11.11.17** — niet upgraden zonder te testen (11.18 brak op `motion-dom`-resolutie onder webpack).
- `node_modules` en `.next` staan in `.gitignore`.
- Commit-conventie: duidelijke message; eindig met de trailer
  `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.

## Snelle oriëntatie in de code
- `app/` — routes (pagina's) + `layout.tsx`, `sitemap.ts`, `robots.ts`, `globals.css`.
- `components/` — herbruikbare componenten; `components/sections/` — homepage-secties.
- `lib/siteConfig.ts` — alle content-/copy-constanten (nav, diensten, sectoren, projecten, vacatures, FAQ…).
- `docs/` — de volledige brief.
