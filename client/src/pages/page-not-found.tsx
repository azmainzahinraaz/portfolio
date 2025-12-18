import PrimaryBtn from "@/components/ui/primary-btn";
import type { ReactNode } from "react";

export default function PageNotFound(): ReactNode {
  return (
    <section className="w-screen h-full min-h-[calc(100vh-4.75rem)] flex justify-center items-center bg-primary-bg-color">
      <div className="w-full max-w-max-width flex flex-col gap-6 z-99 items-center">
        <div className="flex flex-col text-center items-center gap-2">
          <p className="text-lg text-white/80 max-sm:text-base">
            404 Not Found
          </p>
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-6xl font-bold max-sm:text-4xl text-white">
              Oops! Page Not Found
            </h1>
            <p className="max-w-[40ch] text-lg text-white/70 max-sm:text-base">
              The page you are looking for does not exist. Click the button
              below to return to the homepage.
            </p>
          </div>
        </div>
        <PrimaryBtn isLink={true} href="/" className="text-lg max-sm:text-base">
          Go to Homepage
        </PrimaryBtn>
      </div>
    </section>
  );
}
