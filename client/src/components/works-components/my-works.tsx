import type { ReactNode } from "react";
import WorksWrapper from "./works-wrapper";
import type { MyWorkType } from "@/types/work-type";
import { myWorks } from "@/services/data/work-data";

export default function MyWorks(): ReactNode {
  return (
    <WorksWrapper title="My Works">
      <div className="w-full h-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7">
        {myWorks.map((work) => (
          <MyWorkCard key={work.title} workData={work} />
        ))}
      </div>
    </WorksWrapper>
  );
}

function MyWorkCard({ workData }: { workData: MyWorkType }): ReactNode {
  return (
    <div className="w-full h-full flex flex-col items-center gap-3 bg-secondary-bg-color rounded-md p-6 py-10">
      <img
        src={workData.imageUrl}
        alt={workData.title}
        className="w-full h-auto max-w-20 max-h-20 rounded-full"
      />
      <h3 className="text-white text-xl font-medium">{workData.title}</h3>
      <div className="w-full flex justify-center gap-4 mt-4">
        {workData.links.map((link, index) => (
          <a
            href={link.url}
            key={index}
            className="group relative w-11 h-11 text-lg text-white bg-secondary-bg-color flex justify-center items-center rounded-md hover:bg-gray/30 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
            <span className="pointer-events-none absolute top-3 text-xs text-white p-2 rounded-sm bg-dark-gray opacity-0 group-hover:opacity-100 group-hover:-top-7 transition-all duration-300 whitespace-nowrap">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
