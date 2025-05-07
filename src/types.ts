export type ExperienceItem = {
    title: string;
    company: string;
    period: string;
    description: string;
    tags: string[];
  };
  export type ProjectItem = {
    title: string;
    description: string;
    image?: string; // optional thumbnail
    link?: string;
    tags: string[];
  };
  export type BlogArticle = {
    title: string;
    year: string;
    description: string;
    image?: string;
    link?: string;
  };
