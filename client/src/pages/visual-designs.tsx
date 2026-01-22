import Photos from "@/components/works-components/photos";
import { graphicsDesigns, handArts } from "@/services/data/visual-design-data";
import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

export default function VisualDesigns(): ReactNode {
  return (
    <>
      <Helmet>
        <title>Visual Designs of Azmain Zahin Raaz</title>
      </Helmet>

      <main className="w-full h-full flex justify-center pb-17">
        <div className="w-full h-full max-w-small-max-width flex flex-col gap-10">
          <div
            className="w-full h-71.5 relative after:absolute after:w-full after:h-[80%] after:bottom-0 after:bg-linear-to-t after:from-primary-bg-color after:from-10% after:to-transparent"
            style={{
              backgroundImage: "url('coverphoto-work-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="w-full h-full flex flex-col gap-30 max-md:gap-20 max-sm:gap-15">
            <Photos photos={graphicsDesigns} title={"Graphics Designs"} />
            <Photos photos={handArts} title={"Hand Arts"} />
          </div>
        </div>
      </main>
    </>
  );
}
