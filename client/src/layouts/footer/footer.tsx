import type { ReactNode } from "react";
import FooterInfo from "./footer-info";
import FooterRight from "./footer-right";

export default function Footer(): ReactNode {
  return (
    <footer className="relative bg-secondary-bg-color shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1)] w-full h-fit flex gap-32 pl-[calc((100%-var(--small-max-width))/2)] max-[1500px]:justify-between max-[1500px]:gap-12 max-[950px]:flex-col max-max-[950px]:self-center max-[950px]:pl-0 before:absolute before:w-full before:h-full before:bg-pure-white before:left-0 before:top-0 before:-z-9999">
      <FooterInfo />
      <FooterRight />
    </footer>
  );
}
