# Kobeon — Nano Banana visual brief v1.0
### Hero-loop visual + cool achtergrond-images voor de dienstensectie

Met deze prompts maak je in **Nano Banana** (Gemini 2.5 Flash Image) de beeldlaag die nu ontbreekt: (1) een hero-scene die je tot een loop animeert, en (2) een set unieke achtergrond-images per dienst — zodat de dienstensectie net zo divers en rijk oogt als capisoft.nl.

> GEKOZEN AANPAK: geen videobestand. Nano Banana maakt **stills/lagen**, en de site zet die in beweging als lichtgewicht geanimeerde compositie (zie §3). Dat is de route die de Lovable-brief v3.3 bouwt — bijna net zo rijk als een video, maar veel sneller. Lever daarom vooral de **losse lagen** aan. (Een echte gerenderde loopvideo blijft optioneel mogelijk — §4 — maar is niet nodig voor de gebouwde site.)

---

## 0. Stijl-anker (zet dit vóór elke prompt)
Plak deze stijlregel telkens vooraan, zodat alle beelden één familie vormen:

> "Premium, grounded product/editorial visual for an enterprise software company. Realistic, tasteful 3D product render OR clean studio photography style — designed but believable, calm and uncluttered. Real-looking interfaces on real devices (laptop, monitor, phone, tablet) on tidy minimalist desks or soft surfaces; tangible materials (matte plastic, glass, light wood, soft fabric, paper). Soft natural daylight with gentle, realistic shadows; shallow depth of field with subtle bokeh; lots of negative space. Brand colours used only as subtle background tints and small accents — deep purple (#2A0870 / #3A0CA3) and teal (#13A6A6) as soft gradients, walls or props, with sparing warm yellow (#FFB703). Muted, sophisticated, photographic, high detail. No text, no logos, no watermark, no faces."

**Vermijd (cruciaal — anders wordt het te 'AI'):** gloeiende orbs, neon, hologrammen, wireframe-gloed, 'energy streams', deeltjes/particles, neurale-netwerk-clichés, zwevende glaspanelen in een donkere ruimte, sci-fi, kosmische/space-achtergronden, overdreven volumetric glow. Denk eerder aan een strak, licht, realistisch productbeeld of werkplek dan aan een futuristische render. Designed, maar echt.

Algemene regels: geen tekst/letters in beeld (die zet de site eroverheen), en compositie met een **rustige/lege zone** waar later koppen of een mockup komen. Achtergronden mogen licht of donker zijn; bij donkere secties op de site werkt een wat donkerder, brand-getinte werkplek goed (zachte overlay regelt leesbaarheid).

---

## 1. HERO-SCENE (de "loop"-visual)

**Bestand:** `/public/visuals/hero-scene.jpg` (+ losse lagen, zie §3)
**Ratio:** 16:9 desktop (genereer ook een 9:16 mobiele variant `hero-scene-mobile.jpg`)

**Prompt (desktop):**
> [Stijl-anker] + "A clean, modern workspace scene, photographed with a soft shallow depth of field. A sleek laptop and a separate monitor on a tidy light desk, both showing a tasteful analytics dashboard and a simple workflow interface (UI blurred just enough to feel real, not readable). Soft natural daylight from the side, calm muted atmosphere, a softly out-of-focus background tinted in deep purple and teal. The right side holds the devices; the left third is calm and uncluttered for a text overlay. Premium, believable, editorial — like a high-end product photograph, not a futuristic render."

**Alternatief (nog rustiger):** > [Stijl-anker] + "A minimalist close-up of a single modern monitor on a clean desk showing an elegant dashboard, soft daylight, gentle purple-teal tinted wall behind it with bokeh, generous empty space on the left for text. Calm, real, premium."

**Variant-tip:** genereer 3–4 varianten en kies de meest rustige (niet te druk links). Vraag eventueel: *"same scene, more empty space on the left, devices grouped on the right, even calmer"*.

---

## 2. DIENSTEN-ACHTERGRONDEN (9 unieke beelden, één familie)

Negen achtergronden, telkens met het stijl-anker zodat ze samen een set vormen. **Ratio 4:3** (bento-tegels). Bewaar als `/public/visuals/svc-<id>.jpg`. Allemaal gegrond/realistisch — schone werkplek- en device-beelden, geen abstracte gloed.

