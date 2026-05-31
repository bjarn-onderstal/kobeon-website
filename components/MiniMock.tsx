import type { ProjectKind } from "@/lib/siteConfig";

// Lichte, statische mini-mockups voor de projectkaarten — gestileerde fake-UI
// met merk-kleuren (geen zware animatie; de kaart zelf lift op hover).
const bar = "rounded bg-line";
const tile = "rounded-lg border border-line bg-canvas";

export default function MiniMock({ kind }: { kind: ProjectKind }) {
  switch (kind) {
    case "dashboard":
      return (
        <div className="space-y-3" style={{ minHeight: 150 }}>
          <div className="grid grid-cols-3 gap-2">
            {["−62%", "12.480", "€100K"].map((k) => (
              <div key={k} className={`${tile} p-2`}>
                <div className="h-1.5 w-8 rounded bg-line" />
                <div className="mt-1 text-xs font-bold text-ink">{k}</div>
              </div>
            ))}
          </div>
          <div className="flex items-end gap-1.5" style={{ height: 70 }}>
            {[40, 65, 52, 80, 60, 92].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: "linear-gradient(180deg,#5348CE,#13A6A6)" }} />
            ))}
          </div>
        </div>
      );
    case "portal":
      return (
        <div className="flex gap-3" style={{ minHeight: 150 }}>
          <div className="w-16 shrink-0 space-y-1.5">
            <div className="h-5 w-5 rounded-md bg-purple" />
            {[0, 1, 2].map((i) => <div key={i} className={`h-2 ${bar} ${i === 0 ? "bg-purple/30" : ""}`} />)}
          </div>
          <div className="flex-1 space-y-2">
            {["#1042", "#1043", "#1044"].map((r, i) => (
              <div key={r} className={`${tile} flex items-center justify-between p-2`}>
                <span className="text-[11px] font-semibold text-ink">{r}</span>
                <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${i === 0 ? "bg-teal/15 text-teal" : "bg-yellow/15 text-ink"}`}>
                  {i === 0 ? "Goedgekeurd" : "In behandeling"}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    case "workflow":
      return (
        <div className="space-y-2" style={{ minHeight: 150 }}>
          {["Order binnen", "Validatie", "Verwerking", "Klaar"].map((s, i) => (
            <div key={s} className={`flex items-center gap-2 rounded-lg border p-2 ${i < 3 ? "border-teal/40 bg-teal/10" : "border-line bg-canvas"}`}>
              <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold text-white ${i < 3 ? "bg-teal" : "bg-black/10"}`}>{i < 3 ? "✓" : ""}</span>
              <span className="text-[11px] font-medium text-ink">{s}</span>
            </div>
          ))}
        </div>
      );
    case "members":
      return (
        <div className="space-y-2" style={{ minHeight: 150 }}>
          <div className="flex items-center justify-between">
            <div className="h-2 w-16 rounded bg-line" />
            <span className="rounded-full bg-yellow/15 px-2 py-0.5 text-[9px] font-semibold text-ink">428 leden</span>
          </div>
          {["A. Jansen", "P. de Wit", "M. Visser", "K. Bos"].map((n) => (
            <div key={n} className={`${tile} flex items-center gap-2 p-2`}>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple/15 text-[9px] font-bold text-purple">{n[0]}</span>
              <span className="text-[11px] text-ink">{n}</span>
              <span className="ml-auto h-1.5 w-10 rounded bg-teal/40" />
            </div>
          ))}
        </div>
      );
    case "inspection":
      return (
        <div className="mx-auto w-[120px] rounded-2xl border-2 border-line bg-white p-2" style={{ minHeight: 150 }}>
          <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-line" />
          <div className="space-y-1.5">
            {["Perceel A", "Perceel B", "Perceel C"].map((p, i) => (
              <div key={p} className={`flex items-center justify-between rounded-md border p-1.5 ${i < 2 ? "border-teal/40 bg-teal/10" : "border-line"}`}>
                <span className="text-[10px] text-ink">{p}</span>
                <span className={`text-[10px] font-bold ${i < 2 ? "text-teal" : "text-muted"}`}>{i < 2 ? "✓" : "…"}</span>
              </div>
            ))}
          </div>
        </div>
      );
    case "search":
      return (
        <div className="space-y-2" style={{ minHeight: 150 }}>
          <div className={`${tile} flex items-center gap-2 p-2`}>
            <span className="text-purple">⌕</span>
            <span className="text-[11px] text-muted">jurisprudentie onrechtmatige daad…</span>
          </div>
          {["Uitspraak ECLI:NL:HR:2023", "Vergelijkbaar arrest 2021", "Relevante context"].map((r, i) => (
            <div key={r} className={`rounded-lg border p-2 ${i === 0 ? "border-purple/40 bg-purple/5" : "border-line bg-canvas"}`}>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-ink">{r}</span>
                <span className="rounded-full bg-teal/15 px-1.5 text-[9px] font-semibold text-teal">{95 - i * 12}%</span>
              </div>
            </div>
          ))}
        </div>
      );
    case "supply":
      return (
        <div className="flex items-center justify-between gap-1" style={{ minHeight: 150 }}>
          {["Kweker", "Veiling", "Transport", "Klant"].map((n, i, arr) => (
            <div key={n} className="flex items-center gap-1">
              <div className={`${tile} px-2 py-3 text-center`}>
                <div className="mx-auto h-4 w-4 rounded bg-teal/40" />
                <div className="mt-1 text-[9px] text-ink">{n}</div>
              </div>
              {i < arr.length - 1 && <span className="text-teal">→</span>}
            </div>
          ))}
        </div>
      );
  }
}
