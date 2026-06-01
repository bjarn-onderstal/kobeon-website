import Link from "next/link";
import type { sectors } from "@/lib/siteConfig";
import Icon from "@/components/Icon";

type Sector = (typeof sectors)[number];

// Verfijnde hover: kaart licht op in een zachte accenttint met accent-rand en
// lift; tekst blijft donker en leesbaar (geen witte tekst op gele vlakken).
const accentStyles: Record<Sector["accent"], { border: string; tint: string; cta: string; chip: string; icon: string }> = {
  teal: { border: "hover:border-teal", tint: "group-hover:bg-tealbg", cta: "text-teal", chip: "bg-tealbg text-teal", icon: "bg-tealbg text-teal" },
  purple: { border: "hover:border-purple", tint: "group-hover:bg-purplebg", cta: "text-purple", chip: "bg-purplebg text-purple", icon: "bg-purplebg text-purple" },
  yellow: { border: "hover:border-yellow", tint: "group-hover:bg-yellow/10", cta: "text-ink", chip: "bg-yellow/15 text-ink", icon: "bg-yellow/15 text-ink" },
};

export default function SectorCard({ sector }: { sector: Sector }) {
  const { slug, title, accent, systems, available } = sector;
  const a = accentStyles[accent];
  const inner = (
    <div
      className={`group h-full rounded-2xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${a.border} ${a.tint}`}
    >
      <div className="flex items-start justify-between">
        <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:bg-white ${a.icon}`}>
          <Icon name={slug} className="h-6 w-6" />
        </span>
        {!available && (
          <span className="rounded-full bg-canvas px-2 py-0.5 text-[10px] font-semibold text-muted">Binnenkort</span>
        )}
      </div>
      <h3 className="h-display mt-4 text-2xl text-ink">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {systems.map((s) => (
          <li
            key={s}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors group-hover:bg-white ${a.chip}`}
          >
            {s}
          </li>
        ))}
      </ul>
      {available && (
        <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${a.cta}`}>
          Bekijk sector <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      )}
    </div>
  );

  return available ? (
    <Link href={`/sectoren/${slug}`} className="block h-full">
      {inner}
    </Link>
  ) : (
    <div className="h-full cursor-default">{inner}</div>
  );
}
