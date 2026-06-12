import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/siteConfig";
import ProjectPage from "@/components/ProjectPage";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.name}: ${project.transformation.replace(/\.$/, "")}`;
  const description = `${project.challenge.slice(0, 155)}`;
  return {
    title,
    description,
    alternates: { canonical: `/projecten/${slug}` },
    openGraph: {
      title: `${title} | Kobeon`,
      description,
      url: `/projecten/${slug}`,
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectPage project={project} />;
}
