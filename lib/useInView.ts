import { useEffect, useRef, useState } from "react";

// Kleine IntersectionObserver-hook: laat loop-animaties alleen draaien wanneer
// de mock-UI in beeld is (performance + respecteert de "pauzeer buiten beeld"-regel).
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
