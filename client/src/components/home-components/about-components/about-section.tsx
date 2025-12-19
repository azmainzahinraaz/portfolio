import BlockText from "@/components/ui/block-text";
import capitalize from "@/utils/capitalize";
import { useState, type ReactNode } from "react";
import Skills from "./skils";
import AboutWrapper from "./about-wrapper";
import {
  awardData,
  certificateData,
  educationData,
  experienceData,
  languageData,
  publicationData,
} from "@/services/data/about-data";
import ExperienceCard from "./experience-card";
import EducationCard from "./education-card";
import CertificateCard from "./certificate-card";
import AwardCard from "./award-card";
import LanguageCard from "./language-card";
import PublicationCard from "./publication-card";

export default function AboutSection(): ReactNode {
  const [selectedTab, setSelectedTab] = useState<string>("experiences");

  // Define the tabs and their corresponding content
  const tabs: { [tabName: string]: ReactNode } = {
    experiences: (
      <AboutWrapper>
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </AboutWrapper>
    ),
    skills: <Skills />,
    education: (
      <AboutWrapper>
        {educationData.map((education, index) => (
          <EducationCard key={index} education={education} />
        ))}
      </AboutWrapper>
    ),
    publications: (
      <AboutWrapper>
        {publicationData.map((publication, index) => (
          <PublicationCard key={index} publication={publication} />
        ))}
      </AboutWrapper>
    ),
    certificates: (
      <AboutWrapper>
        {certificateData.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </AboutWrapper>
    ),
    awards: (
      <AboutWrapper>
        {awardData.map((award, index) => (
          <AwardCard key={index} award={award} />
        ))}
      </AboutWrapper>
    ),
    languages: (
      <AboutWrapper>
        {languageData.map((language, index) => (
          <LanguageCard key={index} language={language} />
        ))}
      </AboutWrapper>
    ),
  };

  return (
    <section className="w-full h-full py-15 flex justify-center">
      <div className="w-full max-w-small-max-width h-full flex flex-col gap-10 items-center">
        <div className="w-full flex justify-center gap-5 items-center flex-wrap">
          {Object.keys(tabs).map((tabName) => (
            <button
              key={tabName}
              className={`px-4 py-1.5 rounded-md cursor-pointer transition-all duration-200 text-white border border-white/15 ${
                selectedTab === tabName
                  ? "bg-blue"
                  : "bg-secondary-bg-color hover:bg-blue "
              }`}
              onClick={() => setSelectedTab(tabName)}
            >
              {capitalize(tabName)}
            </button>
          ))}
        </div>
        <div className="w-full h-full flex flex-col gap-10">
          <BlockText className="ml-7">{capitalize(selectedTab)}</BlockText>
          <div className="w-full h-full py-7.5 px-10 bg-secondary-bg-color/30 rounded-md shadow-[0px_0px_6px_1px_rgba(0,0,0,0.1)]">
            {selectedTab ? tabs[selectedTab] : null}
          </div>
        </div>
      </div>
    </section>
  );
}
