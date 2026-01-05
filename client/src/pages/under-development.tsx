import type { ReactNode } from "react";

export default function UnderDevelopment(): ReactNode {
  return (
    <div className="w-screen h-full min-h-screen flex justify-center items-center">
      <div className="p-10 bg-secondary-bg-color flex justify-center items-center text-center flex-col gap-2 rounded-md shadow-md max-xs:p-0 max-xs:max-w-max-width max-xs:bg-transparent">
        <h1 className="text-2xl font-bold text-white">Under Development</h1>
        <p className="text-base text-white/90 max-w-[45ch]">
          This website is currently under development. Please check back later!
        </p>
      </div>
    </div>
  );
}
