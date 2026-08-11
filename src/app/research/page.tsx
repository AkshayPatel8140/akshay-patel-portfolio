import Research from '@/components/sections/Research'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function ResearchPage() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        <section aria-label="Research and Publications Archive">
          <Research />
        </section>
      </main>

      <Footer />

      <div className="sr-only">
        <h1>Research & Publications - Akshay Patel</h1>
        <p>
          Technical reports on deterministic multi-agent workflows, LLM guardrails,
          and applied AI evaluation systems.
        </p>
      </div>
    </>
  )
}
