import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services } from "@/lib/siteConfig";
import ServicePage from "@/components/ServicePage";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  const title = `${service.title}: Mendix implementatie op maat`;
  const fullDesc = `${service.heroLine} ${service.intro}`;
  const description = fullDesc.length > 157 ? `${fullDesc.slice(0, 154).trimEnd()}…` : fullDesc;
  return {
    title,
    description,
    alternates: { canonical: `/diensten/${slug}` },
    openGraph: {
      title: `${title} | Kobeon`,
      description,
      url: `/diensten/${slug}`,
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
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
