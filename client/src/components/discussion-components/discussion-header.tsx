import type { ReactNode } from "react";
import PrimaryBtn from "../ui/primary-btn";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function DiscussionHeader({
  title,
}: {
  title: string;
}): ReactNode {
  return (
    <header className="w-full h-full p-6 py-8 flex flex-col gap-7">
      <PrimaryBtn href="/discuss" isLink={true} className="text-lg">
        <FaArrowLeftLong />
      </PrimaryBtn>
      <h1 className="font-serif font-medium text-3xl text-white">{title}</h1>
    </header>
  );
}
