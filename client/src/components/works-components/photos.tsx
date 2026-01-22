import {
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import WorksWrapper from "./works-wrapper";
import type {
  DesignType,
  PhotographyType,
  SocialType,
} from "@/types/work-type";
import ImageViewer from "../ui/imageViewer/Image-viewer";

export default function Photos({
  photos,
  title,
  cols = 4,
}: {
  photos: (PhotographyType | DesignType | SocialType)[];
  title: string;
  cols?: number;
}): ReactNode {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [imageViewerOpen, setImageViewerOpen] = useState<boolean>(false);

  return (
    <>
      <WorksWrapper title={title}>
        <div
          className={`w-full h-full grid grid-cols-${cols} max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7`}
        >
          {photos.map((photo, index) => (
            <PhotographyCard
              key={index}
              photoData={photo}
              index={index}
              setImageViewerOpen={setImageViewerOpen}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </WorksWrapper>
      <ImageViewer
        data={photos.map((photo) => ({
          url: photo.imageUrl,
        }))}
        index={openIndex}
        open={imageViewerOpen}
        setOpen={setImageViewerOpen}
      />
    </>
  );
}

function PhotographyCard({
  photoData,
  index,
  setImageViewerOpen,
  setOpenIndex,
}: {
  photoData: PhotographyType | DesignType;
  index: number;
  setImageViewerOpen: Dispatch<SetStateAction<boolean>>;
  setOpenIndex: Dispatch<SetStateAction<number>>;
}): ReactNode {
  return (
    <>
      <img
        src={photoData.imageUrl}
        alt={"Photography"}
        className="w-full h-full object-center object-cover rounded-md border-dashed border border-white/20 hover:brightness-90 hover:border-white/80 transition-all duration-200 cursor-pointer"
        onClick={() => {
          setOpenIndex(index);
          setImageViewerOpen(true);
        }}
      />
    </>
  );
}
