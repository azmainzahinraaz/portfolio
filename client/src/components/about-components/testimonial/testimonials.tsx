import type { TestimonialType } from "@/types/global-types";
import type { ReactNode } from "react";
import TestimonialCard from "./testimonial-card";
import BlockText from "@/components/ui/block-text";

type TestimonialsProps = {
  title: string;
  data: TestimonialType[];
};

export default function Testimonials({
  title,
  data,
}: TestimonialsProps): ReactNode {
  return (
    <section className="w-full h-full flex flex-col gap-7">
      <BlockText>{title}</BlockText>
      <div className="w-full flex flex-wrap max-xl:grid max-xl:grid-cols-2 max-lg:grid-cols-1 gap-5">
        {data.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonialData={testimonial}
            title={title}
          />
        ))}
      </div>
    </section>
  );
}
