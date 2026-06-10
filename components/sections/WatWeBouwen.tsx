import Link from "next/link";
import Section from "@/components/Section";
import DeviceFrame from "@/components/DeviceFrame";
import FloatingMetric from "@/components/FloatingMetric";
import MockWorkflow from "@/components/MockWorkflow";
import MockAgent from "@/components/MockAgent";
import MockTraining from "@/components/MockTraining";
import MockIntegration from "@/components/MockIntegration";
import { integrations } from "@/lib/siteConfig";

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
    body: "Repetitief en denkwerk geautomatiseerd op Mendix, met een volledig audit-spoor.",
    url: "app.kobeon.nl/orders",
    metric: { value: "−62%", label: "doorlooptijd" },
    Demo: MockWorkflow,
  },
  {
    tag: "Agentic AI",
    title: "AI die het werk áfmaakt",
    body: "AI-agenten die kenniswerk zelfstandig uitvoeren. Geregisseerd door Mendix, altijd controleerbaar.",
    url: "app.kobeon.nl/agent",
    metric: { value: "40+", label: "u/week terug" },
    Demo: MockAgent,
  },
  {
    tag: "AI Development",
    title: "Modellen, getraind op jouw data",
    body: "AI-modellen getraind op je eigen data. Jij houdt de data, wij bouwen het model.",
    url: "app.kobeon.nl/training",
    metric: { value: "94%", label: "accuraat" },
    Demo: MockTraining,
  },
  {
    tag: "Systeemintegratie",
    title: "Al je systemen praten met elkaar",
    body: "Microsoft Dynamics, SAP, REST/API — je systemen werken eindelijk samen.",
    url: "app.kobeon.nl/integraties",
    metric: { value: "8", label: "systemen verbonden" },
    Demo: MockIntegration,
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
        {rows.map(({ tag, title, body, metric, Demo }, i) => {
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
                <DeviceFrame theme="light" title={tag}>
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

      {/* Eén platform: Mendix — smalle diep-paarse band */}
      <div className="mt-20 rounded-2xl bg-purple-deep px-8 py-7 text-white md:flex md:items-center md:justify-between">
        <div>
          <div className="font-serif text-2xl">Eén platform: Mendix.</div>
          <p className="mt-2 max-w-2xl text-white/75">
            Security, governance en schaalbaarheid standaard ingebouwd — ISO 27001, audit trails, van 10 tot 100.000 gebruikers. Gedragen door Siemens, negen jaar op rij Gartner-Leider.
          </p>
        </div>
        <div className="mt-5 flex shrink-0 gap-2 md:mt-0">
          {["ISO 27001", "AVG", "9× Gartner"].map((c) => (
            <span key={c} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">{c}</span>
          ))}
        </div>
      </div>

      {/* integratie-marquee */}
      <div className="relative mt-10 overflow-hidden">
        <div className="marquee-track gap-12 pr-12">
          {[...integrations, ...integrations].map((name, i) => (
            <span key={i} className="whitespace-nowrap text-base font-semibold tracking-tight text-ink/55">
              {name}
            </span>
          ))}
        </div>
        {/* zachte randen */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
      </div>
    </Section>
  );
}
