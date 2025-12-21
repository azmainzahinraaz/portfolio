import type { DiscussionsResponseType } from "@/types/discussion-types";
import formatDate from "@/utils/format-date";
import type { ReactNode } from "react";
import Loader from "../ui/loader";

export default function FeaturedDiscussions({
  discussionData,
  isLoading,
}: {
  discussionData: DiscussionsResponseType[];
  isLoading: boolean;
}): ReactNode {
  return (
    <aside className="w-full max-w-104 max-lg:max-w-70 max-[850px]:max-w-full! h-fit bg-secondary-bg-color border max-[850px]:border-l-0 max-[850px]:rounded-none border-dark-gray rounded-md mt-6">
      <h2 className="px-2.5 py-3.5 border-b border-dark-gray text-white text-lg font-medium">
        Featured Discussions
      </h2>
      {isLoading ? (
        <div className="w-full h-64 flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="px-4 py-5 rounded-bl-md rounded-br-md">
          {discussionData.length === 0 ? (
            <p className="text-sm text-gray-300">No featured discussions.</p>
          ) : (
            <ul className="flex flex-col gap-4">
              {discussionData.slice(0, 5).map((discussion) => (
                <li
                  key={discussion._id}
                  className="w-full border-b border-dark-gray/60 last:border-b-0 pb-4"
                >
                  <a
                    href={`/discussions/${discussion._id}`}
                    className="text-white hover:text-[#bfdcfa] transition-all duration-200"
                  >
                    <h3 className="text-base font-medium mb-1">
                      {discussion.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      By {discussion.name} on {formatDate(discussion.time)}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </aside>
  );
}
