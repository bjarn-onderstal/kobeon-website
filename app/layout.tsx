import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/siteConfig";

const sans = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-sans" });

// Koppen: Atyp Display (Kobeon brand-font). Vult de --font-serif variabele die
// .h-display en de Tailwind `font-serif` family gebruiken.
const display = localFont({
  src: "./fonts/AtypDisplay-Semibold.otf",
  weight: "600",
  display: "swap",
  variable: "--font-serif",
});

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
    <html lang="nl" className={`${sans.variable} ${display.variable}`}>
      <body>
        <JsonLd />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
