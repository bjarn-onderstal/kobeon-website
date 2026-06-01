"use client";
import { useEffect, useState } from "react";
import Section from "@/components/Section";

const items = [
  { quote: "Binnen zes weken stond er een werkende app waar ons hele team mee verder kon. Geen eindeloos traject, gewoon resultaat.", name: "[Naam]", role: "[Functie]", company: "[Bedrijf]" },
  { quote: "Onze systemen praten eindelijk met elkaar. Wat eerst handwerk was, loopt nu vanzelf — met volledig inzicht.", name: "[Naam]", role: "[Functie]", company: "[Bedrijf]" },
  { quote: "Kobeon denkt mee als partner, niet als leverancier. Ze snappen onze processen en bouwen er de juiste software op.", name: "[Naam]", role: "[Functie]", company: "[Bedrijf]" },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((p) => (p + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const t = items[i];
  const initials = "KB";

  return (
    <Section tone="light">
      <div
        className="mx-auto max-w-3xl text-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-purple">Wat klanten zeggen</p>
        <h2 className="h-display mt-3 text-3xl md:text-5xl">Niet zeggen — laten zien.</h2>

        <div className="relative mt-10 rounded-2xl border border-line bg-canvas p-8 md:p-12">
          <span className="pointer-events-none absolute left-6 top-2 font-serif text-7xl text-purple/15">“</span>
          <blockquote className="relative text-xl font-medium italic leading-relaxed text-ink md:text-2xl">
            {t.quote}
          </blockquote>
          <figcaption className="mt-7 flex items-center justify-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple/10 text-sm font-bold text-purple">{initials}</span>
            <span className="text-sm text-muted">
              <span className="font-semibold text-ink">{t.name}</span> · {t.role}, <span className="text-teal">{t.company}</span>
            </span>
          </figcaption>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, j) => (
            <button
              key={j}
              onClick={() => setI(j)}
              aria-label={`Toon quote ${j + 1}`}
              className={`h-2 rounded-full transition-all ${j === i ? "w-6 bg-purple" : "w-2 bg-line hover:bg-purple/40"}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
