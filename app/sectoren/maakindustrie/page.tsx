import type { Metadata } from "next";
import SectorPage, { type SectorContent } from "@/components/SectorPage";

const title = "Maakindustrie — slimme fabriek op Mendix";
const description =
  "Software voor de maakindustrie: ERP-integratie (SAP, Dynamics 365, legacy), digitale werkorders, mobiele kwaliteitscontrole en een OEE-dashboard met actueel ketenzicht.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sectoren/maakindustrie" },
  openGraph: { title: `${title} | Kobeon`, description, url: "/sectoren/maakindustrie", type: "website" },
};

const content: SectorContent = {
  emoji: "🏭",
  title: "Maakindustrie",
  tagline: "Slimme fabrieken beginnen met slimme software.",
  intro:
    "Je ERP, je werkvloer en je toeleverketen draaien op losse systemen en Excel. Wij koppelen SAP, Dynamics 365 en legacy, digitaliseren werkorders en kwaliteitscontrole en geven je actueel zicht op keten en machineprestatie.",
  accent: "yellow",
  problems: [
    { title: "ERP-silo's", body: "SAP, Microsoft Dynamics 365 en legacy-systemen praten niet met elkaar; data staat verspreid." },
    { title: "Kwaliteitscontrole op papier", body: "Registraties zijn traag, foutgevoelig en lastig terug te vinden bij een audit." },
    { title: "Geen actueel ketenzicht", body: "Voorraad en toelevering zijn niet realtime, waardoor je achter de feiten aan stuurt." },
    { title: "Planning in Excel, OEE handmatig", body: "Sturen op verouderde cijfers kost marge en leidt tot stilstand." },
  ],
  approach: [
    { title: "ERP-integratie", body: "SAP, Dynamics 365 en legacy gekoppeld op Mendix — via standaard connectoren en REST/OData/Kafka." },
    { title: "Digitale werkorderflows", body: "Van order tot oplevering zonder papier, met status in realtime." },
    { title: "Mobiele kwaliteitsregistratie", body: "Keuringen op de vloer, met foto's en audit trail." },
    { title: "Supply chain & OEE-dashboard", body: "Actueel zicht op toeleverketen en machineprestatie, op één scherm." },
  ],
  systems: ["SAP", "Microsoft Dynamics 365", "Legacy", "REST / OData / Kafka"],
};

export default function Page() {
  return <SectorPage content={content} />;
}
