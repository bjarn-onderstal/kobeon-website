import Section from "@/components/Section";
import SolutionCard from "@/components/SolutionCard";
import { solutions } from "@/lib/siteConfig";

export default function Solutions() {
  return (
    <Section tone="canvas">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple">Oplossingen</p>
        <h2 className="h-display mt-3 text-3xl md:text-5xl">
          Vier oplossingen. <span className="gradient-text">Eén platform.</span>
        </h2>
        <p className="mt-4 text-lg text-muted">
          Alles wat we bouwen, bouwen we op Mendix — vier soorten oplossingen, één veilige basis.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {solutions.map((s) => (
          <SolutionCard key={s.key} {...(s as any)} />
        ))}
      </div>

      {/* smalle platform-band (geen groot zwart blok) */}
      <div className="mt-8 rounded-2xl bg-purple-deep px-8 py-7 text-white md:flex md:items-center md:justify-between">
        <div>
          <div className="font-serif text-2xl">Eén platform: Mendix.</div>
          <p className="mt-2 max-w-2xl text-white/75">
            Security, governance en schaalbaarheid standaard ingebouwd — ISO 27001, audit trails, van 10 tot 100.000 gebruikers. Gedragen door Siemens, negen jaar op rij Gartner-Leider.
          </p>
        </div>
        <div className="mt-5 flex shrink-0 gap-2 md:mt-0">
          {["ISO 27001", "AVG", "9× Gartner"].map((c) => (
            <span key={c} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">{c}</span>
          ))}
        </div>
      </div>
    </Section>
  );
}
