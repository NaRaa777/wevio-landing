export type ProjectCategory = "all" | "web" | "app" | "ecom" | "saas";

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  cat: Exclude<ProjectCategory, "all">;
  badge: string;
  title: string;
  client: string;
  preview: string;
  desc: string;
  gallery: ProjectScreenshot[];
  metrics: ProjectMetric[];
  stack: string[];
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  initials: string;
  gradient: string;
}

export interface ServiceBlock {
  id: string;
  title: string;
  description: string;
  tags: string[];
  features: { title: string; desc: string }[];
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}
