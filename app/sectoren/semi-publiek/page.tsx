import type { Metadata } from "next";
import SectorPage, { type SectorContent } from "@/components/SectorPage";

const title = "Semi-Publiek — compliant & efficiënt op Mendix";
const description =
  "Software voor semi-publieke organisaties: governance, audit trails en BIO-compliant cloud standaard ingebouwd. Compliant met NIS2, EU AI Act, AVG en ISO 27001.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sectoren/semi-publiek" },
  openGraph: { title: `${title} | Kobeon`, description, url: "/sectoren/semi-publiek", type: "website" },
};

const content: SectorContent = {
  emoji: "⚖️",
  title: "Semi-publieke organisaties",
  tagline: "Compliance én efficiëntie. Zonder compromis.",
  intro:
    "Strenge regelgeving en verouderde systemen hoeven efficiëntie niet in de weg te staan. Wij bouwen software waarin governance, audit trails en veilige data standaard zijn ingebouwd — niet achteraf aangezet.",
  accent: "yellow",
  problems: [
    { title: "Regelgeving verandert continu", body: "NIS2, EU AI Act, AVG en BIO stellen steeds nieuwe eisen die je aantoonbaar moet beheersen." },
    { title: "Legacy die vastzit", body: "Verouderde systemen zijn duur, risicovol en lastig aan te passen aan nieuwe eisen." },
    { title: "Gevoelige data, hoge eisen", body: "Persoons- en dossiergegevens vragen strakke beheersing en herleidbaarheid." },
    { title: "Documentstromen op handkracht", body: "Dossiers en goedkeuringen kosten tijd en zijn moeilijk traceerbaar bij controle." },
  ],
  approach: [
    { title: "Governance standaard ingebouwd", body: "Elke actie — van mens of AI-agent — is auditeerbaar en afdwingbaar. Klaar voor NIS2, EU AI Act, AVG en BIO." },
    { title: "Audit trails op alles", body: "Wie deed wat, wanneer en waarom — volledig traceerbaar en exporteerbaar voor audits." },
    { title: "BIO-compliant cloud", body: "Publieke, private, on-prem of volledig afgeschermde (air-gapped) omgeving — naar keuze." },
    { title: "Documentstromen digitaal", body: "Dossiers, goedkeuringen en archivering geautomatiseerd, met behoud van controle." },
  ],
  systems: ["ISO 27001", "BIO", "NIS2", "Audit trails", "REST / OData"],
  caseSlug: "rechtspraak",
};

export default function Page() {
  return <SectorPage content={content} />;
}
