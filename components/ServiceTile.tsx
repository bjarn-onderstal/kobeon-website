"use client";
import { motion } from "framer-motion";

export type Service = {
  title: string;
  desc: string;
  icon: string;
  gradient: string;
  span: string;
};

export default function ServiceTile({ service, index }: { service: Service; index: number }) {
  const { title, desc, icon, gradient, span } = service;
  return (
    <motion.div
      className={`group relative min-h-[180px] overflow-hidden rounded-2xl shadow-soft ${span}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      {/* achtergrond — merk-gradient (later vervangbaar door svc-<id>.jpg) */}
      <div className={`absolute inset-0 ${gradient} transition-transform duration-500 group-hover:scale-105`} />
      {/* leesbaarheidsoverlay onderaan */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      {/* hover-rand */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition duration-300 group-hover:ring-white/40" />

      <div className="relative flex h-full flex-col justify-end p-5">
        <span className="text-2xl" aria-hidden>{icon}</span>
        <h3 className="mt-2 font-serif text-xl text-white">{title}</h3>
        <p className="mt-1 max-w-xs text-sm leading-relaxed text-white/80">
          {desc}
          <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </p>
      </div>
    </motion.div>
  );
}
