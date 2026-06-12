import Link from "next/link";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/siteConfig";

export default function Projecten() {
  return (
    <Section tone="light" id="projecten">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple">Projecten</p>
        <h2 className="h-display mt-3 text-3xl md:text-5xl">
          Industrieën die we al <span className="gradient-text">gemoderniseerd hebben.</span>
        </h2>
        <p className="mt-4 text-lg text-muted">
          Echte oplossingen, echt resultaat. Van papieren administratie naar werkende software. In weken, niet jaren.
        </p>
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      <div className="mt-12">
        <Link href="/projecten" className="group inline-flex items-center gap-1.5 font-semibold text-purple">
          Bekijk alle projecten
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </Section>
  );
}
