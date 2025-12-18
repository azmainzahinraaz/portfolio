import type { TestimonialType } from "@/types/global-types";
import { Modal } from "@mui/material";
import { useState, type ReactNode } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export default function TestimonialCard({
  testimonialData,
  title,
}: {
  testimonialData: TestimonialType;
  title: string;
}): ReactNode {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isFullTextVisible, setIsFullTextVisible] = useState<boolean>(false);

  return (
    <>
      <button
        className="w-138 max-xl:w-full h-fit py-5 px-4 flex gap-3 bg-secondary-bg-color items-center justify-between rounded-lg cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setIsFullTextVisible(true)}
      >
        <img
          src={testimonialData.imageUrl}
          alt={testimonialData.name}
          className="w-25 h-25 rounded-full border-10 border-dark-gray object-cover object-center"
        />
        <div className="w-full h-full flex flex-col gap-3 justify-start text-left">
          <div className="w-full h-full flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-white">
              {testimonialData.name}
            </h3>
            <p className="text-sm text-gray line-clamp-2">
              {testimonialData.testimonial}
            </p>
          </div>
          <p
            className="text-sm flex text-white items-center"
            style={{
              gap: isHovering ? "1rem" : "0.5rem",
              opacity: isHovering ? 1 : 0.6,
              transition: "all 0.3s ease-in-out",
            }}
          >
            <span>See More</span> <FaArrowRightLong />
          </p>
        </div>
      </button>
      <Modal
        open={isFullTextVisible}
        onClose={() => setIsFullTextVisible(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="w-full h-full flex justify-center items-center"
      >
        <div className="w-full max-w-112.5 h-fit max-h-[90vh] overflow-y-auto rounded-md bg-secondary-bg-color">
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-between items-center gap-4 p-4 border-b border-gray">
              <h2 className="text-white text-base">{title}</h2>
              <button
                className="text-white text-2xl font-bold cursor-pointer hover:text-red-500 transition-all duration-200"
                onClick={() => setIsFullTextVisible(false)}
              >
                <RxCross2 />
              </button>
            </div>
            <div className="w-full h-full flex flex-col p-4 gap-3">
              <img
                src={testimonialData.imageUrl}
                alt={testimonialData.name}
                className="w-25 h-25 object-cover object-center rounded-md"
              />
              <h3 className="text-lg font-semibold text-white">
                {testimonialData.name}
              </h3>
              <div className="w-full h-full">
                <p className="text-sm text-gray">
                  {testimonialData.testimonial}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
