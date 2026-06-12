"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/Section";

const steps = [
  { no: "01", title: "Discovery", dur: "1–2 wk" },
  { no: "02", title: "Design & Prototype", dur: "1–2 wk" },
  { no: "03", title: "MVP bouwen", dur: "4–6 wk" },
  { no: "04", title: "Implementatie & training", dur: "1 wk" },
  { no: "∞", title: "90-daagse cycli", dur: "doorlopend", cycli: true },
];

export default function HoeWeWerken() {
  return (
    <Section tone="canvas" id="hoe-we-werken">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal">Hoe we werken</p>
        <h2 className="h-display mt-3 text-3xl md:text-5xl">
          Van idee naar werkend. <span className="gradient-text">Stap voor stap.</span>
        </h2>
        <p className="mt-4 text-lg text-muted">
          Een helder tempo met vaste stappen, en daarna blijven we doorontwikkelen.
        </p>
      </div>

      <div className="relative mt-14">
        {/* zichzelf-tekenende stippellijn (desktop) */}
        <motion.div
          aria-hidden
          className="absolute left-[10%] right-[10%] top-6 hidden border-t-2 border-dashed border-line md:block"
          style={{ transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />

        <div className="grid gap-10 md:grid-cols-5 md:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.no}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
            >
              <div
                className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full font-bold shadow-soft ${
                  s.cycli ? "bg-yellow text-ink" : "bg-purple text-white"
                }`}
              >
                {s.no}
              </div>
              <h3 className="mt-4 font-serif text-lg text-ink">{s.title}</h3>
              <span className="mt-2 rounded-full border border-line bg-white px-3 py-0.5 text-xs text-muted">{s.dur}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <Link href="/werkwijze" className="group inline-flex items-center gap-1.5 font-semibold text-purple">
          Bekijk onze werkwijze
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </Section>
  );
}
