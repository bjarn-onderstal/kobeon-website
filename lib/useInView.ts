import { useEffect, useRef, useState } from "react";

// Kleine IntersectionObserver-hook: true zolang de mock-UI in beeld is. De
// demo-animaties loopen dus zolang ze zichtbaar zijn en pauzeren buiten beeld
// (performance). Optellende eindcijfers regelen hun "tel één keer" zelf.
export function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}
