# Kobeon — Screenshot-integratie brief v1.0
### Echte klant-screens in de visuals verwerken (aanvulling op de Lovable-brief v3.2)

Deze instructie geef je mee aan een **nieuw/custom project** (Lovable of een developer). Doel: de "mock product UI's" uit de hoofdbrief vervangen of aankleden met **echte screenshots van klantsoftware**, zodat de site minder "nep" oogt — maar nog steeds leeft (subtiele beweging, zwevende cijferkaartjes, faux-cursor). Jij hoeft straks alleen screenshots in de juiste map te zetten en één configbestand in te vullen.

> Belangrijk: deze brief is een **aanvulling**, niet een vervanging. De volledige site, secties, kleuren en copy staan in *Kobeon - Lovable Prompt v3.2.txt*. Geef beide documenten samen mee.

---

## 1. Het idee in één alinea

Bouw één herbruikbaar showcase-systeem dat een **echte screenshot** in een strak **device-frame** (browser, telefoon of tablet) plaatst en er net genoeg leven aan toevoegt om als een mini-demo te ogen: een trage in-frame scroll/zoom (Ken Burns), zachte 3D-tilt op muisbeweging, zwevende glas-"metric"-kaartjes die optellen, en optioneel een faux-cursor die naar een hotspot beweegt. Als er (nog) geen screenshot is, valt het component automatisch terug op de geanimeerde "mock"-versie uit de hoofdbrief. **Zo kan de site direct live, en wordt hij beter naarmate jij echte screens toevoegt.**

---

## 2. Wat jij aanlevert: mappenstructuur + naamgeving

Maak in het project deze map en zet je screenshots erin. De bestandsnamen moeten exact matchen met de `id`'s in het configbestand (stap 3).

```
/public/screens/
   hero/            hero-primary-1.png   hero-primary-2.png   hero-secondary-1.png
   services/        proces-1.png  proces-2.png   agent-1.png   aidev-1.png   portal-1.png
   cases/           homezero-1.png  petjeaf-1.png  epsa-1.png  golfclub-1.png
                    bkd-1.png (telefoon)  rechtspraak-1.png  floriusflowers-1.png
```

Regels:
- **Meerdere shots per slot mag**: `-1`, `-2`, `-3` → die worden een mini "product-tour" (auto-crossfade in hetzelfde frame).
- **Eén shot is genoeg** om te starten; de rest kan later.
- Mist een slot? Geen probleem — dan toont de site de geanimeerde mock-fallback.

---

## 3. Het configbestand dat jij invult: `screens.config.json`

Dit is het enige bestand dat je hoeft aan te raken (naast het droppen van images). Voor elk slot vul je in: welk frame, wat in de adresbalk staat, het label, het zwevende cijfer, en welke afbeeldingen erbij horen. Een ingevuld voorbeeld + lege template zit in het meegeleverde `screens.config.template.json`. Velden:

| veld | betekenis |
|---|---|
| `id` | unieke sleutel, matcht de bestandsnaam (zonder `-1.png`) |
| `frame` | `"browser"` \| `"phone"` \| `"tablet"` |
| `urlBar` | tekst in de browser-adresbalk (bv. `app.klant.nl`) — leeg bij phone |
| `label` | korte titel onder/naast de showcase |
| `metric` | groot zwevend cijfer (bv. `−62% doorlooptijd`) |
| `metricSub` | kleine ondertekst bij het cijfer (optioneel) |
| `images` | lijst bestandsnamen, in volgorde van de tour |
| `animation` | `"kenburns"` \| `"scroll"` \| `"tour"` \| `"static"` |
| `cursor` | `true`/`false` — faux-cursor die naar een hotspot beweegt |
| `anonymized` | `true` als gevoelige data geblurd is (zie §7) — **verplicht `true` voordat het live mag** bij klantdata |
| `status` | `"live"` \| `"placeholder"` — bij placeholder toont de site de mock-fallback |

---

## 4. Wat de bouwer moet maken (technische instructie)

Bouw twee herbruikbare componenten en gebruik die overal waar de hoofdbrief een "mock demo" of "device-mockup" noemt.

**A) `<DeviceFrame variant="browser|phone|tablet">`**
- Strak frame: afgeronde hoeken, zachte schaduw, dunne rand. Browser krijgt een topbalk met 3 stippen + een adresbalk-pill met `urlBar`. Phone krijgt een notch/dynamic-island en afgeronde camera. Tablet = brede browserloze variant.
- Donkere en lichte variant (volgt de sectie-achtergrond).
- `overflow: hidden` zodat de screenshot netjes binnen het scherm blijft.

**B) `<ScreenShowcase config={slot}>`** — kern van het systeem
- Leest een slot uit `screens.config.json`.
- **Als `status === "placeholder"` of geen `images`:** render de geanimeerde mock-component uit de hoofdbrief (MockDashboard/MockWorkflow/etc.). Zo blijft de site altijd "vol".
- **Als er images zijn:** toon ze in de `DeviceFrame` met de gekozen `animation`:
  - `kenburns` — heel traag inzoomen + pannen (8–12s, ease-in-out, oneindig), alsof je rustig over het scherm beweegt.
  - `scroll` — de screenshot scrollt langzaam verticaal binnen het frame (alsof iemand de pagina doorbladert), heen en terug, loop.
  - `tour` — meerdere `images` crossfaden/sliden elke ~3,5s in hetzelfde frame, met kleine "stap"-dots eronder. Dit is de overtuigendste: het oogt als een echte demo.
  - `static` — stil, maar mét de zwevende kaartjes en tilt eronder.
