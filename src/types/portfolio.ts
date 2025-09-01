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
  location: string
  email: string
  phone: string
  about: string
  summary: string
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
  level: number
  color: string
}

export interface SkillCategory {
  name: string
  icon: string
  skills: Skill[]
}

export interface SkillsData {
  categories: SkillCategory[]
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
