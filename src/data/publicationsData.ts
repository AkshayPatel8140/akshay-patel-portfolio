import type { PublicationsData } from '@/types/portfolio'

export const publicationsData: PublicationsData = {
  sectionTitle: 'Research & Publications',
  sectionSubtitle:
    'Technical reports and whitepapers on deterministic multi-agent systems, LLM guardrails, and applied AI reliability.',
  items: [
    {
      id: 'deterministic-multi-agent-constraints',
      title:
        'Deterministic Execution Constraints in Autonomous Multi-Agent Workflows',
      abstract:
        'This technical report examines failure modes in autonomous multi-agent systems and proposes execution constraints that improve reliability without sacrificing agent flexibility. We outline guardrail patterns for tool use, state transitions, and evaluation loops that reduce hallucinated actions and non-deterministic drift in production automation pipelines.',
      authors: ['Akshay Patel'],
      venue: 'Technical Report / Whitepaper',
      year: '2026',
      status: 'Draft',
      featured: true,
      pdfUrl: null,
      doi: null,
      scholarUrl: 'https://scholar.google.com/citations?user=JqZzXukAAAAJ&hl=en',
      osfUrl: null,
      tags: [
        'Multi-Agent Systems',
        'Deterministic Automation',
        'LLM Guardrails',
        'AI Safety'
      ]
    },
    {
      id: 'evaluation-benchmarks-placeholder',
      title: 'Evaluation Benchmarks for Tool-Using Agents in Enterprise Workflows',
      abstract:
        'Placeholder abstract — forthcoming technical note on task-level evaluation harnesses, latency budgets, and hallucination metrics for tool-augmented agents deployed in enterprise automation settings.',
      authors: ['Akshay Patel'],
      venue: 'Working Paper',
      year: '2026',
      status: 'In Progress',
      featured: true,
      pdfUrl: null,
      doi: null,
      scholarUrl: 'https://scholar.google.com/citations?user=JqZzXukAAAAJ&hl=en',
      osfUrl: null,
      tags: ['Evaluation', 'RAG', 'Agent Benchmarks']
    }
  ]
}
