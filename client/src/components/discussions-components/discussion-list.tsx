import type { DiscussionsResponseType } from "@/types/discussion-types";
import type { ReactNode } from "react";
import Loader from "../ui/loader";
import { NavLink } from "react-router";
import { IoPersonCircleOutline } from "react-icons/io5";
import formatTime from "@/utils/format-time";
import { useMutation, useQueryClient } from "react-query";
import { deleteDiscussion } from "@/lib/api/discussion-api";
import toast from "react-hot-toast";
import PrimaryBtn from "../ui/primary-btn";

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
  const token = localStorage.getItem("adminToken") || "";
  const queryClient = useQueryClient();

  const discussionMutation = useMutation({
    mutationFn: (discussionId: string) => deleteDiscussion(discussionId),
    onSuccess: () => {
      console.log("Discussion deleted successfully");
      toast.success("Discussion deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["discussions"] });
    },
    onError: (error) => {
      console.error("Error deleting discussion:", error);
      toast.error("Failed to delete discussion");
    },
  });

  return (
    <NavLink
      to={`/discussion/${discussion._id}`}
      className="w-full max-w-175 border-b border-r border-dark-gray p-5 group bg-secondary-bg-color"
    >
      <div className="w-full h-full flex justify-between gap-5">
        <h2 className="text-2xl font-semibold text-white group-hover:text-blue-500 transition-colors">
          {discussion.title}
        </h2>
        {token && (
          <PrimaryBtn
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (
                window.confirm(
                  "Are you sure you want to delete this discussion?",
                )
              ) {
                discussionMutation.mutate(discussion._id);
              }
            }}
            className="px-3! py-1! text-sm bg-red-600 hover:bg-red-700"
          >
            Delete
          </PrimaryBtn>
        )}
      </div>
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
