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

export type FeatureType = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
};
