"use client";
import { motion } from "framer-motion";

type Tone = "light" | "canvas" | "purplebg" | "tealbg" | "deep" | "purple" | "dark";
const bg: Record<Tone, string> = {
  light: "bg-white text-ink",
  canvas: "bg-canvas text-ink",
  purplebg: "bg-purplebg text-ink",
  tealbg: "bg-tealbg text-ink",
  deep: "bg-purple-deep text-white",
  purple: "bg-purple text-white",
  dark: "bg-dark text-white",
};

export default function Section({
  tone = "light",
  children,
  className = "",
  id,
}: {
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`${bg[tone]} ${className}`}>
      <motion.div
        className="container-x py-20 md:py-28"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
