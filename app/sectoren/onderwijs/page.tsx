import type { Metadata } from "next";
import SectorPage, { type SectorContent } from "@/components/SectorPage";

const title = "Onderwijs — minder administratie op Mendix";
const description =
  "Software voor onderwijsinstellingen: leerlingportalen, automatische aanmelding, dashboards en DUO/BRON-integratie. AVG-proof en meer tijd voor onderwijs.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sectoren/onderwijs" },
  openGraph: { title: `${title} | Kobeon`, description, url: "/sectoren/onderwijs", type: "website" },
};

const content: SectorContent = {
  emoji: "🎓",
  title: "Onderwijsinstellingen",
  tagline: "Meer tijd voor onderwijs.",
  intro:
    "Administratie mag geen onderwijstijd opslokken. Wij bouwen leerlingportalen, automatiseren aanmelding en administratie en koppelen veilig met DUO/BRON — AVG-proof, zodat je team zich op het onderwijs kan richten.",
  accent: "teal",
  problems: [
    { title: "Administratieve last", body: "Docenten en staf verliezen kostbare tijd aan handmatige inschrijving en administratie." },
    { title: "Legacy en losse tools", body: "Systemen werken niet samen; gegevens worden dubbel ingevoerd en raken verouderd." },
    { title: "AVG en leerlingdata", body: "Gevoelige leerlinggegevens vragen strakke, aantoonbare beheersing." },
    { title: "DUO/BRON-koppelingen", body: "Uitwisseling met DUO en BRON is foutgevoelig en tijdrovend op handkracht." },
  ],
  approach: [
    { title: "Leerlingportalen", body: "Zelfservice voor aanmelding, status en documenten — voor leerlingen, ouders en staf." },
    { title: "Automatische aanmelding", body: "Van inschrijving tot compleet dossier zonder overtypen." },
    { title: "Dashboards & rapportages", body: "Actueel zicht voor docenten, staf en bestuur, op één plek." },
    { title: "DUO/BRON-integratie", body: "Veilige, geautomatiseerde uitwisseling — minder fouten, minder werk." },
  ],
  systems: ["DUO / BRON", "AVG", "Aanmeldportalen", "REST / OData"],
  caseSlug: "petje-af",
};

export default function Page() {
  return <SectorPage content={content} />;
}
