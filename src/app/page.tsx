import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/sections/Hero'
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
        <h1>Akshay Patel - Full-Stack Developer & AI/ML Expert Portfolio</h1>
        <p>Professional software developer with 5+ years of experience specializing in AI/ML, React, Next.js, and full-stack development. Based in the United States, delivering innovative solutions for clients worldwide.</p>
        <p>Expertise includes: React, Next.js, TypeScript, Node.js, Python, Machine Learning, AI Agents, Computer Vision, Natural Language Processing, Mobile Development, Cloud Computing.</p>
        <p>Available for remote work and freelance projects. Contact for collaboration opportunities.</p>
      </div>
    </>
  )
}
