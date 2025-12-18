import { useEffect, type ReactNode } from "react";
import { Outlet } from "react-router";
import Navbar from "./navbar";
import Footer from "./footer";
import Lenis from "lenis";

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
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
