import { clients } from "@/lib/siteConfig";

export default function LogoStrip() {
  return (
    <section className="bg-white">
      <div className="container-x py-12">
        <p className="text-center text-sm text-muted">
          Software voor <span className="font-semibold text-ink">ABN AMRO</span>,{" "}
          <span className="font-semibold text-ink">Zilveren Kruis</span> en de{" "}
          <span className="font-semibold text-ink">Rechtspraak</span> — en voor groeiende organisaties die dezelfde kwaliteit eisen.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
          {clients.map((c) => (
            <span key={c} className="text-base font-semibold tracking-tight text-ink/70">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
