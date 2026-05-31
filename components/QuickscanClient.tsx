"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const SCORE = 62;
const R = 52;
const CIRC = 2 * Math.PI * R;

const dimensionLabels = ["Processen", "Integraties", "AI-gereedheid", "Security", "Schaalbaarheid"];

const scanMessages = [
  "Websitestructuur analyseren…",
  "Automatiseringspotentieel bepalen…",
  "AI-integratie scannen…",
  "Security-baseline controleren…",
  "Rapport samenstellen…",
];

const dimensions = [
  { label: "Procesautomatisering", score: 4, verdict: "Veel handmatige stappen — hoog automatiseringspotentieel." },
  { label: "Systeemintegratie", score: 3, verdict: "Systemen werken nog los van elkaar; koppelen levert direct winst op." },
  { label: "AI-gereedheid", score: 5, verdict: "Basis aanwezig; met de juiste data en governance snel op te schalen." },
  { label: "Schaalbaarheid", score: 6, verdict: "Redelijk schaalbaar, maar legacy remt groei op termijn." },
  { label: "Security", score: 7, verdict: "Solide baseline; klaar te maken voor NIS2 en ISO 27001." },
];

const recommendations: { accent: "purple" | "teal" | "yellow"; title: string; body: string }[] = [
  { accent: "purple", title: "Automatiseer je kernproces", body: "Begin met het proces met de meeste handmatige stappen — daar zit de snelste tijdwinst." },
  { accent: "teal", title: "Verbind je systemen", body: "Koppel je bestaande systemen zodat data één keer wordt ingevoerd en overal klopt." },
  { accent: "yellow", title: "Maak AI productieklaar", body: "Zet een eerste agentic workflow op met governance ingebouwd — geen eindeloze pilot." },
];

const recAccent = { purple: "border-purple bg-purplebg", teal: "border-teal bg-tealbg", yellow: "border-yellow bg-yellow/10" };

