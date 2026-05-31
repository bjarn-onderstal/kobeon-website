import type { Metadata } from "next";
import VacanciesList from "@/components/VacanciesList";

const title = "Vacatures — werken bij Kobeon";
const description =
  "Open posities bij Kobeon: Mendix Developer, Consultant, AI/Agentic Engineer, UX Designer, Sales en traineeship. Klein senior team, hybride werken, snelle groei.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/vacatures" },
  openGraph: { title: `${title} | Kobeon`, description, url: "/vacatures", type: "website" },
};

export default function Page() {
  return (
    <section className="bg-white">
      <div className="container-x pb-24 pt-32">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal">Open posities</p>
        <h1 className="h-display mt-3 text-4xl md:text-6xl">
          Word onderdeel van <span className="gradient-text">het team.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Een klein, senior Mendix-team met echte impact, korte lijnen en snelle groei. Vind jouw plek.
        </p>
        <div className="mt-10">
          <VacanciesList />
        </div>
      </div>
    </section>
  );
}
