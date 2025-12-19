import type { LanguageType } from "@/types/about-types";
import type { ReactNode } from "react";

export default function LanguageCard({
  language,
}: {
  language: LanguageType;
}): ReactNode {
  return (
    <div className="w-full h-full pb-7 pt-2.5 flex gap-7.5 max-xs:flex-col border-b border-gray/60 last:border-0">
      <img
        src={language.imageUrl}
        alt={language.name}
        className="w-17 h-17 rounded-md object-center object-cover"
      />
      <div className="w-full flex flex-col">
        <h3 className="text-white text-lg font-semibold">{language.name}</h3>
        <p className="text-sm text-white pb-2">{language.proficiency}</p>
      </div>
    </div>
  );
}
