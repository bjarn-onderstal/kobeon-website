import Link from "next/link";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import FinalCta from "@/components/sections/FinalCta";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { projects, sectors, serviceToSectors, serviceBodies, serviceVoorbeelden, type Service } from "@/lib/siteConfig";

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden className="mt-0.5 shrink-0">
      <circle cx="10" cy="10" r="10" className="fill-purple/10" />
      <path d="M6 10l3 3 5-5" stroke="#6C3EF4" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicePage({ service }: { service: Service }) {
  const relatedCases = projects.filter((p) => service.relatedProjects.includes(p.slug));
  const relatedSectorSlugs = serviceToSectors[service.slug] ?? [];
  const relatedSectors = sectors.filter((s) => relatedSectorSlugs.includes(s.slug));
  const body = serviceBodies[service.slug];
  const voorbeelden = serviceVoorbeelden[service.slug] ?? [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    provider: { "@type": "Organization", name: "Kobeon", url: "https://www.kobeon.nl" },
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Diensten", href: "/diensten" },
    { label: service.title, href: `/diensten/${service.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero */}
      <Section tone="light" className="pt-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple">
          Diensten
        </p>
        <h1 className="h-display max-w-3xl text-4xl md:text-5xl">{service.heroLine}</h1>
        {body ? (
          <div className="mt-6 max-w-2xl space-y-4">
            {body.paras.map((p, i) => (
              <p key={i} className={`leading-relaxed ${i === 0 ? "text-lg text-ink" : "text-base text-muted"}`}>{p}</p>
            ))}
          </div>
        ) : (
          <p className="mt-6 max-w-2xl text-lg text-muted">{service.intro}</p>
        )}
        {body && (
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {body.pijlers.map((p) => (
              <div key={p.t} className="rounded-2xl border border-line bg-white p-5 shadow-soft">
                <p className="font-serif text-base text-ink">{p.t}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{p.b}</p>
              </div>
            ))}
          </div>
        )}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/discovery-sessie" className="btn-primary">
            Plan een Discovery-sessie
          </Link>
          <Link href="/diensten" className="btn-ghost">
            Alle diensten
          </Link>
        </div>
        <p className="mt-3 text-sm text-muted">Gratis · 60 minuten · daarna weet je precies waar je staat.</p>
      </Section>

      {/* Wat het oplevert */}
      <Section tone="purplebg">
        <h2 className="h-display mb-8 text-2xl md:text-3xl">Wat het oplevert</h2>
        <ul className="space-y-4">
          {service.watJeKrijgt.map((item) => (
            <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-5 shadow-soft">
              <CheckIcon />
              <p className="text-ink">{item}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Hoe we het bouwen */}
      <Section tone="canvas">
        <h2 className="h-display mb-8 text-2xl md:text-3xl">
          Hoe we het bouwen op Mendix
        </h2>
        <ol className="space-y-4">
          {service.aanpak.map((item, i) => (
            <li key={item} className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple/10 text-sm font-bold text-purple">
                {i + 1}
              </span>
              <p className="text-ink">{item}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Voorbeelden — concrete use-cases */}
      {voorbeelden.length > 0 && (
        <Section tone="tealbg">
          <h2 className="h-display mb-3 text-2xl md:text-3xl">Voorbeelden</h2>
          <p className="mb-8 max-w-2xl text-muted">
            Een greep uit wat we hiermee bouwen — zodat je voelt wat er kan.
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {voorbeelden.map((v) => (
              <li key={v} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-soft">
                <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-teal" />
                <span className="text-sm leading-relaxed text-ink">{v}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Relevante cases */}
      {relatedCases.length > 0 && (
        <Section tone="light">
          <h2 className="h-display mb-8 text-2xl md:text-3xl">Relevante cases</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCases.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Section>
      )}

      {/* Relevant voor deze sectoren (dienst → sector) */}
      {relatedSectors.length > 0 && (
        <Section tone="canvas">
          <h2 className="h-display mb-3 text-2xl md:text-3xl">Relevant voor deze sectoren</h2>
          <p className="mb-8 max-w-2xl text-muted">
            Zo zetten we {service.title.toLowerCase()} concreet in per branche.
          </p>
          <div className="flex flex-wrap gap-2">
            {relatedSectors.map((s) => (
              <Link
                key={s.slug}
                href={`/sectoren/${s.slug}`}
                className="group inline-flex items-center gap-1 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-purple shadow-soft transition hover:border-purple"
              >
                {s.title}
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <FinalCta />
    </>
  );
}
