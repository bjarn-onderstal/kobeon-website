import Section from "@/components/Section";
import StatCounter from "@/components/StatCounter";
import { stats } from "@/lib/siteConfig";

export default function Stats() {
  return (
    <Section tone="deep">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-serif text-4xl text-yellow md:text-5xl">
              <StatCounter value={s.value} />
            </div>
            <div className="mt-2 text-sm text-white/70">{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
