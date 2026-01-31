import AboutHero from "@/components/about-components/about-hero/about-hero";
import SocialLinks from "@/components/about-components/social-links";
import Testimonials from "@/components/about-components/testimonial/testimonials";
import { testimonialData } from "@/services/data/website-data";
import { useEffect, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";

export default function About(): ReactNode {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Azmain Zahin Raaz - About</title>
      </Helmet>

      <main className="w-full h-full py-10 flex justify-center">
        <div className="max-w-small-max-width h-full flex flex-col gap-30">
          <AboutHero />
          <Testimonials
            title="Notable Thoughts"
            data={testimonialData.notable}
          />
          <SocialLinks />
        </div>
      </main>
    </>
  );
}
