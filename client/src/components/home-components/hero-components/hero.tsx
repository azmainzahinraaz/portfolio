import type { ReactNode } from "react";
import HeroLeft from "./hero-left";

export default function Hero(): ReactNode {
  return (
    <section
      className="w-full h-full min-h-[calc(100vh-(4.75rem))] flex justify-center items-center relative after:absolute after:w-full after:h-1/3 after:bottom-0 after:left-0 after:bg-linear-to-t after:from-primary-bg-color after:to-transparent after:z-0 py-20"
      style={{
        background:
          "linear-gradient(to right,rgba(110,110,110,.4) 40%,transparent),url(hero-bg.jpg) no-repeat center",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-[min(1600px,92vw)] h-fit flex justify-between items-center gap-20 max-lg:flex-col">
        <HeroLeft />
        <iframe
          src="https://www.youtube.com/embed/Q1ro4L_htLw?si=e4JbXvYaKTZyv40u"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-[85%] max-lg:max-w-[90vw] max-lg:w-full min-w-125 max-lg:min-w-0 aspect-video rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  );
}
