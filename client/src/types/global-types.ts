export type TestimonialType = {
  name: string;
  imageUrl: string;
  testimonial: string;
};

export type FaqType = {
  question: string;
  answer: string;
};

export type PressType = {
  date: string;
  imageUrl?: string;
  link?: string;
  title: string;
  iframe?: string;
};
