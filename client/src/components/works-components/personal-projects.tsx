import type { ReactNode } from "react";
import WorksWrapper from "./works-wrapper";
import type { PersonalVideoType } from "@/types/work-type";
import { personalVideos } from "@/services/data/work-data";

export default function PersonalProjects(): ReactNode {
  return (
    <WorksWrapper title="Personal Videos">
      <div className="w-full h-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7">
        {personalVideos.map((content) => (
          <PersonalProjectCard key={content.title} content={content} />
        ))}
      </div>
    </WorksWrapper>
  );
}

function PersonalProjectCard({
  content,
}: {
  content: PersonalVideoType;
}): ReactNode {
  return (
    <div className="w-full h-full">
      <iframe
        src={content.src}
        title={content.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full aspect-9/16"
      ></iframe>
    </div>
  );
}
