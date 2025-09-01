import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YouTube Videos - Akshay Patel | Technology Tutorials, AI/ML, and Web Development Videos',
  description: 'Watch tutorials, demos, and insights on technology, AI, web development, and software engineering. Video content covering React, Next.js, Machine Learning, and more.',
  keywords: ['YouTube', 'Videos', 'Tutorials', 'Technology', 'AI/ML', 'Web Development', 'React', 'Next.js', 'Machine Learning', 'Data Science', 'Programming', 'Coding'],
  authors: [{ name: 'Akshay Patel' }],
  openGraph: {
    title: 'YouTube Videos - Akshay Patel | Technology Tutorials & Demos',
    description: 'Technology tutorials, AI/ML demos, and web development videos by Akshay Patel',
    type: 'website',
  },
}

export default function YouTubeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
