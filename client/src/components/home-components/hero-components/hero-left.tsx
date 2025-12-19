import PrimaryBtn from "@/components/ui/primary-btn";
import type { ReactNode } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router";

export default function HeroLeft(): ReactNode {
  return (
    <div className="w-full flex flex-col gap-4 max-w-165 h-fit">
      <div className="flex flex-col gap-1">
        <h1 className="text-6xl max-sm:text-5xl font-semibold text-white">
          Azmain Zahin Raaz
        </h1>
        <div className="p-2 px-3 rounded-md bg-dark-gray w-fit">
          <p className="text-white/90 max-sm:text-sm">
            Developer | Tech Enthusiast | Learner
          </p>
        </div>
      </div>
      <p className="text-white text-xl max-sm:text-base">
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
  );
}
