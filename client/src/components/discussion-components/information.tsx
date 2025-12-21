import formatTime from "@/utils/format-time";
import type { ReactNode } from "react";

export default function Information({
  name,
  time,
}: {
  name: string;
  time: string;
}): ReactNode {
  return (
    <aside className="w-full max-w-104 max-lg:max-w-70 max-[850px]:max-w-full! h-fit bg-secondary-bg-color border max-[850px]:border-l-0 max-[850px]:rounded-none border-dark-gray rounded-md mt-6">
      <h2 className="px-2.5 py-3.5 border-b border-dark-gray text-white text-lg font-medium">
        Information
      </h2>

      <div className="px-4 py-5 rounded-bl-md rounded-br-md flex flex-col gap-3">
        <p className="text-sm text-gray">
          Asked by: <span className="text-white">{name}</span>
        </p>
        <p className="text-sm text-gray">
          Asked on: <span className="text-white">{formatTime(time)}</span>
        </p>
      </div>
    </aside>
  );
}
