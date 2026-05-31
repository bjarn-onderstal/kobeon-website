import ServiceTile from "@/components/ServiceTile";
import { services } from "@/lib/siteConfig";

// Gedeelde asymmetrische bento-grid van de 9 diensten (homepage + /diensten).
export default function DienstenBentoGrid() {
  return (
    <div className="grid auto-rows-[180px] grid-cols-1 gap-5 md:grid-flow-row-dense md:grid-cols-4">
      {services.map((s, i) => (
        <ServiceTile key={s.title} service={s} index={i} />
      ))}
    </div>
  );
}
