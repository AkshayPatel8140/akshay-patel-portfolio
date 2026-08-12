import type { PublicationsData } from '@/types/portfolio'

export const publicationsData: PublicationsData = {
  sectionTitle: 'Research & Publications',
  // Context for the section  -  not a summary of the cards below
  sectionSubtitle:
    'I study how to make agentic systems behave predictably in production: clearer failure modes, stricter tool boundaries, and evaluation that measures reliability - not just demo quality.',
  items: [
    {
      id: 'deterministic-multi-agent-constraints',
      title:
        'Deterministic Execution Constraints in Autonomous Multi-Agent Workflows',
      abstract:
        'Research on keeping multi-agent tool use reliable under real production constraints.',
      focus:
        'In multi-agent pipelines, one bad tool call or fuzzy handoff can cascade: wrong API writes, skipped verification, or loops that never converge. I’ve seen this in brand-compliance agents, support agents, and cross-system automation bridges - where “mostly correct” is not good enough for live workflows.',
      approach:
        "I'm documenting recurring failure patterns (tool misuse, state drift, weak verification), then designing explicit constraints: allowed tools per step, typed state transitions, retry budgets, and human/system gates when confidence is low. The goal is a practical constraint set you can apply to LangGraph-style and similar orchestrations - not a vague reliability checklist.",
      nextStep:
        'Turn the draft notes into a short technical write-up with examples from current agent builds, then publish a PDF (GitHub or OSF) for feedback before any formal preprint.',
      authors: ['Akshay Patel'],
      venue: 'Ongoing research',
      year: '2026',
      status: 'Draft',
      featured: true,
      pdfUrl: null,
      doi: null,
      scholarUrl: 'https://scholar.google.com/citations?user=JqZzXukAAAAJ&hl=en',
      osfUrl: null,
      tags: [
        'Multi-Agent Systems',
        'Guardrails',
        'Deterministic Workflows',
        'AI Safety'
      ]
    },
    {
      id: 'evaluation-benchmarks-agents',
      title: 'Evaluation Benchmarks for Tool-Using Agents in Enterprise Workflows',
      abstract:
        'Research on scoring tool-using agents for latency, accuracy, and failure behavior.',
      focus:
        "Most agent demos are judged by a few happy-path chats. In enterprise settings you also need latency budgets, grounded tool outcomes, and clear fail/escalate behavior. Without a shared task set, it's hard to tell if a change helped - or just looked better in one transcript.",
      approach:
        "I'm defining a compact benchmark: fixed tasks, allowed tools, success criteria, and metrics for latency, hallucination/off-tool actions, and escalation correctness. Early design targets support-style and ops-style workflows (ticket context, multi-system lookups, structured updates) so results map to work I already ship.",
      nextStep:
        'Freeze v0 task definitions, run baselines on current calling/chat agents, and record scores so later iterations have something to beat.',
      authors: ['Akshay Patel'],
      venue: 'Ongoing research',
      year: '2026',
      status: 'In Progress',
      featured: true,
      pdfUrl: null,
      doi: null,
      scholarUrl: 'https://scholar.google.com/citations?user=JqZzXukAAAAJ&hl=en',
      osfUrl: null,
      tags: ['Evaluation', 'Tool-Using Agents', 'Benchmarks']
    }
  ]
}
