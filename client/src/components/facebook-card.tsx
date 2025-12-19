import { Modal } from "@mui/material";
import { useState, type ReactNode } from "react";
import { FaPlay } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

type FacebookCardProps = {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  views: number;
};

export default function FacebookCard({
  title,
  description,
  thumbnailUrl,
  videoUrl,
  views,
}: FacebookCardProps): ReactNode {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col [word-wrap:break-word] bg-blue-gray rounded-md h-full">
        <div className="aspect-video bg-black flex justify-center items-center relative">
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-auto aspect-video object-contain bg-black brightness-60"
          />
          <button
            className="absolute w-9 h-9 bg-blue rounded-full flex justify-center items-center hover:bg-dark-blue transition-all duration-200 text-white text-sm cursor-pointer"
            onClick={() => setIsVideoOpen(true)}
          >
            <FaPlay />
          </button>
        </div>
        <div className="w-full flex flex-col gap-2 p-4">
          <h3 className="text-white text-[1.2rem] font-medium">{title}</h3>
          <div className="w-full flex flex-col">
            <p className="text-gray-300 text-sm whitespace-pre-wrap">
              {description
                .toString()
                .split(/(\s+)/) // keep whitespace tokens (spaces/newlines)
                .map((token, i) => {
                  if (token.startsWith("#")) {
                    // strip leading hashes and trailing punctuation, then URL-encode
                    const tag = token
                      .replace(/^#+/, "")
                      .replace(/[^\p{L}\p{N}_-]+$/u, "");
                    return (
                      <a
                        key={i}
                        href={`https://www.facebook.com/hashtag/${encodeURIComponent(
                          tag
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {token}{" "}
                      </a>
                    );
                  } else if (token.match(/^\s+$/)) {
                    // whitespace token
                    return;
                  } else {
                    return <span key={i}>{token} </span>;
                  }
                })}
            </p>
            <span className="text-gray-400 text-xs mt-2">{views} views</span>
          </div>
        </div>
      </div>
      <Modal
        open={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="w-full h-full flex justify-center items-center"
        onWheel={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-112.5 h-full max-h-[90vh] overflow-y-auto rounded-md bg-secondary-bg-color">
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-between items-center gap-4 p-4">
              <h2 className="text-white text-base">{title}</h2>
              <button
                className="text-white text-2xl font-bold cursor-pointer hover:text-red-500 transition-all duration-200"
                onClick={() => setIsVideoOpen(false)}
              >
                <RxCross2 />
              </button>
            </div>
            <div className="w-full h-full aspect-9/16 ">
              <video
                src={videoUrl}
                controls
                className="h-[85vh] min-h-112.5 max-w-112.5"
                autoPlay
              ></video>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
