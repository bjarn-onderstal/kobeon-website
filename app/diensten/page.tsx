import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import ServiceTile, { type Service } from "@/components/ServiceTile";

const title = "Diensten — negen manieren om te digitaliseren";
const description =
  "De negen diensten van Kobeon op Mendix: procesautomatisering, agentic AI, AI development, app-ontwikkeling, systeemintegratie, portalen, legacy-modernisering, design en IT-consultancy.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/diensten" },
  openGraph: { title: `${title} | Kobeon`, description, url: "/diensten", type: "website" },
};

// Bento-volgorde gekozen voor een nette, asymmetrische flow op 4 koloms.
const services: Service[] = [
  { title: "Procesautomatisering", desc: "Repetitieve en cognitieve taken automatiseren met Mendix.", icon: "⚙️", gradient: "bg-gradient-to-br from-purple-deep to-teal", span: "md:col-span-2 md:row-span-2" },
  { title: "Agentic AI", desc: "AI-agenten die zelfstandig kenniswerk uitvoeren, geregisseerd door Mendix.", icon: "🤖", gradient: "bg-gradient-to-br from-teal to-purple-med", span: "md:col-span-2" },
  { title: "AI Development", desc: "Custom AI-modellen trainen op je eigen bedrijfsdata.", icon: "🧠", gradient: "bg-gradient-to-br from-purple to-purple-deep", span: "md:col-span-1" },
  { title: "Systeemintegratie", desc: "Microsoft Dynamics, SAP, REST-API's — al je systemen praten met elkaar.", icon: "🔗", gradient: "bg-gradient-to-br from-purple-med to-teal", span: "md:col-span-1" },
  { title: "App ontwikkeling", desc: "Web- en mobiele applicaties op Mendix. Enterprise-kwaliteit, standaard ingebouwd.", icon: "📱", gradient: "bg-gradient-to-br from-teal to-teal-light", span: "md:col-span-2" },
  { title: "Portalen & dashboards", desc: "Klant- en medewerkersportalen met zelfservice en actueel inzicht.", icon: "📊", gradient: "bg-gradient-to-br from-purple-deep to-purple-med", span: "md:col-span-2" },
  { title: "Legacy modernisering", desc: "Verouderde systemen gefaseerd vervangen. Stap voor stap, niet in één keer.", icon: "🏗️", gradient: "bg-gradient-to-br from-purple to-teal", span: "md:col-span-1" },
  { title: "Design & Prototyping", desc: "Rapid prototyping met Figma Make, Lovable en Google Stitch.", icon: "✏️", gradient: "bg-gradient-to-br from-teal to-purple", span: "md:col-span-1" },
  { title: "IT Consultancy", desc: "Datastructuur, architectuuradvies en IT-roadmap.", icon: "🧭", gradient: "bg-gradient-to-br from-purple-med to-purple-deep", span: "md:col-span-2" },
];

export default function Page() {
  return (
    <Section tone="light" className="pt-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal">Alle diensten</p>
        <h1 className="h-display mt-3 text-4xl md:text-6xl">
          Negen manieren waarop wij <span className="gradient-text">je organisatie digitaliseren.</span>
        </h1>
        <p className="mt-4 text-lg text-muted">
          Alles wat we bouwen, bouwen we op één veilige basis: Mendix. Van procesautomatisering tot AI op maat.
        </p>
      </div>

      <div className="mt-12 grid auto-rows-[180px] grid-cols-1 gap-5 md:grid-flow-row-dense md:grid-cols-4">
        {services.map((s, i) => (
          <ServiceTile key={s.title} service={s} index={i} />
        ))}
      </div>

      <div className="mt-12">
        <Link href="/discovery-sessie" className="group inline-flex items-center gap-1.5 font-semibold text-purple">
          Plan een Discovery-sessie
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </Section>
  );
}
