import Link from "next/link";
import Section from "@/components/Section";
import DeviceFrame from "@/components/DeviceFrame";
import FloatingMetric from "@/components/FloatingMetric";
import MockWorkflow from "@/components/MockWorkflow";
import MockAgent from "@/components/MockAgent";
import MockTraining from "@/components/MockTraining";
import MockIntegration from "@/components/MockIntegration";
import MockPortal from "@/components/MockPortal";

type Row = {
  tag: string;
  title: string;
  body: string;
  url: string;
  metric: { value: string; label: string };
  Demo: React.ComponentType<{ theme?: "light" | "dark" }>;
};

const rows: Row[] = [
  {
    tag: "Procesautomatisering",
    title: "Processen die zichzelf afhandelen",
    body: "Orders, validaties en goedkeuringen lopen end-to-end door je systemen — met een volledig audit-spoor. Je team houdt tijd over voor het werk dat telt.",
    url: "app.kobeon.nl/orders",
    metric: { value: "−62%", label: "kortere doorlooptijd" },
    Demo: MockWorkflow,
  },
  {
    tag: "Agentic AI",
    title: "AI die het werk áfmaakt",
    body: "Een agent verwerkt aanvragen, koppelt ze aan Dynamics 365 en vult de dossiers — een mens keurt goed waar dat moet. Geen los antwoord, maar een taak die af is.",
    url: "app.kobeon.nl/agent",
    metric: { value: "40+", label: "uur per week terug" },
    Demo: MockAgent,
  },
  {
    tag: "AI Development",
    title: "Modellen, getraind op jouw data",
    body: "We trainen AI-modellen op je eigen bedrijfsdata en sturen op meetbare accuratesse. Jouw data blijft het bronsysteem — geen verhuizing, geen lock-in.",
    url: "app.kobeon.nl/training",
    metric: { value: "94%", label: "modelaccuratesse" },
    Demo: MockTraining,
  },
  {
    tag: "Systeemintegratie",
    title: "Al je systemen praten met elkaar",
    body: "Microsoft Dynamics, SAP, Azure en elke REST-API — standaard gekoppeld rond één Mendix-kern. Geen silo's meer, één bron van waarheid.",
    url: "app.kobeon.nl/integraties",
    metric: { value: "8", label: "systemen verbonden" },
    Demo: MockIntegration,
  },
  {
    tag: "Portalen & dashboards",
    title: "Zelfservice met actueel inzicht",
    body: "Klant- en medewerkersportalen waar aanvragen binnenkomen, doorstromen en zichtbaar worden goedgekeurd. Altijd actueel, altijd inzichtelijk.",
    url: "app.kobeon.nl/portaal",
    metric: { value: "24/7", label: "zelfservice, altijd actueel" },
    Demo: MockPortal,
  },
];

export default function WatWeBouwen() {
  return (
    <Section tone="light" id="wat-we-bouwen">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple">Wat we bouwen</p>
        <h2 className="h-display mt-3 text-3xl md:text-5xl">
          Geen praatjes. <span className="gradient-text">Werkende software.</span>
        </h2>
        <p className="mt-4 text-lg text-muted">
          Dit is wat we voor je bouwen — live, niet als screenshot. Elke demo draait op een loop, precies zoals de software straks voor je werkt.
        </p>
      </div>

      <div className="mt-16 space-y-20 md:space-y-28">
        {rows.map(({ tag, title, body, url, metric, Demo }, i) => {
          const reversed = i % 2 === 1;
          return (
            <div key={tag} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              {/* tekstkolom */}
              <div className={reversed ? "md:order-2" : ""}>
                <span className="chip border-line bg-canvas text-purple">{tag}</span>
                <h3 className="h-display mt-4 text-2xl md:text-3xl">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{body}</p>
                <Link
                  href="/diensten"
                  className="group mt-5 inline-flex items-center gap-1.5 font-semibold text-purple"
                >
                  Meer info
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>

              {/* demo-kolom met zwevend metric-kaartje */}
              <div className={`relative ${reversed ? "md:order-1" : ""}`}>
                <DeviceFrame theme="light" url={url}>
                  <Demo theme="light" />
                </DeviceFrame>
                <FloatingMetric
                  value={metric.value}
                  label={metric.label}
                  delay={i * 0.4}
                  className={reversed ? "absolute -bottom-6 -left-4" : "absolute -bottom-6 -right-4"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
