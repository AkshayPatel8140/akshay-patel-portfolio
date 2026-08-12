'use client'

import React, { useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, BookOpen } from 'lucide-react'
import { publicationsData } from '@/data/publicationsData'
import PublicationCard from '@/components/ui/PublicationCard'
import type { Publication } from '@/types/portfolio'

const FILTERS: Array<'All' | Publication['status']> = [
  'All',
  'Published',
  'Preprint',
  'Draft',
  'In Progress',
]

export default function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return publicationsData.items
    return publicationsData.items.filter((item) => item.status === filter)
  }, [filter])

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Research &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Publications
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {publicationsData.sectionSubtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://scholar.google.com/citations?user=JqZzXukAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <GraduationCap size={16} />
              Google Scholar
            </a>
            <span
              title="OSF profile not published yet"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 text-sm font-medium"
            >
              <BookOpen size={16} />
              OSF (soon)
            </span>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                filter === status
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white/80 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 py-12">
              No publications in this category yet.
            </p>
          ) : (
            filtered.map((publication, index) => (
              <PublicationCard
                key={publication.id}
                publication={publication}
                index={index}
                isInView={isInView}
                compact={false}
                showAuthor={publication.authors.length > 1}
              />
            ))
          )}
        </div>
      </div>
    </section>
  )
}
