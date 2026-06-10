import Link from "next/link";
import Section from "@/components/Section";

// Onze visie — de agentic enterprise (Mendix-pivot).
// `full` op /over-kobeon (pijlers + Mendix-bewijs + voorbeeldoplossingen),
// `compact` als kort visie-blok op de homepage met doorverwijzing.

const pijlers = [
  {
    title: "Context voor AI",
    body: "Agenten zijn alleen betrouwbaar als ze je bedrijf begrijpen. We ontsluiten je data over systemen heen in een model (knowledge graph / ontologie) dat agenten in bedrijfstaal 'snappen' — zonder je datalandschap te vervangen.",
  },
  {
    title: "Agenten die werk áf maken",
    body: "Geregisseerd in werkstromen met de mens-in-de-loop waar het moet — van vaste workflows voor gereguleerde processen tot meer autonome agent-samenwerking.",
  },
  {
    title: "Governance vanaf dag één",
    body: "Elke beslissing van een agent is herleidbaar (audit trail), gedrag is toetsbaar en token-/kostengebruik wordt bewaakt — geen 'rogue agents' of budgetverrassingen.",
  },
  {
    title: "Jij houdt de regie",
    body: "Je eigen LLM of agent meenemen (bring-your-own), en draaien waar je wilt — cloud, on-prem of volledig afgeschermd (air-gapped) voor maximale IP-bescherming.",
  },
  {
    title: "Richting intent-based bouwen",
    body: "Steeds vaker beschrijf je wat je nodig hebt — in taal of een requirements-document — en bouwt het platform mee. Wij bewaken kwaliteit, architectuur en governance.",
  },
];

// Cross-sector voorbeeldoplossingen die we naast de negen diensten bouwen.
const oplossingen = [
  {
    title: "Planning",
    body: "Teelt-, productie-, capaciteits- en personeelsplanning op piekmomenten — gekoppeld aan je ERP en realtime bijgestuurd.",
  },
  {
    title: "Field Service Management",
    body: "Een monteur-app met werkorders, machineseries, handleidingen en onderdelen op aanvraag — ook offline op de werkvloer of in het veld.",
  },
];

const bewijs = [
  { value: "tot 30%", label: "snellere ticketafhandeling" },
  { value: "tot 95%", label: "minder handmatige invoer" },
  { value: "75%", label: "minder rekenfouten" },
  { value: "2 mnd → 3 wkn", label: "kortere doorlooptijd" },
];

export default function VisieAgentic({ variant = "full" }: { variant?: "full" | "compact" }) {
  if (variant === "compact") {
    return (
      <Section tone="light">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple">Onze visie</p>
          <h2 className="h-display mt-3 text-3xl md:text-4xl">De agentic enterprise.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Software verandert van &lsquo;schermen die je zelf bedient&rsquo; naar een{" "}
            <span className="font-semibold text-ink">hybride workforce</span>: je mensen én
            AI-agenten werken samen. De agent neemt het repeterende en het zware uitzoekwerk over;
            je mensen beslissen en sturen. Mendix heeft z&rsquo;n strategie hier vol op gericht — en
            wij bouwen het voor je, op een manier die je kunt vertrouwen.
          </p>
          <Link href="/over-kobeon#visie" className="group mt-6 inline-flex items-center gap-1.5 font-semibold text-purple">
            Lees onze visie <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <Section tone="canvas" id="visie">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple">Onze visie</p>
        <h2 className="h-display mt-3 text-3xl md:text-4xl">De agentic enterprise.</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Software verandert van &lsquo;schermen die je zelf bedient&rsquo; naar een{" "}
          <span className="font-semibold text-ink">hybride workforce</span>: je mensen én
          AI-agenten werken samen. De agent neemt het repeterende en het zware uitzoekwerk over; je
          mensen beslissen en sturen. Mendix heeft z&rsquo;n strategie hier vol op gericht — de{" "}
          <em>agentic enterprise</em> — en wij bouwen het voor je, op een manier die je kunt
          vertrouwen.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pijlers.map((p) => (
          <div key={p.title} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
            <h3 className="font-serif text-xl text-ink">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </div>

      {/* Mendix-bewijs (cijfers toegeschreven aan Mendix) */}
      <div className="mt-10 rounded-3xl border border-line bg-purplebg p-8 md:p-10">
        <p className="max-w-3xl text-base text-ink">
          Bewijs van wat deze aanpak oplevert — <span className="font-semibold">op het
          Mendix-platform, bij Mendix-klanten</span>:
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {bewijs.map((b) => (
            <div key={b.label} className="rounded-2xl border border-line bg-white p-5">
              <p className="font-serif text-2xl font-semibold text-purple">{b.value}</p>
              <p className="mt-1 text-sm text-muted">{b.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted">
          Cijfers: Mendix. Wij vertalen die aanpak naar jouw situatie.
        </p>
      </div>

      {/* Veelgevraagde oplossingen naast de negen diensten */}
      <div className="mt-12">
        <h3 className="h-display text-2xl md:text-3xl">Veelgevraagde oplossingen.</h3>
        <p className="mt-3 max-w-2xl text-muted">
          Naast de negen diensten bouwen we deze oplossingen vaak — verweven in sectoren als
          sierteelt en maakindustrie.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {oplossingen.map((o) => (
            <div key={o.title} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
              <h4 className="font-serif text-xl text-ink">{o.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
