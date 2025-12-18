import { createBrowserRouter } from "react-router";
import App from "@/App";
import UserLayout from "@/layouts/user-layout";
import Blog from "@/pages/blog";
import Contents from "@/pages/contents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/contents",
        element: <Contents />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
