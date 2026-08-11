import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/sections/Hero'
import Publications from '@/components/sections/Publications'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section - Main landing area */}
        <section aria-label="Introduction and Hero">
          <Hero />
        </section>

        {/* Research & Publications - Academic / fellowship touchpoint */}
        <section aria-label="Research and Publications">
          <Publications />
        </section>

        {/* About Section - Personal information and skills */}
        <section aria-label="About Akshay Patel">
          <About />
        </section>

        {/* Skills Section - Technical and soft skills */}
        <section aria-label="Technical Skills and Expertise">
          <Skills />
        </section>

        {/* Projects Section - Portfolio showcase */}
        <section aria-label="Featured Projects Portfolio">
          <Projects />
        </section>

        {/* Experience Section - Work history and education */}
        <section aria-label="Professional Experience and Education">
          <Experience />
        </section>

        {/* Contact Section - Get in touch */}
        <section aria-label="Contact Information and Form">
          <Contact />
        </section>
      </main>

      <Footer />
      
      {/* Additional SEO elements */}
      <div className="sr-only">
        <h1>Akshay Patel - Founder & Applied AI Engineer</h1>
        <p>Founder and Applied AI Engineer building deterministic AI automation systems, multi-agent orchestration, and LLM guardrails for production workflows.</p>
        <p>Expertise includes: Multi-Agent Systems, LangGraph, AutoGen, RAG Pipelines, Evaluation Benchmarks, FastAPI, Docker, PostgreSQL, Applied ML Systems Research.</p>
        <p>Available for research collaboration, AI systems work, and fellowship inquiries.</p>
      </div>
    </>
  )
}
