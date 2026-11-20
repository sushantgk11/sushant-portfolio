export interface Project {
  id: string;
  name: string;
  category: string;
  ownership: string;
  featured: boolean;
  thumbnail: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  liveDemoUrl: string;
  description: string;
  title: string;
  responsibilities: string;
  technologies: string[];
  problem: string;
  architecture: string;
  highlights: string[];
  challenge: string;
  solution: string;
  reliability: string;
  interfaceNotes: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
  skills: string[];
}

export interface SkillGroup {
  title: string;
  description?: string;
  skills: string[];
}

export interface BuildStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}
