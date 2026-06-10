import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import FinalCta from "@/components/sections/FinalCta";

const title = "Over Kobeon — enterprise-software op Mendix";
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
  { value: "6", label: "Mendix experts" },
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

type TeamMember = { name: string; role: string; photo?: string };

const team: TeamMember[] = [
  { name: "Bjarn Onderstal", role: "Co-Founder · Mendix Expert · MVP", photo: "/team/bjarn.jpg" },
  { name: "Hunter Koppen", role: "Co-Founder · Mendix Expert · MVP", photo: "/team/hunter.jpg" },
  { name: "Sjoerd Beljon", role: "Co-Founder · Mendix Expert · MVP", photo: "/team/sjoerd.jpg" },
  { name: "Agnes Roolvink", role: "Mendix Expert", photo: "/team/agnes.jpeg" },
  { name: "Daryl Zandvliet", role: "Mendix Expert", photo: "/team/daryl.jpeg" },
  { name: "Frank Schutte", role: "Mendix Expert", photo: "/team/frank.jpeg" },
  { name: "Cas Boswinkel", role: "Mendix Specialist · AI-lead", photo: "/team/cas.jpeg" },
  { name: "Robin Broeks", role: "Mendix Specialist", photo: "/team/robin.jpg" },
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
          Enterprise-software op Mendix, gebouwd door een klein, senior team.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Kobeon is een Nederlandse Mendix + AI implementatiepartner uit Zwolle. We bouwen
          enterprise-software die past op hoe jij werkt — snel, veilig en schaalbaar. Geen
          IT-black box en geen trajecten van jaren, maar duidelijke keuzes, korte lijnen en een
          werkende versie binnen zes weken.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          We denken mee als partner, niet als leverancier. Onze kracht is de combinatie van
          enterprise-vakwerk en snelheid: de zekerheid van Mendix — negen jaar op rij
          Gartner-Leider, gedragen door Siemens — met de wendbaarheid van een klein, scherp team.
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
