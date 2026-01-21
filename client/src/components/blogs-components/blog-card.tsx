import type { BlogType } from "@/services/data/blog-data";
import type { ReactNode } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";
import { GoDotFill } from "react-icons/go";

type BlogCardProps = {
  blog: BlogType;
};

export default function BlogCard({ blog }: BlogCardProps): ReactNode {
  return (
    <Link
      to={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-full"
    >
      <div className="w-full h-full flex flex-col bg-secondary-bg-color rounded-md group cursor-pointer  p-4">
        <img
          src={blog.imageUrl || ""}
          alt={"Press Release Image"}
          className="w-full h-full max-h-85 min-h-60 text-white text-center aspect-16/12 bg-secondary-bg-color flex justify-center items-center object-cover object-center rounded-md group-hover:brightness-90 group-hover:border-dashed group-hover:border-white transition-all"
        />
        <div className="w-full h-fit flex flex-col gap-2 pt-4">
          <div className="w-full flex gap-1 items-center">
            <p className="text-sm text-gray-400">{blog.date}</p>
            <p className="text-xs mt-0.5 text-gray-400">
              <GoDotFill />
            </p>
            <p className="text-sm text-gray-400">{blog.publisher}</p>
          </div>
          <h3 className="text-xl text-white font-semibold">{blog.title}</h3>
          <p className="flex gap-2 group-hover:gap-4 items-center transition-all duration-200 text-white/80 group-hover:text-white/60">
            <span>Learn More</span>
            <FaArrowRightLong className="pt-0.5" />
          </p>
        </div>
      </div>
    </Link>
  );
}
