import Link from "next/link";
import type { vacancies } from "@/lib/siteConfig";

type Vacancy = (typeof vacancies)[number];

export default function VacancyCard({ vacancy }: { vacancy: Vacancy }) {
  const { slug, title, type, location, teaser, open } = vacancy;
  return (
    <Link
      href={`/vacatures/${slug}`}
      className={`group flex flex-col rounded-2xl border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift ${
        open ? "border-2 border-dashed border-yellow" : "border-line hover:border-purple"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-purplebg px-2.5 py-1 text-xs font-medium text-purple">{vacancy.category}</span>
        {!open && (
          <>
            <span className="rounded-full bg-canvas px-2.5 py-1 text-xs text-muted">{type}</span>
            <span className="rounded-full bg-canvas px-2.5 py-1 text-xs text-muted">{location}</span>
          </>
        )}
      </div>
      <h3 className="h-display mt-4 text-xl">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{teaser}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-purple">
        {open ? "Verras ons" : "Bekijk vacature"}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
