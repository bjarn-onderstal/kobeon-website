import Link from "next/link";
import { site, nav } from "@/lib/siteConfig";

// Platte linklijst: items met eigen href blijven top-level; dropdowns zonder href
// (zoals "Over ons") klappen uit naar hun onderliggende pagina's.
const footerLinks = nav.flatMap((n) =>
  n.href ? [{ label: n.label, href: n.href }] : (n.columns?.flatMap((c) => c.items) ?? [])
);

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="h-px w-full bg-gradient-to-r from-purple to-teal" />
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="text-xl font-bold text-white">Kobeon</div>
          <p className="mt-3 text-sm">Enterprise-software op Mendix. Mendix Certified Partner.</p>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold text-white">Bedrijf</div>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold text-white">Contact</div>
          <ul className="space-y-2 text-sm">
            <li>{site.email}</li>
            <li>{site.phone}</li>
            <li>{site.address}</li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold text-white">Aan de slag</div>
          <Link href="/discovery-sessie" className="btn-primary text-sm">Plan een Discovery-sessie</Link>
        </div>
      </div>
      <div className="container-x border-t border-white/10 py-6 text-xs">
        © {new Date().getFullYear()} Kobeon · Privacy · Disclaimer
      </div>
    </footer>
  );
}
