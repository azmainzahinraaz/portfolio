export type ExperienceType = {
  logoUrl: string;
  position: string;
  company: string;
  timeline: string;
  location: string;
  description: string;
};

export type SkillType = string;

export type EducationType = {
  logoUrl: string;
  name: string;
  degree: string;
  timeline: string;
  grade?: string;
  institution: string;
};

export type PublicationType = {
  imageUrl: string;
  title: string;
  author: string;
  date: string;
  publishedOn: {
    name: string;
    logoUrl?: string;
    link: string;
  }[];
};

export type CertificateType = {
  logoUrl: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
};

export type AwardType = {
  logoUrl: string;
  title: string;
  issuer: string;
  issueDate: string;
  description?: string;
};

export type LanguageType = {
  imageUrl: string;
  name: string;
  proficiency: string;
};
