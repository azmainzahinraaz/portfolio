import FaqItem from "@/components/ui/faq-item";
import { faqData } from "@/services/website-data";
import type { FaqType } from "@/types/global-types";
import { type ReactNode } from "react";

export default function Faq(): ReactNode {
  return (
    <main className="w-full h-full py-10 flex justify-center items-center">
      <div className="w-full h-full flex flex-col gap-7 max-md:gap-4 max-w-small-max-width">
        {faqData.map((faq: FaqType, index: number) => (
          <FaqItem key={index} faq={faq} />
        ))}
      </div>
    </main>
  );
}