1. **svc-proces** (Procesautomatisering): "a realistic laptop on a tidy light desk showing a clean workflow/kanban board interface (slightly blurred), soft daylight, a calm deep-purple-tinted background with gentle bokeh, product-photography feel."
2. **svc-agent** (Agentic AI): "a realistic monitor or tablet on a clean surface showing a calm assistant/chat interface with a few task items, soft side light, subtle teal-tinted ambient, modern and believable — not sci-fi."
3. **svc-aidev** (AI Development): "a realistic desktop monitor on a minimalist desk displaying clean charts and a data table, soft studio daylight, muted purple-teal background tint, professional and grounded."
4. **svc-app** (App ontwikkeling): "a realistic smartphone and a laptop side by side on a light desk, both showing a clean modern app UI (blurred), soft natural light, subtle brand-tinted backdrop, premium product shot."
5. **svc-integratie** (Systeemintegratie): "a tidy, clean tabletop arrangement of a few connected device/system cards linked by simple physical lines or cables on a soft matte surface, calm studio lighting, muted brand colours, realistic materials — like a neat physical diagram, no glow."
6. **svc-portaal** (Portalen & dashboards): "a realistic widescreen monitor on a clean desk displaying an elegant dashboard with charts and KPI tiles, soft daylight, gentle teal accent, professional workspace, shallow depth of field."
7. **svc-legacy** (Legacy modernisering): "a realistic side-by-side: a dated old computer/interface on the left next to a clean modern laptop with a fresh interface on the right, on tidy desks, soft lighting, subtle purple tint, editorial and believable."
8. **svc-design** (Design & Prototyping): "a designer's clean desk with paper wireframe sketches and a tablet showing a polished UI prototype, soft daylight, muted brand-tinted background, tactile and real, product-photography style."
9. **svc-consultancy** (IT Consultancy): "a calm modern meeting-room corner with a whiteboard or large screen showing a simple, tidy roadmap of boxes and arrows, soft natural light, subtle brand accents, grounded and professional, no people."

**Consistentie-tip:** genereer ze in één sessie kort na elkaar en verwijs naar de vorige: *"same realistic product-photography style, lighting and palette as the previous image"*. Zo blijft de set uniform.

Optioneel — **sector- en case-achtergronden** in dezelfde gegronde stijl (sectorpagina-hero's), realistisch i.p.v. abstract: horticultuur (een lichte kas of een tablet met keuring-app op een werkbank), staffing (een nette kantooromgeving met een lap
---

## Image-edit prompts (upload je app-screenshot → plak de prompt)

Werkwijze: maak een (geanonimiseerde) screenshot van een échte Mendix-app en laat Nano Banana die alleen *bewerken/inlijsten* — niet hertekenen. Zo lijkt het echt op Mendix i.p.v. futuristisch.

**0. Anonimiseren (alleen als er echte data in staat):**
> Edit the uploaded screenshot. Keep the exact interface, layout and styling. Replace all real names, e-mail addresses, client and brand logos, ID/case numbers and financial figures with neutral, realistic placeholder data. Keep it believable and consistent. Do not change the UI design and do not redraw anything.

**1. Standaard — laptop/browser-tegel:**
> You are editing the uploaded screenshot of a real business web application. Keep the on-screen interface exactly as it is: same layout, same flat 2D UI — do not redraw, restyle or invent UI. Place the screenshot inside a clean, modern laptop (or a tidy browser window) on a minimalist light desk. Soft natural daylight from the side, gentle realistic shadows, shallow depth of field with subtle bokeh. Background: a calm, softly out-of-focus light workspace, subtly tinted in deep purple (#2A0870) and teal (#13A6A6). Keep generous empty space on the left for text. Premium product-photography look — believable, NOT a 3D render. No glow, no neon, no holograms, no futuristic HUD, no sci-fi, no dark space, no abstract particles, no added text, no faces. Output 16:9, high resolution.

**2. Telefoon-frame (mobiele apps):**
> You are editing the uploaded screenshot of a real mobile app. Keep the app UI exactly as it is — flat, 2D, do not redraw. Place it inside a modern smartphone standing on a clean, light desk. Soft natural daylight, gentle shadows, shallow depth of field, a calm background subtly tinted in deep purple (#2A0870) and teal (#13A6A6), with empty space beside the phone. Premium product photography, believable, not a 3D render. No glow, neon, holograms, sci-fi or added text, no faces. Output 4:5 (portrait).

**3. Feature-tegel met "weggewerkte" achtergrond (de 2 grote bento-tegels):**
> You are editing the uploaded screenshot of a real business web app. Keep the UI flat and exactly as-is. Place it large inside a subtle browser window and let it bleed toward the bottom-right corner, fading softly into a clean WHITE background via a smooth white gradient — the top-left area stays plain white and empty for a heading. Light, airy, premium, realistic. Subtle deep-purple/teal tint only at the edges. No dark overlay, no glow, no neon, no 3D, no added text, no faces. Output 4:3.

**4. Meerdere screenshots:**
- Consistente set: draai prompt 1 per screenshot en voeg toe: "Use the same laptop, desk, lighting and palette as the previous image."
- Combineren: upload 2 screenshots en gebruik:
> Compose one clean scene on a tidy light desk: a laptop showing the first uploaded screenshot and a smartphone showing the second. Keep both UIs flat, real and unchanged. Soft daylight, gentle shadows, a calm background subtly tinted in deep purple (#2A0870) and teal (#13A6A6), with empty space on the left for text. Premium product photography, not a 3D render. No glow, neon, 3D effects, added text or faces. Output 16:9.

**Bestandsnamen:** hero → `hero-primary.jpg`; dienst-tegels → `svc-<slug>.jpg` (prompt 3 voor de 2 feature-tegels, prompt 1 voor de rest); cases → per slug (prompt 2 voor mobiele apps). Alles in `/public/visuals/` (of `/public/screens/`). Lever 2× resolutie.
