export const site = {
  name: "Kobeon",
  url: "https://www.kobeon.nl",
  description:
    "Kobeon bouwt enterprise-software op Mendix — het platform dat al negen jaar Gartner-Leider is. Van procesautomatisering tot AI op maat. Binnen zes weken een werkende versie.",
  email: "info@kobeon.nl",
  phone: "+31 (0)85 200 7076",
  address: "Noordzeelaan 50, 8017 JW Zwolle",
};

// Navigatie. Items met `columns` zijn dropdowns/megamenu's; items met `href`
// zijn directe links. Diensten-items deeplinken naar de tegels op /diensten.
export type NavLink = { label: string; href: string };
export type NavColumn = { heading?: string; items: NavLink[] };
export type NavItem = { label: string; href?: string; columns?: NavColumn[] };

export const nav: NavItem[] = [
  {
    label: "Diensten",
    href: "/diensten",
    columns: [
      {
        heading: "Bouwen",
        items: [
          { label: "Procesautomatisering", href: "/diensten/procesautomatisering" },
          { label: "App ontwikkeling", href: "/diensten/app-ontwikkeling" },
          { label: "Portalen & dashboards", href: "/diensten/portalen-dashboards" },
          { label: "Legacy modernisering", href: "/diensten/legacy-modernisering" },
        ],
      },
      {
        heading: "AI & Integratie",
        items: [
          { label: "Agentic AI", href: "/diensten/agentic-ai" },
          { label: "AI Development", href: "/diensten/ai-development" },
          { label: "Systeemintegratie", href: "/diensten/systeemintegratie" },
        ],
      },
      {
        heading: "Strategie",
        items: [
          { label: "Design & Prototyping", href: "/diensten/design-prototyping" },
          { label: "IT Consultancy", href: "/diensten/it-consultancy" },
        ],
      },
    ],
  },
  { label: "Projecten", href: "/projecten" },
  {
    label: "Sectoren",
    href: "/sectoren",
    columns: [
      {
        items: [
          { label: "Sierteelt & Horticultuur", href: "/sectoren/sierteelt" },
          { label: "Staffing & Detachering", href: "/sectoren/detachering" },
          { label: "Semi-Publiek", href: "/sectoren/semi-publiek" },
          { label: "Onderwijs", href: "/sectoren/onderwijs" },
          { label: "Kinderopvang", href: "/sectoren/kinderopvang" },
          { label: "Maakindustrie", href: "/sectoren/maakindustrie" },
          { label: "Alle sectoren", href: "/sectoren" },
        ],
      },
    ],
  },
  { label: "Werkwijze", href: "/werkwijze" },
  { label: "Contact", href: "/contact" },
  {
    label: "Over ons",
    columns: [
      {
        items: [
          { label: "Over Kobeon", href: "/over-kobeon" },
          { label: "Werken bij", href: "/werken-bij" },
        ],
      },
    ],
  },
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

export type Project = {
  slug: string;
  name: string;
  sector: string;
  filter: string;
  metric: string;
  accent: "purple" | "teal" | "yellow";
  transformation: string;
  kind: ProjectKind;
  soon?: boolean;
  // Detailvelden voor /projecten/[slug]
  challenge: string;
  approach: string[];
  result: string;
  quote?: string;
  quoteAuthor?: string;
  relatedServices: string[]; // service-slugs
};

export const projects: Project[] = [
  {
    slug: "homezero",
    name: "HomeZero",
    sector: "Energie",
    filter: "Energie",
    metric: "6 weken",
    accent: "purple",
    transformation: "Van papieren projectadministratie naar één digitaal systeem.",
    kind: "dashboard",
    challenge: "HomeZero begeleidde woningeigenaren naar een duurzamere woning, maar werkte volledig op papier en losse bestanden. Projectstatussen waren nergens centraal zichtbaar, communicatie liep via e-mail en het team verloor veel tijd aan administratie in plaats van klantbegeleiding.",
    approach: [
      "Volledige procesanalyse: van eerste klantcontact tot oplevering in kaart gebracht.",
      "Centraal projectdashboard op Mendix: realtime statusoverzicht per woning en per fase.",
      "Automatische notificaties en taakopvolging — geen handmatige e-mailrondjes meer.",
      "Koppelingen met bestaande systemen voor planning en facturering.",
    ],
    result: "Binnen zes weken een werkende eerste versie live. Het team werkt nu vanuit één systeem en heeft realtime zicht op alle lopende projecten.",
    relatedServices: ["procesautomatisering", "app-ontwikkeling", "systeemintegratie"],
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
    challenge: "Petje af koppelt kinderen aan naschoolse activiteiten en groeide snel naar honderdduizenden gebruikers. Het aanmeldproces was handmatig en schaalde niet mee — administratie voor scholen, aanbieders en ouders liep door elkaar.",
    approach: [
      "Aanmeldportaal op Mendix met aparte omgevingen voor ouders, scholen en aanbieders.",
      "Geautomatiseerde matching en capaciteitsbeheer.",
      "AVG-proof architectuur: rolgebaseerde toegang en veilige data-opslag.",
      "Doorontwikkeling in 90-daagse cycli naarmate het platform groeide.",
    ],
    result: "Het platform bedient nu 250.000+ kinderen en schaalt door zonder extra beheerinspanning.",
    relatedServices: ["app-ontwikkeling", "portalen-dashboards", "procesautomatisering"],
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
    challenge: "EPSA leverde consultancydiensten maar verloor wekelijks meer dan 40 uur aan handmatige administratie: tijdregistratie, goedkeuringsflows en rapportages die handmatig werden samengesteld.",
    approach: [
      "Automatische tijdregistratie en goedkeuringsworkflow op Mendix.",
      "Koppelingen met Microsoft Dynamics voor facturering en rapportages.",
      "Rolgebaseerde dashboards per manager, consultant en klant.",
      "Volledige audit-trail voor compliance.",
    ],
    result: "Meer dan 40 uur per week terug voor het team. Rapportages die eerder een dag kostten, worden nu automatisch gegenereerd.",
    relatedServices: ["procesautomatisering", "systeemintegratie", "portalen-dashboards"],
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
    challenge: "De golfclub beheerde ledenregistratie, baanreservering en contributie-inning via spreadsheets en vrijwilligers. Jaarlijks verlies door fouten en niet-geïnde contributies liep op tot tienduizenden euro's.",
    approach: [
      "Ledenportaal op Mendix met zelfservice voor reserveringen en gegevenswijzigingen.",
      "Automatische contributie-inning en herinneringen.",
      "Beheersdashboard voor bestuur met realtime overzicht van leden en inkomsten.",
      "Koppeling met bestaande boekhoudsoftware.",
    ],
    result: "Jaarlijkse besparing van €60.000–100.000 door minder fouten, betere inning en minder vrijwilligersuren voor administratie.",
    relatedServices: ["portalen-dashboards", "procesautomatisering", "app-ontwikkeling"],
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
    challenge: "BKD-keuringsmedewerkers werkten met klemborden in het veld en voerden bevindingen achteraf in op kantoor. Dit leidde tot fouten, vertraging en een dubbele administratielast.",
    approach: [
      "Mobiele Mendix-app voor keuringsregistratie direct in het veld, ook offline.",
      "Automatische synchronisatie zodra verbinding beschikbaar is.",
      "Koppeling met het centrale BKD-systeem voor directe rapportage.",
      "Digitale handtekening en foto-upload per keuringslocatie.",
    ],
    result: "Keuringsresultaten staan dezelfde dag in het centrale systeem. Geen dubbele invoer meer, minder fouten en snellere rapportage aan telers.",
    relatedServices: ["app-ontwikkeling", "systeemintegratie", "procesautomatisering"],
  },
  {
    slug: "rechtspraak",
    name: "Grote semi-publieke organisatie",
    sector: "Semi-Publiek",
    filter: "Semi-Publiek",
    metric: "AI-model",
    accent: "purple",
    transformation: "Van zoeken naar jurisprudentie naar AI die het vindt.",
    kind: "search",
    challenge: "Een grote Nederlandse semi-publieke organisatie had een omvangrijke kennisbank met uitspraken en documenten. Medewerkers verloren veel tijd aan het handmatig doorzoeken van relevante informatie voor hun werk.",
    approach: [
      "AI-model getraind op de interne kennisbank — data blijft volledig binnen de eigen omgeving.",
      "Semantisch zoeken: de AI begrijpt de vraag, niet alleen de zoekterm.",
      "Mendix als orchestratielaag: governance, toegangsbeheer en audit-trail ingebouwd.",
      "Volledig voldoend aan AVG en de interne beveiligingseisen.",
    ],
    result: "Medewerkers vinden in seconden relevante informatie die voorheen minuten tot uren kostte. Het model draait volledig in de eigen beveiligde omgeving.",
    relatedServices: ["agentic-ai", "ai-development", "portalen-dashboards"],
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
    challenge: "FloriusFlowers wil de supply chain van bloemen digitaliseren met een portaal dat kwekers, handelaren en afnemers verbindt.",
    approach: [
      "Supply-chain-portaal op Mendix in ontwikkeling.",
      "Integratie met bestaande ERP- en logistieke systemen.",
    ],
    result: "In ontwikkeling — meer informatie volgt.",
    relatedServices: ["portalen-dashboards", "systeemintegratie"],
  },
];
// Sector-overzicht (3×2 op /sectoren). `available` = detailpagina bestaat al.
export const sectors: {
  slug: string;
  title: string;
  accent: "teal" | "purple" | "yellow";
  systems: string[];
  available: boolean;
}[] = [
  { slug: "sierteelt", title: "Sierteelt & Horticultuur", accent: "teal", systems: ["Agriware", "Infor", "Metacom (Meijel)", "BKD", "Supply chain"], available: true },
  { slug: "detachering", title: "Staffing & Detachering", accent: "purple", systems: ["AFAS", "Wet DBA", "AI-matching", "Consultant­portalen"], available: true },
  { slug: "semi-publiek", title: "Semi-Publiek", accent: "yellow", systems: ["Compliance", "Documentbeheer", "AI op regelgeving", "Veilige data"], available: true },
  { slug: "onderwijs", title: "Onderwijs", accent: "teal", systems: ["Aanmeldportalen", "AVG", "Administratie", "Rapportages"], available: true },
  { slug: "kinderopvang", title: "Kinderopvang", accent: "purple", systems: ["Ouderportalen", "LRK", "Facturering", "Planning"], available: true },
  { slug: "maakindustrie", title: "Maakindustrie", accent: "yellow", systems: ["ERP-integratie", "Kwaliteitscontrole", "Productie-planning", "Supply chain"], available: true },
];

// Cultuurpijlers voor /werken-bij.
export const culture = [
  { title: "Echte impact", body: "Je werk gaat live bij klanten in horticultuur, staffing en de publieke sector — geen la-projecten." },
  { title: "Snelheid", body: "MVP in 6 weken. Je ziet je werk snel in productie." },
  { title: "Senioriteit & groei", body: "Klein team, korte lijnen, 2 Advanced Mendix Trainers die je naar certificering coachen." },
  { title: "Aan de voorkant van AI", body: "Agentic AI, custom modellen en orkestratie — niet als hype, maar in echte oplossingen." },
  { title: "Vrijheid & eigenaarschap", body: "Jij pakt features end-to-end op, van Discovery tot livegang." },
  { title: "Enterprise zonder bureaucratie", body: "Mendix-fundament en ISO 27001, met de wendbaarheid van een klein bureau." },
];

// Wat Kobeon biedt (gedeeld over alle vacatures).
export const perks = [
  "Marktconform salaris",
  "Certificeringsbudget",
  "Hybride werken",
  "Klein, senior team",
  "Snelle doorgroei",
  "Moderne stack",
];

// Vacatures (generiek gehouden). `open` = open sollicitatie-kaart.
export const vacancyCategories = ["Alle", "Development", "Consultancy", "AI", "Sales", "Stage/Traineeship"];

export const vacancies: {
  slug: string;
  title: string;
  category: string;
  type: string;
  location: string;
  teaser: string;
  doen?: string[];
  meebrengt?: string[];
  open?: boolean;
}[] = [
  {
    slug: "medior-senior-mendix-developer",
    title: "Medior/Senior Mendix Developer",
    category: "Development",
    type: "Fulltime",
    location: "Hybride",
    teaser: "Bouw enterprise-applicaties op Mendix voor klanten in horticultuur, staffing en de publieke sector.",
    doen: [
      "Enterprise-applicaties bouwen op Mendix, van datamodel tot UX.",
      "Integraties opzetten met SAP, Dynamics, AFAS en REST/OData-API's.",
      "Meedenken over architectuur en kwaliteit, end-to-end per feature.",
    ],
    meebrengt: [
      "Ervaring met Mendix (of sterke low-code/high-code-basis en de wil om te certificeren).",
      "Gevoel voor enterprise-kwaliteit: security, schaalbaarheid en governance.",
      "Zelfstandigheid en zin om dicht op de klant te werken.",
    ],
  },
  {
    slug: "mendix-consultant-solution-architect",
    title: "Mendix Consultant / Solution Architect",
    category: "Consultancy",
    type: "Fulltime",
    location: "Hybride",
    teaser: "Vertaal klantprocessen naar werkende oplossingen; voer Discovery-sessies en bewaak de architectuur.",
    doen: [
      "Discovery-sessies leiden en processen vertalen naar scope en oplossing.",
      "De architectuur bewaken over integraties en applicaties heen.",
      "Schakelen tussen klant en bouwteam als inhoudelijk aanspreekpunt.",
    ],
    meebrengt: [
      "Ervaring met Mendix of enterprise-software en oplossingsontwerp.",
      "Sterk in stakeholdermanagement en het challengen van aannames.",
      "Helder kunnen communiceren, mondeling en op papier.",
    ],
  },
  {
    slug: "ai-agentic-engineer",
    title: "AI / Agentic Engineer",
    category: "AI",
    type: "Fulltime",
    location: "Hybride",
    teaser: "Bouw agentic AI-oplossingen en custom modellen, geïntegreerd in Mendix-applicaties.",
    doen: [
      "Agentic AI-workflows ontwerpen en bouwen, geïntegreerd in Mendix.",
      "Custom modellen trainen en grondvesten in de data van de klant.",
      "Governance, security en betrouwbaarheid productieklaar maken.",
    ],
    meebrengt: [
      "Ervaring met LLM's, agent-frameworks en API-integraties.",
      "Oog voor productie: geen losse PoC, maar iets dat echt gebruikt wordt.",
      "Affiniteit met enterprise-context en compliance.",
    ],
  },
  {
    slug: "ux-designer-prototyper",
    title: "UX Designer / Prototyper",
    category: "Development",
    type: "Fulltime/Parttime",
    location: "Hybride",
    teaser: "Ontwerp en prototype in Figma Make, Lovable en Google Stitch; van idee naar klikbaar in dagen.",
    doen: [
      "Van analyse naar klikbaar prototype in dagen, niet weken.",
      "Werken met Figma Make, Lovable en Google Stitch.",
      "Ontwerpen vertalen naar bruikbare, toegankelijke Mendix-UI.",
    ],
    meebrengt: [
      "Sterk in interactie- en visueel ontwerp voor zakelijke applicaties.",
      "Snel kunnen prototypen en valideren met gebruikers.",
      "Oog voor detail en toegankelijkheid.",
    ],
  },
  {
    slug: "business-development-sales",
    title: "Business Development / Sales",
    category: "Sales",
    type: "Fulltime",
    location: "Hybride",
    teaser: "Help organisaties de eerste stap zetten; van Discovery-sessie naar partnership.",
    doen: [
      "Nieuwe organisaties laten kennismaken met Kobeon en Mendix.",
      "Discovery-sessies inplannen en opvolgen tot partnership.",
      "Mee bouwen aan onze propositie en marktbenadering.",
    ],
    meebrengt: [
      "Ervaring in B2B-sales, het liefst in software of consultancy.",
      "Inhoudelijke nieuwsgierigheid naar processen en technologie.",
      "Een consultatieve, geen pusherige verkoopstijl.",
    ],
  },
  {
    slug: "traineeship-mendix-developer",
    title: "Traineeship Mendix Developer",
    category: "Stage/Traineeship",
    type: "Fulltime",
    location: "Hybride",
    teaser: "Leer Mendix van 2 Advanced Trainers en werk vanaf dag één aan echte projecten. Begeleiding naar certificering.",
    doen: [
      "Mendix leren van 2 Advanced Trainers, met begeleiding naar certificering.",
      "Vanaf dag één meebouwen aan echte klantprojecten.",
      "Stap voor stap meer eigenaarschap pakken.",
    ],
    meebrengt: [
      "Een afgeronde of bijna afgeronde (hbo/wo) opleiding, richting IT.",
      "Leergierigheid en logisch denkvermogen.",
      "Zin om snel echt werk te leveren.",
    ],
  },
  {
    slug: "open-sollicitatie",
    title: "Open sollicitatie",
    category: "Alle",
    type: "—",
    location: "Hybride",
    teaser: "Niets gevonden dat past, maar wel overtuigd? Verras ons.",
    open: true,
  },
];

// De 9 diensten als bento-tegels (homepage-sectie 6 + /diensten). `span` stuurt
// de asymmetrische grid, `accent` de merk-kleur (icoon + hover), `mock` geeft een
// grote feature-tegel een lichte mini-UI i.p.v. alleen icoon. Iconen komen uit
// <Icon name={slug}>. Geen emoji, geen donkere gradient-slabs (licht-eerst).
export type Service = {
  slug: string;
  title: string;
  desc: string;
  accent: "purple" | "teal" | "yellow";
  span: string;
  mock?: ProjectKind;
  // Detailvelden voor /diensten/[slug]
  heroLine: string;
  intro: string;
  watJeKrijgt: string[];
  aanpak: string[];
  relatedProjects: string[]; // project-slugs
};

export const services: Service[] = [
  {
    slug: "procesautomatisering",
    title: "Procesautomatisering",
    desc: "Repetitieve en cognitieve taken automatiseren met Mendix.",
    accent: "purple",
    span: "md:col-span-2 md:row-span-2",
    mock: "workflow",
    heroLine: "Repetitief werk verdwijnt. Je mensen houden tijd over.",
    intro: "Handmatige stappen, overtypen en wachten op goedkeuringen kosten je team elke dag uren. Wij automatiseren die processen op Mendix — met een volledig audit-spoor, zodat je grip houdt.",
    watJeKrijgt: [
      "Minder handwerk en minder fouten; je mensen richten zich op het werk dat telt.",
      "Kortere doorlooptijden — van dagen naar uren.",
      "Volledige traceerbaarheid: elke stap is auditeerbaar.",
    ],
    aanpak: [
      "We brengen je proces in kaart en modelleren het als werkstroom met duidelijke statussen en goedkeuringen.",
      "Koppelingen met je bestaande systemen (Microsoft Dynamics, SAP, AFAS, Exact) zodat data niet meer wordt overgetypt.",
      "Governance en rolgebaseerde toegang standaard ingebouwd.",
      "Binnen zes weken een werkende eerste versie; daarna doorontwikkelen.",
    ],
    relatedProjects: ["epsa", "homezero"],
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI",
    desc: "AI-agenten die zelfstandig kenniswerk uitvoeren, geregisseerd door Mendix.",
    accent: "teal",
    span: "md:col-span-2",
    heroLine: "AI die het werk áf maakt, niet alleen antwoorden geeft.",
    intro: "Een losse chatbot beantwoordt vragen. Een agentic oplossing voert hele taken uit — matchen, controleren, verwerken — binnen jouw bedrijfsregels en altijd controleerbaar.",
    watJeKrijgt: [
      "Kenniswerk dat zelfstandig wordt afgehandeld, met een mens die goedkeurt waar het moet.",
      "Minder doorlooptijd op repetitief beoordelings- en verwerkingswerk.",
      "Geen black box: elke actie is herleidbaar.",
    ],
    aanpak: [
      "AI-agenten geregisseerd door Mendix, met veilige, rolgebaseerde toegang tot je data en applicaties.",
      "Mens-in-de-loop: goedkeuringsstappen waar dat nodig is.",
      "Governance, logging en security ingebouwd — klaar voor AVG en de EU AI Act.",
    ],
    relatedProjects: ["rechtspraak"],
  },
  {
    slug: "ai-development",
    title: "AI Development",
    desc: "Custom AI-modellen trainen op je eigen bedrijfsdata.",
    accent: "purple",
    span: "md:col-span-1",
    heroLine: "Een AI-model getraind op jouw data. Jij houdt de data.",
    intro: "Generieke modellen kennen jouw vak niet. Wij bouwen modellen die getraind zijn op je eigen bedrijfsdata en die in productie blijven presteren.",
    watJeKrijgt: [
      "Voorspellingen en classificaties die kloppen met jouw praktijk.",
      "Je data blijft van jou, in je eigen omgeving.",
      "Modellen die meegroeien en gemonitord worden.",
    ],
    aanpak: [
      "Modellen getraind op je eigen data, geïntegreerd in Mendix als beheerde (governed) API.",
      "Keuze uit een toonaangevend, open-source of eigen model — vrij te wisselen.",
      "Draait in je eigen cloud, on-prem of volledig afgeschermd als regelgeving dat eist.",
    ],
    relatedProjects: ["rechtspraak"],
  },
  {
    slug: "systeemintegratie",
    title: "Systeemintegratie",
    desc: "Microsoft Dynamics, SAP, REST-API's — al je systemen praten met elkaar.",
    accent: "teal",
    span: "md:col-span-1",
    heroLine: "Je systemen werken eindelijk samen.",
    intro: "Losse pakketten die niet met elkaar praten kosten tijd en veroorzaken fouten. Wij verbinden ze, zodat je één bron van waarheid hebt.",
    watJeKrijgt: [
      "Geen overtypen meer; data stroomt automatisch tussen systemen.",
      "Minder fouten, meer overzicht.",
      "Nieuwe applicaties bovenop je bestaande landschap — zonder alles te vervangen.",
    ],
    aanpak: [
      "Out-of-the-box-connectoren voor Microsoft Dynamics, SAP, AFAS, Exact, Salesforce en AWS — plus elke REST/OData-API.",
      "Mendix als integratielaag, met monitoring en governance.",
      "Gefaseerd, zodat je tijdens de koppeling blijft draaien.",
    ],
    relatedProjects: ["homezero", "epsa"],
  },
  {
    slug: "app-ontwikkeling",
    title: "App ontwikkeling",
    desc: "Web- en mobiele applicaties op Mendix. Enterprise-kwaliteit, standaard ingebouwd.",
    accent: "purple",
    span: "md:col-span-1",
    heroLine: "Web- en mobiele apps op Mendix. Enterprise-kwaliteit, standaard ingebouwd.",
    intro: "Software die past op hoe jij werkt — voor je klanten én je medewerkers, op desktop en mobiel.",
    watJeKrijgt: [
      "Apps die exact aansluiten op je processen.",
      "Werkt op elk apparaat, ook in het veld.",
      "Schaalt van tien tot honderdduizenden gebruikers.",
    ],
    aanpak: [
      "Web- en mobiele applicaties op Mendix, met security en schaalbaarheid ingebouwd.",
      "Eén keer bouwen, overal beschikbaar.",
      "Binnen zes weken een werkende MVP.",
    ],
    relatedProjects: ["petje-af", "bkd"],
  },
  {
    slug: "portalen-dashboards",
    title: "Portalen & dashboards",
    desc: "Klant- en medewerkersportalen met zelfservice en actueel inzicht.",
    accent: "teal",
    span: "md:col-span-2 md:row-span-2",
    mock: "dashboard",
    heroLine: "Je klanten en mensen regelen het zelf. Jij ziet alles, actueel.",
    intro: "Geef klanten, leden of medewerkers een eigen portaal met zelfservice, en houd zelf realtime zicht via dashboards.",
    watJeKrijgt: [
      "Minder telefoon en mail; gebruikers regelen het zelf.",
      "Actueel inzicht in één overzicht.",
      "Hogere tevredenheid en minder administratie.",
    ],
    aanpak: [
      "Klant- en medewerkersportalen met rolgebaseerde toegang.",
      "Dashboards met live data uit je gekoppelde systemen.",
      "Schaalbaar en veilig, AVG-proof.",
    ],
    relatedProjects: ["petje-af", "golfclub"],
  },
  {
    slug: "legacy-modernisering",
    title: "Legacy modernisering",
    desc: "Verouderde systemen gefaseerd vervangen. Stap voor stap, niet in één keer.",
    accent: "yellow",
    span: "md:col-span-1",
    heroLine: "Verouderde systemen vervangen. Stap voor stap, zonder risico.",
    intro: "Een systeem dat niemand meer durft aan te raken hoeft niet in één keer vervangen. Wij moderniseren gefaseerd, met behoud van wat werkt.",
    watJeKrijgt: [
      "Geen alles-in-één-keer-risico; je blijft draaien tijdens de overgang.",
      "Lagere beheerkosten en minder afhankelijkheid van schaarse kennis.",
      "Een platform dat klaar is voor de toekomst.",
    ],
    aanpak: [
      "Gefaseerd: nieuwe functionaliteit op Mendix bovenop of naast het oude systeem, stap voor stap overzetten.",
      "Integratie met bestaande data, zodat niets verloren gaat.",
      "Governance en security ingebouwd.",
    ],
    relatedProjects: ["homezero"],
  },
  {
    slug: "design-prototyping",
    title: "Design & Prototyping",
    desc: "Rapid prototyping met Figma Make, Lovable en Google Stitch.",
    accent: "purple",
    span: "md:col-span-1",
    heroLine: "Van idee naar klikbaar prototype in dagen.",
    intro: "Je ziet en test het eindresultaat vóór we bouwen. Zo weet je zeker dat we het juiste maken.",
    watJeKrijgt: [
      "Snel duidelijkheid en draagvlak.",
      "Minder verrassingen tijdens de bouw.",
      "Een ontwerp dat aansluit op je gebruikers.",
    ],
    aanpak: [
      "Rapid prototyping met Figma Make, Lovable en Google Stitch.",
      "Ontwerpen vertaald naar toegankelijke Mendix-UI.",
      "Onderdeel van elk traject — fase 2 in onze werkwijze.",
    ],
    relatedProjects: [],
  },
  {
    slug: "it-consultancy",
    title: "IT Consultancy",
    desc: "Datastructuur, architectuuradvies en IT-roadmap.",
    accent: "teal",
    span: "md:col-span-1",
    heroLine: "Heldere keuzes: datastructuur, architectuur en een IT-routekaart.",
    intro: "Niet zomaar bouwen, maar eerst de juiste fundamenten en richting bepalen — zodat je investeringen renderen.",
    watJeKrijgt: [
      "Een duidelijke roadmap en architectuur die hout snijdt.",
      "Betere beslissingen over bouwen, kopen of koppelen.",
      "Een datastructuur die meegroeit met je organisatie.",
    ],
    aanpak: [
      "Architectuuradvies, datamodellering en een gefaseerde IT-roadmap.",
      "Onafhankelijk en resultaatgericht advies.",
    ],
    relatedProjects: [],
  },
];

// Doorverwijs-logica (dienst → sector): welke sectoren leunen op welke dienst.
// Spiegelt de `relatedServices` op de sector-detailpagina's. ServicePage rendert
// hieruit pills naar /sectoren/<slug>, met titel uit de `sectors`-array.
export const serviceToSectors: Record<string, string[]> = {
  "procesautomatisering": ["sierteelt", "detachering", "semi-publiek", "onderwijs", "kinderopvang"],
  "agentic-ai": ["detachering", "semi-publiek"],
  "ai-development": ["semi-publiek", "maakindustrie"],
  "systeemintegratie": ["sierteelt", "detachering", "semi-publiek", "onderwijs", "maakindustrie"],
  "app-ontwikkeling": ["sierteelt", "onderwijs", "kinderopvang", "maakindustrie"],
  "portalen-dashboards": ["sierteelt", "detachering", "onderwijs", "kinderopvang", "maakindustrie"],
  "legacy-modernisering": ["maakindustrie"],
};
