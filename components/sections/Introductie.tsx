"use client";
import { motion } from "framer-motion";
import Section from "@/components/Section";

const voordelen = [
  { icon: "🚀", accent: "bg-purple", title: "Snel", body: "Een werkende MVP in 4–6 weken. Geen traject van een jaar." },
  { icon: "🛡️", accent: "bg-teal", title: "Enterprise-kwaliteit", body: "ISO 27001, AVG en rolgebaseerde toegang. Standaard ingebouwd." },
  { icon: "📈", accent: "bg-yellow", title: "Schaalbaar", body: "Van 10 tot 100.000 gebruikers, zonder herbouw." },
];

export default function Introductie() {
  return (
    <Section tone="canvas" id="waarom-kobeon">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        {/* tekst */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">Waarom Kobeon</p>
          <h2 className="h-display mt-3 text-3xl md:text-5xl">
            Je bent gegroeid. <span className="gradient-text">Je systemen niet.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Je draait op losse pakketten, Excel en e-mail. Standaardsoftware past niet op je processen; maatwerk in high-code is te traag en te duur. Wij bouwen software die wél past — op Mendix. De zekerheid van enterprise, de snelheid van low-code, en een team van Mendix-experts dat het binnen zes weken werkend krijgt.
          </p>
        </div>

        {/* 3 kernvoordelen */}
        <div className="space-y-4">
          {voordelen.map((v, i) => (
            <motion.div
              key={v.title}
              className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${v.accent} text-lg`} aria-hidden>
                {v.icon}
              </span>
              <div>
                <h3 className="font-serif text-lg text-ink">{v.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{v.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* snelheidsvergelijking: jaren → maanden → weken */}
      <div className="mt-16 rounded-2xl border border-line bg-white p-7 shadow-soft md:p-9">
        <p className="text-sm font-semibold text-ink">Van idee naar werkende software</p>
        <div className="mt-6 space-y-5">
          <div>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="text-muted">Custom / high-code</span>
              <span className="font-medium text-muted">maanden tot jaren</span>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-canvas">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-purple-med/70 to-purple-deep/70"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              />
            </div>
          </div>
          <div>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="font-semibold text-ink">Kobeon op Mendix</span>
              <span className="font-semibold text-ink">6 weken</span>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-canvas">
              <motion.div
                className="h-full rounded-full bg-yellow"
                initial={{ width: 0 }}
                whileInView={{ width: "16%" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
