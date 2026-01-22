import type { ReactNode } from "react";
import WorksWrapper from "./works-wrapper";
import type { DocumentaryType } from "@/types/work-type";
import { documentaries } from "@/services/data/work-data";

export default function Documentaries(): ReactNode {
  return (
    <WorksWrapper title="Documentaries">
      <div className="w-full h-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7">
        {documentaries.map((documentary) => (
          <DocumentaryCard key={documentary.title} documentary={documentary} />
        ))}
      </div>
    </WorksWrapper>
  );
}

function DocumentaryCard({
  documentary,
}: {
  documentary: DocumentaryType;
}): ReactNode {
  return (
    <div className="w-full h-full">
      <iframe
        src={documentary.src}
        title={documentary.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full aspect-video"
      ></iframe>
    </div>
  );
}
