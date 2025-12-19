import { skillData } from "@/services/data/about-data";
import type { ReactNode } from "react";

export default function Skills(): ReactNode {
  return (
    <ul className="w-full h-full flex flex-col gap-2 px-5">
      {skillData.map((skill) => (
        <li key={skill} className="w-full h-full flex gap-4 items-center">
          <div className="w-2.5 h-2.5 bg-white mt-0.5"></div>
          <p className="text-white text-lg">{skill}</p>
        </li>
      ))}
    </ul>
  );
}
