import type { Metadata } from "next";
import SectorPage, { type SectorContent } from "@/components/SectorPage";

const title = "Sierteelt & Horticultuur — Mendix-software";
const description =
  "Software voor sierteelt en horticultuur: Agriware, Infor en Metacom (Meijel) gekoppeld, digitale BKD-keuring en een supply-chain-portaal. Werkende MVP in zes weken.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sectoren/sierteelt" },
  openGraph: { title: `${title} | Kobeon`, description, url: "/sectoren/sierteelt", type: "website" },
};

const content: SectorContent = {
  title: "Sierteelt & Horticultuur",
  tagline: "Software die meebeweegt met je seizoen.",
  intro:
    "Van kweker tot veiling: jouw keten draait op systemen die nu langs elkaar heen werken. Wij koppelen Agriware, Infor en Metacom, digitaliseren de keuring en geven je actueel zicht op de hele supply chain.",
  accent: "teal",
  problems: [
    { title: "Systemen die niet praten", body: "Agriware, Infor, Metacom (Meijel) en je WMS werken los van elkaar — data wordt overgetypt en raakt verouderd." },
    { title: "Ketenregistratie op papier", body: "BKD-keuringen en certificeringen kosten handwerk en zijn lastig terug te vinden bij een audit." },
    { title: "Geen actueel ketenzicht", body: "Van kweker tot klant ontbreekt één bron van waarheid over voorraad, orders en herkomst." },
    { title: "Pieken in het seizoen", body: "Bij volume loopt handmatige order- en planningsverwerking vast — precies wanneer het ertoe doet." },
  ],
  approach: [
    { title: "Koppel je ERP's", body: "Agriware, Infor en Metacom (Meijel) verbonden op Mendix — via standaard connectoren en REST/OData, zonder maatwerk-gedoe." },
    { title: "Digitale ketenregistratie", body: "BKD-keuringen mobiel in het veld, met audit trail. Van klembord naar realtime registratie." },
    { title: "Supply-chain-portaal", body: "Actueel zicht van kweker tot klant: voorraad, orders en herkomst in één omgeving." },
    { title: "Automatiseer de pieken", body: "Orderverwerking, planning en facturatie lopen door — ook als het seizoen losbarst." },
  ],
  systems: ["Agriware", "Infor", "Metacom (Meijel)", "BKD-ketenregister", "REST / OData"],
  caseSlug: "bkd",
};

export default function Page() {
  return <SectorPage content={content} />;
}
