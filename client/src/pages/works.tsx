import MusicVideos from "@/components/works-components/music-videos";
import Photos from "@/components/works-components/photos";
import Podcasts from "@/components/works-components/podcasts";
import Projects from "@/components/works-components/projects";
import Seminars from "@/components/works-components/seminars";
import { designs, photography, social } from "@/services/data/work-data";
import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

export default function Works(): ReactNode {
  return (
    <>
      <Helmet>
        <title>Works of Azmain Zahin Raaz</title>
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
            <MusicVideos />
            <Podcasts />
            <Projects />
            <Photos photos={photography} title={"Photography"} />
            <Photos photos={designs} title={"Designs"} />
            <Seminars />
            <Photos photos={social} title={"Social"} cols={3} />
          </div>
        </div>
      </main>
    </>
  );
}
