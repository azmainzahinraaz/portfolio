import type { ReactNode } from "react";

export default function AboutLeft(): ReactNode {
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <div className="w-full flex flex-col gap-1">
        <h1 className="text-4xl text-white font-semibold">Azmain Zahin Raaz</h1>
        <p className="text-lg opacity-95 text-white font-medium">
          Youth leader | Entrepreneur | Graphic Designer | Programmer
        </p>
      </div>
      <div className="w-full h-px bg-gray-600 opacity-50" />
      <div className="w-full flex flex-col gap-6 text-[0.9rem]/[170%] text-white">
        <p>
          Azmain Zahin Raaz is a Bangladeshi Computer Science enthusiast, youth
          leader, and emerging software innovator from Dhaka who applies
          technology, research, and design to solve real social problems. He
          founded I Am The Rise to mobilize youth leadership and environmental
          action, directly impacting 200+ students through grassroots programs,
          and launched Headline Haalchaal, a visual-first digital news platform
          that scaled from zero to millions of organic reach by simplifying
          complex civic issues for young audiences through data-backed
          storytelling.
        </p>
        <p>
          He also conducted independent research on disability accessibility in
          mainstream Bangladeshi educational institutions, exposing critical
          gaps in policy implementation, infrastructure, and social attitudes
          while proposing actionable, policy-aligned solutions for inclusive
          education. Professionally, he has delivered large-scale digital growth
          and disability inclusion advocacy through international
          collaborations, generating millions of impressions and measurable
          engagement. Azmain aims to study Computer Science globally and build
          ethical, scalable technologies that advance equity, accessibility, and
          systemic change.
        </p>
      </div>
    </div>
  );
}
