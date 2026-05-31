import type { Metadata } from "next";
import SectorPage, { type SectorContent } from "@/components/SectorPage";

const title = "Kinderopvang — minder admin op Mendix";
const description =
  "Software voor kinderopvang: ouderportalen, automatische facturering, planning en LRK-compliant registratie. Minder administratie, meer tijd voor de kinderen.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sectoren/kinderopvang" },
  openGraph: { title: `${title} | Kobeon`, description, url: "/sectoren/kinderopvang", type: "website" },
};

const content: SectorContent = {
  emoji: "🧸",
  title: "Kinderopvang",
  tagline: "Minder administratie. Meer tijd voor de kinderen.",
  intro:
    "Registratie, facturering en planning slokken tijd op die naar de kinderen zou moeten. Wij bouwen ouderportalen, automatiseren de facturering en planning en houden alles LRK-compliant.",
  accent: "purple",
  problems: [
    { title: "LRK en compliance", body: "Registratie in het Landelijk Register Kinderopvang en bijbehorende eisen vragen continu aandacht." },
    { title: "Ouders willen zelfservice", body: "Aanmelden, plannen en facturen inzien — het liefst online, op elk moment." },
    { title: "Facturering kost tijd", body: "Handmatige facturatie is foutgevoelig en loopt achter de feiten aan." },
    { title: "Planning loopt vast", body: "Groepen, leidsters en plekken puzzelen op handkracht schaalt niet." },
  ],
  approach: [
    { title: "Ouderportalen", body: "Aanmelding, planning en facturen op één plek — zelfservice voor ouders." },
    { title: "Automatische facturering", body: "Correct en op tijd, gekoppeld aan plaatsing en uren, zonder handwerk." },
    { title: "Planningsmodule", body: "Groepen en bezetting realtime, inclusief leidster-kind-ratio." },
    { title: "LRK-compliant", body: "Registratie en wettelijke eisen ingebouwd in het proces." },
  ],
  systems: ["LRK", "Ouderportalen", "Facturering", "Planning", "GGD"],
  caseSlug: "petje-af",
};

export default function Page() {
  return <SectorPage content={content} />;
}
