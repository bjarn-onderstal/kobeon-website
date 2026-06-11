"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Service } from "@/lib/siteConfig";
import Icon from "@/components/Icon";
import MiniMock from "@/components/MiniMock";

// Lichte, clean tegel — consistent met de rest van de site (witte kaart, zachte
// schaduw, merk-accent, lift op hover). Grote feature-tegels (met `mock`) tonen
// een lichte mini-UI; de overige een line-icoon. Elke tegel krijgt een subtiele
// merk-achtergrond: een sfeerfoto op /diensten/svc-<slug>.jpg als die bestaat,
// anders valt-ie terug op een zachte accent-gradient (fallback).
const accentMap = {
  purple: { tint: "bg-purplebg text-purple", border: "hover:border-purple", cta: "text-purple", wash: "from-purple/12" },
  teal: { tint: "bg-tealbg text-teal", border: "hover:border-teal", cta: "text-teal", wash: "from-teal/12" },
  yellow: { tint: "bg-yellow/15 text-ink", border: "hover:border-yellow", cta: "text-ink", wash: "from-yellow/20" },
} as const;

function TileBackdrop({ slug, wash }: { slug: string; wash: string }) {
  const [state, setState] = useState<"loading" | "ok" | "error">("loading");
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
      {/* Fallback: zachte accent-gradient vanuit de hoek (altijd aanwezig). */}
      <div className={`absolute inset-0 bg-gradient-to-br ${wash} via-transparent to-transparent`} />
      {/* Optionele sfeerfoto — verdwijnt netjes als het bestand er (nog) niet is. */}
      {state !== "error" && (
        // eslint-disable-next-line @next/next/no-img-element -- decoratieve, optionele achtergrond met onError-fallback
        <img
          src={`/diensten/svc-${slug}.jpg`}
          alt=""
          aria-hidden
          loading="lazy"
          onLoad={() => setState("ok")}
          onError={() => setState("error")}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            state === "ok" ? "opacity-[0.10] group-hover:opacity-[0.16]" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}

export default function ServiceTile({ service, index }: { service: Service; index: number }) {
  const { slug, title, desc, accent, span, mock } = service;
  const a = accentMap[accent];
  return (
    <motion.div
      id={slug}
      className={`group relative flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${a.border} ${span}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      <TileBackdrop slug={slug} wash={a.wash} />

      {/* Inhoud boven de achtergrondlaag. */}
      <div className="relative z-10 flex flex-1 flex-col">
        {mock ? (
          <div className="mb-5 flex-1 rounded-xl border border-line bg-canvas/90 p-4 backdrop-blur-[1px]">
            <MiniMock kind={mock} />
          </div>
        ) : (
          <span className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${a.tint}`}>
            <Icon name={slug} className="h-5 w-5" />
          </span>
        )}
        <h3 className="font-serif text-xl text-ink">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
        <Link
          href={`/diensten/${slug}`}
          className={`mt-3 inline-flex items-center gap-1 text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${a.cta}`}
        >
          Meer info <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </motion.div>
  );
}
