import type { ReactNode } from "react";
import WorksWrapper from "./works-wrapper";
import type { TopContent } from "@/types/work-type";
import { topContents } from "@/services/data/work-data";

export default function TopContents(): ReactNode {
  return (
    <WorksWrapper title="Top Contents">
      <div className="w-full h-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7">
        {topContents.map((content) => (
          <TopContentCard key={content.title} content={content} />
        ))}
      </div>
    </WorksWrapper>
  );
}

function TopContentCard({ content }: { content: TopContent }): ReactNode {
  return (
    <div className="w-full h-full">
      <iframe
        src={content.src}
        title={content.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
        style={{
          aspectRatio: content.src.includes("instagram.com/")
            ? "9/16"
            : content.isImage
              ? "9/11"
              : "1/1",
        }}
      ></iframe>
    </div>
  );
}
