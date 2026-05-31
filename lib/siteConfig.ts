export const site = {
  name: "Kobeon",
  url: "https://www.kobeon.nl",
  description:
    "Kobeon bouwt enterprise-software op Mendix — het platform dat al negen jaar Gartner-Leider is. Van procesautomatisering tot AI op maat. Binnen zes weken een werkende versie.",
  email: "info@kobeon.nl",
  phone: "+31 (0)85 200 7076",
  address: "Noordzeelaan 50, 8017 JW Zwolle",
};

export const nav = [
  { label: "Oplossingen", href: "/oplossingen" },
  { label: "Diensten", href: "/diensten" },
  { label: "Projecten", href: "/projecten" },
  { label: "Sectoren", href: "/sectoren" },
  { label: "Over Kobeon", href: "/over-kobeon" },
  { label: "Werken bij", href: "/werken-bij" },
];

// Integratie-namen voor de homepage = enterprise + sterke NL-namen (geen branche-niche).
export const integrations = [
  "Mendix", "Microsoft Dynamics 365", "SAP", "AWS", "Microsoft Azure",
  "AFAS", "Exact", "Salesforce", "OpenAI", "Siemens",
];

// Echte Kobeon-klanten (logo-strip). Toon alleen met toestemming.
export const clients = [
  "ABN AMRO", "Zilveren Kruis", "Rechtspraak", "BKD", "Petje af",
  "HomeZero", "EPSA", "FincValue", "TLFS",
];

export const stats = [
  { value: "7+", label: "projecten opgeleverd" },
  { value: "6 wkn", label: "van idee naar werkende app" },
  { value: "€100K", label: "per jaar bespaard bij één klant" },
  { value: "9×", label: "Gartner-Leider (Mendix)" },
];

export const solutions = [
  {
    key: "automatiseren",
    title: "Automatiseren",
    promise: "Repetitief en denkwerk uit je processen.",
    body: "We automatiseren en orkestreren processen, workflows en goedkeuringen over al je systemen heen — met een volledig audit-spoor. Je mensen houden tijd over voor het werk dat telt.",
    tags: ["Procesautomatisering", "Proces-orkestratie"],
    accent: "purple",
  },
  {
    key: "bouwen",
    title: "Bouwen",
    promise: "Software die past op hoe jij werkt.",
    body: "Web- en mobiele apps, klant- en medewerkersportalen en dashboards. En verouderde systemen vervangen we gefaseerd — beheerst, zonder risico.",
    tags: ["App ontwikkeling", "Portalen & dashboards", "Legacy modernisering"],
    accent: "teal",
  },
  {
    key: "verbinden",
    title: "Verbinden",
    promise: "Al je systemen en data werken samen.",
    body: "Microsoft Dynamics, SAP, AFAS, Exact, Salesforce, AWS en elke REST/OData-API — out-of-the-box gekoppeld. Geen silo's meer, één bron van waarheid.",
    tags: ["Systeemintegratie", "Dataontsluiting"],
    accent: "purple",
  },
  {
    key: "ai",
    title: "AI inzetten",
    promise: "AI die echt werk uit handen neemt.",
    body: "Agentic AI die kenniswerk zelfstandig uitvoert — matchen, controleren, verwerken — en AI-modellen getraind op je eigen data. Geregisseerd door Mendix, altijd controleerbaar.",
    tags: ["Agentic AI", "AI Development"],
    accent: "teal",
  },
];

export const faqs = [
  {
    q: "Waarom een agentic AI-platform en niet 'gewone' AI zoals ChatGPT?",
    a: "Een losse AI-tool beantwoordt vragen; een agentic platform doet het werk. Het verschil zit in regie en context. Een gewone chatbot kent jouw systemen en processen niet en handelt niets zelfstandig af. Een agentic oplossing op Mendix krijgt — binnen strikte governance — toegang tot jouw data en applicaties (Microsoft Dynamics, SAP, AFAS), volgt jouw bedrijfsregels en voert hele processen end-to-end uit, met een mens die goedkeurt waar dat moet. Geen 'slim antwoord', maar een taak die áf is.",
  },
  {
    q: "Waarom Mendix en niet alles custom (high-code) laten bouwen?",
    a: "High-code geeft maximale vrijheid, maar tegen een prijs: lange doorlooptijden, hoge kosten en afhankelijkheid van schaarse specialisten. Mendix levert dezelfde enterprise-kwaliteit — security, schaalbaarheid, integraties — maar modelgedreven, waardoor wij in weken bouwen wat custom-teams in maanden doen. Je houdt volledige flexibiliteit, zonder een dichtgetimmerde codebase. De snelheid van low-code, de degelijkheid van enterprise software, en een MVP in zes weken.",
  },
  {
    q: "Is low-code veilig en schaalbaar genoeg voor bedrijfskritische toepassingen?",
    a: "Ja. Mendix staat negen jaar op rij als Leider in de Gartner Magic Quadrant voor enterprise low-code en draait bij organisaties als Rabobank, ABN AMRO, PostNL en de gemeente Rotterdam. Security, schaalbaarheid en performance zijn ingebouwd. Applicaties schalen van tien tot honderdduizenden gebruikers, draaien cloud-native of on-prem, en voldoen aan ISO 27001, AVG en BIO.",
  },
  {
    q: "We hebben al systemen (Microsoft Dynamics, SAP, AFAS). Moet dat eruit?",
    a: "Nee. Wij bouwen bovenop en tussen wat je al hebt. Mendix is ontworpen om te integreren — via standaard connectoren en API's praten je bestaande systemen met elkaar en met nieuwe applicaties. Vaak is de grootste winst juist het verbinden van silo's, zonder een werkend systeem te vervangen.",
  },
];

