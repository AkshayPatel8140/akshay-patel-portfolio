'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Calendar, Clock, Play, Search, Filter, Youtube } from 'lucide-react'
import Image from 'next/image'
import { youtubeVideosData, categories, externalLinks } from '@/data/portfolio'
import type { YouTubeVideo } from '@/types/portfolio'

// Use centralized YouTube videos data
const youtubeVideos = youtubeVideosData

// Categories for filtering
const youtubeCategories = categories.youtube

export default function YouTubeVideos() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredVideos, setFilteredVideos] = useState<YouTubeVideo[]>(youtubeVideos)
  const [isInView, setIsInView] = useState(false)

  // Filter videos based on category and search query
  useEffect(() => {
    let filtered = youtubeVideos

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(video => video.category === selectedCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    setFilteredVideos(filtered)
  }, [selectedCategory, searchQuery])

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    // Use the section element itself
    const element = document.querySelector('section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatDuration = (duration: string) => {
    return duration
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium mb-6"
          >
            <Youtube className="w-4 h-4" />
            Video Tutorials & Demos
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            YouTube
            <span className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Videos
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Watch tutorials, demos, and insights on technology, AI, web development, and the future of software engineering.
          </motion.p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search videos, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {youtubeCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-red-500 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Video */}
        {filteredVideos.filter(video => video.featured).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Video
            </h3>
            {filteredVideos.filter(video => video.featured).map((video) => (
              <div key={video.id} className="relative overflow-hidden bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                        {video.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Featured
                      </span>
                    </div>
                    <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                      {video.title}
                    </h4>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {video.description}
                    </p>
                    <div className="flex items-center gap-6 mb-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(video.publishedDate)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {formatDuration(video.duration)}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {video.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl font-medium hover:from-red-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <Play className="w-4 h-4" />
                      Watch on YouTube
                    </a>
                  </div>
                  <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Videos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {filteredVideos.filter(video => !video.featured).map((video, index) => ( */}
            {filteredVideos.map((video, index) => (
              <motion.article
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                {/* Video Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                    {formatDuration(video.duration)}
                  </div>
                </div>

                {/* Video Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                      {video.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDuration(video.duration)}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">
                    {video.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {formatDate(video.publishedDate)}
                    </div>
                  </div>



                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {video.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Watch Button */}
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 font-medium hover:text-red-700 dark:hover:text-red-300 transition-colors duration-200 group-hover:gap-3"
                  >
                    <Play className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                    Watch Video
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No Results Message */}
          {filteredVideos.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No videos found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="text-center mt-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
            className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to see more videos?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Subscribe to my YouTube channel for regular updates on technology, AI, and software development.
            </p>
            <a
              href="https://www.youtube.com/@yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl font-medium hover:from-red-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Subscribe on YouTube
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
