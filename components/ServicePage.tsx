import Link from "next/link";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import FinalCta from "@/components/sections/FinalCta";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { projects, type Service } from "@/lib/siteConfig";

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
        <p className="mt-6 max-w-2xl text-lg text-muted">{service.intro}</p>
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

      {/* CTA band */}
      <section className="bg-purple-deep text-white">
        <div className="container-x py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
            {service.title}
          </p>
          <h2 className="h-display mt-3 max-w-2xl text-3xl md:text-4xl">
            Klaar om te starten?
          </h2>
          <p className="mt-4 max-w-xl text-white/75">
            Plan een gratis Discovery-sessie van 60 minuten. Daarna weet je precies wat er mogelijk is en wat het oplevert.
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
