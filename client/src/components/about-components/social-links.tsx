import { socialLinks } from "@/services/website-data";
import type { ReactNode } from "react";

export default function SocialLinks(): ReactNode {
  return (
    <section className="w-full h-full flex flex-col gap-7">
      <h2 className="text-3xl text-white relative flex items-center font-semibold before:w-2 before:h-[70%] before:absolute before:-left-7 before:bg-red">
        Follow
      </h2>
      <div className="w-full flex gap-4">
        {socialLinks.map((social, index) => (
          <a
            href={social.url}
            key={index}
            className="group relative w-11 h-11 text-lg text-white bg-secondary-bg-color flex justify-center items-center rounded-md hover:bg-gray/30 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
            <span className="pointer-events-none absolute top-3 text-xs text-white p-2 rounded-sm bg-dark-gray opacity-0 group-hover:opacity-100 group-hover:-top-7 transition-all duration-300 whitespace-nowrap">
              {social.platform}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
