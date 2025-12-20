import type { ReactNode } from "react";
import WorksWrapper from "./works-wrapper";
import { projects } from "@/services/data/work-data";
import type { ProjectType } from "@/types/work-type";

export default function Projects(): ReactNode {
  return (
    <WorksWrapper title="Projects">
      <div className="w-full h-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </WorksWrapper>
  );
}

function ProjectCard({ project }: { project: ProjectType }): ReactNode {
  return (
    <div className="w-full h-full">
      <iframe
        src={project.src}
        title={project.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full aspect-video"
      ></iframe>
    </div>
  );
}
