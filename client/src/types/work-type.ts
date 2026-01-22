import type { ReactNode } from "react";

export type MyWorkType = {
  imageUrl: string;
  title: string;
  links: {
    name: string;
    url: string;
    icon: ReactNode;
  }[];
};

export type DocumentaryType = {
  src: string;
  title: string;
};

export type TopContent = {
  src: string;
  title: string;
};

export type MusicVideoType = {
  imageUrl: string;
  title: string;
  link: string;
};

export type PodcastType = {
  src: string;
  title: string;
};

export type ProjectType = {
  src: string;
  title: string;
};

export type PhotographyType = {
  imageUrl: string;
};

export type DesignType = {
  imageUrl: string;
};

export type SeminarType = {
  src: string;
};

export type SocialType = {
  imageUrl: string;
  title: string;
};
