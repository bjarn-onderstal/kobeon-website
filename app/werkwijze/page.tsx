import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import DeviceFrame from "@/components/DeviceFrame";
import FloatingMetric from "@/components/FloatingMetric";
import FinalCta from "@/components/sections/FinalCta";
import MockDashboard from "@/components/MockDashboard";
import MockPortal from "@/components/MockPortal";
import MockWorkflow from "@/components/MockWorkflow";
import MockAgent from "@/components/MockAgent";
import MockIntegration from "@/components/MockIntegration";

const title = "Onze werkwijze — van idee naar MVP in zes weken";
const description =
  "Zo werkt Kobeon: Discovery, prototype, heldere afspraken, MVP in 4–6 weken en livegang. Vooraf inzichtelijk — heldere scope, vaste planning, geen verrassingen.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/werkwijze" },
  openGraph: { title: `${title} | Kobeon`, description, url: "/werkwijze", type: "website" },
};

type Phase = {
  no: string;
  title: string;
  duration: string;
  body: string;
  deliverables: string[];
  badges?: string[];
  metric: { value: string; label: string };
  url: string;
  Demo: React.ComponentType<{ theme?: "light" | "dark" }>;
};

const phases: Phase[] = [
  {
    no: "01",
    title: "Discovery",
    duration: "1–2 weken",
    body: "We brengen je processen, doelen en knelpunten in kaart en berekenen het concrete besparingspotentieel. Je krijgt een helder beeld van waar software de meeste impact heeft — en wat het oplevert.",
    deliverables: ["Procesanalyse", "ROI-inschatting", "Scopevoorstel"],
    metric: { value: "€100K", label: "besparing/jaar in beeld" },
    url: "app.kobeon.nl/discovery",
    Demo: MockDashboard,
  },
  {
    no: "02",
    title: "Design & Prototype",
    duration: "1–2 weken",
    body: "Onze designers vertalen de analyse naar een klikbaar prototype. Je ziet en test het eindresultaat vóór er ook maar iets gebouwd wordt.",
    deliverables: ["Klikbaar prototype", "Gevalideerd ontwerp"],
    badges: ["Figma Make", "Lovable", "Google Stitch"],
    metric: { value: "5 dgn", label: "van idee naar klikbaar" },
    url: "app.kobeon.nl/prototype",
    Demo: MockPortal,
  },
  {
    no: "03",
    title: "Heldere afspraken",
    duration: "vooraf",
    body: "Voordat we bouwen, leggen we scope, planning en investering transparant vast. Geen open einde, geen budgetverrassingen — je weet vooraf precies waar je aan toe bent.",
    deliverables: ["Vaste scope", "Planning", "Investering"],
    metric: { value: "100%", label: "scope vooraf vast" },
    url: "app.kobeon.nl/scope",
    Demo: MockWorkflow,
  },
  {
    no: "04",
    title: "MVP bouwen",
    duration: "4–6 weken",
    body: "We bouwen in korte sprints op Mendix, met jou nauw betrokken. Elke sprint levert iets werkends op — geen black box. Security, integraties en governance zitten vanaf dag één ingebouwd.",
    deliverables: ["Werkende MVP", "Sprintdemo's", "Security & governance"],
    badges: ["Mendix", "Agentic AI", "REST/API"],
    metric: { value: "6 wkn", label: "naar werkende MVP" },
    url: "app.kobeon.nl/build",
    Demo: MockAgent,
  },
  {
    no: "05",
    title: "Implementatie & training",
    duration: "1 week",
    body: "We zetten de oplossing live in je eigen omgeving en trainen je team, zodat iedereen er met vertrouwen mee werkt.",
    deliverables: ["Livegang", "Teamtraining", "Documentatie"],
    metric: { value: "1 wk", label: "tot livegang" },
    url: "app.kobeon.nl/golive",
    Demo: MockIntegration,
  },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-purple-deep text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(60% 60% at 80% 20%, rgba(19,166,166,0.22), transparent), radial-gradient(50% 50% at 10% 90%, rgba(83,72,206,0.32), transparent)" }}
        />
        <div className="container-x relative pb-16 pt-32 md:pb-20 md:pt-40">
          <span className="chip border-white/20 bg-white/10 text-white/80">ONZE WERKWIJZE</span>
          <h1 className="h-display mt-6 max-w-3xl text-4xl md:text-6xl">
            Van idee naar werkende software. <span className="block text-yellow">Zonder verrassingen.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Elk traject is vooraf inzichtelijk: heldere scope, vaste planning, een werkende MVP in zes weken. Je weet precies wat je krijgt, wanneer, en wat het oplevert — voordat we beginnen.
          </p>

          {/* fase-tijdlijn */}
          <ol className="mt-10 flex flex-wrap gap-x-2 gap-y-4">
            {phases.map((p, i) => (
              <li key={p.no} className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-teal-light ring-1 ring-white/20">
                  {p.no}
                </span>
                <span className="text-sm text-white/70">{p.title}</span>
                {i < phases.length - 1 && <span className="mx-1 hidden text-white/30 sm:inline">———</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* De 5 fasen — lichte, alternerende rijen */}
      <Section tone="light" id="fasen">
        <div className="space-y-20 md:space-y-28">
          {phases.map(({ no, title: t, duration, body, deliverables, badges, metric, Demo }, i) => {
            const reversed = i % 2 === 1;
            return (
              <div key={no} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div className={reversed ? "md:order-2" : ""}>
                  <div className="flex items-center gap-3">
                    <span className="h-display text-4xl text-purple/30">{no}</span>
                    <span className="chip border-line bg-canvas text-xs text-muted">{duration}</span>
                  </div>
                  <h2 className="h-display mt-3 text-2xl md:text-3xl">{t}</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">{body}</p>
                  <ul className="mt-4 space-y-2">
                    {deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-ink">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal text-[11px] font-bold text-white">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  {badges && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {badges.map((b) => (
                        <span key={b} className="rounded-full bg-purplebg px-3 py-1 text-xs font-medium text-purple">{b}</span>
                      ))}
                    </div>
                  )}
                </div>

                <div className={`relative ${reversed ? "md:order-1" : ""}`}>
                  <DeviceFrame theme="light" title={t}>
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

      {/* 90-daagse cycli */}
      <Section tone="light">
        <div className="rounded-3xl bg-yellow px-8 py-10 text-ink md:px-12 md:py-12">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold">∞</span>
            <span className="font-serif text-2xl md:text-3xl">90-daagse cycli</span>
          </div>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            Na livegang stopt het niet. Elke 90 dagen breiden we uit op basis van echte resultaten en nieuwe inzichten. Je bent partner, geen project.
          </p>
        </div>
      </Section>

      {/* Waarom deze aanpak werkt */}
      <Section tone="canvas">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">Waarom deze aanpak werkt</p>
          <h2 className="h-display mt-3 text-3xl md:text-4xl">Snel, transparant en zonder black box.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { t: "MVP in 6 weken", b: "Een werkende versie in weken — geen traject van een jaar." },
            { t: "Altijd iets werkends per sprint", b: "Elke sprint levert resultaat op. Geen black box, je ziet het groeien." },
            { t: "Vooraf inzichtelijk", b: "Scope, planning en opbrengst staan vast voordat we beginnen." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-line bg-white p-7 shadow-soft">
              <h3 className="font-serif text-xl text-ink">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
