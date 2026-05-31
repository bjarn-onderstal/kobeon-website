"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/siteConfig";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "bg-white/85 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <Link href="/" className={`text-xl font-bold ${scrolled ? "text-ink" : "text-white"}`}>
          Kobeon
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className={`text-sm font-medium transition hover:opacity-70 ${
                  scrolled ? "text-ink" : "text-white/90"
                }`}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/discovery-sessie" className="btn-primary text-sm">
          Plan een Discovery-sessie
        </Link>
      </nav>
    </header>
  );
}
