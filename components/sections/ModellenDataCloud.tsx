"use client";
import { motion } from "framer-motion";
import Section from "@/components/Section";

const cards = [
  {
    title: "Je eigen AI-model",
    body: "Een toonaangevend model, een open-source model of een eigen model binnen je eigen omgeving — vrij te wisselen.",
    chips: ["GPT", "Claude", "Open-source", "Eigen model"],
    active: 3,
  },
  {
    title: "Je eigen data",
    body: "AI wordt gegrond in jóuw data, zonder die te vervangen. Je bestaande systemen blijven het bronsysteem.",
    chips: ["AFAS", "SAP", "Dynamics", "→ AI"],
    active: 3,
  },
  {
    title: "Je eigen cloud",
    body: "Publieke cloud, private cloud, on-prem of volledig afgeschermd (air-gapped) als regelgeving dat eist.",
    chips: ["Cloud", "On-prem", "Air-gapped 🔒"],
    active: 2,
  },
];

export default function ModellenDataCloud() {
  return (
    <Section tone="tealbg" id="modellen-data-cloud">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple">Geen lock-in</p>
        <h2 className="h-display mt-3 text-3xl md:text-5xl">
          Je modellen. Je data. <span className="gradient-text">Je cloud.</span>
        </h2>
        <p className="mt-4 text-lg text-muted">
          Wij bouwen op Mendix, maar jij houdt de regie. De software draait op wat je al gebruikt — geen gedwongen winkelnering, geen dataverhuizing, geen vendor lock-in.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            className="rounded-2xl border border-line bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="font-serif text-xl text-ink">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {c.chips.map((chip, j) => (
                <span
                  key={chip}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    j === c.active ? "bg-teal text-white" : "bg-canvas text-muted"
                  }`}
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
