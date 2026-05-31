type Accent = "purple" | "teal";
export default function SolutionCard({
  title, promise, body, tags, accent,
}: {
  title: string; promise: string; body: string; tags: string[]; accent: Accent;
}) {
  const ring = accent === "purple" ? "hover:border-purple" : "hover:border-teal";
  const dot = accent === "purple" ? "bg-purple" : "bg-teal";
  return (
    <div className={`group rounded-2xl border border-line bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift ${ring}`}>
      <span className={`inline-block h-2.5 w-2.5 rounded-full ${dot}`} />
      <h3 className="mt-4 font-serif text-2xl">{title}</h3>
      <p className="mt-1 font-medium text-ink">{promise}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full bg-canvas px-3 py-1 text-xs text-muted">{t}</span>
        ))}
      </div>
    </div>
  );
}
