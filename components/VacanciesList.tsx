"use client";
import { useState } from "react";
import VacancyCard from "@/components/VacancyCard";
import { vacancies, vacancyCategories } from "@/lib/siteConfig";

export default function VacanciesList() {
  const [active, setActive] = useState("Alle");
  // De open sollicitatie blijft altijd zichtbaar (categorie "Alle").
  const shown = vacancies.filter((v) => active === "Alle" || v.category === active || v.open);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {vacancyCategories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              active === c
                ? "border-purple bg-purple text-white"
                : "border-line bg-white text-muted hover:border-purple hover:text-purple"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((v) => (
          <VacancyCard key={v.slug} vacancy={v} />
        ))}
      </div>
    </div>
  );
}
