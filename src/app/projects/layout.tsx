import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Akshay Patel | Applied AI Systems & Engineering',
  description:
    'Full project catalog: multi-agent systems, recommendation engines, agentic workflows, and earlier mobile/web work by Akshay Patel.',
  keywords: [
    'Projects',
    'Portfolio',
    'Multi-Agent Systems',
    'AI Engineering',
    'LangGraph',
    'Akshay Patel',
  ],
  authors: [{ name: 'Akshay Patel' }],
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
