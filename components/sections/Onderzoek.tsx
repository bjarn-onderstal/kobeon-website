"use client";
import { motion } from "framer-motion";
import Section from "@/components/Section";

type Insight = { quote: string; source: string; toVerify?: boolean };

// Kobeon-eigen, goed onderbouwde claims eerst; daarna de bredere startset uit de
// brief — gemarkeerd als 'te verifiëren' tot de definitieve bron is aangeleverd.
const insights: Insight[] = [
  { quote: "Negen jaar op rij Gartner-Leider voor enterprise low-code.", source: "Gartner (2025), via Mendix" },
  { quote: "Eén platform van 10 tot 100.000 gebruikers — cloud of on-prem.", source: "Mendix" },
  { quote: "Gedragen door Siemens.", source: "Mendix" },
  {
    quote: "Vooroplopende bedrijven die AI op schaal inzetten realiseren tot 60% meer omzetgroei en tot 45% hogere kostenbesparingen.",
    source: "McKinsey — The State of AI",
    toVerify: true,
  },
  {
    quote: "Bedrijven die AI diep integreren realiseren tot 50% snellere omzetgroei dan hun branchegenoten.",
    source: "Accenture — The Art of AI Maturity (2022)",
    toVerify: true,
  },
  {
    quote: "Slechts 2 op de 10 organisaties voelt zich klaar voor AI.",
    source: "Gartner, via Mendix",
    toVerify: true,
  },
];

export default function Onderzoek() {
  return (
    <Section tone="canvas" id="onderzoek">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple">Onderzoek & autoriteit</p>
        <h2 className="h-display mt-3 text-3xl md:text-5xl">
          De cijfers achter <span className="gradient-text">de urgentie.</span>
        </h2>
        <p className="mt-4 text-lg text-muted">
          We laten de bronnen het werk doen. Onderbouwd en toegeschreven — geen loze beloftes.
        </p>
      </div>

      {/* horizontaal scrollbare strook */}
      <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
        {insights.map((it, i) => (
          <motion.figure
            key={it.quote}
            className="flex min-h-[220px] w-[300px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-line bg-white p-7 shadow-soft md:w-[340px]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <div>
              <span className="font-serif text-5xl leading-none text-purple/20">“</span>
              <blockquote className="-mt-3 font-serif text-xl leading-snug text-ink">{it.quote}</blockquote>
            </div>
            <figcaption className="mt-5 flex items-center justify-between gap-2">
              <span className="text-xs text-muted">{it.source}</span>
              {it.toVerify && (
                <span className="shrink-0 rounded-full bg-yellow/15 px-2 py-0.5 text-[10px] font-semibold text-ink">
                  Bron te verifiëren
                </span>
              )}
            </figcaption>
          </motion.figure>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted">Sleep of scroll horizontaal voor meer inzichten.</p>
    </Section>
  );
}
