import { useEffect, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";

export default function Blog(): ReactNode {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Azmain Zahin Raaz - Blog</title>
      </Helmet>

      <iframe
        src="https://boishakhionline.com/education/156584"
        className="block w-full h-[calc(100vh-4.75rem)]"
      ></iframe>
    </>
  );
}
