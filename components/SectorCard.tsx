import Link from "next/link";
import type { sectors } from "@/lib/siteConfig";

type Sector = (typeof sectors)[number];

const accentStyles: Record<Sector["accent"], { border: string; flood: string; chip: string }> = {
  teal: { border: "hover:border-teal", flood: "group-hover:bg-teal", chip: "bg-tealbg text-teal" },
  purple: { border: "hover:border-purple", flood: "group-hover:bg-purple", chip: "bg-purplebg text-purple" },
  yellow: { border: "hover:border-yellow", flood: "group-hover:bg-yellow", chip: "bg-yellow/15 text-ink" },
};

export default function SectorCard({ sector }: { sector: Sector }) {
  const { slug, title, emoji, accent, systems, available } = sector;
  const a = accentStyles[accent];
  const inner = (
    <div
      className={`group h-full rounded-2xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${a.border} ${a.flood}`}
    >
      <div className="flex items-start justify-between">
        <span className="text-3xl">{emoji}</span>
        {!available && (
          <span className="rounded-full bg-canvas px-2 py-0.5 text-[10px] font-semibold text-muted group-hover:bg-white/20 group-hover:text-white">
            Binnenkort
          </span>
        )}
      </div>
      <h3 className="h-display mt-4 text-2xl transition-colors group-hover:text-white">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {systems.map((s) => (
          <li
            key={s}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${a.chip} group-hover:bg-white/20 group-hover:text-white`}
          >
            {s}
          </li>
        ))}
      </ul>
      {available && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-purple transition-colors group-hover:text-white">
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
