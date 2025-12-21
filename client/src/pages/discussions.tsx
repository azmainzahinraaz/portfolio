import DiscussionList from "@/components/discussions-components/discussion-list";
import DiscussionsHeader from "@/components/discussions-components/discussions-header";
import FeaturedDiscussions from "@/components/discussions-components/featured-discussions";
import { getDiscussions } from "@/lib/api/discussion-api";
import type { DiscussionsResponseType } from "@/types/discussion-types";
import { useEffect, useState, type ReactNode } from "react";
import { useQuery } from "react-query";

export default function Discussions(): ReactNode {
  const [title, setTitle] = useState<string>("");
  const [sortBy, setSortBy] = useState<"latest" | "oldest">("latest");

  const {
    data: discussionsData,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => getDiscussions({ title, shortBy: sortBy }),
    queryKey: ["discussions", title, sortBy],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isError) {
    return <div>Error loading discussions.</div>;
  }

  const data: DiscussionsResponseType[] =
    discussionsData?.data.discussions || [];

  return (
    <main className="w-full h-full flex justify-center pb-10 items-center">
      <div className="w-full h-full max-w-small-max-width border-l border-dark-gray flex max-[850px]:flex-col gap-5">
        <div className="w-full h-full flex flex-col">
          <DiscussionsHeader
            title={title}
            setTitle={setTitle}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <DiscussionList discussionData={data} isLoading={isLoading} />
        </div>
        <FeaturedDiscussions discussionData={data} isLoading={isLoading} />
      </div>
    </main>
  );
}