- **Altijd er overheen (dit geeft het leven):**
  - 1–2 **zwevende glas-metric-kaartjes** (`metric` + `metricSub`) die zachtjes op- en neer driften en hun getal **laten optellen** wanneer ze in beeld komen.
  - **3D-tilt op muisbeweging** (subtiel, max ~6°) op desktop.
  - Optioneel een **faux-cursor** (`cursor: true`): een klein pijltje dat naar een hotspot beweegt en een "klik"-rimpel toont — laat een statische screenshot als interactief aanvoelen.
- **Performance & netheid:** lazy-load images; pauzeer animaties buiten beeld (Intersection Observer); respecteer `prefers-reduced-motion` (dan `static`). Lever 1× en 2× (retina) varianten als beschikbaar.
- **Responsive:** op mobiel minder tilt, tour blijft werken, frames schalen mee.

**Acceptatiecriterium:** zonder enige screenshot moet de site er al af uitzien (mock-fallback). Zodra een slot op `live` staat met images, vervangt de echte screenshot naadloos de mock — zonder verdere code-aanpassing.

---

## 5. Waar elk slot terechtkomt (mapping naar de site)

| slot-id | pagina / sectie | aanrader frame | tour? |
|---|---|---|---|
| `hero-primary` | Homepage hero, hoofdscherm | browser | ja (2–3 shots) |
| `hero-secondary` | Homepage hero, klein overlappend scherm | phone of browser | nee |
| `proces` | Service-rij Procesautomatisering | browser | ja |
| `agent` | Service-rij Agentic AI | browser | ja |
| `aidev` | Service-rij AI Development | browser | nee |
| `portal` | Portalen & dashboards / Mendix-voordeel | browser of tablet | ja |
| `homezero` | Projectkaart HomeZero (+ /projecten, sector Energie) | browser | nee |
| `petjeaf` | Projectkaart Petje af (+ sectoren Onderwijs/Kinderopvang) | browser | ja |
| `epsa` | Projectkaart EPSA (Professional Services) | browser | nee |
| `golfclub` | Projectkaart Golfclub (Sport) | browser | nee |
| `bkd` | Projectkaart BKD — **mobiele keuring-app** | phone | ja |
| `rechtspraak` | Projectkaart Rechtspraak (Semi-Publiek, **Anoniem**) | browser | nee |
| `floriusflowers` | Projectkaart FloriusFlowers (Coming soon) | browser | placeholder |

Hetzelfde case-slot mag op meerdere plekken hergebruikt worden (projectkaart op homepage, op /projecten, en in het case-blok van de bijbehorende sectorpagina). Definieer één keer in de config, gebruik overal.

---

## 6. Screenshot-voorbereiding (checklist voor jou)

- **Aspect ratio per frame:** browser ≈ 16:10 (bv. 1600×1000), tablet ≈ 4:3, phone ≈ 9:19,5 (bv. 1080×2340). Lever liefst op **2× resolutie** voor scherpte op retina.
- **Formaat:** PNG (UI) of geoptimaliseerde WebP; houd elk bestand < ~500 KB indien mogelijk.
- **Consistente look:** zelfde zoomniveau/lichtmodus binnen één tour; schone testdata; geen browser-extensies of rommelige tabbladen in beeld (lever bij voorkeur alleen de app-inhoud aan — het frame komt van de site zelf).
- **Voor een `tour`:** lever 2–3 logische stappen aan (bv. dashboard → detail → resultaat), zodat het als een mini-rondleiding voelt.
- **Hotspots (optioneel):** geef per `cursor`-slot door waar de cursor naartoe moet (bv. "knop rechtsboml"), dan kan de bouwer dat richten.

---

## 7. Privacy & toestemming — lees dit vóór je iets live zet

Echte klantsoftware bevat vaak bedrijfsgevoelige of persoonsgegevens. Borg het volgende, anders niet publiceren:

- **Toestemming:** zorg dat je per klant schriftelijke akkoord hebt om hun software/branding publiek te tonen. Bij anonieme cases (bv. Rechtspraak) géén herleidbare merknaam, logo of URL tonen.
- **Anonimiseren:** blur of vervang namen, e-mailadressen, BSN/persoonsgegevens, dossiernummers, financiële details en echte klantlogo's waar nodig. Overweeg neutrale demo-/testdata in plaats van productiedata.
- **Adresbalk:** zet in `urlBar` een nette, niet-gevoelige URL (of laat 'm leeg). Geen interne/inlog-URL's met tokens.
- **Markeer `anonymized: true`** in de config pas als dit echt gebeurd is; laat de bouwer slots met klantdata standaard op `placeholder` houden tot jij ze vrijgeeft.
- **Semi-publiek/overheid:** extra terughoudend — alleen tonen wat aantoonbaar gedeeld mag worden.

---

## 8. Werkvolgorde (zo gebruik je dit)

1. Start het custom project en geef mee: **deze brief + de Lovable-brief v3.2 + `screens.config.template.json`**.
2. Laat de bouwer eerst het showcase-systeem (DeviceFrame + ScreenShowcase + fallback) bouwen en overal inzetten. De site is dan al af met mocks.
3. Jij dropt screenshots in `/public/screens/...`, vult `screens.config.json` in en zet vrijgegeven slots op `status: "live"` + `anonymized: true`.
4. Klaar — de echte screens vervangen automatisch de mocks. Voeg later meer slots/tours toe wanneer je nieuwe screenshots hebt.

---

*Tip: begin met `hero-primary` (2–3 shots als tour) en de 3–4 sterkste cases. Die leveren de meeste "echtheid" voor de minste moeite.*
