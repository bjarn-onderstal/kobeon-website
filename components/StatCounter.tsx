"use client";
import { useEffect, useRef, useState } from "react";

// Telt het numerieke deel op; prefix/suffix (zoals €, +, ×, wkn) blijft behouden.
export default function StatCounter({ value }: { value: string }) {
  const match = value.match(/([^\d]*)(\d+(?:[.,]\d+)?)(.*)/);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(match ? match[1] + "0" + match[3] : value);

  useEffect(() => {
    if (!match) return;
    const prefix = match[1], target = parseFloat(match[2].replace(",", ".")), suffix = match[3];
    let started = false;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started) {
        started = true;
        const start = performance.now();
        const dur = 1200;
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const v = target * (1 - Math.pow(1 - p, 3));
          const shown = Number.isInteger(target) ? Math.round(v).toString() : v.toFixed(0);
          setDisplay(prefix + shown + suffix);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [match]);

  return <span ref={ref}>{match ? display : value}</span>;
}
