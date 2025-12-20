import type { ReactNode } from "react";
import WorksWrapper from "./works-wrapper";
import type { PodcastType } from "@/types/work-type";
import { podcasts } from "@/services/data/work-data";

export default function Podcasts(): ReactNode {
  return (
    <WorksWrapper title="Podcasts">
      <div className="w-full h-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7">
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.title} podcast={podcast} />
        ))}
      </div>
    </WorksWrapper>
  );
}

function PodcastCard({ podcast }: { podcast: PodcastType }): ReactNode {
  return (
    <div className="w-full h-full">
      <iframe
        src={podcast.src}
        title={podcast.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full aspect-video"
      ></iframe>
    </div>
  );
}
