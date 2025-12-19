import type { PressType } from "@/types/global-types";
import type { ReactNode } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function PressCard({
  pressData,
}: {
  pressData: PressType;
}): ReactNode {
  const isLink =
    pressData?.iframe === undefined && pressData?.link !== undefined;

  return (
    <PressCardWrapper isLink={isLink} link={pressData.link || ""}>
      <div className="w-full h-full flex flex-col bg-secondary-bg-color rounded-md group cursor-pointer">
        {isLink ? (
          <img
            src={pressData.imageUrl || ""}
            alt={"Press Release Image"}
            className="w-full h-full text-white text-center max-h-85 min-h-60 aspect-video bg-secondary-bg-color flex justify-center items-center object-cover object-center rounded-t-md group-hover:brightness-90 group-hover:border-dashed group-hover:border-white transition-all"
          />
        ) : (
          <div className="w-full h-full max-h-85 min-h-60 overflow-hidden aspect-video press-iframe group-hover:brightness-90 group-hover:border-dashed group-hover:border-white transition-all rounded-t-md">
            <div dangerouslySetInnerHTML={{ __html: pressData.iframe || "" }} />
          </div>
        )}
        <div className="w-full h-full flex flex-col gap-2 p-4">
          <p className="text-sm text-gray-400">{pressData.date}</p>
          <h3 className="text-lg text-white font-semibold">
            {pressData.title}
          </h3>
          <p className="flex gap-2 group-hover:gap-4 items-center transition-all duration-200 text-white/80 group-hover:text-white/60">
            <span>Learn More</span>
            <FaArrowRightLong className="pt-0.5" />
          </p>
        </div>
      </div>
    </PressCardWrapper>
  );
}

function PressCardWrapper({
  isLink,
  link,
  children,
}: {
  isLink: boolean;
  link: string;
  children: ReactNode;
}): ReactNode {
  if (isLink) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full"
      >
        {children}
      </a>
    );
  } else {
    return <div className="w-full h-full">{children}</div>;
  }
}
