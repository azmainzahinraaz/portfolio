import type { ReactNode } from "react";
import WorksWrapper from "./works-wrapper";
import type { TopContent } from "@/types/work-type";
import { satireWorks } from "@/services/data/work-data";

export default function SatireWorks(): ReactNode {
  return (
    <WorksWrapper title="Satire Works">
      <div className="w-full h-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7">
        {satireWorks.map((content) => (
          <SatireWorkCard key={content.title} content={content} />
        ))}
      </div>
    </WorksWrapper>
  );
}

function SatireWorkCard({ content }: { content: TopContent }): ReactNode {
  return (
    <div className="w-full h-full">
      <iframe
        src={content.src}
        title={content.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full aspect-video"
      ></iframe>
    </div>
  );
}
