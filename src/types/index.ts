export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  role: string;
  technologies: string[];
  highlights: string[];
  overview: string;
  problem: string;
  technicalArchitecture: string[];
  keyFeatures: string[];
  engineeringChallenges: string[];
  performanceConsiderations: string[];
  results?: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  thumbnail?: string;
  mockupType:
    | 'origem'
    | 'brainstormer-lead'
    | 'eaa'
    | 'ring-builder'
    | 'brainstormer-creator'
    | 'ai-widget'
    | 'smifs';
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
