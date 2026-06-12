import type { Metadata } from "next";
import QuickscanClient from "@/components/QuickscanClient";

const title = "Gratis Quickscan: hoe digitaal volwassen ben je?";
const description =
  "Doe de gratis Kobeon Quickscan: ontvang in seconden een indicatie van je automatiserings-, integratie- en AI-kansen, met een volwassenheidsscore en concrete aanbevelingen.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/quickscan" },
  openGraph: { title: `${title} | Kobeon`, description, url: "/quickscan", type: "website" },
};

export default function Page() {
  return <QuickscanClient />;
}
