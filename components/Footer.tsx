import Link from "next/link";
import { site, nav } from "@/lib/siteConfig";

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
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">{n.label}</Link>
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
