import FacebookCard from "@/components/facebook-card";
import Loader from "@/components/ui/loader";
import { fetchFacebookVideos } from "@/lib/api/facebook-data";
import { useEffect, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";

export default function Contents(): ReactNode {
  const { data, isLoading, isError } = useQuery({
    queryFn: fetchFacebookVideos,
    queryKey: ["facebook-videos"],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-[calc(100vh-4.75rem)] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>Error loading videos.</div>;
  }

  return (
    <>
      <Helmet>
        <title>Azmain Zahin Raaz - Contents</title>
      </Helmet>

      <main className="w-screen h-full flex justify-center items-center py-8">
        <section className="w-full max-w-small-max-width grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
          {data.data.map((video: any) => (
            <FacebookCard
              key={video.id}
              title={video.title || "No Title"}
              description={video.description || "No Description"}
              thumbnailUrl={video.picture || ""}
              videoUrl={video.source || ""}
              views={video.views || 0}
            />
          ))}
        </section>
      </main>
    </>
  );
}
