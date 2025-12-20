import type { ReactNode } from "react";
import WorksWrapper from "./works-wrapper";
import type { MusicVideoType } from "@/types/work-type";
import PrimaryBtn from "../ui/primary-btn";
import { FaArrowRightLong } from "react-icons/fa6";
import { musicVideos } from "@/services/data/work-data";

export default function MusicVideos(): ReactNode {
  return (
    <WorksWrapper title="Music Videos">
      <div className="w-full h-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7">
        {musicVideos.map((musicVideo) => (
          <MusicVideoCard key={musicVideo.title} musicVideo={musicVideo} />
        ))}
      </div>
    </WorksWrapper>
  );
}

function MusicVideoCard({
  musicVideo,
}: {
  musicVideo: MusicVideoType;
}): ReactNode {
  return (
    <div className="w-full h-full flex flex-col">
      <img
        src={musicVideo.imageUrl}
        alt={musicVideo.title}
        className="w-full h-hull min-h-50 object-center object-cover rounded-t-md"
      />
      <div className="w-full p-3 py-4 bg-secondary-bg-color z-99 flex gap-3 justify-between items-center rounded-b-md">
        <h3 className="text-base text-white line-clamp-1 break-all">
          {musicVideo.title}
        </h3>
        <PrimaryBtn
          isLink={true}
          href={musicVideo.link}
          className="min-w-0 px-3 py-1 text-sm group flex items-center"
        >
          Watch{" "}
          <FaArrowRightLong className="ml-2 group-hover:translate-x-1 transition-transform" />
        </PrimaryBtn>
      </div>
    </div>
  );
}
