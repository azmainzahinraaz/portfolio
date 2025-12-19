import type { ReactNode } from "react";

export default function AboutWrapper({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return <div className="w-full h-full flex flex-col gap-5">{children}</div>;
}
