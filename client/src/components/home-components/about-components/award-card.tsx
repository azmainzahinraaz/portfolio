import type { AwardType } from "@/types/about-types";
import type { ReactNode } from "react";

export default function AwardCard({ award }: { award: AwardType }): ReactNode {
  return (
    <div className="w-full h-full pb-7 pt-2.5 flex gap-7.5 max-xs:flex-col border-b border-gray/60 last:border-0">
      <img
        src={award.logoUrl}
        alt={award.title}
        className="w-17 h-17 rounded-md object-center object-cover"
      />
      <div className="w-full flex flex-col">
        <h3 className="text-white text-lg font-semibold">{award.title}</h3>
        <p className="text-sm text-white pb-2">{award.issuer}</p>
        <p className="text-light-gray text-sm">Issued: {award.issueDate}</p>
        {award.description && (
          <p className="text-white text-sm pt-2">{award.description}</p>
        )}
      </div>
    </div>
  );
}
