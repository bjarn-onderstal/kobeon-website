"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mockTokens, type MockTheme } from "@/lib/mockTheme";
import { useInView } from "@/lib/useInView";

const STEPS = ["Order binnen", "Validatie", "Verwerking", "Factuur", "Klaar"];

// Procesautomatisering: taken kleuren één voor één van grijs → teal met een vink
// en de voortgangsbalk loopt vol. Speelt één keer af en blijft daarna op "klaar".
export default function MockWorkflow({ theme = "light" }: { theme?: MockTheme }) {
  const t = mockTokens(theme);
  const { ref, inView } = useInView<HTMLDivElement>();
  const [done, setDone] = useState(0);

  // Speelt één keer af: taken lopen door tot alles klaar is, daarna stopt het.
  useEffect(() => {
    if (!inView) return;
    let d = 0;
    const id = setInterval(() => {
      d += 1;
      setDone(d);
      if (d >= STEPS.length) clearInterval(id);
    }, 850);
    return () => clearInterval(id);
  }, [inView]);

  const progress = Math.min(done, STEPS.length) / STEPS.length;

  return (
    <div ref={ref} className={`rounded-xl ${t.surface} p-4`} style={{ minHeight: 268 }}>
      <div className="mb-3 flex items-center justify-between">
        <span className={`text-xs font-semibold uppercase tracking-wide ${t.muted}`}>Orderverwerking</span>
        <span className="rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-semibold text-teal">live</span>
      </div>

      <div className="space-y-2">
        {STEPS.map((label, i) => {
          const isDone = i < done;
          const isActive = i === done;
          return (
            <motion.div
              key={label}
              className={`flex items-center gap-3 rounded-lg border px-3 py-2 transition-colors ${
                isDone
                  ? "border-teal/40 bg-teal/10"
                  : isActive
                  ? "border-purple/40 bg-purple/5"
                  : t.idle
              }`}
              animate={{ scale: isActive ? 1.02 : 1 }}
              transition={{ duration: 0.25 }}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                  isDone ? "bg-teal text-white" : isActive ? "bg-purple text-white" : "bg-black/10 text-transparent"
                }`}
              >
                {isDone ? "✓" : isActive ? "•" : ""}
              </span>
              <span className={`text-sm font-medium ${isDone || isActive ? t.text : t.muted}`}>{label}</span>
            </motion.div>
          );
        })}
      </div>

      <div className={`mt-4 h-1.5 overflow-hidden rounded-full ${t.light ? "bg-line" : "bg-white/10"}`}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg,#5348CE,#13A6A6)" }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
