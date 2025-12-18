import type { ReactNode } from "react";
import AboutLeft from "./about-left";
import AboutRight from "./about-right";

export default function AboutHero(): ReactNode {
  return (
    <section className="w-full h-full flex gap-30 max-lg:flex-col max-lg:gap-15">
      <AboutLeft />
      <AboutRight />
    </section>
  );
}
