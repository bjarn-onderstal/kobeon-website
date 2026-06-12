"use client";
import { useEffect, useId, useRef } from "react";

// HubSpot Forms v2-embed. Laadt het embed-script en rendert het formulier in
// de target-div via hbspt.forms.create. Client component, want het script
// draait in de browser. Inzendingen komen direct binnen in HubSpot (CRM).
declare global {
  interface Window {
    hbspt?: { forms: { create: (opts: Record<string, unknown>) => void } };
  }
}

const SRC = "https://js-eu1.hsforms.net/forms/embed/v2.js";

export default function HubspotForm({
  portalId = "143765609",
  formId = "10083b65-9b4a-459c-b56b-2976854db65d",
  region = "eu1",
  className = "",
}: {
  portalId?: string;
  formId?: string;
  region?: string;
  className?: string;
}) {
  const reactId = useId();
  const domId = `hs-form-${reactId.replace(/:/g, "")}`;
  const created = useRef(false);

  useEffect(() => {
    function create() {
      if (created.current || !window.hbspt) return;
      created.current = true;
      window.hbspt.forms.create({ portalId, formId, region, target: `#${domId}` });
    }

    if (window.hbspt) {
      create();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", create);
    return () => script?.removeEventListener("load", create);
  }, [portalId, formId, region, domId]);

  return <div id={domId} className={className} />;
}
