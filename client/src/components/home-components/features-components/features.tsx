import type { ReactNode } from "react";
import FeaturesTop from "./features-top";
import FeaturesBottom from "./features-bottom";

export default function Features(): ReactNode {
  return (
    <section
      className="w-full h-full py-37.5 max-sm:py-12.5 flex justify-center items-center"
      style={{
        background: "url('/features-bg.jpg')",
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
