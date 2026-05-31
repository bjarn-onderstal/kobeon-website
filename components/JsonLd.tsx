import { site } from "@/lib/siteConfig";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Noordzeelaan 50",
      postalCode: "8017 JW",
      addressLocality: "Zwolle",
      addressCountry: "NL",
    },
    description: site.description,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
