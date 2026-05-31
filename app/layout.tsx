import type { Metadata } from "next";
import { DM_Serif_Display, Ubuntu } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/siteConfig";

const sans = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-sans" });
const serif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"], variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mendix Partner Nederland | Enterprise software & AI op maat – Kobeon",
    template: "%s | Kobeon",
  },
  description: site.description,
  openGraph: {
    title: "Mendix Partner Nederland | Enterprise software & AI op maat – Kobeon",
    description: site.description,
    url: site.url,
    siteName: "Kobeon",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <JsonLd />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
