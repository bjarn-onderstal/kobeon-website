"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Section from "@/components/Section";

export default function QuickscanTeaser() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  return (
    <Section tone="purplebg" id="quickscan-teaser">
      <div className="mx-auto max-w-2xl text-center">
        <span className="chip border-line bg-white text-purple">Gratis Quickscan</span>
        <h2 className="h-display mt-5 text-3xl md:text-5xl">
          Hoe digitaal volwassen is <span className="gradient-text">jouw organisatie?</span>
        </h2>
        <p className="mt-4 text-lg text-muted">
          Vul je website-URL in en ontvang in seconden een indicatie van je automatiserings-, integratie- en AI-kansen.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push(`/quickscan${url.trim() ? `?url=${encodeURIComponent(url.trim())}` : ""}`);
          }}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://uwbedrijf.nl"
            className="flex-1 rounded-full border border-line bg-white px-5 py-3 text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/30"
          />
          <button type="submit" className="btn-primary justify-center whitespace-nowrap">Start Quickscan →</button>
        </form>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["Volwassenheidsscore", "Automatiseringskansen", "Persoonlijk advies"].map((c) => (
            <span key={c} className="rounded-full border border-line bg-white px-3 py-1 text-xs text-muted">{c}</span>
          ))}
        </div>
      </div>
    </Section>
  );
}
