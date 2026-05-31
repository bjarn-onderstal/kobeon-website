"use client";
import { motion } from "framer-motion";
import StatCounter from "./StatCounter";

export default function FloatingMetric({
  value,
  label,
  className = "",
  delay = 0,
}: {
  value: string;
  label: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`rounded-xl border border-line bg-white/90 px-4 py-3 shadow-lift backdrop-blur ${className}`}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div className="text-lg font-bold text-ink">
        <StatCounter value={value} />
      </div>
      <div className="text-xs text-muted">{label}</div>
    </motion.div>
  );
}
