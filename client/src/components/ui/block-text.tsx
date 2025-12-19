import type { ReactNode } from "react";

export default function BlockText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}): ReactNode {
  return (
    <h2
      className={`text-3xl text-white relative flex items-center font-semibold before:w-2 before:h-[70%] before:absolute before:-left-7 before:bg-red ${className}`}
    >
      {children}
    </h2>
  );
}
