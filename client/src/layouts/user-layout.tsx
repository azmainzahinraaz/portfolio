import { useEffect, type ReactNode } from "react";
import { Outlet } from "react-router";
import Navbar from "./navbar";
import Footer from "./footer/footer";
import { Toaster } from "react-hot-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function UserLayout(): ReactNode {
  let smoother: ScrollSmoother | null = null;
  useGSAP(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // seconds to catch up to native scroll
      effects: true, // enable data-speed / data-lag effects
      smoothTouch: 0.1, // smoothing on touch devices
      normalizeScroll: true,
    });
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (smoother) {
      smoother.scrollTop();
    }
  }, []);

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="pt-19">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
}
