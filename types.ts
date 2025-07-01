export type ViewType = 'Home' | 'Experience' | 'Projects' | 'Education' | 'Blog';

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  logoUrl: string;
}

export interface Project {
  title: string;
  keyTargets: string[];
  keyLibraries: string[];
  programmingLanguage: string;
  description: string;
  imageUrl: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  coursework: string;
  thesis?: string;
  accolades?: string;
  logoUrl: string;
}

export interface BlogPost {
  title: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  readTime: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  imageUrl: string;
}
