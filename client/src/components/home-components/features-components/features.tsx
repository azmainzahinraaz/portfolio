import type { ReactNode } from "react";
import FeaturesTop from "./features-top";
import FeaturesBottom from "./features-bottom";

export default function Features(): ReactNode {
  return (
    <section
      className="w-full h-full py-37.5 max-sm:py-12.5 flex justify-center items-center relative after:absolute after:w-full after:h-1/8 after:bottom-0 after:left-0 after:bg-linear-to-t after:from-primary-bg-color after:to-transparent after:z-0 before:absolute before:w-full before:h-1/8 before:top-0 before:left-0 before:bg-linear-to-b before:from-primary-bg-color before:to-transparent before:z-0"
      style={{
        background: "url('/azmain-features-bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full max-w-small-max-width h-full flex flex-col gap-10">
        <FeaturesTop />
        <FeaturesBottom />
      </div>
    </section>
  );
}
