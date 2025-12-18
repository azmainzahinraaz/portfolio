import { useEffect, type ReactNode } from "react";

export default function Blog(): ReactNode {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <iframe
      src="https://saadalamin.blogspot.com/"
      className="block w-full h-[calc(100vh-4.75rem)]"
    ></iframe>
  );
}
