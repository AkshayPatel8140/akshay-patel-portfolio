import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research & Publications - Akshay Patel | Applied AI Systems',
  description:
    'Technical reports and whitepapers on deterministic multi-agent systems, LLM guardrails, evaluation benchmarks, and applied AI reliability by Akshay Patel.',
  keywords: [
    'Research',
    'Publications',
    'Multi-Agent Systems',
    'LLM Guardrails',
    'Deterministic AI',
    'AI Safety',
    'Akshay Patel',
  ],
  authors: [{ name: 'Akshay Patel' }],
  openGraph: {
    title: 'Research & Publications - Akshay Patel',
    description:
      'Applied AI systems research: multi-agent workflows, guardrails, and evaluation.',
    type: 'website',
  },
}

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
