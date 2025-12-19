import type { ExperienceType } from "@/types/about-types";
import type { ReactNode } from "react";

export default function ExperienceCard({
  experience,
}: {
  experience: ExperienceType;
}): ReactNode {
  return (
    <div className="w-full h-full pb-5 pt-2.5 flex gap-7.5 max-xs:flex-col border-b border-gray/60 last:border-0">
      <img
        src={experience.logoUrl}
        alt={experience.company}
        className="w-17 h-17 rounded-md object-center object-cover"
      />
      <div className="w-full flex flex-col">
        <h3 className="text-white text-lg font-semibold">
          {experience.position}
        </h3>
        <p className="text-sm text-white pb-2">{experience.company}</p>
        <div>
          <p className="text-light-gray text-sm">{experience.timeline}</p>
          <p className="text-light-gray text-sm">{experience.location}</p>
        </div>
        <p className="text-white text-sm pt-2">{experience.description}</p>
      </div>
    </div>
  );
}
