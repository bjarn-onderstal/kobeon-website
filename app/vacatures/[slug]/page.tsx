import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import FinalCta from "@/components/sections/FinalCta";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { vacancies, perks, site } from "@/lib/siteConfig";

export function generateStaticParams() {
  return vacancies.map((v) => ({ slug: v.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const v = vacancies.find((x) => x.slug === params.slug);
  if (!v) return {};
  const title = `${v.title} — vacature bij Kobeon`;
  const description = v.teaser;
  return {
    title,
    description,
    alternates: { canonical: `/vacatures/${v.slug}` },
    openGraph: { title: `${title} | Kobeon`, description, url: `/vacatures/${v.slug}`, type: "website" },
  };
}

const MAIL = "werkenbij@kobeon.nl";

export default function Page({ params }: { params: { slug: string } }) {
  const vacancy = vacancies.find((v) => v.slug === params.slug);
  if (!vacancy) notFound();
  const { title, type, location, hours, teaser, intro, profiel, rol, voorwaarden, kind, open } = vacancy;
  const mailto = `mailto:${MAIL}?subject=${encodeURIComponent(`Sollicitatie: ${title}`)}`;
  const isStage = kind === "stage";
  const profielLabel = isStage ? "Past bij jou" : "Herken jij jezelf?";
  const rolLabel = isStage ? "Wat ga je doen?" : "Werken zoals jij wil";
  const voorwaardenLabel = isStage ? "Wat bieden wij" : "Wat betekent dit voor jou?";
  const chips = [location, type, hours].filter((x) => x && x !== "—");
  const introParas = intro ?? [teaser];

  const jobPosting = !open
    ? {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title,
        description: [teaser, ...(intro ?? []), ...(rol ?? [])].join(" "),
        datePosted: "2026-01-06",
        employmentType: type,
        hiringOrganization: { "@type": "Organization", name: site.name, sameAs: site.url },
        jobLocation: {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressLocality: "Zwolle", addressCountry: "NL" },
        },
        applicantLocationRequirements: { "@type": "Country", name: "Nederland" },
        directApply: false,
      }
    : null;

  return (
    <>
      {jobPosting && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }} />
      )}
      <BreadcrumbJsonLd items={[{ label: "Home", href: "/" }, { label: "Vacatures", href: "/vacatures" }, { label: title }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-purple-deep text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(60% 60% at 80% 20%, rgba(19,166,166,0.22), transparent), radial-gradient(50% 50% at 10% 90%, rgba(83,72,206,0.32), transparent)" }}
        />
        <div className="container-x relative pb-14 pt-32 md:pb-16 md:pt-40">
          <Link href="/vacatures" className="text-sm text-white/60 hover:text-white">← Alle vacatures</Link>
          <h1 className="h-display mt-4 max-w-3xl text-4xl md:text-5xl">{title}</h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {chips.map((p) => (
              <span key={p} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/80">{p}</span>
            ))}
          </div>
          <div className="mt-7">
            <a href={mailto} className="btn-primary">{open ? "Verras ons" : "Solliciteer nu"}</a>
          </div>
        </div>
      </section>

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-10">
            <div className="space-y-4">
              {introParas.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted">{p}</p>
              ))}
            </div>

            {profiel && (
              <div>
                <h2 className="h-display text-2xl">{profielLabel}</h2>
                <ul className="mt-4 space-y-2">
                  {profiel.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-ink">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple text-[11px] font-bold text-white">+</span>
                      <span className="text-sm leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {rol && (
              <div>
                <h2 className="h-display text-2xl">{rolLabel}</h2>
                <ul className="mt-4 space-y-2">
                  {rol.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-ink">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal text-[11px] font-bold text-white">✓</span>
                      <span className="text-sm leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {voorwaarden && (
              <div>
                <h2 className="h-display text-2xl">{voorwaardenLabel}</h2>
                <ul className="mt-4 space-y-2">
                  {voorwaarden.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-ink">
                      <span className="mt-[7px] inline-block h-2 w-2 shrink-0 rounded-full bg-yellow" />
                      <span className="text-sm leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="h-display text-2xl">Over Kobeon</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Kobeon is een Mendix Certified Partner met de hoogste expertdichtheid van Nederland: een internationaal team van Mendix MVP's, Experts en Specialisten — met 2 Advanced Trainers en ISO 27001 — dat enterprise-software en AI bouwt op Mendix, het platform dat al negen jaar Gartner-Leider is. We werken zij-aan-zij met onze klanten, van Discovery tot livegang.
              </p>
            </div>

            {!open && (
              <div className="rounded-2xl border border-line bg-canvas p-6">
                <h2 className="font-serif text-lg text-ink">Niet helemaal jouw vacature?</h2>
                <p className="mt-2 text-sm text-muted">Overtuigd van Kobeon, maar zit jouw rol er niet bij? We horen graag van je.</p>
                <Link href="/vacatures/open-sollicitatie" className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-purple">
                  Stuur een open sollicitatie <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            )}
          </div>

          {/* Wat wij bieden */}
          <aside className="h-fit rounded-2xl border border-line bg-canvas p-7">
            <h2 className="font-serif text-xl text-ink">Wat wij bieden</h2>
            <ul className="mt-4 space-y-2">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-ink">
                  <span className="inline-block h-2 w-2 rounded-full bg-yellow" />
                  {p}
                </li>
              ))}
            </ul>
            <a href={mailto} className="btn-primary mt-6 w-full justify-center">{open ? "Verras ons" : "Solliciteer direct"}</a>
            <p className="mt-3 text-center text-xs text-muted">of mail naar {MAIL}</p>
          </aside>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
