"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mockTokens, type MockTheme } from "@/lib/mockTheme";
import { useInView } from "@/lib/useInView";

const RECORDS = ["Batch 1.024", "Batch 1.025", "Batch 1.026", "Batch 1.027"];
const TARGET = 94;

// AI Development: de loss-curve tekent zich naar beneden, de accuraatheid telt op
// naar 94% en datarecords stromen binnen. Elke cyclus speelt opnieuw af.
export default function MockTraining({ theme = "light" }: { theme?: MockTheme }) {
  const t = mockTokens(theme);
  const { ref, inView } = useInView<HTMLDivElement>();
  const [cycle, setCycle] = useState(0);
  const [acc, setAcc] = useState(0);

  // herhaal de hele cyclus zolang in beeld
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setCycle((c) => c + 1), 4800);
    return () => clearInterval(id);
  }, [inView]);

  // accuraatheid telt op naar 94% bij elke cyclus
  useEffect(() => {
    if (!inView) return;
    setAcc(0);
    const start = performance.now();
    const dur = 2400;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setAcc(Math.round(TARGET * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, cycle]);

  return (
    <div ref={ref} className={`rounded-xl ${t.surface} p-4`} style={{ minHeight: 268 }}>
      <div className="mb-3 flex items-center justify-between">
        <span className={`text-xs font-semibold uppercase tracking-wide ${t.muted}`}>Model trainen</span>
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-bold text-teal">{acc}%</span>
          <span className={`text-[10px] ${t.muted}`}>accuraat</span>
        </div>
      </div>

      {/* loss-curve */}
      <div className={`rounded-lg border ${t.tile} p-3`}>
        <svg viewBox="0 0 200 80" className="h-24 w-full" preserveAspectRatio="none">
          <motion.path
            key={cycle}
            d="M0,10 C36,16 56,52 100,60 S164,76 200,78"
            fill="none"
            stroke="url(#lossgrad)"
            strokeWidth={2.5}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.4, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="lossgrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5348CE" />
              <stop offset="100%" stopColor="#13A6A6" />
            </linearGradient>
          </defs>
        </svg>
        <div className={`text-[10px] ${t.muted}`}>Loss daalt per epoch</div>
      </div>

      {/* datarecords stromen binnen */}
      <div className="mt-3 space-y-1.5">
        {RECORDS.map((r, i) => (
          <motion.div
            key={`${cycle}-${r}`}
            className={`flex items-center justify-between rounded-md border px-3 py-1.5 text-xs ${t.tile} ${t.text}`}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.35, duration: 0.4 }}
          >
            <span>{r}</span>
            <span className="font-semibold text-teal">✓ ingeladen</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
