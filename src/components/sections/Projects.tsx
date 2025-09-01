'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import {
  ExternalLink, Github, Eye, X, Filter,
  Code, Brain, Smartphone, Cloud, Globe, Zap,
  ChevronLeft, ChevronRight
} from 'lucide-react'
import { projectsData } from '@/data/portfolio'
import type { Project } from '@/types/portfolio'
import { Image_parser } from '@/utils/Image_parser'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const projectsPerPage = 3

  // Performance monitoring
  const [imageLoadTimes, setImageLoadTimes] = useState<Record<number, number>>({})

  const handleImageLoad = (projectId: number) => {
    const loadTime = performance.now()
    // For local images, load immediately without delay
    setLoadedImages(prev => new Set(prev).add(projectId))
    setImageLoadTimes(prev => ({ ...prev, [projectId]: loadTime }))
  }

  // Preload first 3 images since they're local
  React.useEffect(() => {
    const preloadImages = () => {
      const firstThreeProjects = projects.slice(0, 3)
      firstThreeProjects.forEach(project => {
        const img = new window.Image()
        img.onload = () => handleImageLoad(project.id)
        img.src = Image_parser(project.image)
      })
    }

    // Small delay to ensure component is mounted
    const timer = setTimeout(preloadImages, 100)
    return () => clearTimeout(timer)
  }, [])

  // Calculate category counts
  const categories = [
    { name: 'All', icon: Code, count: 11 },
    { name: 'AI/ML', icon: Brain, count: 2 },
    { name: 'Frontend', icon: Code, count: 2 },
    { name: 'Backend', icon: Code, count: 1 },
    { name: 'Mobile', icon: Smartphone, count: 5 },
    { name: 'Cloud', icon: Cloud, count: 0 },
    { name: 'Development Tools', icon: Code, count: 1 }
  ]

  // Use centralized projects data
  const projects = projectsData


  // Calculate category counts
  React.useEffect(() => {
    const counts: { [key: string]: number } = projects.reduce((acc, project) => {
      acc[project.category] = (acc[project.category] || 0) + 1
      return acc
    }, {} as { [key: string]: number })

    categories.forEach(cat => {
      if (cat.name === 'All') {
        cat.count = projects.length
      } else {
        cat.count = counts[cat.name] || 0
      }
    })
  }, [])

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const endIndex = startIndex + projectsPerPage
  const currentProjects = filteredProjects.slice(startIndex, endIndex)

  // Reset to first page when category changes
  React.useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory])

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500'
      case 'In Progress': return 'bg-yellow-500'
      case 'Planning': return 'bg-blue-500'
      default: return 'bg-gray-500'
    }
  }

  const isProjectLinks = (project: Project) => {
    return project.liveUrl || project.githubUrl || project.androidUrl || project.iosUrl || project.ipadUrl || project.windowsUrl || project.macUrl
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Featured{' '}
            <motion.span
              className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Projects
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of my best work, from AI-powered applications to modern web solutions.
            Each project represents a unique challenge and innovative solution.
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.7, y: 20, rotateY: -15 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0, rotateY: 0 } : { opacity: 0, scale: 0.7, y: 20, rotateY: -15 }}
                transition={{
                  duration: 0.8,
                  delay: 1.0 + index * 0.15,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  rotateY: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${selectedCategory === category.name
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md'
                  }`}
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                {category.name}
                <motion.span
                  className="ml-2 px-2 py-1 bg-white/20 dark:bg-black/20 rounded-full text-xs"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.15, ease: "easeOut" }}
                >
                  {category.count}
                </motion.span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            type: "spring",
            stiffness: 80
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {currentProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${currentPage}`}
                initial={{ opacity: 0, y: 40, scale: 0.9, rotateY: -10 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : { opacity: 0, y: 40, scale: 0.9, rotateY: -10 }}
                exit={{ opacity: 0, y: -40, scale: 0.9, rotateY: 10 }}
                transition={{
                  duration: 0.7,
                  delay: 0.5 + index * 0.1,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col h-full"
              >
                {/* Enhanced Project Image */}
                <motion.div
                  className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 overflow-hidden flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.1 }}
                    className={`relative w-full h-full ${!loadedImages.has(project.id) ? 'animate-pulse' : ''
                      }`}
                  >
                    <Image
                      src={Image_parser(project.image)}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`object-cover transition-opacity duration-100 ${loadedImages.has(project.id) ? 'opacity-100' : 'opacity-0'
                        }`}
                      priority={index < 3} // Prioritize first 3 images
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      onLoad={() => handleImageLoad(project.id)}
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                  </motion.div>
                  {/* Loading Skeleton - Minimal for local images */}
                  {!loadedImages.has(project.id) && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 animate-pulse">
                      <div className="h-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  )}

                  {/* Fallback Placeholder - Only visible on error */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600" style={{ display: 'none' }}>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {project.title} Image
                    </span>
                  </div>
                  <motion.div
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, scale: 0, rotate: -90 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -90 }}
                    transition={{ duration: 0.6, delay: 1.9 + index * 0.1, ease: "easeOut" }}
                  >
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(project.status)} shadow-lg`}>
                      {project.status}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Enhanced Project Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Content that can grow */}
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                      transition={{ duration: 0.6, delay: 2.0 + index * 0.1, ease: "easeOut" }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                      transition={{ duration: 0.6, delay: 2.1 + index * 0.1, ease: "easeOut" }}
                    >
                      {project.shortDescription}
                    </motion.p>

                    {/* Enhanced Technologies */}
                    <motion.div
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                      transition={{ duration: 0.6, delay: 2.2 + index * 0.1, ease: "easeOut" }}
                    >
                      {project.technologies.map((tech: string, techIndex: number) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
                          transition={{
                            duration: 0.5,
                            delay: 2.3 + index * 0.1 + techIndex * 0.05,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 120
                          }}
                          whileHover={{
                            scale: 1.1,
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <motion.div
                    className="flex gap-3 mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 2.4 + index * 0.1, ease: "easeOut" }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openProjectModal(project)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </motion.button>
                    {/* <motion.a
                      whileHover={{ scale: 1.05, y: -2, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center hover:border-blue-400"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center hover:border-gray-800 dark:hover:border-gray-400"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a> */}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Page Info */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 2.8, ease: "easeOut" }}
            className="text-center mt-8"
          >
            <motion.p
              className="text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Showing {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} projects
            </motion.p>
          </motion.div>
        )}

        {/* Enhanced Pagination Controls */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 3.0, ease: "easeOut" }}
            className="flex justify-center items-center gap-3 mt-12"
          >
            {/* Enhanced Previous Page Button */}
            <motion.button
              whileHover={{ scale: currentPage === 1 ? 1 : 1.05, y: -2 }}
              whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${currentPage === 1
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg'
                }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </motion.button>

            {/* Enhanced Page Numbers */}
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page, index) => (
                <motion.button
                  key={page}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
                  transition={{
                    duration: 0.5,
                    delay: 3.2 + index * 0.1,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 120
                  }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 rounded-lg font-medium transition-all duration-300 ${currentPage === page
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md'
                    }`}
                >
                  {page}
                </motion.button>
              ))}
            </div>

            {/* Enhanced Next Page Button */}
            <motion.button
              whileHover={{ scale: currentPage === totalPages ? 1 : 1.05, y: -2 }}
              whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${currentPage === totalPages
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg'
                }`}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 1.7, ease: "easeOut" }}
            className="text-lg sm:text-xl mb-8 text-gray-600 dark:text-gray-400"
          >
            Interested in working together on your next project?
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 1.9, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Let&apos;s Discuss Your Project
          </motion.button>
        </motion.div>

        {/* Performance Indicator */}
        {/* {Object.keys(imageLoadTimes).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
          >
            <div className="text-center">
              <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
                Performance Metrics
              </h4>
              <div className="flex justify-center gap-4 text-xs text-blue-600 dark:text-blue-300">
                <span>Images Loaded: {loadedImages.size}/{projects.length}</span>
                <span>Load Time: {Math.round(Object.values(imageLoadTimes).reduce((a, b) => a + b, 0) / Object.keys(imageLoadTimes).length)}ms</span>
              </div>
            </div>
          </motion.div>
        )} */}
      </div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 50, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 50, rotateX: 15 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl scroll-smooth"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={closeProjectModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getStatusColor(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Top Section: Image + Technologies & Features */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  {/* Project Image - Optimized */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl overflow-hidden">
                    <Image
                      src={Image_parser(selectedProject.image)}
                      alt={selectedProject.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="h-full flex items-center justify-center" style={{ display: 'none' }}>
                      <span className="text-gray-500 dark:text-gray-400">
                        {selectedProject.title} Image
                      </span>
                    </div>
                  </div>

                  {/* Technologies & Features - Right Side */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Full-Width Description Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Project Description
                  </h4>
                  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-2">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                {/* Enhanced Project Action Buttons */}
                {isProjectLinks(selectedProject) && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Project Links & Downloads
                    </h4>

                    {/* Primary Actions */}
                    {(selectedProject.liveUrl || selectedProject.githubUrl) && (
                      <div className={`grid gap-3 w-full ${selectedProject.liveUrl && selectedProject.githubUrl
                        ? 'grid-cols-1 sm:grid-cols-2'
                        : 'grid-cols-1'
                        }`}>
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg text-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Web Live Demo
                          </a>
                        )}
                        {selectedProject.githubUrl && (
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-6 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 text-sm"
                          >
                            <Github className="w-4 h-4" />
                            Source Code
                          </a>
                        )}
                      </div>
                    )}

                    {/* Mobile Applications */}
                    {(selectedProject.androidUrl || selectedProject.iosUrl || selectedProject.ipadUrl) && (
                      <div className={`grid gap-3 w-full ${[selectedProject.androidUrl, selectedProject.iosUrl, selectedProject.ipadUrl].filter(Boolean).length === 3
                        ? 'grid-cols-1 sm:grid-cols-3'
                        : [selectedProject.androidUrl, selectedProject.iosUrl, selectedProject.ipadUrl].filter(Boolean).length === 2
                          ? 'grid-cols-1 sm:grid-cols-2'
                          : 'grid-cols-1'
                        }`}>
                        {selectedProject.androidUrl && (
                          <a
                            href={selectedProject.androidUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors duration-300 text-sm"
                          >
                            <Smartphone className="w-4 h-4" />
                            Android App
                          </a>
                        )}
                        {selectedProject.iosUrl && (
                          <a
                            href={selectedProject.iosUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 text-sm"
                          >
                            <Smartphone className="w-4 h-4" />
                            iOS App
                          </a>
                        )}
                        {selectedProject.ipadUrl && (
                          <a
                            href={selectedProject.ipadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors duration-300 text-sm"
                          >
                            <Smartphone className="w-4 h-4" />
                            iPad App
                          </a>
                        )}
                      </div>
                    )}

                    {/* Desktop Applications */}
                    {(selectedProject.windowsUrl || selectedProject.macUrl) && (
                      <div className={`grid gap-3 w-full ${selectedProject.windowsUrl && selectedProject.macUrl
                        ? 'grid-cols-1 sm:grid-cols-2'
                        : 'grid-cols-1'
                        }`}>
                        {selectedProject.windowsUrl && (
                          <a
                            href={selectedProject.windowsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600 transition-colors duration-300 text-sm"
                          >
                            <Code className="w-4 h-4" />
                            Windows App
                          </a>
                        )}
                        {selectedProject.macUrl && (
                          <a
                            href={selectedProject.macUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 text-sm"
                          >
                            <Code className="w-4 h-4" />
                            Mac App
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom padding for better scroll experience */}
              <div className="h-6"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
