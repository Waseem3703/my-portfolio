export type ExperienceItem = {
    title: string;
    company: string;
    period: string;
    description: string;
    tags: string[];
    image?: string;
    link?: string;
  };
  export type ProjectItem = {
    id: string;
    title: string;
    description: string;
    image?: string; 
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
