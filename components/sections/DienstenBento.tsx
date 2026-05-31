import Link from "next/link";
import Section from "@/components/Section";
import DienstenBentoGrid from "@/components/DienstenBentoGrid";

export default function DienstenBento() {
  return (
    <Section tone="canvas" id="diensten">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal">Alle diensten</p>
        <h2 className="h-display mt-3 text-3xl md:text-5xl">
          Negen manieren waarop wij <span className="gradient-text">je organisatie digitaliseren.</span>
        </h2>
        <p className="mt-4 text-lg text-muted">
          Alles wat we bouwen, bouwen we op één veilige basis: Mendix. Van procesautomatisering tot AI op maat.
        </p>
      </div>

      <div className="mt-12">
        <DienstenBentoGrid />
      </div>

      <div className="mt-10">
        <Link href="/diensten" className="group inline-flex items-center gap-1.5 font-semibold text-teal">
          Bekijk alle diensten
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </Section>
  );
}
