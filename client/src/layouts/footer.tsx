import type { ReactNode } from "react";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer(): ReactNode {
  return (
    <footer className="w-full py-14 h-fit bg-secondary-bg-color">
      <div className="w-full max-w-small-max-width mx-auto text-white">
        <hr className="text-white pb-3" />
        <div className="w-full flex justify-between items-center mb-4 gap-5 max-sm:flex-col max-sm:gap-3">
          <p>
            Copyright © {new Date().getFullYear()} Azmain Zahin Raaz - All
            rights reserved
          </p>
          <a
            href="https://www.linkedin.com/in/azmainzahinraaz/"
            className="text-white hover:text-white/70 transition-all duration-200 text-xl"
          >
            <IoLogoLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
