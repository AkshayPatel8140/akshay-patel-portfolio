import Blog from '@/components/sections/Blog'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function BlogPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Blog Section - Full page dedicated to blog content */}
        <section aria-label="Blog Articles and Insights">
          <Blog />
        </section>
      </main>

      <Footer />
      
      {/* Additional SEO elements for blog page */}
      <div className="sr-only">
        <h1>Blog - Akshay Patel - Technology, AI/ML, and Web Development Articles</h1>
        <p>Read insights, tutorials, and thoughts on technology, AI, web development, and the future of software engineering. Articles published on Medium covering React, Next.js, Machine Learning, and more.</p>
        <p>Topics include: AI/ML, Frontend Development, Web Development, Data Science, Technology Trends, React Performance, Machine Learning in Healthcare, Portfolio Development, and Recommendation Systems.</p>
      </div>
    </>
  )
}
