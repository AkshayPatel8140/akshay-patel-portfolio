'use client'

import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ExternalLink,
  Github,
  Eye,
  X,
  Code,
  Brain,
  Smartphone,
  Zap,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import { catalogProjects, archivedProjects } from '@/data'
import type { Project } from '@/types/portfolio'
import { Image_parser } from '@/utils/Image_parser'

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  All: Code,
  'AI/ML': Brain,
  'AI Automation & Multimodal Pipelines': Zap,
  Backend: Code,
  'Development Tools': Code,
  Mobile: Smartphone,
  Frontend: Code,
}

function getStatusColor(status: string) {
  switch (status) {
    case 'Completed':
      return 'bg-green-500'
    case 'In Progress':
      return 'bg-yellow-500'
    default:
      return 'bg-gray-500'
  }
}

function hasProjectLinks(project: Project) {
  return Boolean(
    project.liveUrl ||
      project.githubUrl ||
      project.androidUrl ||
      project.iosUrl ||
      project.ipadUrl ||
      project.windowsUrl ||
      project.macUrl
  )
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (project: Project) => void
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-gray-100 dark:border-gray-700">
      <div className="relative h-44 bg-gray-200 dark:bg-gray-700 overflow-hidden flex-shrink-0">
        <Image
          src={Image_parser(project.image)}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
        />
        {!loaded && <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700" />}
        <span
          className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(project.status)}`}
        >
          {project.status}
        </span>
        {project.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
            Featured
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-1">
          {project.category}
        </p>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3 flex-1">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
        >
          <Eye className="w-4 h-4" />
          View details
        </button>
      </div>
    </article>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 24 }}
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h2>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{project.category}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="relative h-56 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700">
            <Image
              src={Image_parser(project.image)}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 48rem"
            />
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Key features</h3>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-gray-600 dark:text-gray-300 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {hasProjectLinks(project) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live / Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-800 dark:text-gray-200 hover:border-blue-400"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
              {project.androidUrl && (
                <a
                  href={project.androidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 text-white text-sm font-medium"
                >
                  <Smartphone className="w-4 h-4" />
                  Android
                </a>
              )}
              {project.iosUrl && (
                <a
                  href={project.iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 text-white text-sm font-medium"
                >
                  <Smartphone className="w-4 h-4" />
                  iOS
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsCatalog() {
  const [category, setCategory] = useState('All')
  const [archiveOpen, setArchiveOpen] = useState(false)
  const [selected, setSelected] = useState<Project | null>(null)

  const categories = useMemo(() => {
    const counts = catalogProjects.reduce<Record<string, number>>((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1
      return acc
    }, {})
    return [
      { name: 'All', count: catalogProjects.length },
      ...Object.keys(counts)
        .sort()
        .map((name) => ({ name, count: counts[name] })),
    ]
  }, [])

  const filtered = useMemo(() => {
    if (category === 'All') return catalogProjects
    return catalogProjects.filter((p) => p.category === category)
  }, [category])

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            All{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full catalog of applied AI systems and supporting engineering work. Earlier mobile and
            client projects live in the archive below.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.name] ?? Code
            const active = category === cat.name
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setCategory(cat.name)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${active ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'}`}>
                  {cat.count}
                </span>
              </button>
            )
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-16">No projects in this category.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelected} />
            ))}
          </div>
        )}

        {/* Archive / Earlier Works */}
        <div className="max-w-5xl mx-auto border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden bg-white/80 dark:bg-gray-800/60">
          <button
            type="button"
            onClick={() => setArchiveOpen((o) => !o)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Archive / Earlier Works
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {archivedProjects.length} mobile and product projects from earlier client work
              </p>
            </div>
            {archiveOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
            )}
          </button>

          <AnimatePresence initial={false}>
            {archiveOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 border-t border-gray-200 dark:border-gray-700 pt-6">
                  {archivedProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} onOpen={setSelected} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
