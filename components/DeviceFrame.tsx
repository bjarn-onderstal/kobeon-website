export default function DeviceFrame({
  theme = "light",
  title = "",
  url = "",
  children,
  className = "",
}: {
  theme?: "light" | "dark";
  title?: string;
  /** @deprecated gebruik `title` — toont een app-titel i.p.v. een nep-URL */
  url?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isLight = theme === "light";
  const label = title || url;
  return (
    <div
      className={`overflow-hidden rounded-2xl border shadow-lift ${
        isLight ? "border-line bg-white" : "border-white/10 bg-dark"
      } ${className}`}
    >
      <div className={`flex items-center gap-2 px-4 py-3 ${isLight ? "bg-canvas" : "bg-black/30"}`}>
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
        {label && (
          <span className={`ml-3 inline-flex items-center gap-1.5 text-xs font-medium ${isLight ? "text-muted" : "text-white/60"}`}>
            <span className={`h-3.5 w-3.5 rounded-[5px] ${isLight ? "bg-purple/15" : "bg-white/15"}`} aria-hidden />
            {label}
          </span>
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
