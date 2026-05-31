"use client";
import { useState } from "react";
import StatCounter from "@/components/StatCounter";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/siteConfig";

const filters = ["Alle", ...Array.from(new Set(projects.map((p) => p.filter)))];
const sectorCount = new Set(projects.map((p) => p.sector)).size;

export default function ProjectenClient() {
  const [active, setActive] = useState("Alle");
  const shown = active === "Alle" ? projects : projects.filter((p) => p.filter === active);

  return (
    <div className="container-x pb-24 pt-32">
      <p className="text-sm font-semibold uppercase tracking-wide text-purple">Projecten</p>
      <h1 className="h-display mt-3 text-4xl md:text-6xl">
        Werk dat we al <span className="gradient-text">live hebben gebracht.</span>
      </h1>
      <p className="mt-5 flex flex-wrap gap-x-2 text-lg text-ink">
        <span className="font-bold"><StatCounter value={`${projects.length}`} /> projecten</span>
        <span className="text-muted">·</span>
        <span className="font-bold"><StatCounter value={`${sectorCount}`} /> sectoren</span>
      </p>

      {/* filterpills */}
      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              active === f
                ? "border-purple bg-purple text-white"
                : "border-line bg-white text-muted hover:border-purple hover:text-purple"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
