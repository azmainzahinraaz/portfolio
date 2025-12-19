import Hero from "@/components/home-components/hero-components/hero";
import Press from "@/components/home-components/press-components/press";
import { useEffect, type ReactNode } from "react";

export default function Home(): ReactNode {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="w-full h-full flex flex-col items-center">
      <Hero />
      <Press />
    </main>
  );
}
