import { featureData } from "@/services/data/website-data";
import type { ReactNode } from "react";

export default function FeaturesTop(): ReactNode {
  return (
    <div
      className="w-full h-full px-17 max-sm:px-7 pt-30 pb-23 flex justify-center gap-10 max-2xl:grid max-2xl:grid-cols-3 max-md:grid-cols-1 max-md:gap-25 rounded-md"
      style={{
        background:
          "linear-gradient(to top,rgba(0,0,0,.6) 40%,transparent),url('/azmain-features-top-bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {featureData.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          color={feature.color}
        />
      ))}
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  color,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}): ReactNode {
  return (
    <div
      className="w-full max-w-79 max-md:max-w-full h-full pt-6.5 pb-9.5 px-3 relative flex flex-col justify-center items-center text-center border-dashed rounded-lg border-2"
      style={{
        borderColor: color,
      }}
    >
      <div
        className={`w-19.5 h-19.5 flex justify-center items-center -mt-21 rounded-md text-white text-5xl`}
        style={{
          background: color,
        }}
      >
        {icon}
      </div>
      <div className="w-full flex flex-col gap-1 pt-4">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-[0.9rem] font-normal text-text-secondary text-white/90">
          {description}
        </p>
      </div>
    </div>
  );
}
