"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mockTokens, type MockTheme } from "@/lib/mockTheme";
import { useInView } from "@/lib/useInView";

// Field-service-app voor de monteur: een telefoon-scherm met werkorders die
// inschuiven, een order die naar "Klaar" omklapt en onderdelen-op-aanvraag.
// Offline-badge benadrukt het "ook in het veld"-voordeel. Loopt rustig in beeld.
const ORDERS = [
  { id: "#WO-1042", klant: "De Vries Kwekerij", taak: "Onderhoud sorteerlijn" },
  { id: "#WO-1043", klant: "Bakker Transport", taak: "Storing transportband" },
  { id: "#WO-1044", klant: "Meijer BV", taak: "Inspectie pompunit" },
];

export default function MockFieldService({ theme = "light" }: { theme?: MockTheme }) {
  const t = mockTokens(theme);
  const { ref, inView } = useInView<HTMLDivElement>();
  const [cycle, setCycle] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setCycle((c) => c + 1), 5200);
    return () => clearInterval(id);
  }, [inView]);

  useEffect(() => {
    if (!inView) return;
    setDone(false);
    const to = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(to);
  }, [inView, cycle]);

  return (
    <div ref={ref} className={`flex justify-center rounded-xl ${t.surface} p-3`} style={{ minHeight: 268 }}>
      <div className={`w-[190px] rounded-[20px] border-2 p-2.5 ${t.light ? "border-line bg-canvas" : "border-white/10 bg-black/30"}`}>
        <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-line" />
        <div className="mb-2 flex items-center justify-between px-0.5">
          <span className={`text-xs font-bold ${t.text}`}>Werkorders</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-yellow/15 px-1.5 py-0.5 text-[8px] font-semibold text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
            offline
          </span>
        </div>

        <div className="space-y-1.5">
          {ORDERS.map((o, i) => {
            const isDone = i === 0 && done;
            return (
              <motion.div
                key={`${cycle}-${o.id}`}
                className={`rounded-lg border p-2 ${t.tile}`}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 24, delay: i * 0.2 }}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-semibold ${t.text}`}>{o.id}</span>
                  <motion.span
                    className={`rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${
                      isDone ? "bg-teal/15 text-teal" : i === 0 ? "bg-purple/10 text-purple" : `bg-black/5 ${t.muted}`
                    }`}
                    animate={{ scale: isDone ? [1, 1.18, 1] : 1 }}
                    transition={{ type: "spring", stiffness: 420, damping: 14 }}
                  >
                    {isDone ? "Klaar ✓" : i === 0 ? "Bezig" : "Open"}
                  </motion.span>
                </div>
                <div className={`mt-0.5 text-[9px] ${t.muted}`}>{o.klant} · {o.taak}</div>
              </motion.div>
            );
          })}
        </div>

        <div className={`mt-2 flex items-center justify-center gap-1 rounded-lg border border-dashed py-1.5 text-[9px] ${t.muted} ${t.light ? "border-line" : "border-white/15"}`}>
          + Onderdeel op aanvraag
        </div>
      </div>
    </div>
  );
}
