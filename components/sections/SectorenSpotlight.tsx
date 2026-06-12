import Link from "next/link";
import Section from "@/components/Section";
import SectorCard from "@/components/SectorCard";
import { sectors } from "@/lib/siteConfig";

export default function SectorenSpotlight() {
  return (
    <Section tone="light" id="sectoren">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple">Sectoren</p>
        <h2 className="h-display mt-3 text-3xl md:text-5xl">
          Sectorspecifieke kennis. <span className="gradient-text">Wij denken in jouw processen.</span>
        </h2>
        <p className="mt-4 text-lg text-muted">
          Elke branche heeft eigen systemen, regels en knelpunten. Die kennen we.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sectors.map((s) => (
          <SectorCard key={s.slug} sector={s} />
        ))}
      </div>

      <div className="mt-10">
        <Link href="/sectoren" className="group inline-flex items-center gap-1.5 font-semibold text-purple">
          Alle sectoren
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </Section>
  );
}
