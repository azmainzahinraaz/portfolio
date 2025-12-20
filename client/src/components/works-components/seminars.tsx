import type { ReactNode } from "react";
import WorksWrapper from "./works-wrapper";
import { seminars } from "@/services/data/work-data";
import type { SeminarType } from "@/types/work-type";

export default function Seminars(): ReactNode {
  return (
    <WorksWrapper title="Seminars">
      <div className="w-full h-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7">
        {seminars.map((seminar) => (
          <SeminarCard key={seminar.src} seminar={seminar} />
        ))}
      </div>
    </WorksWrapper>
  );
}

function SeminarCard({ seminar }: { seminar: SeminarType }): ReactNode {
  return (
    <div className="w-full h-full">
      <iframe
        src={seminar.src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full aspect-video cursor-pointer"
      ></iframe>
    </div>
  );
}
