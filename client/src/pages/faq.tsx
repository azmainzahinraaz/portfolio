import FaqItem from "@/components/ui/faq-item";
import { faqData } from "@/services/data/website-data";
import type { FaqType } from "@/types/global-types";
import { type ReactNode } from "react";

export default function Faq(): ReactNode {
  return (
    <main className="w-full h-full py-15 flex flex-col gap-12 justify-center items-center">
      <div className="text-center flex flex-col w-full max-w-small-max-width items-center gap-2 px-4">
        <h1 className="text-5xl max-sm:text-4xl font-semibold text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-base max-w-[55ch] text-gray-300 mt-3">
          Explore answers to common questions about Azmain Zahin Raaz, his work,
          and more.
        </p>
      </div>
      <div className="w-full h-full flex flex-col gap-7 max-md:gap-4 max-w-small-max-width">
        {faqData.map((faq: FaqType, index: number) => (
          <FaqItem key={index} faq={faq} />
        ))}
      </div>
    </main>
  );
}
