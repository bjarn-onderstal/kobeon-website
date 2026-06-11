"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mockTokens, type MockTheme } from "@/lib/mockTheme";
import { useInView } from "@/lib/useInView";

const NAV = ["Dashboard", "Aanvragen", "Documenten", "Instellingen"];
const ROWS = [
  { id: "#1042", name: "J. de Vries" },
  { id: "#1043", name: "M. Bakker" },
  { id: "#1044", name: "S. el Amrani" },
];

// Portalen & dashboards: zelfservice-portaal met zijbalk, tabel waarvan de rijen
// inladen en een statusbadge die van "In behandeling" naar "Goedgekeurd" omklapt.
export default function MockPortal({ theme = "light" }: { theme?: MockTheme }) {
  const t = mockTokens(theme);
  const { ref, inView } = useInView<HTMLDivElement>();
  const [cycle, setCycle] = useState(0);
  const [approved, setApproved] = useState(false);

  // Loopt zolang in beeld: rijen laden in, de laatste klapt naar "Goedgekeurd",
  // daarna start de cyclus opnieuw.
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setCycle((c) => c + 1), 5200);
    return () => clearInterval(id);
  }, [inView]);

  useEffect(() => {
    if (!inView) return;
    setApproved(false);
    const to = setTimeout(() => setApproved(true), 2000);
    return () => clearTimeout(to);
  }, [inView, cycle]);

  return (
    <div ref={ref} className={`flex overflow-hidden rounded-xl ${t.surface}`} style={{ minHeight: 268 }}>
      {/* zijbalk */}
      <div className={`hidden w-32 shrink-0 border-r p-3 sm:block ${t.light ? "border-line bg-canvas" : "border-white/10 bg-white/5"}`}>
        <div className="mb-3 flex items-center gap-2">
          <span className="h-5 w-5 rounded-md bg-purple" />
          <span className={`text-xs font-bold ${t.text}`}>Portaal</span>
        </div>
        <div className="space-y-1">
          {NAV.map((n, i) => (
            <div
              key={n}
              className={`rounded-md px-2 py-1.5 text-[11px] font-medium ${
                i === 1 ? "bg-purple/10 text-purple" : t.muted
              }`}
            >
              {n}
            </div>
          ))}
        </div>
      </div>

      {/* hoofdvlak */}
      <div className="flex-1 p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className={`text-sm font-semibold ${t.text}`}>Aanvragen</span>
          <span className={`text-[10px] ${t.muted}`}>3 open</span>
        </div>
        <div className="space-y-2">
          {ROWS.map((row, i) => {
            const isLast = i === ROWS.length - 1;
            const done = isLast && approved;
            return (
              <motion.div
                key={`${cycle}-${row.id}`}
                className={`flex items-center justify-between rounded-lg border px-3 py-2 ${t.tile}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 24, delay: i * 0.28 }}
              >
                <div>
                  <div className={`text-xs font-semibold ${t.text}`}>{row.id}</div>
                  <div className={`text-[11px] ${t.muted}`}>{row.name}</div>
                </div>
                <motion.span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                    done ? "bg-teal/15 text-teal" : "bg-yellow/15 text-yellow"
                  }`}
                  animate={{ scale: done ? [1, 1.18, 1] : 1 }}
                  transition={{ type: "spring", stiffness: 420, damping: 14 }}
                >
                  {done ? "Goedgekeurd" : "In behandeling"}
                </motion.span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
