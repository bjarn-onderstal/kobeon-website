import Link from "next/link";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import FinalCta from "@/components/sections/FinalCta";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { projects } from "@/lib/siteConfig";

export type SectorContent = {
  title: string;
  tagline: string;
  intro: string;
  accent: "teal" | "purple" | "yellow";
  problems: { title: string; body: string }[];
  approach: { title: string; body: string }[];
  systems: string[];
  examples?: string[];
  relatedServices?: { label: string; href: string }[];
  caseSlug?: string;
};

const accentText: Record<SectorContent["accent"], string> = {
  teal: "text-teal",
  purple: "text-purple",
  yellow: "text-yellow",
};
const accentBg: Record<SectorContent["accent"], string> = {
  teal: "bg-teal",
  purple: "bg-purple",
  yellow: "bg-yellow",
};

export default function SectorPage({ content }: { content: SectorContent }) {
  const { title, tagline, intro, accent, problems, approach, systems, examples, relatedServices, caseSlug } = content;
  const caseProject = projects.find((p) => p.slug === caseSlug);

  return (
    <>
      <BreadcrumbJsonLd items={[{ label: "Home", href: "/" }, { label: "Sectoren", href: "/sectoren" }, { label: title }]} />
      {/* Hero — diep paars accent */}
      <section className="relative overflow-hidden bg-purple-deep text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(60% 60% at 80% 20%, rgba(19,166,166,0.22), transparent), radial-gradient(50% 50% at 10% 90%, rgba(83,72,206,0.32), transparent)" }}
        />
        <div className="container-x relative pb-16 pt-32 md:pb-20 md:pt-40">
          <span className="chip border-white/20 bg-white/10 text-white/80">Sector</span>
          <h1 className="h-display mt-6 max-w-3xl text-4xl md:text-6xl">
            {title} <span className="block text-yellow">{tagline}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/discovery-sessie" className="btn-primary">Plan een Discovery-sessie</Link>
            <Link href="/sectoren" className="btn-ghost text-white">Alle sectoren</Link>
          </div>
        </div>
      </section>

      {/* De uitdaging (Challenger: probleem eerst) */}
      <Section tone="light">
        <div className="max-w-2xl">
          <p className={`text-sm font-semibold uppercase tracking-wide ${accentText[accent]}`}>De uitdaging</p>
          <h2 className="h-display mt-3 text-3xl md:text-4xl">Waar je nu tegenaan loopt.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {problems.map((p) => (
            <div key={p.title} className="rounded-2xl border border-line bg-canvas p-6">
              <h3 className="font-serif text-xl text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Onze aanpak */}
      <Section tone="canvas">
        <div className="max-w-2xl">
          <p className={`text-sm font-semibold uppercase tracking-wide ${accentText[accent]}`}>Onze aanpak</p>
          <h2 className="h-display mt-3 text-3xl md:text-4xl">Zo lossen we het op.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {approach.map((a) => (
            <div key={a.title} className="group rounded-2xl border border-line bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold text-white ${accentBg[accent]}`}>✓</span>
              <h3 className="mt-3 font-serif text-xl text-ink">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <p className="text-sm font-semibold text-ink">Systemen die we koppelen</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {systems.map((s) => (
              <span key={s} className="rounded-full border border-line bg-white px-3 py-1 text-sm text-muted">{s}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* Wat we voor jouw sector bouwen */}
      {examples && examples.length > 0 && (
        <Section tone="light">
          <div className="max-w-2xl">
            <p className={`text-sm font-semibold uppercase tracking-wide ${accentText[accent]}`}>Voorbeelden</p>
            <h2 className="h-display mt-3 text-3xl md:text-4xl">Wat we voor jouw sector bouwen.</h2>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {examples.map((e) => (
              <li key={e} className="flex items-start gap-3 rounded-2xl border border-line bg-canvas p-5">
                <span className={`mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full ${accentBg[accent]}`} />
                <span className="text-sm leading-relaxed text-ink">{e}</span>
              </li>
            ))}
          </ul>
          {relatedServices && relatedServices.length > 0 && (
            <div className="mt-8">
              <p className="text-sm font-semibold text-ink">Relevante diensten</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedServices.map((s) => (
                  <Link key={s.href} href={s.href} className="group inline-flex items-center gap-1 rounded-full border border-line bg-white px-3 py-1 text-sm font-medium text-purple transition hover:border-purple">
                    {s.label}
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Section>
      )}

      {/* Case */}
      {caseProject && (
        <Section tone="light">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className={`text-sm font-semibold uppercase tracking-wide ${accentText[accent]}`}>In de praktijk</p>
              <h2 className="h-display mt-3 text-3xl md:text-4xl">Dit bouwden we al.</h2>
              <p className="mt-4 text-lg text-muted">{caseProject.transformation}</p>
              <Link href="/projecten" className="group mt-5 inline-flex items-center gap-1.5 font-semibold text-purple">
                Bekijk alle projecten <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
            <ProjectCard project={caseProject} />
          </div>
        </Section>
      )}

      <FinalCta />
    </>
  );
}
