import YouTubeVideos from '@/components/sections/YouTubeVideos'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function YouTubePage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* YouTube Videos Section - Full page dedicated to video content */}
        <section aria-label="YouTube Videos and Tutorials">
          <YouTubeVideos />
        </section>
      </main>

      <Footer />
      
      {/* Additional SEO elements for YouTube page */}
      <div className="sr-only">
        <h1>YouTube Videos - Akshay Patel - Technology Tutorials, AI/ML, and Web Development Videos</h1>
        <p>Watch tutorials, demos, and insights on technology, AI, web development, and software engineering. Video content covering React, Next.js, Machine Learning, and more.</p>
        <p>Topics include: AI/ML Tutorials, Web Development Guides, React Performance, Machine Learning Projects, Portfolio Development, Data Science Walkthroughs, and Technology Insights.</p>
      </div>
    </>
  )
}
