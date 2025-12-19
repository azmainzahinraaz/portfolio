import { personalInfo } from "@/services/data/website-data";
import type { ReactNode } from "react";

export default function AboutRight(): ReactNode {
  return (
    <div className="w-1/3 max-lg:w-full min-w-105 max-lg:min-w-0 max-w-full h-fit border-2 border-orange p-4 rounded-md flex flex-col gap-8">
      <img
        src="/pfp-2.png"
        alt="profile"
        className="rounded-full border-4 border-white self-center w-50 h-50 object-cover object-center"
      />
      <ul className="w-full flex flex-col gap-1">
        {personalInfo.map(({ label, value }, index) => (
          <li key={index} className="w-full flex gap-1.5 text-[0.9rem]">
            <span className="font-semibold text-white">{label}:</span>
            <span className="text-white">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
