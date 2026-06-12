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
  | "dashboard" | "portal" | "workflow" | "members" | "inspection" | "search" | "supply"
  // V8 — extra dienst-tegel-mocks
  | "agent" | "training" | "integration" | "app" | "legacy" | "design" | "roadmap";

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

// Kernwaarden (uit het VTO — titels letterlijk). Gebruikt op /over-kobeon en /werken-bij.
export const coreValues = [
  { title: "Wees geen engnek", body: "No-nonsense, recht door zee en zonder kapsones — gewoon doen wat werkt." },
  { title: "Samen is leuker", body: "We bouwen, reviewen en vieren samen; je staat er nooit alleen voor." },
  { title: "Feedback is een cadeautje", body: "Eerlijk en direct, omdat we elkaar én het werk beter willen maken." },
];

// Cultuurpijlers voor /werken-bij (toon: expertise + samen).
export const culture = [
  { title: "Werken met experts", body: "Je leert van Mendix MVP's, Experts en 2 Advanced Trainers, en groeit richting certificering." },
  { title: "Samen, niet solo", body: "Je staat er nooit alleen voor; we bouwen, reviewen en vieren samen." },
  { title: "Echte impact", body: "Je werk gaat live bij klanten als ABN AMRO, Zilveren Kruis en de Rechtspraak — geen la-projecten." },
  { title: "Eigenaarschap", body: "Jij pakt features end-to-end op, van Discovery tot livegang; we vertrouwen op jouw scherpte." },
  { title: "Aan de voorkant van AI", body: "Agentic AI, custom modellen en de agentic enterprise — niet als hype, maar in echte oplossingen." },
  { title: "Plezier", body: "Vrijdag is kantoor- en demodag, met een borrel na. Plus legendarische trips (ski, summer workation)." },
];

// Arbeidsvoorwaarden (gedeeld over alle vacatures).
export const perks = [
  "Marktconform salaris (range per rol)",
  "Pensioenregeling",
  "Flexibele werkuren",
  "Opleidings- & certificeringsbudget",
  "Vrijdagborrel & bedrijfsuitjes",
  "Reiskosten (OV of lease)",
  "Telefoonplan",
  "Fijn HQ in Zwolle + hybride werken",
];

// Vacatures in vast format (intro · profiel · rol · voorwaarden). `kind: "stage"`
// schakelt de sectie-labels om voor afstudeer-/stageplekken. `open` = open
// sollicitatie-kaart. Nieuwe rollen voeg je toe door een record bij te zetten.
export const vacancyCategories = ["Alle", "Development", "Consultancy", "AI", "Sales", "Afstuderen/Stage"];

