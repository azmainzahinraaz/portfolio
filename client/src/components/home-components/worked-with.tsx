import type { ReactNode } from "react";
import BlockText from "../ui/block-text";

export default function WorkedWith(): ReactNode {
  return (
    <section className="w-full h-full py-10 flex justify-center items-center">
      <div className="w-full max-w-small-max-width flex flex-col gap-10">
        <BlockText className="ml-5">Worked With</BlockText>
        <div className="w-full relative flex overflow-x-hidden before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-primary-bg-color before:via-primary-bg-color/0 before:to-primary-bg-color before:left-0 before:top-0 after:absolute after:w-full after:h-full after:bg-linear-to-l after:from-primary-bg-color after:via-primary-bg-color/0 after:to-primary-bg-color after:right-0 after:top-0">
          <div className="w-full flex gap-2.5 worked-with-slider">
            {Array.from({ length: 19 }).map((_, index) => (
              <img
                key={index}
                src={`/companies/${index + 1}.webp`}
                alt={`Company ${index + 1}`}
                className="h-13 rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
