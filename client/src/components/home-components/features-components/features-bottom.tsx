import Counter from "@/components/ui/counter";
import type { ReactNode } from "react";

export default function FeaturesBottom(): ReactNode {
  return (
    <div
      className="w-full h-full px-15 max-sm:px-7 pb-12 pt-10 flex justify-center gap-10 rounded-md max-lg:flex-col max-lg:items-center"
      style={{
        background:
          "linear-gradient(to top,rgba(0,0,0,.6) 40%,transparent),url('/azmain-features-top-bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <FeatureBottomCard target={70} title="Audience" afterText=",000+" />
      <FeatureBottomCard target={300} title="Team Member" afterText="+" />
      <FeatureBottomCard target={20} title="Reached" afterText="M+" />
    </div>
  );
}

function FeatureBottomCard({
  target,
  title,
  afterText,
}: {
  target: number;
  title: string;
  afterText: ReactNode;
}): ReactNode {
  return (
    <div className="w-full max-w-79 h-full flex flex-col gap-3 justify-center items-center">
      <div className="flex items-center gap-1">
        <Counter
          value={target}
          height={60}
          className="text-[3rem] font-semibold max-w-[calc(1ch*0.92)] text-white"
        />
        <span className="text-[3rem] font-semibold h-fit text-white">
          {afterText}
        </span>
      </div>
      <h3 className="text-[1rem] w-fit font-semibold text-black px-4 py-1 rounded-md bg-white inline-block">
        {title}
      </h3>
    </div>
  );
}
