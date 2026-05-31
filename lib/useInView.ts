import { useEffect, useRef, useState } from "react";

// Kleine IntersectionObserver-hook: vuurt één keer wanneer de mock-UI in beeld
// komt en blijft dan true. De demo's spelen zo één keer af en stoppen daarna —
// geen oneindige loop. Stopt met observeren zodra hij is getriggerd.
export function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}
