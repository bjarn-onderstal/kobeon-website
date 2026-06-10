"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import DeviceFrame from "@/components/DeviceFrame";
import MockDashboard from "@/components/MockDashboard";
import FloatingMetric from "@/components/FloatingMetric";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-purple-deep text-white">
      {/* zachte, lichte gradient-gloed i.p.v. near-black */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "radial-gradient(60% 60% at 80% 20%, rgba(19,166,166,0.25), transparent), radial-gradient(50% 50% at 10% 90%, rgba(83,72,206,0.35), transparent)" }} />
      <div className="container-x relative grid items-center gap-12 pb-20 pt-32 md:grid-cols-2 md:pb-28 md:pt-40">
        <div>
          <span className="chip border-white/20 bg-white/10 text-teal-light">MENDIX CERTIFIED PARTNER · 9× GARTNER-LEIDER</span>
          <h1 className="h-display mt-6 text-4xl md:text-6xl">
            Elke organisatie weet dat digitaliseren moet.
            <span className="block text-white/80">De meeste weten alleen niet hoe.</span>
            <span className="block text-yellow">Wij wel.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            Kobeon bouwt enterprise-software op Mendix, het platform dat al negen jaar Gartner-Leider is.
            Van procesautomatisering tot AI op maat. Binnen zes weken draait je eerste werkende versie, met meetbaar resultaat.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/discovery-sessie" className="btn-primary">Plan een Discovery-sessie</Link>
            <Link href="/projecten" className="btn-ghost text-white">Bekijk klantverhalen</Link>
          </div>
          <p className="mt-4 text-sm text-white/50">Gratis · 60 minuten · daarna weet je precies waar je staat.</p>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <DeviceFrame theme="light" title="Kobeon · Dashboard">
            <MockDashboard theme="light" />
          </DeviceFrame>
          <FloatingMetric value="6 wkn" label="naar werkende MVP" className="absolute -left-4 -top-4" />
          <FloatingMetric value="€100K" label="bespaard per jaar" className="absolute -bottom-6 -right-4" delay={1} />
        </motion.div>
      </div>
    </section>
  );
}