export const vacancies: {
  slug: string;
  title: string;
  category: string;
  type: string;
  location: string;
  hours?: string;
  teaser: string;
  kind?: "stage";
  intro?: string[];
  profiel?: string[];
  rol?: string[];
  voorwaarden?: string[];
  open?: boolean;
}[] = [
  {
    slug: "mendix-consultant-solution-architect",
    title: "Medior Mendix Consultant",
    category: "Consultancy",
    type: "Hybride",
    location: "Zwolle",
    hours: "32–40 uur",
    teaser: "Bouw samen met klanten en collega's aan oplossingen die logisch voelen, goed werken en lekker draaien.",
    intro: [
      "Bij Kobeon houden we van snelheid. Niet gehaast bouwen, maar slim en doordacht — daarom werken we met Mendix.",
      "Als Medior Mendix Consultant bouw je samen met klanten en collega's aan oplossingen die logisch voelen, goed werken en lekker draaien. Je denkt mee, stelt de juiste vragen en vertaalt ideeën naar iets dat echt waarde toevoegt — met de ruimte om keuzes te maken.",
    ],
    profiel: [
      "Intermediate gecertificeerd, of op weg naar Advanced.",
      "Ervaring met Mendix-projecten.",
      "Je bouwt liever iets bruikbaars dan iets perfects op papier.",
      "Basiskennis HTML/CSS/REST/SOAP/JavaScript of SQL.",
      "Vloeiend Nederlands én Engels, woonachtig in Nederland.",
      "Je gelooft dat samenwerken key is.",
    ],
    rol: [
      "Hybride werken: Zwolle, thuis of bij de klant.",
      "Vrijdag is kantoor- en demodag, met een borrel na.",
      "Meters maken in plaats van maanden plannen.",
    ],
    voorwaarden: [
      "Salaris € 3.200–4.500 o.b.v. ervaring.",
      "Pensioen, flexibele uren en opleidings-/certificeringsbudget.",
      "Reiskosten (OV of lease), telefoonplan en bedrijfsuitjes.",
      "Een fijn HQ in Zwolle + hybride werken.",
    ],
  },
  {
    slug: "medior-senior-mendix-developer",
    title: "Medior/Senior Mendix Developer",
    category: "Development",
    type: "Hybride",
    location: "Zwolle",
    hours: "32–40 uur",
    teaser: "Bouw enterprise-applicaties op Mendix voor klanten in horticultuur, staffing en de publieke sector.",
    intro: [
      "Je bouwt enterprise-applicaties op Mendix voor klanten in horticultuur, staffing en de publieke sector — van datamodel tot UX, end-to-end per feature, samen met experts.",
    ],
    profiel: [
      "Ervaring met Mendix, of een sterke low-code/high-code-basis en de wil om te certificeren.",
      "Gevoel voor enterprise-kwaliteit: security, schaalbaarheid en governance.",
      "Zelfstandig en dicht op de klant.",
    ],
    rol: [
      "Bouwen van datamodel tot UX, end-to-end per feature.",
      "Integraties met SAP, Dynamics, AFAS en REST/OData-API's.",
      "Meedenken over architectuur en kwaliteit, samen met experts.",
    ],
    voorwaarden: [
      "Salaris [in te vullen] o.b.v. ervaring.",
      "Pensioen, flexibele uren en opleidings-/certificeringsbudget.",
      "Reiskosten (OV of lease), telefoonplan en bedrijfsuitjes.",
      "Een fijn HQ in Zwolle + hybride werken.",
    ],
  },
  {
    slug: "ai-agentic-engineer",
    title: "AI / Agentic Engineer",
    category: "AI",
    type: "Hybride",
    location: "Zwolle",
    hours: "32–40 uur",
    teaser: "Bouw agentic AI-oplossingen en custom modellen, geïntegreerd in Mendix — productieklaar en controleerbaar.",
    intro: [
      "Bouw agentic AI-oplossingen en custom modellen, geïntegreerd in Mendix — productieklaar, controleerbaar en met governance. Aan de voorkant van de agentic enterprise.",
    ],
    profiel: [
      "Ervaring met LLM's, agent-frameworks en API-integraties.",
      "Oog voor productie: geen losse PoC, maar iets dat echt gebruikt wordt.",
      "Affiniteit met enterprise-context en compliance.",
    ],
    rol: [
      "Agentic AI-workflows ontwerpen en bouwen, geïntegreerd in Mendix.",
      "Custom modellen trainen en grondvesten in de data van de klant.",
      "Governance, security en betrouwbaarheid productieklaar maken.",
    ],
    voorwaarden: [
      "Salaris [in te vullen] o.b.v. ervaring.",
      "Pensioen, flexibele uren en opleidings-/certificeringsbudget.",
      "Reiskosten (OV of lease), telefoonplan en bedrijfsuitjes.",
      "Een fijn HQ in Zwolle + hybride werken.",
    ],
  },
  {
    slug: "ux-designer-prototyper",
    title: "UX Designer / Prototyper",
    category: "Development",
    type: "Hybride",
    location: "Zwolle",
    hours: "32–40 uur",
    teaser: "Ontwerp en prototype in Figma Make, Lovable en Google Stitch; van idee naar klikbaar in dagen.",
    intro: [
      "Je maakt in dagen een klikbaar prototype, zodat we mét gebruikers valideren vóór er gebouwd wordt. Daarna vertaal je het ontwerp naar toegankelijke Mendix-UI.",
    ],
    profiel: [
      "Sterk in interactie- en visueel ontwerp voor zakelijke applicaties.",
      "Snel kunnen prototypen en valideren met gebruikers.",
      "Oog voor detail en toegankelijkheid.",
    ],
    rol: [
      "Van analyse naar klikbaar prototype in dagen, niet weken.",
      "Werken met Figma Make, Lovable en Google Stitch.",
      "Ontwerpen vertalen naar bruikbare, toegankelijke Mendix-UI.",
    ],
    voorwaarden: [
      "Salaris [in te vullen] o.b.v. ervaring.",
      "Pensioen, flexibele uren en opleidings-/certificeringsbudget.",
      "Reiskosten (OV of lease), telefoonplan en bedrijfsuitjes.",
      "Een fijn HQ in Zwolle + hybride werken.",
    ],
  },
  {
    slug: "business-development-sales",
    title: "Sales Growth Lead",
    category: "Sales",
    type: "Hybride",
    location: "Zwolle",
    hours: "Sales",
    teaser: "Eigenaar van onze groei en hoeder van het Kobeon-proces — van introductie en discovery tot technische validatie.",
    intro: [
      "Kobeon is niet het zoveelste IT-bureau — we zijn de Mendix-partner met de hoogste expertdichtheid van Nederland.",
      "Om onze propositie bij de top-100-accounts te verzilveren, zoeken we een Sales Growth Lead: eigenaar van onze groei en hoeder van het Kobeon-proces, van introductie en discovery tot technische validatie en visie-ontwikkeling.",
    ],
    profiel: [
      "Minutieus en nauwkeurig.",
      "Eigenaarschap en IT-affiniteit.",
      "Regisseur die sessies leidt en focus bewaakt.",
      "Ambitie om te groeien in high-end software.",
    ],
    rol: [
      "Bouw en benader de top-100-accounts.",
      "≥ 4 gekwalificeerde gesprekken per week.",
      "Vanaf Q2 ≥ 2 technische validaties per maand.",
      "10 nieuwe partnerships per jaar; CRM als single source of truth.",
    ],
    voorwaarden: [
      "Salaris € 3.500–5.000.",
      "Leaseauto.",
      "Transparante bonus op omzet-targets.",
      "Werken bij de partner met de hoogste Mendix-kennisdichtheid, in een energieke, internationale omgeving.",
    ],
  },
  {
    slug: "traineeship-mendix-developer",
    title: "Traineeship Mendix Developer",
    category: "Afstuderen/Stage",
    type: "Hybride",
    location: "Zwolle",
    hours: "Fulltime",
    teaser: "Leer Mendix van 2 Advanced Trainers en werk vanaf dag één aan echte projecten. Begeleiding naar certificering.",
    intro: [
      "Start je carrière aan de voorkant van low-code en AI. In ons traineeship leer je Mendix van 2 Advanced Trainers en draai je vanaf dag één mee in echte klantprojecten — met begeleiding naar certificering.",
    ],
    profiel: [
      "Een afgeronde of bijna afgeronde (hbo/wo) opleiding, richting IT.",
      "Leergierigheid en logisch denkvermogen.",
      "Zin om snel echt werk te leveren.",
    ],
    rol: [
      "Mendix leren van 2 Advanced Trainers, met begeleiding naar certificering.",
      "Vanaf dag één meebouwen aan echte klantprojecten.",
      "Stap voor stap meer eigenaarschap pakken.",
    ],
    voorwaarden: [
      "Marktconform starterssalaris [in te vullen].",
      "Begeleiding naar Mendix-certificering.",
      "Pensioen, flexibele uren, vrijdagborrel en bedrijfsuitjes.",
      "Een fijn HQ in Zwolle + hybride werken.",
    ],
  },
  {
    slug: "afstudeeropdracht-it",
    title: "Afstudeeropdracht IT / Software",
    category: "Afstuderen/Stage",
    type: "Afstuderen",
    location: "Zwolle",
    hours: "[periode]",
    kind: "stage",
    teaser: "Loop mee aan de voorkant van low-code en AI: onderzoek en bouw mee aan een concreet Mendix-vraagstuk.",
    intro: [
      "Loop mee aan de voorkant van low-code en AI. Je onderzoekt en bouwt mee aan een concreet vraagstuk op Mendix — bijvoorbeeld een agentic-AI-workflow, een knowledge-graph-contextlaag of een herbruikbare integratiecomponent — begeleid door Mendix MVP's en Experts.",
    ],
    rol: [
      "Een afgebakend onderzoek + werkend prototype op Mendix.",
      "Meedraaien in echte klantprojecten.",
      "Je bevindingen vertalen naar een advies/scriptie.",
    ],
    profiel: [
      "Hbo/wo richting Software Engineering, Informatica of AI.",
      "Nieuwsgierig en zelfstandig.",
      "Zin om snel echt te bouwen.",
    ],
    voorwaarden: [
      "Begeleiding door experts.",
      "Een serieuze opdracht — geen koffie halen.",
      "Stagevergoeding [bedrag] en vrijdagborrel.",
      "Uitzicht op een baan.",
    ],
  },
  {
    slug: "afstudeeropdracht-commerciele-economie",
    title: "Afstudeeropdracht Commerciële Economie",
    category: "Afstuderen/Stage",
    type: "Afstuderen",
    location: "Zwolle",
    hours: "[periode]",
    kind: "stage",
    teaser: "Help onze groei versnellen: onderzoek onze go-to-market en lever een onderbouwd advies + concrete aanpak.",
    intro: [
      "Help ons onze groei te versnellen. Je onderzoekt onze go-to-market in de focus-verticals (horticultuur, maakindustrie, semi-publiek) en levert een onderbouwd advies + concrete aanpak — van propositie en doelgroep tot kanalen en opvolging.",
    ],
    rol: [
      "Markt-/doelgroeponderzoek in onze verticals.",
      "Analyse van onze sales-/marketingfunnel.",
      "Een concreet groei-/go-to-market-advies.",
      "Meedraaien met de CEO en het team.",
    ],
    profiel: [
      "Hbo Commerciële Economie of vergelijkbaar.",
      "Analytisch en ondernemend.",
      "Affiniteit met B2B/tech.",
    ],
    voorwaarden: [
      "Begeleiding en een opdracht met impact op onze strategie.",
      "Stagevergoeding [bedrag].",
      "Uitzicht op een rol (bv. richting Sales/Marketing).",
    ],
  },
  {
    slug: "marketing-stagiair",
    title: "Marketing Stagiair(e)",
    category: "Afstuderen/Stage",
    type: "Stage",
    location: "Zwolle",
    hours: "Hybride",
    kind: "stage",
    teaser: "Help ons verhaal scherp en zichtbaar te maken — content, socials en campagnes die je meteen live ziet gaan.",
    intro: [
      "Help ons verhaal scherp en zichtbaar te maken. Je werkt mee aan onze content, socials en campagnes — van klantverhalen en LinkedIn tot de website — en ziet je werk meteen live gaan.",
    ],
    rol: [
      "Content maken: klantcases, social posts, nieuwsbrief.",
      "Meedenken over campagnes en SEO.",
      "De website en merkstijl mee bewaken.",
      "Meten wat werkt.",
    ],
    profiel: [
      "Mbo/hbo richting Marketing/Communicatie.",
      "Vlotte pen in het Nederlands.",
      "Creatief, zelfstandig en hands-on.",
    ],
    voorwaarden: [
      "Begeleiding en vrijheid om te experimenteren.",
      "Stagevergoeding [bedrag].",
      "Een plek in een team dat snel schakelt.",
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

// V8 — elke dienst-tegel een eigen mini-mock. ServiceTile gebruikt deze map
// (slug → kind), zodat álle 9 tegels een visueel voorbeeld tonen i.p.v. alleen
// een icoon. De varianten staan in components/MiniMock.tsx.
export const serviceMock: Record<string, ProjectKind> = {
  "procesautomatisering": "workflow",
  "portalen-dashboards": "dashboard",
  "agentic-ai": "agent",
  "ai-development": "training",
  "systeemintegratie": "integration",
  "app-ontwikkeling": "app",
  "legacy-modernisering": "legacy",
  "design-prototyping": "design",
  "it-consultancy": "roadmap",
};

// V8 — uitgebreide bodyteksten per dienst (2 alinea's probleem→aanpak + 3 pijlers).
// Bron: docs/content-subpaginas.md § "Uitgebreide bodyteksten per dienst".
// ServicePage rendert dit als hoofdtekst, bovenop wat-het-oplevert/voorbeelden/cases.
export type ServiceBody = { paras: string[]; pijlers: { t: string; b: string }[] };
export const serviceBodies: Record<string, ServiceBody> = {
  "procesautomatisering": {
    paras: [
      "Handmatig overtypen, papieren goedkeuringen en losse Excel-lijstjes kosten je team elke dag tijd — en introduceren fouten die je vaak pas later ontdekt. Naarmate je groeit, lopen die processen vast en wordt het overzicht kleiner in plaats van groter.",
      "Wij brengen je proces in kaart en bouwen het na als één werkstroom op Mendix: aanvragen, controles, goedkeuringen en verwerking lopen automatisch, met de juiste mensen op de juiste momenten. Repetitief én cognitief werk (beoordelen, classificeren, samenvatten) nemen we uit handen — met een volledig audit-spoor, zodat altijd herleidbaar is wat er is gebeurd en waarom.",
    ],
    pijlers: [
      { t: "Minder handwerk", b: "je mensen houden tijd over voor het werk dat telt." },
      { t: "Kortere doorlooptijd", b: "van dagen naar uren." },
      { t: "Volledig auditeerbaar", b: "elke stap traceerbaar, klaar voor compliance." },
    ],
  },
  "agentic-ai": {
    paras: [
      "Een chatbot beantwoordt vragen, maar maakt geen werk áf. Het echte werk — matchen, controleren, documenten verwerken, communiceren — blijft liggen of kost je mensen uren per dag.",
      "Met agentic AI bouwen we AI-agenten die hele taken zelfstandig uitvoeren, binnen jouw bedrijfsregels en met veilige, rolgebaseerde toegang tot je systemen. Een mens keurt goed waar dat moet; de rest gaat vanzelf. Alles geregisseerd door Mendix, met logging en governance ingebouwd — geen black box, maar een werkstroom die je kunt vertrouwen en bijsturen.",
    ],
    pijlers: [
      { t: "Werk dat áf is", b: "geen slim antwoord, maar een afgeronde taak." },
      { t: "Mens in de loop", b: "goedkeuren en bijsturen waar het telt." },
      { t: "Volledig herleidbaar", b: "elke actie gelogd, klaar voor AVG en de EU AI Act." },
    ],
  },
  "ai-development": {
    paras: [
      "Generieke AI-modellen kennen jouw vak niet. Voor de beslissingen die er echt toe doen — voorspellen, detecteren, scoren — heb je modellen nodig die je eigen data en context begrijpen.",
      "Wij trainen modellen op je eigen bedrijfsdata en zetten ze in productie als een beheerde, controleerbare service binnen je Mendix-applicaties. Je houdt de data én de regie: kies een toonaangevend, open-source of eigen model, en draai het in je eigen cloud, on-prem of volledig afgeschermd. We monitoren de prestaties, zodat het model accuraat blijft — niet alleen op de lanceerdag.",
    ],
    pijlers: [
      { t: "Getraind op jouw data", b: "voorspellingen die kloppen met de praktijk." },
      { t: "Jij houdt de regie", b: "je data blijft van jou, model vrij te kiezen." },
      { t: "Blijft presteren", b: "gemonitord en bijgestuurd in productie." },
    ],
  },
  "app-ontwikkeling": {
    paras: [
      "Standaardpakketten passen zelden op hoe jij werkt, en maatwerk in high-code is traag en duur. Je medewerkers en klanten verdienen software die hun werk makkelijker maakt — op kantoor én in het veld.",
      "Op Mendix bouwen we web- en mobiele applicaties die exact aansluiten op je processen, met security, schaalbaarheid en governance standaard ingebouwd. Eén keer bouwen, overal beschikbaar — van een desktop-app tot een offline-app voor de monteur. Binnen zes weken draait je eerste werkende versie, daarna breiden we uit op basis van echt gebruik.",
    ],
    pijlers: [
      { t: "Past op je proces", b: "geen concessies aan standaardsoftware." },
      { t: "Web én mobiel", b: "werkt op elk apparaat, ook offline in het veld." },
      { t: "Enterprise-kwaliteit", b: "schaalt van tien tot honderdduizenden gebruikers." },
    ],
  },
  "systeemintegratie": {
    paras: [
      "Losse pakketten — ERP, CRM, boekhouding, vaksystemen — die niet met elkaar praten kosten tijd en veroorzaken fouten. Je schakelt constant tussen applicaties en typt dezelfde gegevens dubbel in, met een verhoogd risico op fouten en een gebrek aan overzicht.",
      "Wij verbinden je systemen tot één geheel, zodat data automatisch tussen applicaties stroomt en je één bron van waarheid hebt. Mendix koppelt out-of-the-box met Microsoft Dynamics, SAP, AFAS, Exact, Salesforce en AWS, plus elke REST/OData-API — en waar een systeem geen nette koppeling heeft, lossen we dat op. Vaak is de grootste winst juist het verbinden van silo's die nu niet samenwerken, zonder dat je een werkend systeem hoeft te vervangen.",
    ],
    pijlers: [
      { t: "Naadloze koppeling", b: "al je software werkt samen, geen geschakel meer." },
      { t: "Minder fouten", b: "geen dubbele invoer, hogere datakwaliteit." },
      { t: "Realtime data", b: "beslissingen op actuele, betrouwbare gegevens." },
    ],
  },
  "portalen-dashboards": {
    paras: [
      "Telefoontjes, mailtjes en uitdraaien om iemand op de hoogte te houden kosten je team tijd en je klanten geduld. En zelf mis je het overzicht omdat de informatie verspreid zit.",
      "Wij bouwen portalen waarin je klanten, leden of medewerkers zelf hun zaken regelen, en dashboards die je realtime inzicht geven uit je gekoppelde systemen. Rolgebaseerde toegang en AVG standaard ingebouwd. Van een ouderportaal of leveranciersportaal tot een monteur-portaal met werkorders, handleidingen en onderdelen.",
    ],
    pijlers: [
      { t: "Zelfservice", b: "minder telefoon en mail; gebruikers regelen het zelf." },
      { t: "Realtime inzicht", b: "alles actueel, in één overzicht." },
      { t: "Veilig & AVG-proof", b: "rolgebaseerde toegang standaard." },
    ],
  },
  "legacy-modernisering": {
    paras: [
      "Een verouderd systeem dat niemand meer durft aan te raken remt je af: hoge beheerkosten, afhankelijkheid van schaarse kennis en geen ruimte om mee te bewegen. Tegelijk voelt alles-in-één-keer vervangen te riskant.",
      "Wij moderniseren gefaseerd. We bouwen nieuwe functionaliteit op Mendix bovenop of naast het oude systeem, koppelen de bestaande data en zetten stap voor stap over — zonder stilstand. Zo houd je continuïteit terwijl je naar een platform gaat dat veilig, schaalbaar en klaar voor de toekomst is.",
    ],
    pijlers: [
      { t: "Geen big bang", b: "je blijft draaien tijdens de overgang." },
      { t: "Behoud van data", b: "bestaande gegevens gaan mee, niets verloren." },
      { t: "Klaar voor de toekomst", b: "lagere beheerlast, ruimte om te groeien." },
    ],
  },
  "design-prototyping": {
    paras: [
      "De duurste fout is software bouwen die net niet doet wat gebruikers nodig hebben. Dat voorkom je door eerst te zien en te testen voordat er één regel gebouwd wordt.",
      "Wij maken in dagen een klikbaar prototype — met Figma Make, Lovable en Google Stitch — zodat je het eindresultaat ervaart en valideert met je gebruikers vóór de bouw. Daarna vertalen we het ontwerp naar toegankelijke Mendix-UI. Het is fase 2 in onze werkwijze en bespaart later tijd, geld en verrassingen.",
    ],
    pijlers: [
      { t: "Zien vóór bouwen", b: "je weet zeker dat we het juiste maken." },
      { t: "Snel valideren", b: "toetsen met echte gebruikers in dagen." },
      { t: "Draagvlak", b: "stakeholders zien en voelen het resultaat vooraf." },
    ],
  },
  "it-consultancy": {
    paras: [
      "Niet elke vraag begint bij bouwen. Soms heb je eerst richting nodig: welke data, welke architectuur, bouwen-kopen-of-koppelen, en hoe je stap voor stap bij de agentic enterprise komt.",
      "Wij adviseren onafhankelijk en resultaatgericht: datastructuur en ontologie, architectuur en een IT-roadmap die hout snijdt. Geen dik rapport dat in een la verdwijnt, maar heldere keuzes waar je morgen mee aan de slag kunt — en die je investeringen laten renderen.",
    ],
    pijlers: [
      { t: "Heldere keuzes", b: "onderbouwd advies, geen ruis." },
      { t: "Toekomstvaste architectuur", b: "een fundament dat meegroeit." },
      { t: "Roadmap die werkt", b: "concrete stappen, geen plank-rapport." },
    ],
  },
};

// V8+ — "Voorbeelden" (concrete use-cases) per dienst, uit
// docs/content-subpaginas.md § S1. ServicePage rendert dit als een eigen blok,
// net als de voorbeelden op de sectorpagina's.
export const serviceVoorbeelden: Record<string, string[]> = {
  "procesautomatisering": [
    "Inkoop- en factuurverwerking met automatische controles en goedkeuring.",
    "Order-to-cash: van aanvraag tot levering en facturatie.",
    "HR-onboarding: accounts, documenten en taken automatisch klaargezet.",
    "Keuringsbeheer (zoals bij BKD): aanvraag, inspectie en certificaat in één flow.",
  ],
  "agentic-ai": [
    "Kandidaat- of vacaturematching met een voorstel dat een mens goedkeurt.",
    "Documenten lezen en verwerken (contracten, aanvragen) en de data wegschrijven.",
    "Compliance-checks: toetsen tegen regels en afwijkingen markeren.",
    "Klantvragen end-to-end afhandelen, met escalatie naar een mens waar nodig.",
  ],
  "ai-development": [
    "Voorspellend onderhoud: machine-uitval voorspellen vóór het gebeurt.",
    "Anomaliedetectie in transacties of productiedata.",
    "Risico- of kredietscoring op je eigen historie.",
    "Een kennismodel op je eigen documenten (zoals jurisprudentie).",
  ],
  "systeemintegratie": [
    "ERP, CRM en veldsystemen koppelen tot één bron van waarheid.",
    "Agriware, Infor of Metacom ontsluiten richting nieuwe apps en portalen.",
    "AFAS/Exact koppelen voor facturatie en HR.",
    "Een knowledge graph/ontologie als contextlaag, zodat AI je bedrijf “snapt”.",
  ],
  "app-ontwikkeling": [
    "Field-service-app voor monteurs: werkorders, handleidingen, machineseries en onderdelen op aanvraag — ook offline.",
    "Mobiele inspectie-/keuringsapp voor in het veld.",
    "Planningsapp voor agri of productie (teelt/oogst, capaciteit, personeel).",
    "Klant- of medewerkersapp die op je processen is gebouwd.",
  ],
  "portalen-dashboards": [
    "Klant- of leveranciersportaal met zelfservice.",
    "Monteur-/field-service-portaal met werkorders, handleidingen en onderdelen.",
    "Planningsdashboard (capaciteit, teelt/oogst, productie) met realtime data.",
    "KPI-dashboards die live uit je gekoppelde systemen putten.",
  ],
  "legacy-modernisering": [
    "Een verouderd planningssysteem gefaseerd vervangen, zonder stilstand.",
    "Een oude werkorder-/veldapplicatie naar een moderne mobiele app.",
    "Een Access/Excel-oplossing omzetten naar een schaalbare Mendix-app.",
    "Maatwerk-legacy ontsluiten en stap voor stap uitfaseren.",
  ],
  "design-prototyping": [
    "Klikbaar prototype van een planningsapp om met gebruikers te valideren.",
    "Een field-service-app eerst testen vóór de bouw.",
    "Een portaal-concept om draagvlak te krijgen bij stakeholders.",
    "Snel varianten van een schermflow uitproberen.",
  ],
  "it-consultancy": [
    "Een datastructuur/ontologie opzetten als fundament voor AI.",
    "Een IT-roadmap richting de agentic enterprise.",
    "Advies “bouwen, kopen of koppelen” bij een nieuw systeemlandschap.",
    "Architectuurreview van een bestaand Mendix-landschap.",
  ],
};

// Het team — één gedeelde bron voor /over-kobeon én /werken-bij, zodat beide
// pagina's gelijk blijven lopen als het team groeit.
export type TeamMember = { name: string; role: string; photo?: string };
export const team: TeamMember[] = [
  { name: "Bjarn Onderstal", role: "Co-Founder · Mendix Expert · MVP", photo: "/team/bjarn.jpg" },
  { name: "Hunter Koppen", role: "Co-Founder · Mendix Expert · MVP", photo: "/team/hunter.jpg" },
  { name: "Sjoerd Beljon", role: "Co-Founder · Mendix Expert · MVP", photo: "/team/sjoerd.jpg" },
  { name: "Agnes Roolvink", role: "Mendix Expert", photo: "/team/agnes.jpeg" },
  { name: "Daryl Zandvliet", role: "Mendix Expert", photo: "/team/daryl.jpeg" },
  { name: "Frank Schutte", role: "Mendix Expert", photo: "/team/frank.jpeg" },
  { name: "Cas Boswinkel", role: "Mendix Specialist · AI-lead", photo: "/team/cas.jpeg" },
  { name: "Robin Broeks", role: "Mendix Specialist", photo: "/team/robin.jpg" },
];
