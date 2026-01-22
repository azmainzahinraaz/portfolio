import FaqItem from "@/components/ui/faq-item";
import PrimaryBtn from "@/components/ui/primary-btn";
import { faqData } from "@/services/data/website-data";
import type { FaqType } from "@/types/global-types";
import { useEffect, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";

export default function Faq({
  isHomePage = false,
}: {
  isHomePage: boolean;
}): ReactNode {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Azmain Zahin Raaz - FAQ</title>
      </Helmet>

      <section
        className="w-full h-full py-15 flex flex-col gap-12 justify-center items-center"
        style={{
          background: isHomePage ? "var(--black)" : "transparent",
        }}
      >
        <div className="text-center flex flex-col w-full max-w-small-max-width items-center gap-2 px-4">
          <h1 className="text-5xl max-sm:text-4xl font-semibold text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-base max-w-[55ch] text-gray-300 mt-3">
            Explore answers to common questions about Azmain Zahin Raaz, his
            work, and more.
          </p>
        </div>
        <div className="w-full h-full flex flex-col gap-14 items-center z-99">
          <div className="w-full h-full flex flex-col gap-7 max-md:gap-4 max-w-small-max-width">
            {(isHomePage ? faqData.slice(0, 6) : faqData).map(
              (faq: FaqType, index: number) => (
                <FaqItem key={index} faq={faq} />
              ),
            )}
          </div>
          {isHomePage && (
            <PrimaryBtn
              isLink={true}
              href={"/faq"}
              className="text-[1em] px-6 mt-4"
            >
              View All FAQs
            </PrimaryBtn>
          )}
        </div>
      </section>
    </>
  );
}
