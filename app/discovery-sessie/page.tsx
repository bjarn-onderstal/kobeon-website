import type { Metadata } from "next";
import Section from "@/components/Section";
import Accordion from "@/components/Accordion";
import FaqJsonLd from "@/components/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const title = "Plan een gratis Discovery-sessie — Kobeon";
const description =
  "Plan een gratis Discovery-sessie van 60 minuten. Wij brengen je processen en besparingspotentieel in kaart en schetsen een concreet vervolg. Vrijblijvend.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/discovery-sessie" },
  openGraph: { title, description, url: "/discovery-sessie", type: "website" },
};

const meekrijg = [
  { title: "Procesanalyse", body: "We brengen je grootste knelpunten en kansen scherp in kaart." },
  { title: "Besparingspotentieel", body: "Een concrete inschatting van wat automatisering je oplevert." },
  { title: "Quick wins", body: "De eerste stappen die je direct kunt zetten." },
  { title: "Vervolgplan", body: "Een helder voorstel voor een MVP in zes weken — vrijblijvend." },
];

const faq = [
  { q: "Wat kost een Discovery-sessie?", a: "Niets. De sessie van 60 minuten is gratis en volledig vrijblijvend — je zit nergens aan vast." },
  { q: "Hoe lang duurt het en wat heb ik nodig?", a: "Reken op 60 minuten. Neem je grootste proces-uitdaging mee; wij zorgen voor de juiste vragen. Voorbereiden hoeft niet." },
  { q: "Wat houd ik eraan over?", a: "Een helder beeld van waar software de meeste impact heeft, een inschatting van het besparingspotentieel en een concreet vervolgvoorstel — of simpelweg goede inzichten." },
];

export default function Page() {
  return (
    <>
      <FaqJsonLd items={faq} />
      <BreadcrumbJsonLd items={[{ label: "Home", href: "/" }, { label: "Discovery-sessie" }]} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-purple-deep text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(55% 55% at 80% 20%, rgba(19,166,166,0.22), transparent), radial-gradient(50% 50% at 10% 90%, rgba(83,72,206,0.32), transparent)" }}
        />
        <div className="container-x relative pb-16 pt-32 md:pb-20 md:pt-40">
          <span className="chip border-white/20 bg-white/10 text-yellow">GRATIS DISCOVERY-SESSIE</span>
          <h1 className="h-display mt-6 max-w-3xl text-4xl md:text-6xl text-yellow">
            Plan een gratis Discovery-sessie.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Eén gesprek van 60 minuten. Je betaalt niets en weet daarna precies waar je staat — en wat het oplevert.
          </p>
          <p className="mt-3 text-sm text-white/50">Vrijblijvend · 60 minuten · via Calendly</p>
        </div>
      </section>

      {/* Wat je meekrijgt */}
      <Section tone="light">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">Wat je meekrijgt</p>
          <h2 className="h-display mt-3 text-3xl md:text-4xl">In 60 minuten van vraag naar richting.</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {meekrijg.map((c) => (
            <div key={c.title} className="rounded-2xl border border-line bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <h3 className="font-serif text-lg text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Calendly-embed placeholder */}
      <Section tone="canvas" id="plannen">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">Kies een moment</p>
          <h2 className="h-display mt-3 text-3xl md:text-4xl">Plan direct in onze agenda.</h2>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-purple-deep" style={{ minHeight: 600 }}>
          <div className="flex h-[600px] flex-col items-center justify-center px-6 text-center text-white">
            <span className="text-4xl">📅</span>
            <p className="mt-4 font-serif text-2xl">Calendly-agenda</p>
            <p className="mt-2 max-w-md text-white/70">
              Hier verschijnt de Calendly-planner. Tot die live staat, mail je ons gerust direct.
            </p>
            <a href="mailto:info@kobeon.nl?subject=Discovery-sessie%20plannen" className="btn-primary mt-6">
              Plan via e-mail
            </a>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="light">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">Veelgestelde vragen</p>
          <h2 className="h-display mt-3 text-3xl md:text-4xl">Goed om te weten.</h2>
        </div>
        <div className="mt-10">
          <Accordion items={faq} />
        </div>
      </Section>
    </>
  );
}
