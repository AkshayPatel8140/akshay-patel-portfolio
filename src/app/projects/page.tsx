import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ProjectsCatalog from '@/components/sections/ProjectsCatalog'

export default function ProjectsPage() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        <section aria-label="Full projects catalog">
          <ProjectsCatalog />
        </section>
      </main>

      <Footer />

      <div className="sr-only">
        <h1>Projects - Akshay Patel</h1>
        <p>
          Applied AI systems projects including multi-agent workflows, recommendation engines, and
          earlier mobile engineering work.
        </p>
      </div>
    </>
  )
}
