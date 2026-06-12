import DeviceFrame from "@/components/DeviceFrame";
import type { Screen } from "@/lib/siteConfig";

// Toont echte (geanonimiseerde) productscreenshots: browser-shots in een light
// DeviceFrame, telefoon-shots in een smal phone-frame ernaast. Lazy-loaded.
export default function ScreenShowcase({ screens }: { screens: Screen[] }) {
  const browsers = screens.filter((s) => s.frame === "browser");
  const phones = screens.filter((s) => s.frame === "phone");

  return (
    <div className="space-y-8">
      {browsers.map((s) => (
        <DeviceFrame key={s.src} theme="light" title={s.label}>
          {/* eslint-disable-next-line @next/next/no-img-element -- geanonimiseerde productscreenshot, vaste bron */}
          <img src={s.src} alt={s.alt} loading="lazy" className="block w-full rounded-lg" />
        </DeviceFrame>
      ))}

      {phones.length > 0 && (
        <div className="mx-auto grid max-w-md gap-6 sm:grid-cols-2">
          {phones.map((s) => (
            <figure key={s.src} className="mx-auto w-full max-w-[230px]">
              <div className="overflow-hidden rounded-[22px] border-2 border-line bg-white shadow-lift">
                {/* eslint-disable-next-line @next/next/no-img-element -- geanonimiseerde productscreenshot, vaste bron */}
                <img src={s.src} alt={s.alt} loading="lazy" className="block w-full" />
              </div>
              {s.label && <figcaption className="mt-2 text-center text-xs text-muted">{s.label}</figcaption>}
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
