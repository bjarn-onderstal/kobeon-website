"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mockTokens, type MockTheme } from "@/lib/mockTheme";
import { useInView } from "@/lib/useInView";

const MESSAGE = "Ik verwerk 14 aanvragen en koppel ze aan Dynamics 365…";
const TOOLS = ["Dynamics 365 ✓", "Document gecontroleerd ✓", "E-mail verstuurd ✓"];

// Agentic AI: de agent typt een bericht, voert tool-calls uit (pills), een mens
// keurt goed (mens-in-de-loop), waarna het formulier zich vult. Daarna loopt het opnieuw.
export default function MockAgent({ theme = "light" }: { theme?: MockTheme }) {
  const t = mockTokens(theme);
  const { ref, inView } = useInView<HTMLDivElement>();
  const [phase, setPhase] = useState(0); // 0 typen · 1 tools · 2 goedkeuring · 3 formulier
  const [chars, setChars] = useState(0);
  const [pills, setPills] = useState(0);
  const [approved, setApproved] = useState(false);
  const [filled, setFilled] = useState(false);

  // Fase 0 — typen
  useEffect(() => {
    if (!inView || phase !== 0) return;
    setChars(0);
    setPills(0);
    setApproved(false);
    setFilled(false);
    let c = 0;
    let to: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      c += 1;
      setChars(c);
      if (c >= MESSAGE.length) {
        clearInterval(id);
        to = setTimeout(() => setPhase(1), 450);
      }
    }, 42);
    return () => { clearInterval(id); clearTimeout(to); };
  }, [inView, phase]);

  // Fase 1 — tool-calls
  useEffect(() => {
    if (!inView || phase !== 1) return;
    let p = 0;
    let to: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      p += 1;
      setPills(p);
      if (p >= TOOLS.length) {
        clearInterval(id);
        to = setTimeout(() => setPhase(2), 500);
      }
    }, 520);
    return () => { clearInterval(id); clearTimeout(to); };
  }, [inView, phase]);

  // Fase 2 — mens keurt goed
  useEffect(() => {
    if (!inView || phase !== 2) return;
    const to1 = setTimeout(() => setApproved(true), 500);
    const to2 = setTimeout(() => setPhase(3), 1200);
    return () => { clearTimeout(to1); clearTimeout(to2); };
  }, [inView, phase]);

  // Fase 3 — formulier vult + reset
  useEffect(() => {
    if (!inView || phase !== 3) return;
    const to1 = setTimeout(() => setFilled(true), 250);
    const to2 = setTimeout(() => setPhase(0), 2200);
    return () => { clearTimeout(to1); clearTimeout(to2); };
  }, [inView, phase]);

  return (
    <div ref={ref} className={`rounded-xl ${t.surface} p-4`} style={{ minHeight: 268 }}>
      {/* agent-bericht */}
      <div className="flex gap-2">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple text-xs font-bold text-white">AI</span>
        <div className={`rounded-2xl rounded-tl-sm border px-3 py-2 text-sm ${t.tile} ${t.text}`}>
          {MESSAGE.slice(0, chars)}
          {phase === 0 && <span className="ml-0.5 inline-block animate-pulse">▍</span>}
        </div>
      </div>

      {/* tool-calls */}
      <div className="mt-3 flex flex-wrap gap-2">
        <AnimatePresence>
          {TOOLS.slice(0, pills).map((tool) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="rounded-full bg-teal/10 px-2.5 py-1 text-[11px] font-medium text-teal"
            >
              {tool}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* mens-in-de-loop */}
      <div className={`mt-3 flex items-center justify-between rounded-lg border px-3 py-2 ${t.tile}`}>
        <span className={`text-xs font-medium ${t.muted}`}>Mens keurt goed</span>
        <motion.span
          className={`flex h-5 items-center gap-1 rounded-full px-2 text-[11px] font-bold ${
            approved ? "bg-teal text-white" : "bg-black/10 text-transparent"
          }`}
          animate={{ scale: approved ? [1, 1.15, 1] : 1 }}
          transition={{ duration: 0.4 }}
        >
          {approved ? "✓ akkoord" : "•"}
        </motion.span>
      </div>

      {/* auto-fill formulier */}
      <div className={`mt-3 grid grid-cols-2 gap-2`}>
        {[
          { k: "Aanvraag", v: "#1042" },
          { k: "Status", v: "Goedgekeurd" },
        ].map((f) => (
          <div key={f.k} className={`rounded-lg border px-3 py-2 ${t.tile}`}>
            <div className={`text-[10px] uppercase tracking-wide ${t.muted}`}>{f.k}</div>
            <motion.div
              className={`text-sm font-semibold ${t.text}`}
              animate={{ opacity: filled ? 1 : 0.25 }}
              transition={{ duration: 0.4 }}
            >
              {filled ? f.v : "…"}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
