import type { ReactNode } from "react";
import BlockText from "../ui/block-text";

export default function WorksWrapper({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}): ReactNode {
  return (
    <section className="w-full h-full flex flex-col gap-10">
      <BlockText className="ml-5">{title}</BlockText>
      <div className="w-full h-full">{children}</div>
    </section>
  );
}
