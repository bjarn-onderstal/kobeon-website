import Link from "next/link";
import Section from "@/components/Section";
import DeviceFrame from "@/components/DeviceFrame";
import MiniMock from "@/components/MiniMock";
import FinalCta from "@/components/sections/FinalCta";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { services, type projects } from "@/lib/siteConfig";

type Project = (typeof projects)[number];

const accentClass: Record<Project["accent"], string> = {
  purple: "bg-purple/10 text-purple",
  teal: "bg-teal/10 text-teal",
  yellow: "bg-yellow/20 text-ink",
};

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden className="mt-0.5 shrink-0">
      <circle cx="10" cy="10" r="10" className="fill-purple/10" />
      <path d="M6 10l3 3 5-5" stroke="#6C3EF4" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProjectPage({ project }: { project: Project }) {
  const relatedSvcs = services.filter((s) =>
    (project.relatedServices ?? []).includes(s.slug)
  );

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Projecten", href: "/projecten" },
    { label: project.name, href: `/projecten/${project.slug}` },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.transformation,
    creator: { "@type": "Organization", name: "Kobeon", url: "https://www.kobeon.nl" },
    about: project.sector,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero */}
      <Section tone="light" className="pt-32">
        <div className="flex flex-wrap items-center gap-3">
          <span className="chip border-line bg-canvas text-xs text-muted">{project.sector}</span>
          <span className={`chip text-xs font-semibold ${accentClass[project.accent]}`}>
            {project.metric}
          </span>
        </div>
        <h1 className="h-display mt-4 max-w-3xl text-4xl md:text-5xl">{project.transformation}</h1>
        {project.soon && (
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-4 py-2 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-yellow" />
            Dit project is nog in ontwikkeling — de volledige case verschijnt na oplevering.
          </p>
        )}
      </Section>

      {/* Device mock */}
      <Section tone="canvas">
        <div className="mx-auto max-w-2xl">
          <DeviceFrame theme="light" url={`${project.slug}.kobeon.nl`}>
            <MiniMock kind={project.kind} />
          </DeviceFrame>
        </div>
      </Section>

      {/* Uitdaging */}
      {project.challenge && (
        <Section tone="light">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple">De uitdaging</p>
            <h2 className="h-display mb-4 text-2xl md:text-3xl">Waar het begon</h2>
            <p className="text-lg leading-relaxed text-muted">{project.challenge}</p>
          </div>
        </Section>
      )}

      {/* Aanpak */}
      {project.approach && project.approach.length > 0 && (
        <Section tone="purplebg">
          <h2 className="h-display mb-8 text-2xl md:text-3xl">Onze aanpak op Mendix</h2>
          <ol className="space-y-4">
            {project.approach.map((item, i) => (
              <li key={i} className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple/10 text-sm font-bold text-purple">
                  {i + 1}
                </span>
                <p className="text-ink">{item}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {/* Resultaat */}
      {project.result && (
        <Section tone="canvas">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple">Het resultaat</p>
            <h2 className="h-display mb-4 text-2xl md:text-3xl">Wat het opleverde</h2>
            <div className="flex gap-3 rounded-2xl border border-line bg-white p-6 shadow-soft">
              <CheckIcon />
              <p className="text-lg leading-relaxed text-ink">{project.result}</p>
            </div>
          </div>
        </Section>
      )}

      {/* Quote */}
      {project.quote && (
        <Section tone="light">
          <div className="mx-auto max-w-xl text-center">
            <p className="h-display text-xl italic text-ink">"{project.quote.text}"</p>
            <p className="mt-4 text-sm font-semibold text-muted">— {project.quote.author}</p>
          </div>
        </Section>
      )}

      {/* Gerelateerde diensten */}
      {relatedSvcs.length > 0 && (
        <Section tone="light">
          <h2 className="h-display mb-6 text-2xl md:text-3xl">Gebruikte diensten</h2>
          <div className="flex flex-wrap gap-3">
            {relatedSvcs.map((s) => (
              <Link
                key={s.slug}
                href={`/diensten/${s.slug}`}
                className="rounded-full border border-line bg-white px-5 py-2 text-sm font-medium text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-purple hover:text-purple hover:shadow-lift"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* CTA band */}
      <section className="bg-purple-deep text-white">
        <div className="container-x py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
            {project.sector}
          </p>
          <h2 className="h-display mt-3 max-w-2xl text-3xl md:text-4xl">
            Vergelijkbare uitdaging?
          </h2>
          <p className="mt-4 max-w-xl text-white/75">
            Plan een gratis Discovery-sessie van 60 minuten. Daarna weet je precies wat er mogelijk is voor jouw organisatie.
          </p>
          <Link href="/discovery-sessie" className="btn-primary mt-8 inline-flex">
            Plan een Discovery-sessie
          </Link>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
