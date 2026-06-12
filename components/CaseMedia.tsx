import MiniMock from "@/components/MiniMock";
import CaseVideo from "@/components/CaseVideo";
import type { Project } from "@/lib/siteConfig";

// Toont het echte productbeeld in de DeviceFrame: een loopende video (met poster-
// fallback bij prefers-reduced-motion), anders een screenshot, anders de
// gecodeerde MiniMock-fallback.
export default function CaseMedia({ project }: { project: Project }) {
  if (project.video) {
    return (
      <CaseVideo
        mp4={project.video.mp4}
        webm={project.video.webm}
        poster={project.video.poster}
        label={`Productbeeld van ${project.name}`}
      />
    );
  }

  if (project.images && project.images.length > 0) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- geanonimiseerde productscreenshot, vaste bron
      <img
        src={project.images[0]}
        alt={`Productbeeld van ${project.name}`}
        loading="lazy"
        className="block w-full rounded-lg"
      />
    );
  }

  return <MiniMock kind={project.kind} />;
}
