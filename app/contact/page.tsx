import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { site } from "@/lib/siteConfig";

const title = "Contact · Kobeon, Mendix & AI implementatiepartner";
const description =
  "Neem contact op met Kobeon. Bel, mail of plan direct een gratis Discovery-sessie van 60 minuten. Wij zijn gevestigd in Zwolle en werken door heel Nederland.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${title} | Kobeon`,
    description,
    url: "/contact",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact · Kobeon",
  url: `${site.url}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: "Kobeon",
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Noordzeelaan 50",
      addressLocality: "Zwolle",
      postalCode: "8017 JW",
      addressCountry: "NL",
    },
  },
};

function MapPinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="shrink-0 text-purple">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="shrink-0 text-purple">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="shrink-0 text-purple">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.63 19.79 19.79 0 01.1 1.05 2 2 0 012.11 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero */}
      <Section tone="light" className="pt-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple">Contact</p>
        <h1 className="h-display max-w-2xl text-4xl md:text-5xl">
          Kom in contact met Kobeon.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted">
          Stel je vraag, plan een Discovery-sessie of bel ons direct. We reageren binnen één werkdag.
        </p>
      </Section>

      {/* Contactgegevens + formulier */}
      <Section tone="canvas">
        <div className="grid gap-10 md:grid-cols-2">

          {/* Gegevens */}
          <div className="space-y-5">
            <h2 className="h-display text-2xl">Onze gegevens</h2>

            <a
              href={`mailto:${site.email}`}
              className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-purple hover:shadow-lift"
            >
              <MailIcon />
              <div>
                <p className="text-sm font-semibold text-ink">E-mail</p>
                <p className="mt-0.5 text-sm text-muted">{site.email}</p>
              </div>
            </a>

            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-purple hover:shadow-lift"
            >
              <PhoneIcon />
              <div>
                <p className="text-sm font-semibold text-ink">Telefoon</p>
                <p className="mt-0.5 text-sm text-muted">{site.phone}</p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft">
              <MapPinIcon />
              <div>
                <p className="text-sm font-semibold text-ink">Vestiging</p>
                <p className="mt-0.5 text-sm text-muted">{site.address}</p>
              </div>
            </div>
          </div>

          {/* Formulier */}
          <div>
            <h2 className="h-display mb-5 text-2xl">Stuur een bericht</h2>
            <form
              action={`mailto:${site.email}`}
              method="get"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                  Naam
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jan de Vries"
                  className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                  E-mailadres
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jan@bedrijf.nl"
                  className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                  Bericht
                </label>
                <textarea
                  id="message"
                  name="body"
                  required
                  rows={5}
                  placeholder="Vertel kort wat je wil bereiken of welke vraag je hebt."
                  className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/20"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center"
              >
                Verstuur bericht
              </button>
              <p className="text-xs text-muted">
                Dit opent je e-mailclient. Liever bellen?{" "}
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-purple hover:underline">
                  {site.phone}
                </a>
              </p>
            </form>
          </div>
        </div>
      </Section>

      {/* Discovery-CTA */}
      <section className="bg-purple-deep text-white">
        <div className="container-x py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/60">Liever direct aan de slag?</p>
          <h2 className="h-display mt-3 max-w-2xl text-3xl md:text-4xl">
            Plan een gratis Discovery-sessie.
          </h2>
          <p className="mt-4 max-w-xl text-white/75">
            60 minuten. Geen verkooppraatje, na afloop weet je precies wat er mogelijk is en wat het oplevert.
          </p>
          <Link href="/discovery-sessie" className="btn-primary mt-8 inline-flex">
            Plan een Discovery-sessie
          </Link>
        </div>
      </section>
    </>
  );
}
