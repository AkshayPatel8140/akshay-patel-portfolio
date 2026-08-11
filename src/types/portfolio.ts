// Portfolio Types - TypeScript interfaces for all data structures

// Navigation Types
export interface NavigationLink {
  name: string
  href: string
  type: 'hash' | 'page'
}

export interface NavigationConfig {
  logo: {
    initials: string
    fullName: string
    title: string
  }
  links: NavigationLink[]
}

// Personal Information Types
export interface PersonalInfo {
  name: string
  title: string
  headline: string
  location: string
  email: string
  phone: string
  about: string
  summary: string
}

// Hero quick-link CTAs (GitHub, Scholar, OSF, Contact)
export interface HeroQuickLink {
  name: string
  href: string | null
  type: 'external' | 'hash'
  /** When false, render as disabled / "Coming soon" until the profile exists */
  available: boolean
}

// Social Media Types
export interface SocialLink {
  name: string
  href: string
  icon: string
  color: string
}

// Skills Types
export interface Skill {
  name: string
  /** 0–100 proficiency shown in the Skills section bars */
  proficiency: number
}

export interface SkillCategory {
  name: string
  /** Short tier label, e.g. "Tier 1" */
  tier: string
  description: string
  icon: string
  skills: Skill[]
}

export interface SkillsData {
  sectionTitle: string
  sectionSubtitle: string
  categories: SkillCategory[]
  softSkills: SoftSkill[]
  currentLearning: LearningItem[]
}

export interface SoftSkill {
  title: string
  description: string
  icon: string
}

export interface LearningItem {
  name: string
  status: string
  icon: string
}

// Project Types
export interface Project {
  id: number
  title: string
  description: string
  shortDescription: string
  image: string
  category: string
  technologies: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  androidUrl?: string
  iosUrl?: string
  ipadUrl?: string
  windowsUrl?: string
  macUrl?: string
  status: 'Completed' | 'In Progress' | 'Planned'
  /** Shown on home (max 3). */
  featured?: boolean
  /** Earlier / client work — collapsible archive on /projects. */
  archived?: boolean
}

// Blog Types
export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  mediumUrl: string
  publishedDate: string
  readTime: string
  category: string
  tags: string[]
  image: string
  featured?: boolean
}

// YouTube Types
export interface YouTubeVideo {
  id: number
  title: string
  description: string
  youtubeUrl: string
  thumbnail: string
  publishedDate: string
  duration: string
  category: string
  tags: string[]
  featured?: boolean
}

// Publication / Research Types
export interface PublicationLink {
  label: string
  href: string | null
  available: boolean
}

export interface Publication {
  id: string
  title: string
  abstract: string
  authors: string[]
  venue: string
  year: string
  status: 'Published' | 'Preprint' | 'Draft' | 'In Progress'
  featured?: boolean
  pdfUrl: string | null
  doi: string | null
  scholarUrl: string | null
  osfUrl: string | null
  tags: string[]
}

export interface PublicationsData {
  sectionTitle: string
  sectionSubtitle: string
  items: Publication[]
}

// Categories Types
export interface Categories {
  blog: string[]
  youtube: string[]
}

// External Links Types
export interface ExternalLinks {
  medium: string
  youtube: string
}

// SEO Types
export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  author: string
  url: string
}
