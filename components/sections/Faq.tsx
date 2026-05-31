"use client";
import { useState } from "react";
import Section from "@/components/Section";
import { faqs } from "@/lib/siteConfig";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <Section tone="light">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple">Veelgestelde vragen</p>
        <h2 className="h-display mt-3 text-3xl md:text-5xl">
          Alles wat je wilt weten <span className="gradient-text">voordat je begint.</span>
        </h2>
      </div>
      <div className="mt-10 divide-y divide-line border-t border-line">
        {faqs.map((f, i) => (
          <div key={i} className="py-5">
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <span className="text-lg font-medium text-ink">{f.q}</span>
              <span className="ml-4 text-2xl text-purple">{open === i ? "–" : "+"}</span>
            </button>
            {open === i && <p className="mt-3 max-w-3xl leading-relaxed text-muted">{f.a}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}
