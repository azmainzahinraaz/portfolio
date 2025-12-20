import BlockText from "@/components/ui/block-text";
import { pressData } from "@/services/data/website-data";
import { useState, type ReactNode } from "react";
import PressCard from "./press-card";
import PrimaryBtn from "@/components/ui/primary-btn";
import { FaArrowRightLong, FaPlus } from "react-icons/fa6";
import { Modal } from "@mui/material";
import { RxCross2 } from "react-icons/rx";

export default function Press(): ReactNode {
  const [isMoreVisible, setIsMoreVisible] = useState<boolean>(false);

  return (
    <>
      <section className="w-full max-w-max-width py-10 flex flex-col gap-10 bg-primary-bg-color">
        <div className="w-full flex flex-wrap gap-10 justify-between items-center z-99">
          <BlockText className="ml-5">Press Release</BlockText>
          <PrimaryBtn
            className="text-base px-6 flex items-center gap-2"
            onClick={() => setIsMoreVisible(true)}
          >
            Browse More <FaPlus className="text-sm" />
          </PrimaryBtn>
        </div>
        <div className="w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
          {pressData.slice(0, 4).map((pressItem, index) => (
            <PressCard key={index} pressData={pressItem} />
          ))}
        </div>
      </section>
      <Modal
        open={isMoreVisible}
        onClose={() => setIsMoreVisible(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="w-full h-full flex justify-center items-center"
        onWheel={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-122.5 max-sm:max-w-full h-fit max-h-[90vh] max-sm:max-h-screen overflow-y-auto rounded-md bg-secondary-bg-color">
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-between items-center gap-4 p-4 border-b border-gray/60">
              <h2 className="text-white text-lg font-semibold">
                Press Release
              </h2>
              <button
                className="text-white text-2xl font-bold cursor-pointer hover:text-red-500 transition-all duration-200"
                onClick={() => setIsMoreVisible(false)}
              >
                <RxCross2 />
              </button>
            </div>
            <div className="w-full h-full flex flex-col p-4">
              <div className="w-full h-full border border-gray/60 flex flex-col rounded-md">
                {pressData.map((pressItem) => (
                  <div
                    key={pressItem.title}
                    className="w-full h-full p-3 flex max-xs:flex-col gap-5 items-center border-b border-gray/60 last:border-0"
                  >
                    {pressItem.iframe ? (
                      <div className="w-full h-full max-w-50 max-h-50 overflow-hidden aspect-video press-iframe">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: pressItem.iframe || "",
                          }}
                        />
                      </div>
                    ) : (
                      <img
                        src={pressItem.imageUrl || ""}
                        alt={"Press Release Image"}
                        className="w-full max-w-50 h-full text-white aspect-video bg-secondary-bg-color flex justify-center items-center object-cover object-center rounded-md"
                      />
                    )}
                    <div className="w-full h-full flex flex-col gap-1">
                      <p className="text-sm text-gray-400">{pressItem.date}</p>
                      <h3 className="text-[0.95rem] text-white font-semibold">
                        {pressItem.title}
                      </h3>
                      {!pressItem.iframe && pressItem.link && (
                        <a
                          href={pressItem.link || ""}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex gap-2 items-center text-[0.85rem] transition-all duration-200 text-white/80 hover:text-white/60"
                        >
                          <span>Learn More</span>
                          <FaArrowRightLong className="pt-0.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
