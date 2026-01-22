import PrimaryBtn from "@/components/ui/primary-btn";
import SocialIcons from "@/components/ui/social-icons";
import type { ReactNode } from "react";

export default function FooterInfo(): ReactNode {
  const contactLinks = {
    facebook: "https://www.facebook.com/azmainzahinraaz",
    instagram: "https://www.instagram.com/azmainzahinraaz/",
    email: "azmainzahinraaz@gmail.com",
    phone: "01304669894",
  };

  return (
    <div className="max-w-132.5 flex flex-col justify-between pt-26.25 pb-10 max-[950px]:gap-12 max-[950px]:pb-0 max-[950px]:max-w-max-width max-[950px]:px-[calc((100vw-var(--max-width))/2)] max-[950px]:pt-16">
      <div className="flex flex-col gap-5 max-[950px]:gap-3 z-99">
        <h3 className="font-medium text-5xl max-sm:text-4xl text-white">
          Azmain Zahin Raaz
        </h3>
        <div>
          <p className="text-[1.1em]/[145%] mb-3.75 max-sm:text-[1em]/[145%] text-white/90">
            Azmain Zahin Raaz is a Bangladeshi student, graphics designer, and
            researcher exploring technology, accessibility, and social impact.
          </p>
          <PrimaryBtn
            className="text-[1em] px-4 before:rounded-[3px] after:rounded-[3px]"
            isLink={true}
            href={"/discuss"}
          >
            Discuss
          </PrimaryBtn>
        </div>
      </div>
      <SocialIcons contactLinks={contactLinks} />
    </div>
  );
}
