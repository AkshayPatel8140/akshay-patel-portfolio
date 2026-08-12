// Portfolio Data - Centralized management for all static content

import type {
  HeroQuickLink,
  NavigationConfig,
  PersonalInfo,
  SkillsData,
  SocialLink,
} from '@/types/portfolio'

// Navigation Configuration
export const navigationConfig: NavigationConfig = {
  logo: {
    initials: 'AP',
    fullName: 'Akshay Patel',
    title: 'Founder & Applied AI Engineer'
  },
  links: [
    { name: 'Home', href: '#home', type: 'hash' },
    { name: 'Research', href: '/research', type: 'page' },
    { name: 'About', href: '#about', type: 'hash' },
    { name: 'Skills', href: '#skills', type: 'hash' },
    { name: 'Projects', href: '/projects', type: 'page' },
    { name: 'Blog', href: '/blog', type: 'page' },
    { name: 'YouTube', href: '/youtube', type: 'page' },
    { name: 'Experience', href: '#experience', type: 'hash' },
    { name: 'Contact', href: '#contact', type: 'hash' }
  ]
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: 'Akshay Patel',
  title: 'Founder & Applied AI Engineer',
  headline:
    'Founder & Applied AI Engineer building deterministic AI automation systems and agentic workflows.',
  location: 'United States',
  email: 'akshaygpatel1997@gmail.com',
  phone: '+1 (669) 231-9631',
  about:
    'Applied AI engineer specializing in multi-agent orchestration, enterprise automation, and LLM guardrails - building systems that make autonomous workflows reliable, evaluable, and production-ready.',
  summary:
    'Founder and Applied AI Engineer focused on deterministic AI automation, multi-agent systems, and applied ML systems research. Experience spanning agentic workflows, hallucination mitigation, evaluation pipelines, and production infrastructure for enterprise automation.'
}

// Hero quick links (research CTAs; GitHub lives in the round social icon row)
export const heroQuickLinks: HeroQuickLink[] = [
  {
    name: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=JqZzXukAAAAJ&hl=en',
    type: 'external',
    available: true
  },
  {
    name: 'OSF Research',
    href: null,
    type: 'external',
    available: false
  },
  {
    name: 'Get in Touch',
    href: '#contact',
    type: 'hash',
    available: true
  }
]

// Social Media Links (aligned with live Hero destinations)
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/AkshayPatel8140',
    icon: 'Github',
    color: 'hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/akshay-patel-04a714116',
    icon: 'Linkedin',
    color: 'hover:bg-blue-600'
  },
  {
    name: 'Twitter',
    href: 'https://x.com/AGPatel97',
    icon: 'Twitter',
    color: 'hover:bg-blue-400'
  },
  {
    name: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=JqZzXukAAAAJ&hl=en',
    icon: 'GraduationCap',
    color: 'hover:bg-blue-700'
  },
  {
    name: 'Email',
    href: 'mailto:akshaygpatel1997@gmail.com',
    icon: 'Mail',
    color: 'hover:bg-red-500'
  }
]

// Skills Data — research-aligned tiers (consumed by Skills.tsx)
export const skillsData: SkillsData = {
  sectionTitle: 'Skills & Expertise',
  sectionSubtitle:
    'Technical stack organized for applied AI systems work: multi-agent orchestration, evaluation, and production infrastructure.',
  categories: [
    {
      name: 'LLMs & Multi-Agent Systems',
      tier: 'Tier 1',
      description: 'Agent orchestration, model APIs, and deterministic workflow control',
      icon: 'Brain',
      skills: [
        { name: 'LangGraph', proficiency: 90 },
        { name: 'AutoGen', proficiency: 85 },
        { name: 'OpenAI / Claude APIs', proficiency: 92 },
        { name: 'Multi-Agent Orchestration', proficiency: 90 },
        { name: 'LLM Guardrails', proficiency: 88 },
        { name: 'Prompt & Tool Design', proficiency: 90 }
      ]
    },
    {
      name: 'ML & Evaluation Systems',
      tier: 'Tier 2',
      description: 'Retrieval, model training, and reliability measurement',
      icon: 'Cpu',
      skills: [
        { name: 'PyTorch', proficiency: 82 },
        { name: 'RAG Pipelines', proficiency: 88 },
        { name: 'Vector Databases', proficiency: 85 },
        { name: 'Evaluation Benchmarks', proficiency: 84 },
        { name: 'Hallucination Mitigation', proficiency: 86 },
        { name: 'Embeddings & Ranking', proficiency: 83 }
      ]
    },
    {
      name: 'Production Systems',
      tier: 'Tier 3',
      description: 'APIs, data stores, and deployable services for AI workloads',
      icon: 'Server',
      skills: [
        { name: 'FastAPI', proficiency: 88 },
        { name: 'Redis', proficiency: 82 },
        { name: 'Docker', proficiency: 85 },
        { name: 'PostgreSQL', proficiency: 84 },
        { name: 'Python / Node.js', proficiency: 90 },
        { name: 'CI/CD & Cloud Deploy', proficiency: 80 }
      ]
    }
  ],
  softSkills: [
    {
      title: 'Systems Thinking',
      description: 'Designing agent pipelines with clear failure modes, constraints, and evaluation loops',
      icon: 'Cpu'
    },
    {
      title: 'Research Rigor',
      description: 'Turning applied experiments into reproducible benchmarks and technical write-ups',
      icon: 'BookOpen'
    },
    {
      title: 'Technical Leadership',
      description: 'Mentoring engineers and aligning multi-agent builds with product and safety goals',
      icon: 'Users'
    },
    {
      title: 'Problem Decomposition',
      description: 'Breaking ambiguous AI automation goals into deterministic, testable workflows',
      icon: 'Lightbulb'
    },
    {
      title: 'Cross-Functional Delivery',
      description: 'Shipping with research, product, and ops partners under real latency and reliability constraints',
      icon: 'Target'
    },
    {
      title: 'Reliability Focus',
      description: 'Prioritizing guardrails, observability, and hallucination mitigation in production agents',
      icon: 'Shield'
    }
  ],
  currentLearning: [
    {
      name: 'AI Safety Evaluation',
      status: 'In Progress',
      icon: 'Shield'
    },
    {
      name: 'Deterministic Agent Control',
      status: 'Researching',
      icon: 'Brain'
    },
    {
      name: 'Multi-Agent Benchmarks',
      status: 'Exploring',
      icon: 'TrendingUp'
    },
    {
      name: 'Systems for LLM Ops',
      status: 'Learning',
      icon: 'Rocket'
    }
  ]
}

// Categories for filtering
export const categories = {
  blog: ['All', 'AI/ML', 'Frontend', 'Web Development', 'Data Science', 'Technology'],
  youtube: ['All', 'AI/ML', 'Frontend', 'Web Development', 'Data Science', 'Programming', 'Technology']
}

// External Links
export const externalLinks = {
  medium: 'https://medium.com/@apatel13066',
  youtube: 'https://www.youtube.com/@yourchannel'
}

// SEO Configuration
export const seoConfig = {
  title: 'Akshay Patel - Founder & Applied AI Engineer',
  description:
    'Founder and Applied AI Engineer building deterministic AI automation systems, multi-agent orchestration, and LLM guardrails for production workflows.',
  keywords: [
    'Akshay Patel',
    'Applied AI Engineer',
    'Multi-Agent Systems',
    'LLM Guardrails',
    'Deterministic AI Automation',
    'Agentic Workflows',
    'AI Systems Research',
    'Portfolio'
  ],
  author: 'Akshay Patel',
  url: 'https://akshaypatel.dev'
}
