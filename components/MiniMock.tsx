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
    case "agent":
      return (
        <div className="space-y-2" style={{ minHeight: 150 }}>
          <div className="flex gap-2">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple text-[8px] font-bold text-white">AI</span>
            <div className={`${tile} px-2 py-1.5 text-[10px] leading-snug text-ink`}>14 aanvragen verwerkt en gekoppeld aan Dynamics 365…</div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["Dynamics 365 ✓", "Document ✓", "E-mail ✓"].map((c) => (
              <span key={c} className="rounded-full bg-teal/10 px-2 py-0.5 text-[9px] font-medium text-teal">{c}</span>
            ))}
          </div>
          <div className={`${tile} flex items-center justify-between p-2`}>
            <span className="text-[10px] text-muted">Mens keurt goed</span>
            <span className="rounded-full bg-teal px-1.5 py-0.5 text-[9px] font-bold text-white">✓ akkoord</span>
          </div>
        </div>
      );
    case "training":
      return (
        <div className="space-y-1.5" style={{ minHeight: 150 }}>
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wide text-muted">Model-accuratesse</span>
            <span className="text-sm font-bold text-teal">94%</span>
          </div>
          <svg viewBox="0 0 200 92" className="w-full" style={{ height: 92 }} preserveAspectRatio="none">
            <polyline fill="none" stroke="#5348CE" strokeWidth="2.5" points="0,14 40,32 80,50 120,64 160,74 200,80" />
            <polyline fill="none" stroke="#13A6A6" strokeWidth="2.5" points="0,82 40,62 80,44 120,32 160,22 200,16" />
            <circle cx="200" cy="16" r="3.5" fill="#13A6A6" />
          </svg>
          <div className="flex justify-between text-[9px] text-muted"><span>epoch 1</span><span>epoch 40</span></div>
        </div>
      );
    case "integration":
      return (
        <div className="relative" style={{ minHeight: 150 }}>
          <svg viewBox="0 0 200 150" className="absolute inset-0 h-full w-full">
            {[[30, 32], [170, 32], [30, 118], [170, 118]].map(([x, y], i) => (
              <line key={i} x1={x} y1={y} x2={100} y2={75} stroke="#E6E6EF" strokeWidth="1.5" />
            ))}
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-purple px-2 py-1 text-[10px] font-bold text-white shadow-soft">Mendix</div>
          {[
            { l: "SAP", x: "15%", y: "21%" },
            { l: "Dynamics", x: "85%", y: "21%" },
            { l: "AFAS", x: "15%", y: "79%" },
            { l: "REST API", x: "85%", y: "79%" },
          ].map((n) => (
            <div key={n.l} className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-line bg-canvas px-1.5 py-0.5 text-[9px] font-medium text-ink" style={{ left: n.x, top: n.y }}>{n.l}</div>
          ))}
        </div>
      );
    case "app":
      return (
        <div className="mx-auto w-[110px] rounded-[14px] border-2 border-line bg-white p-2" style={{ minHeight: 150 }}>
          <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-line" />
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-bold text-ink">Taken</span>
            <span className="h-4 w-4 rounded-md bg-purple/15" />
          </div>
          <div className="space-y-1.5">
            {["Order #1042", "Werkbon #88", "Klant De Vries"].map((r, i) => (
              <div key={r} className="flex items-center gap-1.5 rounded-md border border-line bg-canvas p-1.5">
                <span className={`h-2 w-2 rounded-full ${i === 0 ? "bg-teal" : "bg-line"}`} />
                <span className="text-[9px] text-ink">{r}</span>
              </div>
            ))}
          </div>
        </div>
      );
    case "legacy":
      return (
        <div className="flex items-center gap-2" style={{ minHeight: 150 }}>
          <div className="flex-1 rounded-lg border border-line bg-[#1d1f23] p-2">
            <div className="mb-1.5 h-1.5 w-6 rounded bg-white/20" />
            <div className="space-y-1 font-mono">
              {["C:\\> RUN", "ERR 0x4F", "WAIT…"].map((l) => (
                <div key={l} className="text-[8px] text-white/45">{l}</div>
              ))}
            </div>
          </div>
          <span className="shrink-0 text-teal">→</span>
          <div className="flex-1 rounded-lg border border-line bg-white p-2 shadow-soft">
            <div className="mb-1.5 h-1.5 w-8 rounded bg-purple/30" />
            <div className="space-y-1">
              {[0, 1, 2].map((i) => <div key={i} className="h-2 rounded bg-canvas" />)}
            </div>
            <div className="mt-1.5 inline-block rounded-full bg-teal/15 px-1.5 text-[8px] font-semibold text-teal">live</div>
          </div>
        </div>
      );
    case "design":
      return (
        <div className="grid grid-cols-2 gap-2" style={{ minHeight: 150 }}>
          <div className="rounded-lg border border-dashed border-line p-2">
            <div className="mb-1.5 text-[8px] font-semibold uppercase tracking-wide text-muted">wireframe</div>
            <div className="space-y-1.5">
              <div className="h-3 rounded border border-dashed border-line" />
              <div className="h-8 rounded border border-dashed border-line" />
              <div className="flex gap-1">
                <div className="h-3 flex-1 rounded border border-dashed border-line" />
                <div className="h-3 flex-1 rounded border border-dashed border-line" />
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-line bg-canvas p-2">
            <div className="mb-1.5 text-[8px] font-semibold uppercase tracking-wide text-teal">live UI</div>
            <div className="space-y-1.5">
              <div className="h-3 rounded bg-purple/20" />
              <div className="h-8 rounded bg-gradient-to-br from-purple/20 to-teal/20" />
              <div className="flex gap-1">
                <div className="h-3 flex-1 rounded bg-teal/25" />
                <div className="h-3 flex-1 rounded bg-yellow/40" />
              </div>
            </div>
          </div>
        </div>
      );
    case "roadmap":
      return (
        <div className="space-y-3" style={{ minHeight: 150 }}>
          {[
            { n: "1", t: "Discovery" },
            { n: "2", t: "Architectuur & data" },
            { n: "3", t: "IT-roadmap" },
            { n: "4", t: "Bouwen" },
          ].map((s, i, arr) => (
            <div key={s.n} className="relative flex items-center gap-2">
              <span className={`relative z-10 flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold text-white ${i < 2 ? "bg-purple" : "bg-teal"}`}>{s.n}</span>
              <span className="text-[10px] font-medium text-ink">{s.t}</span>
              {i < arr.length - 1 && <span className="absolute left-[9px] top-5 h-3 w-px bg-line" />}
            </div>
          ))}
        </div>
      );
  }
}
