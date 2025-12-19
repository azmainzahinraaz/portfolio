import PrimaryBtn from "@/components/ui/primary-btn";
import type { EducationType } from "@/types/about-types";
import type { ReactNode } from "react";

export default function EducationCard({
  education,
}: {
  education: EducationType;
}): ReactNode {
  return (
    <div className="w-full h-full pb-7 pt-2.5 flex gap-7.5 max-xs:flex-col border-b border-gray/60 last:border-0">
      <img
        src={education.logoUrl}
        alt={education.name}
        className="w-17 h-17 rounded-md object-center object-cover"
      />
      <div className="w-full flex flex-col">
        <h3 className="text-white text-lg font-semibold">{education.name}</h3>
        <p className="text-sm text-white pb-2">{education.degree}</p>
        <div>
          <p className="text-light-gray text-sm">{education.timeline}</p>
          {education.grade && (
            <p className="text-light-gray text-sm">Grade: {education.grade}</p>
          )}
        </div>
        <PrimaryBtn
          href={education.institution}
          className="mt-3 w-max text-sm"
          target={"_blank"}
          isLink={true}
        >
          Visit Institution
        </PrimaryBtn>
      </div>
    </div>
  );
}
