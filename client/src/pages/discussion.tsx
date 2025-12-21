import DiscussionBody from "@/components/discussion-components/discussion-body";
import DiscussionHeader from "@/components/discussion-components/discussion-header";
import Information from "@/components/discussion-components/information";
import Loader from "@/components/ui/loader";
import { getDiscussionById } from "@/lib/api/discussion-api";
import type { DiscussionResponseType } from "@/types/discussion-types";
import type { ReactNode } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";

export default function Discussion(): ReactNode {
  const discussionId = useParams().discussionId || "";

  if (!discussionId) {
    throw new Error("Discussion ID is required");
  }

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getDiscussionById(discussionId as string),
    queryKey: ["discussion", discussionId],
  });

  if (isLoading) {
    return (
      <div className="w-screen h-[calc(100vh-4.75rem)] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (isError || (!isLoading && !data?.data.discussion)) {
    throw new Error("Discussion not found");
  }

  const discussion: DiscussionResponseType = data?.data.discussion;

  return (
    <main className="w-full h-full flex justify-center pb-10 items-center">
      <div className="w-full h-full max-w-small-max-width border-l border-dark-gray flex max-[850px]:flex-col gap-5">
        <div className="w-full h-full flex flex-col">
          <DiscussionHeader title={discussion.title} />
          <DiscussionBody
            discussionData={discussion}
            discussionId={discussionId}
          />
        </div>
        <Information name={discussion.name} time={discussion.time} />
      </div>
    </main>
  );
}
