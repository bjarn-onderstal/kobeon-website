"use client";
import { motion } from "framer-motion";

// Lichte (default) of donkere variant van een geanimeerd dashboard-mock.
export default function MockDashboard({ theme = "light" }: { theme?: "light" | "dark" }) {
  const light = theme === "light";
  const surface = light ? "bg-white" : "bg-dark";
  const tile = light ? "bg-canvas border-line" : "bg-white/5 border-white/10";
  const textMuted = light ? "text-muted" : "text-white/50";
  const bars = [42, 68, 55, 80, 61, 92];

  return (
    <div className={`rounded-xl ${surface}`}>
      <div className="grid grid-cols-3 gap-3 p-4">
        {[
          { k: "Doorlooptijd", v: "−62%" },
          { k: "Tijdsbesparing", v: "+40 u/wk" },
          { k: "Gebruikers", v: "12.480" },
        ].map((t, i) => (
          <motion.div
            key={t.k}
            className={`rounded-lg border ${tile} p-3`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className={`text-[10px] uppercase tracking-wide ${textMuted}`}>{t.k}</div>
            <div className={`text-base font-bold ${light ? "text-ink" : "text-white"}`}>{t.v}</div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-end gap-2 px-4 pb-5 pt-1" style={{ height: 120 }}>
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-md"
            style={{ background: "linear-gradient(180deg,#5348CE,#13A6A6)" }}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: "easeOut" }}
          />
        ))}
      </div>
    </div>
  );
}
