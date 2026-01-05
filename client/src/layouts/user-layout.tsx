import { useEffect, type ReactNode } from "react";
import { Outlet } from "react-router";
// import Navbar from "./navbar";
import Lenis from "lenis";
// import Footer from "./footer/footer";
import { Toaster } from "react-hot-toast";

export default function UserLayout(): ReactNode {
  // Initialize Lenis
  new Lenis({
    autoRaf: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
      <Toaster position="top-right" />
    </>
  );
}
