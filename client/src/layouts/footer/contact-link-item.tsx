import formatUrl from "@/utils/format-url";
import type { ReactNode } from "react";

export default function ContactLinkItem({
  platform,
  url,
  isLink,
}: {
  platform: string;
  url: string;
  isLink: boolean;
}): ReactNode {
  return (
    <div>
      <h4 className="font-semibold text-xl mb-0.75 text-white">{platform}</h4>
      {isLink ? (
        <a
          href={formatUrl(platform.toLowerCase(), url)}
          className="transition-all duration-200 hover:text-white text-white/70"
        >
          {url}
        </a>
      ) : (
        <pre className="text-lg text-white">{url}</pre>
      )}
    </div>
  );
}
