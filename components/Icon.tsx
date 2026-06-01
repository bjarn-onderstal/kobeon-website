import type { SVGProps } from "react";

// Lichtgewicht line-icon set (geen externe dependency). Eén consistente stijl:
// stroke = currentColor, geen fill, ronde uiteinden. `name` = dienst- of sector-slug.
const paths: Record<string, JSX.Element> = {
  // Diensten
  "procesautomatisering": (
    <>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 4v5h-5" />
    </>
  ),
  "agentic-ai": (
    <>
      <rect x="4.5" y="8" width="15" height="11" rx="2.5" />
      <path d="M12 8V5" />
      <circle cx="12" cy="3.6" r="1.1" />
      <circle cx="9.3" cy="13" r="1" />
      <circle cx="14.7" cy="13" r="1" />
      <path d="M9.5 16h5" />
    </>
  ),
  "ai-development": (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <circle cx="12" cy="12" r="1.6" />
      <path d="M10 7V4M14 7V4M10 20v-3M14 20v-3M7 10H4M7 14H4M20 10h-3M20 14h-3" />
    </>
  ),
  "systeemintegratie": (
    <>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <path d="M7.7 7.6 10.6 16M16.3 7.6 13.4 16M8.2 6h7.6" />
    </>
  ),
  "app-ontwikkeling": (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <path d="M11 18h2" />
    </>
  ),
  "portalen-dashboards": (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 9h16" />
      <path d="M8 16v-3M12 16v-4M16 16v-2" />
    </>
  ),
  "legacy-modernisering": (
    <>
      <path d="M12 21V9" />
      <path d="m7 14 5-5 5 5" />
      <path d="M5 4h14" />
    </>
  ),
  "design-prototyping": (
    <>
      <path d="M16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1 1-4z" />
      <path d="m14.5 6.5 3 3" />
    </>
  ),
  "it-consultancy": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5z" />
    </>
  ),
  // Sectoren
  "sierteelt": (
    <>
      <path d="M12 20v-7" />
      <path d="M12 13c0-3.3 2.7-5 5.5-5 .2 3-2 5-5.5 5z" />
      <path d="M12 14c0-2.6-2.2-4.3-5-4.3.1 2.6 2.1 4.3 5 4.3z" />
    </>
  ),
  "detachering": (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M4 20a5 5 0 0 1 10 0" />
      <path d="M15.5 5.6a3 3 0 0 1 0 5.8" />
      <path d="M17 14.2A5 5 0 0 1 20 19" />
    </>
  ),
  "semi-publiek": (
    <>
      <path d="M12 3l7 3v5c0 4.4-3 7.9-7 9.5C8 18.9 5 15.4 5 11V6z" />
      <path d="m9.2 11.8 2 2 3.6-3.8" />
    </>
  ),
  "onderwijs": (
    <>
      <path d="M2.5 9 12 5l9.5 4L12 13z" />
      <path d="M6.5 11v4.2c0 1 2.5 2.3 5.5 2.3s5.5-1.3 5.5-2.3V11" />
      <path d="M21.5 9v5" />
    </>
  ),
  "kinderopvang": (
    <>
      <path d="M12 20.5S4 16 4 9.8C4 7 6 5.2 8.3 5.2c1.6 0 2.9 1 3.7 2 .8-1 2.1-2 3.7-2C18 5.2 20 7 20 9.8c0 6.2-8 10.7-8 10.7z" />
    </>
  ),
  "maakindustrie": (
    <>
      <path d="M3 21V10l5.5 3.5V10L14 13.5V8l6 3.5V21z" />
      <path d="M3 21h18" />
      <path d="M8 21v-3h3v3" />
    </>
  ),
};

export default function Icon({ name, ...props }: { name: string } & SVGProps<SVGSVGElement>) {
  const path = paths[name];
  if (!path) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {path}
    </svg>
  );
}
