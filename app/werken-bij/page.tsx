import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import VacanciesList from "@/components/VacanciesList";
import FinalCta from "@/components/sections/FinalCta";
import { culture, team, coreValues } from "@/lib/siteConfig";

const title = "Werken bij Kobeon — bouw mee aan Mendix & AI";
const description =
  "Werken bij Kobeon: een klein, senior Mendix-team met 2 Advanced Trainers en ISO 27001. Echte impact, MVP's in zes weken en eigenaarschap van Discovery tot livegang.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/werken-bij" },
  openGraph: { title: `${title} | Kobeon`, description, url: "/werken-bij", type: "website" },
};

const proces = ["Reactie binnen 5 werkdagen", "Kennismaking", "Technische / case-sessie", "Aanbod"];

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-purple-deep text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(60% 60% at 80% 20%, rgba(19,166,166,0.22), transparent), radial-gradient(50% 50% at 10% 90%, rgba(83,72,206,0.32), transparent)" }}
        />
        <div className="container-x relative pb-16 pt-32 md:pb-20 md:pt-40">
          <span className="chip border-white/20 bg-white/10 text-white/80">WERKEN BIJ KOBEON</span>
          <h1 className="h-display mt-6 max-w-3xl text-4xl md:text-6xl">
            Bouw mee aan software die ertoe doet — <span className="text-yellow">met de scherpste Mendix-experts van Nederland.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Bij Kobeon werk je in een team van experts dat kennis deelt, dicht op de klant zit en samen het verschil maakt. Geen radertje in een machine; jij hebt impact en eigenaarschap.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#vacatures" className="btn-primary">Bekijk vacatures</Link>
            <Link href="/vacatures/open-sollicitatie" className="btn-ghost text-white">Open sollicitatie</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            {["Mendix Certified Partner", "2 Advanced Mendix Trainers", "ISO 27001", "8 experts"].map((t) => (
              <span key={t}>· {t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom Kobeon — cultuurpijlers */}
      <Section tone="light">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">Waarom Kobeon</p>
          <h2 className="h-display mt-3 text-3xl md:text-4xl">Een team van experts.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {culture.map((c) => (
            <div key={c.title} className="rounded-2xl border border-line bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <h3 className="font-serif text-xl text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Kernwaarden */}
      <Section tone="purplebg">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">Onze kernwaarden</p>
          <h2 className="h-display mt-3 text-3xl md:text-4xl">Hoe we met elkaar omgaan.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {coreValues.map((v) => (
            <div key={v.title} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
              <h3 className="font-serif text-xl text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Ons team — gedeelde bron met /over-kobeon */}
      <Section tone="canvas">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">Ons team</p>
          <h2 className="h-display mt-3 text-3xl md:text-4xl">Wij zijn met {team.length} — en groeien.</h2>
          <p className="mt-4 text-muted">
            Een klein, hecht team van senior Mendix-experts. Bij jouw start hoor je er meteen bij — en bouw je mee.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="rounded-2xl border border-line bg-white p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              {m.photo ? (
                <Image
                  src={m.photo}
                  alt={`Portretfoto van ${m.name}`}
                  width={144}
                  height={144}
                  className="mx-auto h-20 w-20 rounded-full object-cover"
                />
              ) : (
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple/10 text-lg font-bold text-purple">
                  {initials(m.name)}
                </div>
              )}
              <h3 className="mt-4 font-serif text-lg text-ink">{m.name}</h3>
              <p className="mt-0.5 text-sm text-muted">{m.role}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Benieuwd naar de gezichten?{" "}
          <Link href="/over-kobeon" className="font-semibold text-purple hover:underline">Maak kennis met het team →</Link>
        </p>
      </Section>

      {/* Vacatures */}
      <Section tone="light" id="vacatures">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal">Open posities</p>
          <h2 className="h-display mt-3 text-3xl md:text-4xl">Word onderdeel van het team.</h2>
        </div>
        <div className="mt-10">
          <VacanciesList />
        </div>
      </Section>

      {/* Sollicitatieproces */}
      <Section tone="canvas">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">Sollicitatieproces</p>
          <h2 className="h-display mt-3 text-3xl md:text-4xl">Zo verloopt het.</h2>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {proces.map((p, i) => (
            <li key={p} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
              <span className="h-display text-3xl text-purple/30">0{i + 1}</span>
              <p className="mt-2 text-sm font-medium text-ink">{p}</p>
            </li>
          ))}
        </ol>
      </Section>

      <FinalCta />
    </>
  );
}
