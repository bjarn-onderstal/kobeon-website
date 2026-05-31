import type { Metadata } from "next";
import SectorPage, { type SectorContent } from "@/components/SectorPage";

const title = "Staffing & Detachering — Mendix & AI-matching";
const description =
  "Software voor staffing en detachering: AI-matching, Wet DBA-compliance ingebouwd en AFAS/Nmbrs gekoppeld in één flow. Match sneller, factureer foutloos, blijf compliant.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sectoren/detachering" },
  openGraph: { title: `${title} | Kobeon`, description, url: "/sectoren/detachering", type: "website" },
};

const content: SectorContent = {
  emoji: "👥",
  title: "Staffing & Detachering",
  tagline: "Match sneller. Factureer foutloos. Blijf compliant.",
  intro:
    "Plaatsen, factureren en compliant blijven — terwijl je systemen los van elkaar staan. Wij bouwen AI-matching, ingebouwde Wet DBA-toetsing en koppelen AFAS en Nmbrs tot één doorlopende flow.",
  accent: "purple",
  problems: [
    { title: "Wet DBA-risico", body: "Schijnzelfstandigheid en compliance vragen continu aandacht — en zijn lastig aantoonbaar te maken bij controle." },
    { title: "Matchen kost te veel tijd", body: "Kandidaten en opdrachten handmatig koppelen schaalt niet en laat plaatsingen liggen." },
    { title: "Versnipperde administratie", body: "AFAS, Nmbrs en urenbriefjes staan los van elkaar; data wordt dubbel ingevoerd." },
    { title: "Geen zicht op je pijplijn", body: "Plaatsingen, marges en beschikbaarheid zijn niet actueel als je een beslissing moet nemen." },
  ],
  approach: [
    { title: "AI-matching", body: "Kandidaten en opdrachten worden automatisch gerangschikt op skills, beschikbaarheid en fit — een mens kiest." },
    { title: "DBA-compliance ingebouwd", body: "Toetsing en audit trail zitten in het proces, niet in een los Excel-bestand." },
    { title: "Koppel AFAS & Nmbrs", body: "Uren, facturatie en salarisverwerking lopen in één flow — zonder overtypen." },
    { title: "Consultant- & klantportalen", body: "Zelfservice voor uren, contracten en status, voor je consultants én je opdrachtgevers." },
  ],
  systems: ["AFAS", "Nmbrs", "Wet DBA-toetsing", "REST / OData"],
  caseSlug: "epsa",
};

export default function Page() {
  return <SectorPage content={content} />;
}
