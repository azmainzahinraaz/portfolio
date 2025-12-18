import { fetchFacebookVideos } from "@/lib/api/facebook-data";
import type { ReactNode } from "react";
import { useQuery } from "react-query";

export default function Contents(): ReactNode {
  const { data } = useQuery({
    queryFn: fetchFacebookVideos,
    queryKey: ["facebook-videos"],
  });

  console.log(data);

  return <div>hello</div>;
}
