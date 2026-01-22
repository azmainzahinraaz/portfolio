import { navLinks } from "@/services/data/website-data";
import { Activity, useState, type ReactNode } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router";

export default function Navbar(): ReactNode {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <header className="w-screen h-19 flex justify-center items-center bg-secondary-bg-color/80 backdrop-blur-[20px] sticky top-0 z-999">
      <nav className="w-full h-fit flex justify-between items-center max-w-max-width">
        <NavLink to="/" className="text-2xl font-bold">
          <img
            src="/avatar.png"
            alt="Profile picture"
            className="aspect-square rounded-full object-cover object-center"
            width={35}
            height={35}
          />
        </NavLink>

        {/* Desktop navbar */}
        <Activity mode={window.innerWidth < 640 ? "hidden" : "visible"}>
          <menu className="list-none flex gap-10">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white"
                      : "text-gray hover:text-white transition-colors duration-200"
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </menu>
        </Activity>

        {/* Mobile navbar */}
        <Activity mode={window.innerWidth >= 640 ? "hidden" : "visible"}>
          <div className="relative">
            <button
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              className="text-white text-4xl"
            >
              {!isNavbarOpen ? <HiOutlineMenu /> : <RxCross2 />}
            </button>
            {isNavbarOpen && (
              <div className="absolute top-full right-0 w-fit h-full">
                <menu className="list-none flex flex-col bg-secondary-bg-color">
                  {navLinks.map(({ name, path }) => (
                    <li key={name}>
                      <NavLink
                        to={path}
                        className={({ isActive }) =>
                          `block w-full  text-white hover:bg-dark-gray transition-all duration-200 px-4 py-2 pr-15 ` +
                          (isActive ? "bg-blue" : "bg-secondary-bg-color")
                        }
                        onClick={() => setIsNavbarOpen(false)}
                      >
                        {name}
                      </NavLink>
                    </li>
                  ))}
                </menu>
              </div>
            )}
          </div>
        </Activity>
      </nav>
    </header>
  );
}
