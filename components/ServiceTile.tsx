"use client";
import { motion } from "framer-motion";
import type { Service } from "@/lib/siteConfig";
import Icon from "@/components/Icon";
import MiniMock from "@/components/MiniMock";

// Lichte, clean tegel — consistent met de rest van de site (witte kaart, zachte
// schaduw, merk-accent, lift op hover). Grote feature-tegels (met `mock`) tonen
// een lichte mini-UI; de overige een line-icoon.
const accentMap = {
  purple: { tint: "bg-purplebg text-purple", border: "hover:border-purple", cta: "text-purple" },
  teal: { tint: "bg-tealbg text-teal", border: "hover:border-teal", cta: "text-teal" },
  yellow: { tint: "bg-yellow/15 text-ink", border: "hover:border-yellow", cta: "text-ink" },
} as const;

export default function ServiceTile({ service, index }: { service: Service; index: number }) {
  const { slug, title, desc, accent, span, mock } = service;
  const a = accentMap[accent];
  return (
    <motion.div
      id={slug}
      className={`group relative flex scroll-mt-24 flex-col rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${a.border} ${span}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      {mock ? (
        <div className="mb-5 flex-1 rounded-xl border border-line bg-canvas p-4">
          <MiniMock kind={mock} />
        </div>
      ) : (
        <span className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${a.tint}`}>
          <Icon name={slug} className="h-5 w-5" />
        </span>
      )}
      <h3 className="font-serif text-xl text-ink">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
      <span className={`mt-3 inline-flex items-center gap-1 text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${a.cta}`}>
        Meer info <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </motion.div>
  );
}
