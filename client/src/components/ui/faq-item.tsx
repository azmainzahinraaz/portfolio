import type { FaqType } from "@/types/global-types";
import { useState, type ReactNode } from "react";
import { RxCross2 } from "react-icons/rx";

export default function FaqItem({ faq }: { faq: FaqType }): ReactNode {
  const { question, answer } = faq;
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div>
      <div
        className="w-full h-fit select-none flex flex-col gap-3 max-md:gap-2 pb-3 max-md:pb-2 border-b border-light-gray/90 cursor-pointer hover:scale-[0.99] transition-all"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div className="w-full flex justify-between items-center">
          <p className="text-xl max-md:text-xl font-medium text-white">
            {question}
          </p>
          <span className="text-3xl max-md:text-2xl text-white">
            <RxCross2
              className="transition-all duration-200"
              style={{
                rotate: isActive ? "0deg" : "45deg",
              }}
            />
          </span>
        </div>
        <div
          className="w-full f-fit grid transition-all"
          style={{
            gridTemplateRows: isActive ? "1fr" : "0fr",
          }}
        >
          <p
            className="text-base overflow-hidden text-white/90 transition-all duration-300"
            style={{ marginBottom: isActive ? "1.25rem" : "0px" }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
