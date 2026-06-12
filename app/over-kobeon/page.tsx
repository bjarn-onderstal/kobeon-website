import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import VisieAgentic from "@/components/sections/VisieAgentic";
import FinalCta from "@/components/sections/FinalCta";
import { team, coreValues } from "@/lib/siteConfig";

const title = "Over Kobeon · enterprise-software op Mendix";
const description =
  "Kobeon is een Nederlandse Mendix + AI implementatiepartner uit Zwolle. Klein, senior team. Mendix Certified Partner, 3 MVP's, ISO 27001. Van idee naar MVP in zes weken.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/over-kobeon" },
  openGraph: { title: `${title} | Kobeon`, description, url: "/over-kobeon", type: "website" },
};

const credentials = [
  { value: "Mendix Certified", label: "Partner" },
  { value: "8", label: "Mendix experts" },
  { value: "3", label: "Mendix MVP's" },
  { value: "2", label: "Advanced Trainers" },
  { value: "ISO 27001", label: "gecertificeerd" },
  { value: "#1", label: "Mendix-expertdichtheid NL" },
];

const clients = [
  "ABN AMRO",
  "Zilveren Kruis",
  "de Rechtspraak",
  "BKD",
  "Petje af",
  "HomeZero",
  "EPSA",
];

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
      <Section tone="light" className="pt-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple">
          Over Kobeon
        </p>
        <h1 className="h-display max-w-3xl text-4xl md:text-5xl">
          De Mendix-partner met de hoogste expertdichtheid van Nederland.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink">
          Samen bouwen we enterprise-software die werkt zoals jij denkt: snel, veilig en schaalbaar.
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          Kobeon is een Nederlandse Mendix- en AI-implementatiepartner uit Zwolle. Ons internationaal
          opererende team bestaat uit Mendix MVP&apos;s, Experts en Specialisten die complexe uitdagingen
          omzetten in schaalbare oplossingen. Die diepe expertise (op het platform dat al negen jaar
          Gartner-Leider is) is waar we het verschil maken.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Maar techniek alleen is niet genoeg. We werken zij-aan-zij met je, vanuit vertrouwen: we denken
          mee, schakelen snel, communiceren helder en nemen je mee in elke stap. Geen leverancier op
          afstand, maar een partner die naast je staat: van de eerste Discovery tot doorontwikkeling.
          Wat de situatie ook is, we helpen je verder.
        </p>
      </Section>

      {/* Credentials */}
      <Section tone="canvas">
        <h2 className="h-display mb-10 text-2xl md:text-3xl">Onze credentials</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {credentials.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-line bg-white p-5 shadow-soft"
            >
              <p className="font-serif text-xl font-semibold text-purple">{c.value}</p>
              <p className="mt-1 text-sm text-muted">{c.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Klanten */}
      <Section tone="light">
        <h2 className="h-display mb-4 text-2xl md:text-3xl">Klanten die ons vertrouwen</h2>
        <p className="mb-8 max-w-xl text-muted">
          Organisaties als{" "}
          {clients.slice(0, -1).join(", ")} en {clients[clients.length - 1]} vertrouwen ons
          hun software toe.
        </p>
        <div className="flex flex-wrap gap-3">
          {clients.map((c) => (
            <span
              key={c}
              className="rounded-full border border-line bg-canvas px-4 py-2 text-sm font-medium text-ink"
            >
              {c}
            </span>
          ))}
        </div>
      </Section>

      {/* Kernwaarden */}
      <Section tone="purplebg">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">Onze kernwaarden</p>
          <h2 className="h-display mt-3 text-2xl md:text-3xl">Waar we voor staan.</h2>
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

      {/* Onze visie — de agentic enterprise */}
      <VisieAgentic variant="full" />

      {/* Team */}
      <Section tone="purplebg">
        <h2 className="h-display mb-2 text-2xl md:text-3xl">Het team</h2>
        <p className="mb-10 max-w-xl text-muted">
          Een klein, hecht team van senior Mendix-experts. Iedereen bouwt mee.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div
              key={m.name}
              className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft"
            >
              {m.photo ? (
                <Image
                  src={m.photo}
                  alt={`Portretfoto van ${m.name}`}
                  width={112}
                  height={112}
                  className="h-14 w-14 shrink-0 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-purple/10 text-sm font-bold text-purple">
                  {initials(m.name)}
                </div>
              )}
              <div>
                <p className="font-semibold text-ink">{m.name}</p>
                <p className="mt-0.5 text-sm text-muted">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Vestiging */}
      <Section tone="light">
        <h2 className="h-display mb-6 text-2xl md:text-3xl">Vestiging</h2>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-purple">Adres</p>
            <p className="mt-2 text-muted">
              Noordzeelaan 50
              <br />
              8017 JW Zwolle
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-purple">Contact</p>
            <p className="mt-2 text-muted">
              <a href="mailto:info@kobeon.nl" className="hover:text-purple transition-colors">
                info@kobeon.nl
              </a>
              <br />
              <a href="tel:+31852007076" className="hover:text-purple transition-colors">
                +31 (0)85 200 7076
              </a>
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-purple">
              Direct aan de slag?
            </p>
            <Link href="/discovery-sessie" className="btn-primary mt-3 inline-flex text-sm">
              Plan een Discovery-sessie
            </Link>
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
