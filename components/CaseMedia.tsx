import MiniMock from "@/components/MiniMock";
import type { Project } from "@/lib/siteConfig";

// Toont het echte productbeeld in de DeviceFrame: een loopende video (autoplay,
// muted, loop, playsinline + poster als fallback), anders een screenshot, anders
// de gecodeerde MiniMock-fallback.
export default function CaseMedia({ project }: { project: Project }) {
  if (project.video) {
    return (
      <video
        className="block w-full rounded-lg"
        poster={project.video.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={`Productbeeld van ${project.name}`}
      >
        {project.video.webm && <source src={project.video.webm} type="video/webm" />}
        <source src={project.video.mp4} type="video/mp4" />
      </video>
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
