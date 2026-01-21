import BlogCard from "@/components/blogs-components/blog-card";
import BlockText from "@/components/ui/block-text";
import { blogs } from "@/services/data/blog-data";
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

      {/* <iframe
        src="https://boishakhionline.com/education/156584"
        className="block w-full h-[calc(100vh-4.75rem)]"
      ></iframe> */}

      <section className="w-full h-full flex justify-center pb-17">
        <div className="w-full h-full max-w-small-max-width flex flex-col gap-10">
          <div
            className="w-full h-71.5 relative after:absolute after:w-full after:h-[80%] after:bottom-0 after:bg-linear-to-t after:from-primary-bg-color after:from-10% after:to-transparent"
            style={{
              backgroundImage: "url('coverphoto-work-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="w-full h-full flex flex-col gap-10">
            <BlockText className="ml-5">My Blogs</BlockText>
            <div className="w-full h-full grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-7">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
