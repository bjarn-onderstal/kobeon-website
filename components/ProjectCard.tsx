"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import DeviceFrame from "@/components/DeviceFrame";
import MiniMock from "@/components/MiniMock";
import type { projects } from "@/lib/siteConfig";

type Project = (typeof projects)[number];

const dot: Record<Project["accent"], string> = {
  purple: "bg-purple",
  teal: "bg-teal",
  yellow: "bg-yellow",
};

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const { name, sector, metric, accent, transformation, kind, soon, slug } = project;

  const inner = (
    <>
      <div className={`relative transition-transform duration-300 group-hover:-translate-y-1 ${soon ? "rounded-2xl border-2 border-dashed border-line p-2" : ""}`}>
        <DeviceFrame theme="light" url={`${slug}.kobeon.nl`}>
          <MiniMock kind={kind} />
        </DeviceFrame>
        {soon && (
          <span className="absolute right-4 top-4 rounded-full bg-ink/80 px-2.5 py-1 text-[10px] font-semibold text-white">
            Binnenkort
          </span>
        )}
      </div>

      <div className="mt-4">
        <span className="chip border-line bg-canvas text-xs text-muted">{sector}</span>
        <h3 className="h-display mt-3 text-xl">{name}</h3>
        <div className="mt-1 flex items-center gap-2">
          <span className={`inline-block h-2 w-2 rounded-full ${dot[accent]}`} />
          <span className="text-sm font-semibold text-ink">{metric}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">{transformation}</p>
        {!soon && (
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-purple opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Bekijk case <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        )}
      </div>
    </>
  );

  return (
    <motion.article
      className={`group ${soon ? "opacity-70" : ""}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      {soon ? inner : <Link href={`/projecten/${slug}`}>{inner}</Link>}
    </motion.article>
  );
}
