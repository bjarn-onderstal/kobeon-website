import Section from "@/components/Section";

export const metadata = { title: "Over kobeon" };

export default function Page() {
  return (
    <Section tone="light" className="pt-32">
      <h1 className="h-display text-4xl md:text-5xl capitalize">over kobeon</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Deze pagina is nog in aanbouw. Werk 'm uit met Claude Code op basis van de brief in <code>/docs</code>.
      </p>
    </Section>
  );
}
