export interface ChallengeItem {
  title: string;
  description: string;
}

export interface TechStackGroup {
  frontend: string[];
  backend: string[];
}

export interface GalleryItem {
  title: string;
  src: string;
  caption?: string;
  alt: string;
}

export interface ProjectSpecs {
  category: string;
  architecture: string;
  auth: string;
  database: string;
  year: string;
  status: string;
}

export interface ProjectDetail {
  num: string;
  slug: string;
  name: string;
  tagline: string;
  label: string;
  link: string;
  githubLink: string;
  cardDescription: string;
  seoDescription: string;
  tags: string[];
  overview: string[];
  problem: string;
  solution: string;
  uxDecisions: string[];
  architectureNotes: string[];
  techStackDetailed: TechStackGroup;
  keyFeatures: string[];
  challengesList: ChallengeItem[];
  futureImprovementsList: string[];
  gallery: GalleryItem[];
  images: {
    right: string;
  };
  seoKeywords: string;
  specs: ProjectSpecs;
}

export type ProjectItem = ProjectDetail;