// Klantcases (homepage-sectie + /projecten). `kind` stuurt de mini-mockup,
// `filter` de filterpills, `accent` de kleur van het resultaatcijfer.
export type ProjectKind =
  | "dashboard" | "portal" | "workflow" | "members" | "inspection" | "search" | "supply";

export const projects: {
  slug: string;
  name: string;
  sector: string;
  filter: string;
  metric: string;
  accent: "purple" | "teal" | "yellow";
  transformation: string;
  kind: ProjectKind;
  soon?: boolean;
}[] = [
  {
    slug: "homezero",
    name: "HomeZero",
    sector: "Energie",
    filter: "Energie",
    metric: "6 weken",
    accent: "purple",
    transformation: "Van papieren projectadministratie naar één digitaal systeem.",
    kind: "dashboard",
  },
  {
    slug: "petje-af",
    name: "Petje af",
    sector: "Onderwijs & Kinderopvang",
    filter: "Onderwijs",
    metric: "250K+ kinderen",
    accent: "teal",
    transformation: "Van handmatige aanmelding naar een platform dat meegroeit.",
    kind: "portal",
  },
  {
    slug: "epsa",
    name: "EPSA",
    sector: "Professional Services",
    filter: "Overige",
    metric: "40+ u/week terug",
    accent: "yellow",
    transformation: "Van eindeloze administratie naar een geautomatiseerde flow.",
    kind: "workflow",
  },
  {
    slug: "golfclub",
    name: "Golfclub",
    sector: "Sport & Vrije Tijd",
    filter: "Overige",
    metric: "€60–100K/jaar",
    accent: "yellow",
    transformation: "Van vrijwilligers-chaos naar een zelfsturende administratie.",
    kind: "members",
  },
  {
    slug: "bkd",
    name: "Bloembollenkeuringsdienst (BKD)",
    sector: "Horticultuur",
    filter: "Horticultuur",
    metric: "Digitale inspectie",
    accent: "teal",
    transformation: "Van klembord naar mobiele keuring in het veld.",
    kind: "inspection",
  },
  {
    slug: "rechtspraak",
    name: "Rechtspraak (anoniem)",
    sector: "Semi-Publiek",
    filter: "Semi-Publiek",
    metric: "AI-model",
    accent: "purple",
    transformation: "Van zoeken naar jurisprudentie naar AI die het vindt.",
    kind: "search",
  },
  {
    slug: "floriusflowers",
    name: "FloriusFlowers",
    sector: "Horticultuur",
    filter: "Horticultuur",
    metric: "In ontwikkeling",
    accent: "teal",
    transformation: "Supply-chain-portaal in aanbouw.",
    kind: "supply",
    soon: true,
  },
];

// Sector-overzicht (3×2 op /sectoren). `available` = detailpagina bestaat al.
export const sectors: {
  slug: string;
  title: string;
  emoji: string;
  accent: "teal" | "purple" | "yellow";
  systems: string[];
  available: boolean;
}[] = [
  { slug: "sierteelt", title: "Sierteelt & Horticultuur", emoji: "🌱", accent: "teal", systems: ["Agriware", "Infor", "Metacom (Meijel)", "BKD", "Supply chain"], available: true },
  { slug: "detachering", title: "Staffing & Detachering", emoji: "👥", accent: "purple", systems: ["AFAS", "Wet DBA", "AI-matching", "Consultant­portalen"], available: true },
  { slug: "semi-publiek", title: "Semi-Publiek", emoji: "⚖️", accent: "yellow", systems: ["Compliance", "Documentbeheer", "AI op regelgeving", "Veilige data"], available: true },
  { slug: "onderwijs", title: "Onderwijs", emoji: "🎓", accent: "teal", systems: ["Aanmeldportalen", "AVG", "Administratie", "Rapportages"], available: true },
  { slug: "kinderopvang", title: "Kinderopvang", emoji: "🧸", accent: "purple", systems: ["Ouderportalen", "LRK", "Facturering", "Planning"], available: true },
  { slug: "maakindustrie", title: "Maakindustrie", emoji: "🏭", accent: "yellow", systems: ["ERP-integratie", "Kwaliteitscontrole", "Productie-planning", "Supply chain"], available: true },
];
