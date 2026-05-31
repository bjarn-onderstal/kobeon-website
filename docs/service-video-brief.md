# Kobeon — Dienst-video's maken van échte klantsoftware
### Van ruwe schermopname → gestyld, website-passend, loopend (Nano Banana + bewegingsstap)

Je wilt achter de dienst-tegels (en eventueel de hero/cases) loopende beelden van **echte** software — maar niet de ruwe opname; het moet bewerkt en passend bij de site. Dit is de workflow. Belangrijk vooraf:

> **Nano Banana = stills/beeldbewerking, geen video.** Het is wél hét gereedschap om je echte screenshot/opname-frame te bewerken tot een strak, merk-passend, geanonimiseerd beeld. De daadwerkelijke loop maak je daarna in een **videostap** (een video-model of lichte montage), óf je animeert het bewerkte beeld live in de site (lichtst). Hieronder beide.

Stijl blijft zoals afgesproken: **gegrond en realistisch, designed maar echt** — geen neon/gloed/sci-fi (zie de Vermijd-lijst onderaan).

---

## De workflow per dienst (herhaalbaar)

**Stap 1 — Opnemen.** Maak een korte, schone schermopname (of een paar nette screenshots) van de échte klant-app: een dashboard dat laadt, een workflow die afvinkt, een portaal dat scrollt. 6–10 seconden ruw is genoeg.

**Stap 2 — Anonimiseren & bewerken in Nano Banana (de kern).** Upload het frame/screenshot en laat Nano Banana het bewerken tot een website-klaar beeld (prompts hieronder). Hier gebeurt het "passend maken": frame eromheen, merk-achtergrond, gevoelige data weg, metric-kaartje erbij.

**Stap 3 — In beweging zetten.** Maak van het bewerkte beeld een naadloze loop (videostap of code, zie verderop).

**Stap 4 — Exporteren.** `/public/visuals/svc-<id>.mp4` + `svc-<id>.webm` + poster `svc-<id>.jpg`. 6–10s, naadloze loop, < ~1,5 MB per clip.

---

## Stap 2 — Nano Banana beeldbewerk-prompts (input = jouw echte screenshot)

Dit zijn **image-edit**-prompts: je uploadt de echte opname/screenshot en Nano Banana past 'm aan. Zet telkens het stijl-anker (onderaan) erbij.

**A) Anonimiseren (eerst, altijd):**
> "Edit the uploaded screenshot: keep the layout and look of the interface, but replace all real names, e-mail addresses, client logos, ID/case numbers and financial figures with neutral, realistic-looking placeholder data. Keep it believable and consistent. Do not change the overall UI design."

**B) In een schoon device-frame plaatsen + merk-achtergrond:**
> [Stijl-anker] + "Place the uploaded interface screenshot inside a clean, modern laptop (or browser window) on a tidy minimalist desk. Soft natural daylight, a softly out-of-focus background gently tinted in deep purple and teal, shallow depth of field, premium product-photography feel. The screen content stays crisp and realistic. Leave calm empty space around the device. No text added, no logos, no glow."

**C) Een zwevend metric-kaartje toevoegen (optioneel, Capisoft-signature):**
> [Stijl-anker] + "Add one small, realistic floating UI card in front of the device showing a single metric like a number and a short label (e.g. a percentage going up). Subtle soft shadow, glassy but tasteful, matching the purple/teal palette. Keep it minimal and believable — like a real product highlight, not a sci-fi hologram."

**D) Kleur-grade naar merk (afronding):**
> "Color-grade the whole image subtly toward a calm, premium look with soft deep-purple and teal tones in the background and neutral, true-to-life colors on the screen. Keep it natural and photographic, not oversaturated."

**Tip — mini "product-tour":** bewerk 2–3 frames (bv. dashboard → detail → resultaat) in exact dezelfde stijl. Vraag bij elk volgend frame: *"same device, desk, lighting and palette as the previous image"*. Die frames worden in stap 3 een korte crossfade-loop.

---

## Stap 3 — Van bewerkt beeld naar loop

**Route 1 — Video-model (image-to-video, meest "echt bewegend").** Gebruik het bewerkte beeld als startframe in Veo 3 / Runway / Kling:
> "Subtle, realistic loop based on this image: very gentle camera drift, the on-screen interface animates softly (a chart fills, a row updates, a subtle scroll), soft daylight steady. Calm, believable, seamless loop, no camera cuts, no text appearing, no glowing effects."
Render 6–10s, naadloze loop, exporteer mp4 + webm, klein gecomprimeerd.

**Route 2 — Lichte montage.** Heb je 2–3 bewerkte frames: zet ze in CapCut/Premiere/After Effects met een trage Ken Burns + zachte crossfades tot een 8s loop. Exporteer mp4 + webm.

**Route 3 — Geen videobestand (lichtst).** Lever alleen het bewerkte beeld als `svc-<id>.jpg`; de site (v3.5 fallback) animeert het met Ken Burns + hover. Prima voor de kleinere tegels.

**Advies (sluit aan op v3.5):** route 1 of 2 voor je 2–3 sterkste diensten (échte software, bewerkt) → die krijgen een video. De overige tegels route 3. Zo krijg je de Capisoft-levendigheid zonder de pagina vol zware video's.

---

## Stijl-anker (zet vóór elke Nano Banana-prompt)
> "Premium, grounded product/editorial visual for an enterprise software company. Realistic, tasteful, designed but believable — like high-end product photography, not a futuristic render. Real device(s) on a tidy minimalist desk, tangible materials, soft natural daylight with gentle shadows, shallow depth of field, lots of negative space. Brand colours only as subtle background tints/accents — deep purple (#2A0870/#3A0CA3) and teal (#13A6A6), sparing warm yellow (#FFB703). Muted, sophisticated, photographic, high detail. No added text, no logos, no watermark, no faces."

**Vermijd (cruciaal):** gloeiende orbs, neon, hologrammen, wireframe-gloed, energy streams, particles, neurale-netwerk-clichés, zwevende glaspanelen in een donkere ruimte, sci-fi, space-achtergronden, overdreven glow. Designed, maar echt.

---

## Output-specs (samenvatting)
- Bestanden: `/public/visuals/svc-<id>.mp4` + `svc-<id>.webm` + poster `svc-<id>.jpg`.
- 6–10s, naadloze loop, < ~1,5 MB per clip; poster altijd meeleveren.
- Anonimiseer vóór publicatie; toon klantsoftware alleen met toestemming (zie Screenshot-brief §7).
- Dezelfde `<id>`'s als in v3.3/v3.5: proces, agent, aidev, app, integratie, portaal, legacy, design, consultancy.
