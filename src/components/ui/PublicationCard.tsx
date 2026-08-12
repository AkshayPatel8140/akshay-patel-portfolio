'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  FileText,
  Download,
  ExternalLink,
  GraduationCap,
  BookOpen,
  BadgeCheck,
} from 'lucide-react'
import type { Publication } from '@/types/portfolio'

const statusStyles: Record<Publication['status'], string> = {
  Published: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
  Preprint: 'bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30',
  Draft: 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30',
  'In Progress': 'bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30',
}

export type PublicationCardProps = {
  publication: Publication
  index?: number
  isInView?: boolean
  /** Shorter abstract + denser layout for home grid */
  compact?: boolean
  /** Show authors only when useful (e.g. multi-author on full page) */
  showAuthor?: boolean
  className?: string
}

export default function PublicationCard({
  publication,
  index = 0,
  isInView = true,
  compact = false,
  showAuthor = false,
  className = '',
}: PublicationCardProps) {
  const shouldShowAuthor =
    showAuthor && publication.authors.length > 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: 0.15 + index * 0.12, ease: 'easeOut' }}
      className={`relative flex flex-col rounded-2xl border p-6 sm:p-7 transition-all duration-300 h-full ${
        publication.featured
          ? 'bg-white dark:bg-gray-800/80 border-blue-200 dark:border-blue-500/40 shadow-lg'
          : 'bg-white/80 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 shadow-soft'
      } ${className}`}
    >
      {publication.featured && (
        <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
          <BadgeCheck size={14} />
          {publication.status === 'Published' || publication.status === 'Preprint'
            ? 'Featured'
            : 'Ongoing research'}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2 mb-4 mt-1">
        <span
          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[publication.status]}`}
        >
          {publication.status}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {publication.venue} · {publication.year}
        </span>
      </div>

      <div className="flex gap-3 mb-4">
        <div className="hidden sm:flex w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 items-center justify-center">
          <FileText className="w-5 h-5 text-white" />
        </div>
        <div className="min-w-0">
          <h3
            className={`font-bold text-gray-900 dark:text-white leading-snug ${
              compact ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
            }`}
          >
            {publication.title}
          </h3>
          {shouldShowAuthor && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {publication.authors.join(', ')}
            </p>
          )}
        </div>
      </div>

      {publication.focus || publication.approach || publication.nextStep ? (
        <dl className="space-y-4 mb-5 text-sm sm:text-base flex-1">
          {publication.focus && (
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
                Problem
              </dt>
              <dd className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {publication.focus}
              </dd>
            </div>
          )}
          {publication.approach && (
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
                Approach
              </dt>
              <dd className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {publication.approach}
              </dd>
            </div>
          )}
          {publication.nextStep && (
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
                Next
              </dt>
              <dd className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {publication.nextStep}
              </dd>
            </div>
          )}
        </dl>
      ) : (
        <p
          className={`text-gray-600 dark:text-gray-300 leading-relaxed mb-5 ${
            compact ? 'line-clamp-4 text-sm sm:text-base flex-1' : ''
          }`}
        >
          {publication.abstract}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {(compact ? publication.tags.slice(0, 3) : publication.tags).map((tag) => (
          <span
            key={tag}
            className="rounded-lg bg-gray-100 dark:bg-gray-700/80 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
        {compact && publication.tags.length > 3 && (
          <span className="rounded-lg bg-gray-100 dark:bg-gray-700/80 px-2.5 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
            +{publication.tags.length - 3}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3 items-center mt-auto">
        {publication.pdfUrl ? (
          <a
            href={publication.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors shadow-md"
          >
            <Download size={16} />
            PDF
          </a>
        ) : (
          <span
            title="PDF forthcoming"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 text-sm font-medium cursor-not-allowed"
          >
            <Download size={16} />
            PDF (soon)
          </span>
        )}

        {publication.doi ? (
          <a
            href={`https://doi.org/${publication.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={16} />
            DOI
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 text-sm font-medium">
            DOI (pending)
          </span>
        )}

        {publication.scholarUrl && (
          <a
            href={publication.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Google Scholar"
          >
            <GraduationCap size={16} />
            {!compact && 'Scholar'}
          </a>
        )}

        {publication.osfUrl ? (
          <a
            href={publication.osfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <BookOpen size={16} />
            OSF
          </a>
        ) : (
          <span
            title="OSF profile not published yet"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 text-sm font-medium"
          >
            <BookOpen size={16} />
            OSF (soon)
          </span>
        )}
      </div>
    </motion.article>
  )
}
