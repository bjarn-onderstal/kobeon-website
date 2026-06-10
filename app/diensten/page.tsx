import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import DienstenBentoGrid from "@/components/DienstenBentoGrid";
import { services } from "@/lib/siteConfig";

const title = "Diensten — negen manieren om te digitaliseren";
const description =
  "Negen diensten op Mendix — van procesautomatisering en agentic AI tot systeemintegratie en portalen. Binnen zes weken een werkende versie die met je meegroeit.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/diensten" },
  openGraph: { title: `${title} | Kobeon`, description, url: "/diensten", type: "website" },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.desc,
      provider: { "@type": "Organization", name: "Kobeon" },
    },
  })),
};

export default function Page() {
  return (
    <Section tone="light" className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal">Alle diensten</p>
        <h1 className="h-display mt-3 text-4xl md:text-6xl">
          Negen manieren waarop wij <span className="gradient-text">je organisatie digitaliseren.</span>
        </h1>
        <p className="mt-4 text-lg text-muted">
          Alles wat we bouwen, bouwen we op één veilige basis: Mendix. Van procesautomatisering tot AI op maat.
        </p>
      </div>

      <div className="mt-12">
        <DienstenBentoGrid />
      </div>

      <div className="mt-12">
        <Link href="/discovery-sessie" className="group inline-flex items-center gap-1.5 font-semibold text-purple">
          Plan een Discovery-sessie
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </Section>
  );
}
