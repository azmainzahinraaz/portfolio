import type { DiscussionsResponseType } from "@/types/discussion-types";
import type { ReactNode } from "react";
import Loader from "../ui/loader";
import { NavLink } from "react-router";
import { IoPersonCircleOutline } from "react-icons/io5";
import formatTime from "@/utils/format-time";

export default function DiscussionList({
  discussionData,
  isLoading,
}: {
  discussionData: DiscussionsResponseType[];
  isLoading: boolean;
}): ReactNode {
  return (
    <section className="w-full h-full flex flex-col min-h-[50vh]">
      {isLoading ? (
        <div className="w-full h-72 flex justify-center items-center">
          <Loader />
        </div>
      ) : discussionData.length === 0 ? (
        <p className="text-sm text-gray-300 py-4 px-3">No discussions found.</p>
      ) : (
        discussionData.map((discussion) => (
          <DiscussionCard key={discussion.time} discussion={discussion} />
        ))
      )}
    </section>
  );
}

function DiscussionCard({
  discussion,
}: {
  discussion: DiscussionsResponseType;
}): ReactNode {
  return (
    <NavLink
      to={`/discussion/${discussion._id}`}
      className="w-full max-w-175 border-b border-r border-dark-gray p-5 group bg-secondary-bg-color"
    >
      <h2 className="text-2xl font-semibold text-white group-hover:text-blue-500 transition-colors">
        {discussion.title}
      </h2>
      <p className="text-base mb-2 text-gray mt-2 line-clamp-2">
        {discussion.message}
      </p>
      <p className="w-full flex gap-2 flex-wrap justify-between items-center">
        <span className="flex gap-1 items-center">
          <IoPersonCircleOutline className="text-white/80" />
          <span className="text-sm text-white/80">{discussion.name}</span>
        </span>
        <span className="flex gap-1 text-sm">
          <span className="text-white">Asked</span>
          <span className="text-white/80">{formatTime(discussion.time)}</span>
        </span>
      </p>
    </NavLink>
  );
}
