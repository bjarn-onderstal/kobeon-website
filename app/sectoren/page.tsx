import type { Metadata } from "next";
import Section from "@/components/Section";
import SectorCard from "@/components/SectorCard";
import { sectors } from "@/lib/siteConfig";

const title = "Sectoren · Mendix & AI per branche";
const description =
  "Sectorspecifieke software op Mendix: sierteelt, staffing, semi-publiek, onderwijs, kinderopvang en maakindustrie. Wij denken in jouw processen en systemen.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sectoren" },
  openGraph: { title: `${title} | Kobeon`, description, url: "/sectoren", type: "website" },
};

export default function Page() {
  return (
    <Section tone="light" className="pt-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple">Sectoren</p>
        <h1 className="h-display mt-3 text-4xl md:text-6xl">
          Sectorspecifieke kennis. <span className="gradient-text">Wij denken in jouw processen.</span>
        </h1>
        <p className="mt-4 text-lg text-muted">
          Elke branche heeft eigen systemen, regels en knelpunten. Wij kennen ze, en bouwen er de juiste software op.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sectors.map((s) => (
          <SectorCard key={s.slug} sector={s} />
        ))}
      </div>
    </Section>
  );
}
