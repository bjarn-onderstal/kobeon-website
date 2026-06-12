import Link from "next/link";
import Section from "@/components/Section";
import DeviceFrame from "@/components/DeviceFrame";
import CaseMedia from "@/components/CaseMedia";
import FinalCta from "@/components/sections/FinalCta";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { services, type Project } from "@/lib/siteConfig";

function StepIcon({ n }: { n: number }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal/10 text-sm font-bold text-teal">
      {n}
    </span>
  );
}

export default function ProjectPage({ project }: { project: Project }) {
  const relatedSvcs = services.filter((s) => project.relatedServices.includes(s.slug));

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
          {project.soon && (
            <span className="chip border-yellow/40 bg-yellow/10 text-xs font-semibold text-ink">
              Binnenkort
            </span>
          )}
        </div>
        <h1 className="h-display mt-4 max-w-3xl text-4xl md:text-5xl">{project.transformation}</h1>
        <p className="mt-4 text-2xl font-semibold text-purple">{project.metric}</p>
        {!project.soon && (
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/discovery-sessie" className="btn-primary">
              Plan een Discovery-sessie
            </Link>
            <Link href="/projecten" className="btn-ghost">
              Alle cases
            </Link>
          </div>
        )}
      </Section>

      {/* Mock-up */}
      <Section tone="canvas">
        <div className="mx-auto max-w-xl">
          <DeviceFrame theme="light" title={project.name}>
            <CaseMedia project={project} />
          </DeviceFrame>
        </div>
      </Section>

      {!project.soon ? (
        <>
          {/* Uitdaging */}
          <Section tone="light">
            <div className="mx-auto max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple">
                De uitdaging
              </p>
              <h2 className="h-display mb-6 text-2xl md:text-3xl">Wat er speelde</h2>
              <p className="text-lg leading-relaxed text-muted">{project.challenge}</p>
            </div>
          </Section>

          {/* Aanpak */}
          <Section tone="purplebg">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple">
              Onze aanpak
            </p>
            <h2 className="h-display mb-8 text-2xl md:text-3xl">Hoe we het hebben gebouwd</h2>
            <ol className="space-y-4">
              {project.approach.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft"
                >
                  <StepIcon n={i + 1} />
                  <p className="text-ink">{step}</p>
                </li>
              ))}
            </ol>
          </Section>

          {/* Resultaat */}
          <Section tone="canvas">
            <div className="rounded-2xl border border-line bg-white p-8 shadow-soft md:p-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal">
                Het resultaat
              </p>
              <p className="text-3xl font-bold text-purple md:text-4xl">{project.metric}</p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{project.result}</p>
              {project.quote && (
                <blockquote className="mt-8 border-l-4 border-purple/30 pl-5">
                  <p className="italic text-ink">&ldquo;{project.quote}&rdquo;</p>
                  {project.quoteAuthor && (
                    <cite className="mt-2 block text-sm text-muted not-italic">
                      — {project.quoteAuthor}
                    </cite>
                  )}
                </blockquote>
              )}
            </div>
          </Section>

          {/* Gebruikte diensten */}
          {relatedSvcs.length > 0 && (
            <Section tone="light">
              <h2 className="h-display mb-8 text-2xl md:text-3xl">Gebruikte diensten</h2>
              <div className="flex flex-wrap gap-3">
                {relatedSvcs.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/diensten/${s.slug}`}
                    className="rounded-full border border-line bg-canvas px-4 py-2 text-sm font-medium text-ink transition hover:border-purple hover:text-purple"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </Section>
          )}
        </>
      ) : (
        /* Binnenkort stub */
        <Section tone="light">
          <div className="mx-auto max-w-xl text-center">
            <p className="mb-4 text-muted">
              Dit project is momenteel in ontwikkeling. Wil je meer weten?
            </p>
            <Link href="/discovery-sessie" className="btn-primary">
              Plan een Discovery-sessie
            </Link>
          </div>
        </Section>
      )}

      <FinalCta />
    </>
  );
}
