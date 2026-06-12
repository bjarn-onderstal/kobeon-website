import type { Metadata } from "next";
import ProjectenClient from "@/components/ProjectenClient";

const title = "Projecten · Mendix & AI-cases met resultaat";
const description =
  "Bekijk Kobeons Mendix- en AI-projecten: van HomeZero en Petje af tot de Rechtspraak. Echte cases met meetbaar resultaat: een werkende MVP in zes weken.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projecten" },
  openGraph: { title: `${title} | Kobeon`, description, url: "/projecten", type: "website" },
};

export default function Page() {
  return <ProjectenClient />;
}
