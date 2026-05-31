"use client";
import { useEffect, useRef, useState } from "react";

// Telt het numerieke deel één keer op wanneer het in beeld komt en stopt daarna
// op het eindcijfer; prefix/suffix (zoals €, +, ×, wkn) blijft behouden.
export default function StatCounter({ value }: { value: string }) {
  const match = value.match(/([^\d]*)(\d+(?:[.,]\d+)?)(.*)/);
  const ref = useRef<HTMLSpanElement>(null);
  const playedRef = useRef(false);
  const [display, setDisplay] = useState(match ? match[1] + "0" + match[3] : value);

  // Afhankelijk van de stabiele `value`-string (niet van het match-array, dat
  // elke render nieuw is — dat liet de teller eindeloos herstarten).
  useEffect(() => {
    const m = value.match(/([^\d]*)(\d+(?:[.,]\d+)?)(.*)/);
    if (!m) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const prefix = m[1];
    const target = parseFloat(m[2].replace(",", "."));
    const decimals = m[2].includes(",") || m[2].includes(".") ? 1 : 0;
    const suffix = m[3];

    let raf = 0;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting || playedRef.current) return;
      playedRef.current = true; // speelt maar één keer
      io.disconnect();
      const start = performance.now();
      const dur = 1200;
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const v = target * (1 - Math.pow(1 - p, 3));
        setDisplay(prefix + v.toFixed(decimals) + suffix);
        if (p < 1) raf = requestAnimationFrame(tick);
        else setDisplay(prefix + target.toFixed(decimals) + suffix); // exact eindcijfer
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });

    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value]);

  return <span ref={ref}>{match ? display : value}</span>;
}
