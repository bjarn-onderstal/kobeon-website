export default function DeviceFrame({
  theme = "light",
  url = "",
  children,
  className = "",
}: {
  theme?: "light" | "dark";
  url?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isLight = theme === "light";
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
        {url && (
          <span className={`ml-3 rounded-full px-3 py-0.5 text-xs ${isLight ? "bg-white text-muted border border-line" : "bg-white/10 text-white/60"}`}>
            {url}
          </span>
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
