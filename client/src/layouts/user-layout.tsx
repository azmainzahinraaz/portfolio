import type { ReactNode } from "react";
import { Outlet } from "react-router";
import Navbar from "./navbar";
import Footer from "./footer";

export default function UserLayout(): ReactNode {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
