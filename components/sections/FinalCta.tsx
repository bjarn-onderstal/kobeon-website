import Link from "next/link";
import Section from "@/components/Section";

export default function FinalCta() {
  return (
    <Section tone="purple" className="text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="h-display text-3xl md:text-5xl">
          Klaar voor de eerste stap?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Eén gesprek van 60 minuten. Je betaalt niets en weet daarna precies waar je staat — en wat het oplevert.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/discovery-sessie" className="btn-primary text-base">Plan een Discovery-sessie</Link>
        </div>
        <p className="mt-4 text-sm text-white/60">Vrijblijvend · 60 minuten · via Calendly</p>
      </div>
    </Section>
  );
}
