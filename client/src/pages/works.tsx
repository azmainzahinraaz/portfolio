import Documentaries from "@/components/works-components/documentaries";
import MyWorks from "@/components/works-components/my-works";
import PersonalProjects from "@/components/works-components/personal-projects";
import Photos from "@/components/works-components/photos";
import Projects from "@/components/works-components/projects";
import SatireWorks from "@/components/works-components/satire-works";
import TopContents from "@/components/works-components/top-contents";
import { seminars, social } from "@/services/data/work-data";
import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

export default function Works(): ReactNode {
  let dummy = [];
  for (let i = 0; i < 68; i++) {
    dummy.push({
      imageUrl: `/graphics-designs/gp-${i + 1}.png`,
    });
  }

  console.log(dummy);
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
              backgroundImage: "url('coverphoto-work-1.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="w-full h-full flex flex-col gap-30 max-md:gap-20 max-sm:gap-15">
            <MyWorks />
            <Documentaries />
            <TopContents />
            <PersonalProjects />
            <Projects />
            <SatireWorks />
            <Photos photos={seminars} title={"Seminars"} cols={3} />
            <Photos photos={social} title={"Social"} cols={3} />
          </div>
        </div>
      </main>
    </>
  );
}
