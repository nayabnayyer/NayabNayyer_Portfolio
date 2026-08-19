export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  featured?: boolean;
  status?: 'FEATURED' | 'ONGOING' | 'COMPLETED';
  workflow: string[];
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  conferenceNote?: {
    event: string;
    role: string;
    venue: string;
    date: string;
  };
  details: {
    problemStatement: string;
    architectureDescription: string;
    engineeringDecisions: string[];
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Education' | 'Presentation';
  highlights: string[];
  badge?: string;
}

export interface BuildCapability {
  title: string;
  description: string;
  technologies: string[];
}
