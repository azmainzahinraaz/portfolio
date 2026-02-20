import type { ReactNode } from "react";
import { NavLink } from "react-router";
import ContactLinkItem from "./contact-link-item";
import { contactLinkItems } from "@/services/data/website-data";

export default function FooterRight(): ReactNode {
  const pages: { name: string; url: string }[] = [
    {
      name: "Home",
      url: "",
    },
    {
      name: "About",
      url: "about",
    },
    {
      name: "Works",
      url: "works",
    },
    {
      name: "Visual",
      url: "visual-designs",
    },
    {
      name: "Discuss",
      url: "discuss",
    },
    {
      name: "Blogs",
      url: "blog",
    },
    {
      name: "FAQs",
      url: "faqs",
    },
  ];

  return (
    <div className="w-full border-l border-dark-gray flex flex-col gap-15 pt-26 pb-10 relative max-[950px]:border-l-0 max-[950px]:border-t max-[950px]:pt-12">
      <div className="ml-15 flex gap-42 mr-[calc((100vw-var(--small-max-width))/2)] max-[1500px]:gap-12 max-[1500px]:justify-between max-[950px]:mx-0! max-[470px]:flex-col max-[950px]:px-[calc((100vw-var(--small-max-width))/2)]">
        <div className="flex flex-col gap-6">
          <h3 className="text-[28px] font-semibold text-white">Contact us</h3>
          <div className="flex flex-col gap-5">
            {contactLinkItems.map(({ platform, url, isLink }) => (
              <ContactLinkItem
                key={platform}
                platform={platform}
                url={url}
                isLink={isLink}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-[28px] font-semibold text-white">Pages</h3>
          <div className="grid grid-cols-2 grid-rows-4 gap-x-16 gap-y-3 max-[1500px]:grid-cols-1 max-[950px]:grid-cols-2 max-sm:grid-cols-1 max-[470px]:grid-cols-2">
            {pages.map(({ name, url }) => {
              return (
                <NavLink
                  key={name}
                  to={`/${url}`}
                  className={({ isActive }) =>
                    `transition-all duration-200 hover:text-white ${
                      isActive ? "text-white" : "text-white/70"
                    }`
                  }
                >
                  {name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
      <p className="w-full pl-15 pr-[calc((100vw-var(--small-max-width))/2)] pt-10 border-t border-dark-gray text-[1.1em] text-white max-[1500px]:text-[1em] max-[950px]:pl-0 max-[950px]:pr-0 max-[950px]:px-[calc((100vw-var(--small-max-width))/2)]!">
        <span>
          Copyright © {new Date().getFullYear()} Azmain Zahin Raaz - All rights
          reserved
        </span>
      </p>
    </div>
  );
}
