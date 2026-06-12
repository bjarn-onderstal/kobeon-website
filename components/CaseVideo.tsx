"use client";
import { useEffect, useState } from "react";

// Loopende case-video met respect voor prefers-reduced-motion. Server-render én
// reduced-motion tonen de poster (geen autoplay); pas na mount upgraden we naar
// de autoplay-video als de gebruiker geen reduced-motion heeft ingesteld.
export default function CaseVideo({
  mp4,
  webm,
  poster,
  label,
}: {
  mp4: string;
  webm?: string;
  poster: string;
  label: string;
}) {
  const [mode, setMode] = useState<"poster" | "video">("poster");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches) setMode("video");
    const onChange = (e: MediaQueryListEvent) => setMode(e.matches ? "poster" : "video");
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  if (mode === "poster") {
    // eslint-disable-next-line @next/next/no-img-element -- poster-fallback (reduced-motion / pre-mount)
    return <img src={poster} alt={label} className="block w-full rounded-lg" />;
  }

  return (
    <video
      className="block w-full rounded-lg"
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    >
      {webm && <source src={webm} type="video/webm" />}
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
