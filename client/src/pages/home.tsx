import AboutSection from "@/components/home-components/about-components/about-section";
import Features from "@/components/home-components/features-components/features";
import Hero from "@/components/home-components/hero-components/hero";
import Press from "@/components/home-components/press-components/press";
import { useEffect, type ReactNode } from "react";
import Faq from "./faq";
import WorkedWith from "@/components/home-components/worked-with";
import AboutSwiper from "@/components/home-components/about-swiper";
import { Helmet } from "react-helmet-async";

export default function Home(): ReactNode {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Azmain Zahin Raaz</title>
      </Helmet>

      <main className="w-full h-full flex flex-col items-center">
        <Hero />
        <Press />
        <Features />
        <AboutSection />
        <WorkedWith />
        <AboutSwiper />
        <div className="w-full h-full py-15 bg-black">
          <Faq isHomePage={true} />
        </div>
      </main>
    </>
  );
}
