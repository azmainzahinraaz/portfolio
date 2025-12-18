import type { TestimonialType } from "@/types/global-types";
import type { ReactNode } from "react";
import TestimonialCard from "./testimonial-card";

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
      <h2 className="text-3xl text-white relative flex items-center font-semibold before:w-2 before:h-[70%] before:absolute before:-left-7 before:bg-red">
        {title}
      </h2>
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
