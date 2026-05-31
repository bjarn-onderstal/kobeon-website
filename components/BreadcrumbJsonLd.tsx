import { site } from "@/lib/siteConfig";

// BreadcrumbList-schema voor SEO. Rendert alleen JSON-LD, geen UI.
export default function BreadcrumbJsonLd({ items }: { items: { label: string; href?: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      ...(it.href ? { item: `${site.url}${it.href}` } : {}),
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
