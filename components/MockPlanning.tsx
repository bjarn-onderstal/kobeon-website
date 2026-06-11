"use client";
import { motion } from "framer-motion";
import { mockTokens, type MockTheme } from "@/lib/mockTheme";
import { useInView } from "@/lib/useInView";

// Planning over meerdere lijnen (Gantt-stijl): elke lijn/team heeft balken op
// een week-tijdlijn. De balken groeien één keer in beeld vanuit links — als een
// planbord dat zich vult. Licht, flat, merk-kleuren, geen glow.
const DAYS = ["ma", "di", "wo", "do", "vr"];

type Bar = { start: number; span: number; tone: "teal" | "purple" | "yellow"; label: string };
const LANES: { name: string; bars: Bar[] }[] = [
  { name: "Lijn A · Teelt", bars: [{ start: 0, span: 42, tone: "teal", label: "Oogst" }, { start: 60, span: 30, tone: "purple", label: "Sortering" }] },
  { name: "Lijn B · Verwerking", bars: [{ start: 24, span: 50, tone: "purple", label: "Batch 12" }] },
  { name: "Montage", bars: [{ start: 8, span: 28, tone: "yellow", label: "Order #88" }, { start: 52, span: 38, tone: "teal", label: "#92" }] },
  { name: "Field Service", bars: [{ start: 40, span: 55, tone: "purple", label: "Route NL-Oost" }] },
];

const barTone: Record<Bar["tone"], string> = {
  teal: "bg-teal text-white",
  purple: "bg-purple text-white",
  yellow: "bg-yellow text-ink",
};

export default function MockPlanning({ theme = "light" }: { theme?: MockTheme }) {
  const t = mockTokens(theme);
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`rounded-xl ${t.surface} p-4`} style={{ minHeight: 268 }}>
      <div className="mb-3 flex items-center justify-between">
        <span className={`text-xs font-semibold uppercase tracking-wide ${t.muted}`}>Planning · week 24</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-semibold text-teal">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-teal"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          live
        </span>
      </div>

      {/* dag-koppen */}
      <div className="mb-1.5 flex items-center">
        <div className="w-24 shrink-0" />
        <div className="flex flex-1">
          {DAYS.map((d) => (
            <span key={d} className={`flex-1 text-center text-[9px] uppercase ${t.muted}`}>{d}</span>
          ))}
        </div>
      </div>

      {/* lijnen met balken */}
      <div className="space-y-1.5">
        {LANES.map((lane, li) => (
          <div key={lane.name} className="flex items-center">
            <span className={`w-24 shrink-0 truncate pr-2 text-[11px] font-medium ${t.text}`}>{lane.name}</span>
            <div
              className="relative h-7 flex-1 rounded-md"
              style={{ backgroundImage: `repeating-linear-gradient(to right, ${t.line} 0 1px, transparent 1px 20%)` }}
            >
              {lane.bars.map((b, bi) => (
                <motion.div
                  key={bi}
                  className={`absolute top-1 flex h-5 items-center overflow-hidden rounded px-1.5 text-[9px] font-semibold ${barTone[b.tone]}`}
                  style={{ left: `${b.start}%`, width: `${b.span}%`, transformOrigin: "left" }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.15 + (li * 2 + bi) * 0.12 }}
                >
                  <span className="truncate">{b.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 'vandaag'-markering */}
      <div className="mt-1.5 flex items-center">
        <div className="w-24 shrink-0" />
        <div className="relative flex-1">
          <motion.div
            className="absolute -top-[68px] h-[68px] w-px bg-purple/40"
            style={{ left: "48%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 1 }}
          />
          <span className="block text-[9px] font-semibold text-purple" style={{ marginLeft: "44%" }}>vandaag</span>
        </div>
      </div>
    </div>
  );
}
