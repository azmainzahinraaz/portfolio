import type {
  DiscussionResponseType,
  ReplyType,
} from "@/types/discussion-types";
import type { ReactNode } from "react";
import Replies from "./replies";

export default function DiscussionBody({
  discussionData,
  discussionId,
}: {
  discussionData: DiscussionResponseType;
  discussionId: string;
}): ReactNode {
  return (
    <section className="w-full h-full flex flex-col border border-l-0 border-dark-gray">
      <div className="w-full h-full min-h-[30vh] p-6">
        <p className="text-base text-white w-full h-full whitespace-pre-wrap wrap-break-word">
          {discussionData.message}
        </p>
      </div>
      <Replies
        replies={discussionData.replies}
        discussionId={discussionId}
        hasAdminReplied={discussionData.hasAdminReplied}
      />
    </section>
  );
}
