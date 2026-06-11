"use client";
import { motion } from "framer-motion";
import { mockTokens, type MockTheme } from "@/lib/mockTheme";
import { useInView } from "@/lib/useInView";

// Homepage = enterprise-systemen. Sectorpagina's geven hun eigen `nodes` mee.
const DEFAULT_NODES = ["Dynamics 365", "SAP", "Azure", "REST API", "OpenAI"];

const CX = 150;
const CY = 120;
const RX = 122;
const RY = 88;

// Systeemintegratie: systemen rond een centrale Mendix-node, datapunten pulseren
// over de verbindingslijnen naar het midden.
export default function MockIntegration({
  theme = "light",
  nodes = DEFAULT_NODES,
}: {
  theme?: MockTheme;
  nodes?: string[];
}) {
  const t = mockTokens(theme);
  const { ref, inView } = useInView<HTMLDivElement>();

  const points = nodes.map((label, i) => {
    const angle = (-90 + (i * 360) / nodes.length) * (Math.PI / 180);
    return { label, x: CX + RX * Math.cos(angle), y: CY + RY * Math.sin(angle) };
  });

  return (
    <div ref={ref} className={`rounded-xl ${t.surface} p-4`} style={{ minHeight: 268 }}>
      <div className="mb-2 flex items-center justify-between">
        <span className={`text-xs font-semibold uppercase tracking-wide ${t.muted}`}>Systemen verbonden</span>
        <span className="rounded-full bg-purple/10 px-2 py-0.5 text-[10px] font-semibold text-purple">{nodes.length} koppelingen</span>
      </div>

      <div className="relative w-full" style={{ aspectRatio: "300 / 240" }}>
        <svg viewBox="0 0 300 240" className="absolute inset-0 h-full w-full">
          {points.map((p, i) => (
            <line
              key={`l-${i}`}
              x1={p.x}
              y1={p.y}
              x2={CX}
              y2={CY}
              stroke={t.line}
              strokeWidth={1.5}
            />
          ))}
          {inView &&
            points.map((p, i) => (
              <motion.circle
                key={`d-${i}`}
                r={3.5}
                fill={i % 2 === 0 ? "#13A6A6" : "#5348CE"}
                initial={{ cx: p.x, cy: p.y, opacity: 0 }}
                animate={{ cx: [p.x, CX], cy: [p.y, CY], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  repeatDelay: 0.6,
                  delay: i * 0.32,
                  ease: "easeInOut",
                }}
              />
            ))}
        </svg>

        {/* centrale Mendix-node (positionering en scale-in gescheiden) */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "50%", top: "50%" }}>
          <motion.div
            className="rounded-xl bg-purple px-3 py-1.5 text-xs font-bold text-white shadow-lift"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 17 }}
          >
            Mendix
          </motion.div>
        </div>

        {/* systeem-nodes — ploppen één voor één in vanuit het midden */}
        {points.map((p, i) => (
          <div
            key={`n-${i}`}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(p.x / 300) * 100}%`, top: `${(p.y / 240) * 100}%` }}
          >
            <motion.div
              className={`whitespace-nowrap rounded-lg border px-2 py-1 text-[11px] font-medium ${t.tile} ${t.text}`}
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 320, damping: 20, delay: 0.15 + i * 0.1 }}
            >
              {p.label}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