export default function QuickscanClient() {
  const [phase, setPhase] = useState<"input" | "scanning" | "results">("input");
  const [url, setUrl] = useState("");
  const [msgIdx, setMsgIdx] = useState(0);
  const [gauge, setGauge] = useState(0);

  function start(value: string) {
    if (!value.trim()) return;
    const u = new URL(window.location.href);
    u.searchParams.set("url", value);
    window.history.replaceState({}, "", u.toString());
    setPhase("scanning");
  }

  // ?url= uitlezen en direct scannen (deelbare link)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("url");
    if (q) {
      setUrl(q);
      setPhase("scanning");
    }
  }, []);

  // scanning: berichten rouleren + na 3s naar resultaten
  useEffect(() => {
    if (phase !== "scanning") return;
    setMsgIdx(0);
    const id = setInterval(() => setMsgIdx((i) => (i + 1) % scanMessages.length), 600);
    const done = setTimeout(() => setPhase("results"), 3000);
    return () => { clearInterval(id); clearTimeout(done); };
  }, [phase]);

  // resultaten: gauge telt één keer naar 62 en blijft staan
  useEffect(() => {
    if (phase !== "results") return;
    let raf = 0;
    const startT = performance.now();
    const dur = 1200;
    const tick = (now: number) => {
      const p = Math.min((now - startT) / dur, 1);
      setGauge(Math.round(SCORE * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setGauge(SCORE);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  // ---- INPUT + SCANNING (diep-paars hero) ----
  if (phase !== "results") {
    return (
      <section className="relative flex min-h-screen items-center overflow-hidden bg-purple-deep text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(55% 55% at 80% 20%, rgba(19,166,166,0.22), transparent), radial-gradient(50% 50% at 10% 90%, rgba(83,72,206,0.32), transparent)" }}
        />
        <div className="container-x relative py-24">
          {phase === "input" ? (
            <div className="mx-auto max-w-2xl text-center">
              <span className="chip border-white/20 bg-white/10 text-yellow">GRATIS QUICKSCAN</span>
              <h1 className="h-display mt-6 text-4xl md:text-6xl">
                Hoe digitaal volwassen is <span className="text-yellow">jouw organisatie?</span>
              </h1>
              <p className="mt-5 text-lg text-white/75">
                Vul je website-URL in en ontvang in seconden een indicatie van je automatiserings-, integratie- en AI-kansen.
              </p>
              <form
                onSubmit={(e) => { e.preventDefault(); start(url); }}
                className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
              >
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://uwbedrijf.nl"
                  className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-teal focus:bg-white/15 focus:ring-2 focus:ring-teal/40"
                />
                <button type="submit" className="btn-primary justify-center whitespace-nowrap">Start Quickscan →</button>
              </form>
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {dimensionLabels.map((d) => (
                  <span key={d} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">{d}</span>
                ))}
              </div>
            </div>
          ) : (
            <div className="mx-auto flex max-w-md flex-col items-center text-center">
              {/* pulserende ringen + roterende gradient-ring */}
              <div className="relative h-40 w-40">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="absolute inset-0 rounded-full border border-teal/30"
                    animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
                  />
                ))}
                <motion.span
                  className="absolute inset-3 rounded-full"
                  style={{ background: "conic-gradient(from 0deg,#13A6A6,#5348CE,#13A6A6)", WebkitMask: "radial-gradient(farthest-side,transparent calc(100% - 8px),#000 0)", mask: "radial-gradient(farthest-side,transparent calc(100% - 8px),#000 0)" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center font-serif text-3xl">⌕</div>
              </div>
              <p className="mt-8 h-6 text-white/80">{scanMessages[msgIdx]}</p>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg,#5348CE,#13A6A6)" }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // ---- RESULTATEN (licht) ----
  const offset = CIRC * (1 - SCORE / 100);
  return (
    <section className="bg-white">
      <div className="container-x py-24 pt-32">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple">Quickscan-resultaat</p>
        <h1 className="h-display mt-3 text-3xl md:text-5xl">
          Jouw volwassenheidsscore <span className="gradient-text">in één oogopslag.</span>
        </h1>
        {url && <p className="mt-2 text-sm text-muted">Indicatie voor {url}</p>}

        {/* gauge + samenvatting */}
        <div className="mt-10 flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="relative h-44 w-44 shrink-0">
            <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
              <circle cx="60" cy="60" r={R} fill="none" stroke="#E6E6EF" strokeWidth="10" />
              <motion.circle
                cx="60" cy="60" r={R} fill="none" stroke="url(#qsgrad)" strokeWidth="10" strokeLinecap="round"
                strokeDasharray={CIRC}
                initial={{ strokeDashoffset: CIRC }}
                animate={{ strokeDashoffset: offset }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="qsgrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3A0CA3" />
                  <stop offset="100%" stopColor="#13A6A6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-serif text-4xl text-ink">{gauge}</span>
              <span className="text-xs text-muted">/ 100</span>
            </div>
          </div>
          <p className="max-w-md text-lg text-muted">
            Een degelijke basis met duidelijke groeikansen. De grootste winst zit in procesautomatisering en het verbinden van je systemen — precies waar wij in zes weken een werkende MVP voor neerzetten.
          </p>
        </div>

        {/* dimensie-kaarten */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dimensions.map((d, i) => (
            <motion.div
              key={d.label}
              className="rounded-2xl border border-line bg-canvas p-6"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-lg text-ink">{d.label}</h3>
                <span className="text-sm font-bold text-purple">{d.score}/10</span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg,#5348CE,#13A6A6)" }}
                  initial={{ width: 0 }}
                  animate={{ width: `${d.score * 10}%` }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{d.verdict}</p>
            </motion.div>
          ))}
        </div>

        {/* top 3 aanbevelingen */}
        <h2 className="h-display mt-16 text-2xl md:text-3xl">Top 3 aanbevelingen</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {recommendations.map((r, i) => (
            <div key={r.title} className={`rounded-2xl border-l-4 ${recAccent[r.accent]} p-6`}>
              <span className="text-sm font-bold text-ink">{i + 1}</span>
              <h3 className="mt-1 font-serif text-lg text-ink">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-purple-deep px-8 py-10 text-white md:flex md:items-center md:justify-between md:px-12">
          <div>
            <h2 className="h-display text-2xl md:text-3xl">Wil je dit concreet maken?</h2>
            <p className="mt-2 max-w-xl text-white/75">In een gratis Discovery-sessie vertalen we deze score naar een concreet plan met besparingspotentieel.</p>
          </div>
          <div className="mt-6 flex shrink-0 flex-col gap-3 sm:flex-row md:mt-0">
            <Link href="/discovery-sessie" className="btn-primary justify-center">Plan een Discovery-sessie</Link>
            <button onClick={() => window.print()} className="btn-ghost justify-center text-white">Download rapport als PDF →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
