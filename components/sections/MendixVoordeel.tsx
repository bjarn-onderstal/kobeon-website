"use client";
import { motion } from "framer-motion";
import Section from "@/components/Section";

const tiles = [
  {
    title: "Standaard veilig",
    body: "Security, ISO 27001 en AVG zitten ingebouwd — niet iets dat achteraf wordt aangezet.",
  },
  {
    title: "Enterprise-schaalbaarheid",
    body: "Van 10 tot 100.000 gebruikers op één platform. Cloud-native op AWS of Azure, private cloud of on-prem.",
  },
  {
    title: "Governance & audit trails",
    body: "Elke actie — van mens of AI-agent — is auditeerbaar, traceerbaar en afdwingbaar. Klaar voor NIS2, EU AI Act, AVG, BIO en ISO 27001.",
  },
  {
    title: "Siemens als fundament",
    body: "Mendix wordt gedragen door Siemens en koppelt out-of-the-box met SAP, Dynamics, AFAS, Exact, Salesforce en AWS — plus elke REST/OData-API.",
  },
];

export default function MendixVoordeel() {
  return (
    <Section tone="light" id="mendix-voordeel">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple">Het Mendix-voordeel</p>
        <h2 className="h-display mt-3 text-3xl md:text-5xl">
          Wat maatwerk en standaardsoftware <span className="gradient-text">niet kunnen bieden.</span>
        </h2>
        <p className="mt-4 text-lg text-muted">
          Wij bouwen op Mendix — het platform dat enterprise-eisen standaard invult, zodat jij niet kiest tussen snelheid en degelijkheid.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-stretch">
        {/* 2×2 tegels */}
        <div className="grid gap-5 sm:grid-cols-2">
          {tiles.map((t, i) => (
            <motion.div
              key={t.title}
              className="group rounded-2xl border border-line bg-purplebg p-6 shadow-soft transition hover:-translate-y-1 hover:bg-purple hover:shadow-lift"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className="font-serif text-xl text-ink transition-colors group-hover:text-white">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted transition-colors group-hover:text-white/85">{t.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Gartner-quote, diep paars met geel accent */}
        <motion.figure
          className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-purple-deep p-8 text-white shadow-lift"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="absolute left-0 top-0 h-full w-1.5 bg-yellow" />
          <blockquote className="font-serif text-2xl leading-snug md:text-[28px]">
            “Mendix is voor het negende jaar op rij Leider in de Gartner Magic Quadrant voor enterprise low-code.”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow text-lg font-bold text-ink">9×</span>
            <span className="text-sm text-white/70">Gartner Magic Quadrant — Enterprise Low-Code (2025)</span>
          </figcaption>
        </motion.figure>
      </div>
    </Section>
  );
}
