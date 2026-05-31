"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-line border-t border-line">
      {items.map((f, i) => (
        <div key={i} className="py-5">
          <button
            className="flex w-full items-center justify-between text-left"
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
          >
            <span className="text-lg font-medium text-ink">{f.q}</span>
            <span className={`ml-4 text-2xl text-purple transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>+</span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden text-muted"
              >
                <span className="mt-3 block max-w-3xl leading-relaxed">{f.a}</span>
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
