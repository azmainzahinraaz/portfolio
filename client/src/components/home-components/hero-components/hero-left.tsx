import PrimaryBtn from "@/components/ui/primary-btn";
import type { ReactNode } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router";

export default function HeroLeft(): ReactNode {
  return (
    <div className="w-full h-full flex flex-col gap-10 justify-between max-w-165">
      <div className="w-full flex flex-col gap-4 max-w-165 h-fit">
        <div className="flex flex-col gap-3">
          <h1 className="text-7xl max-lg:text-6xl max-sm:text-5xl font-semibold text-white">
            Azmain Zahin Raaz
          </h1>
          <div className="p-2 px-3 bg-white/10 backdrop-blur-lg rounded-md w-fit">
            <p className="text-white/90 max-sm:text-sm">
              Developer | Tech Enthusiast | Learner
            </p>
          </div>
        </div>
        <p className="text-white text-[1.22rem] max-sm:text-base mt-3">
          Saad Al Amin is a Bangladeshi artist, filmmaker and graphics designer
          born in Bangladesh. He is now working as a leading personality in tons
          of activities.
        </p>
        <div className="w-full flex gap-6 items-center z-99">
          <PrimaryBtn
            isLink={true}
            href="/about"
            className="text-lg px-6 max-sm:px-3 max-sm:text-base"
          >
            Learn More
          </PrimaryBtn>
          <NavLink
            to={"/discussions"}
            className={
              "text-white flex gap-3 items-center hover:gap-5 transition-all duration-200 text-lg max-sm:text-base"
            }
          >
            <span className="underline">Discussions</span>
            <FaArrowRightLong />
          </NavLink>
        </div>
      </div>
      <div className="w-full z-99 p-6 bg-white/5 backdrop-blur-lg rounded-md flex flex-col gap-4 max-xl:max-w-[50em]">
        <FaQuoteLeft className="text-white/40 text-3xl" />
        <div className="flex flex-col gap-2">
          <q className="text-white/90 text-2xl italic font-medium max-2xl:text-xl max-md:text-lg">
            We weren't just fighting quotas; we were fighting the feeling of
            being invisible in our own meritocracy.
          </q>
          <p className="flex gap-1 items-center text-white/80 text-sm italic">
            <span className="bg-white/70 h-0.5 w-4" />
            Dibbo
          </p>
        </div>
      </div>
    </div>
  );
}
