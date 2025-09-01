import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Akshay Patel | Technology, AI/ML, and Web Development Articles',
  description: 'Read insights, tutorials, and thoughts on technology, AI, web development, and the future of software engineering. Articles published on Medium covering React, Next.js, Machine Learning, and more.',
  keywords: ['Blog', 'Technology', 'AI/ML', 'Web Development', 'React', 'Next.js', 'Machine Learning', 'Data Science', 'Tutorials', 'Insights'],
  authors: [{ name: 'Akshay Patel' }],
  openGraph: {
    title: 'Blog - Akshay Patel | Technology & AI Articles',
    description: 'Technology insights, AI/ML tutorials, and web development articles by Akshay Patel',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
