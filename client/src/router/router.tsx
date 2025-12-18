import { createBrowserRouter } from "react-router";
import UserLayout from "@/layouts/user-layout";
import Blog from "@/pages/blog";
import Contents from "@/pages/contents";
import About from "@/pages/about";
import Faq from "@/pages/faq";
import PageNotFound from "@/pages/page-not-found";
import Home from "@/pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contents",
        element: <Contents />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
