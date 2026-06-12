"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/siteConfig";

// Pagina's waarvan de eerste sectie een donkere (paarse) hero heeft.
// Op deze pagina's mag de nav transparant starten met witte tekst.
const DARK_HERO_PATHS = ["/", "/werkwijze", "/werken-bij", "/discovery-sessie", "/quickscan"];
function hasDarkHero(pathname: string) {
  if (DARK_HERO_PATHS.includes(pathname)) return true;
  // Alle sectordetailpagina's (/sectoren/sierteelt etc.) — niet de overzichtspagina /sectoren zelf
  if (pathname.startsWith("/sectoren/")) return true;
  return false;
}

function Chevron() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden className="opacity-70">
      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const darkHero = hasDarkHero(pathname);
  const frosted = scrolled || mobileOpen || !darkHero;
  const txt = frosted ? "text-ink" : "text-white/90";
  const close = () => setMobileOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        frosted ? "bg-white/90 shadow-soft backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <Link href="/" onClick={close} className="flex items-center" aria-label="Kobeon, naar home">
          {/* eslint-disable-next-line @next/next/no-img-element -- merklogo (SVG: symbool + woordmerk), twee-staten */}
          <img
            src={darkHero && !frosted ? "/logo-white.svg" : "/logo-gradient.svg"}
            alt="Kobeon"
            className="h-10 w-auto md:h-11"
          />
        </Link>

        {/* desktop */}
        <ul className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <li
              key={n.label}
              className="relative"
              onMouseEnter={() => n.columns && setOpen(n.label)}
              onMouseLeave={() => setOpen(null)}
            >
              {n.columns ? (
                <>
                  {n.href ? (
                    <Link href={n.href} className={`flex items-center gap-1 text-sm font-medium transition hover:opacity-70 ${txt}`}>
                      {n.label}
                      <Chevron />
                    </Link>
                  ) : (
                    <button className={`flex items-center gap-1 text-sm font-medium transition hover:opacity-70 ${txt}`} aria-expanded={open === n.label}>
                      {n.label}
                      <Chevron />
                    </button>
                  )}
                  {open === n.label && (
                    <div className="absolute left-0 top-full pt-3">
                      <div className="flex gap-8 rounded-xl border border-line bg-white p-5 shadow-lift">
                        {n.columns.map((col, ci) => (
                          <div key={ci} className="min-w-[170px]">
                            {col.heading && (
                              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-teal">{col.heading}</p>
                            )}
                            <ul className="space-y-1.5">
                              {col.items.map((it) => (
                                <li key={it.href}>
                                  <Link href={it.href} className="block text-sm text-ink transition hover:text-purple">
                                    {it.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link href={n.href!} className={`text-sm font-medium transition hover:opacity-70 ${txt}`}>
                  {n.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/discovery-sessie" className="btn-primary hidden text-sm md:inline-flex">
            Plan een Discovery-sessie
          </Link>
          <button
            className={`md:hidden ${!darkHero || frosted ? "text-ink" : "text-white"}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu openen of sluiten"
            aria-expanded={mobileOpen}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-white md:hidden">
          <div className="container-x space-y-5 py-6">
            {nav.map((n) => (
              <div key={n.label}>
                {n.columns ? (
                  <>
                    {n.href ? (
                      <Link href={n.href} onClick={close} className="font-serif text-lg text-ink">{n.label}</Link>
                    ) : (
                      <p className="font-serif text-lg text-ink">{n.label}</p>
                    )}
                    <div className="mt-2 space-y-3 border-l border-line pl-4">
                      {n.columns.map((col, ci) => (
                        <div key={ci}>
                          {col.heading && (
                            <p className="text-xs font-semibold uppercase tracking-wide text-teal">{col.heading}</p>
                          )}
                          <ul className="mt-1 space-y-1.5">
                            {col.items.map((it) => (
                              <li key={it.href}>
                                <Link href={it.href} onClick={close} className="block text-sm text-muted transition hover:text-purple">
                                  {it.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={n.href!} onClick={close} className="font-serif text-lg text-ink">{n.label}</Link>
                )}
              </div>
            ))}
            <Link href="/discovery-sessie" onClick={close} className="btn-primary w-full justify-center">
              Plan een Discovery-sessie
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
