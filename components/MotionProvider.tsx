"use client";
import { MotionConfig } from "framer-motion";

// Laat alle Framer Motion-animaties de systeemvoorkeur "reduce motion" volgen.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
