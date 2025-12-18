import Hero from "@/components/home-components/hero-components/hero";
import type { ReactNode } from "react";

export default function Home(): ReactNode {
  return (
    <main className="w-full h-full flex flex-col items-center">
      <Hero />
    </main>
  );
}
