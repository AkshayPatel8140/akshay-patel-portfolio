'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Mail, Github, Linkedin, Twitter, GraduationCap, BookOpen } from 'lucide-react'
import { personalInfo, heroQuickLinks } from '@/data/portfolio'

const quickLinkIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'Google Scholar': GraduationCap,
  'OSF Research': BookOpen,
  'Get in Touch': Mail,
}

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleQuickLink = (href: string | null, type: 'external' | 'hash', available: boolean) => {
    if (!available || !href) return
    if (type === 'hash') {
      scrollToSection(href.replace('#', ''))
      return
    }
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AkshayPatel8140', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/akshay-patel-04a714116', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/AGPatel97', label: 'Twitter' },
    { icon: Mail, href: 'mailto:akshaygpatel1997@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        
        {/* Floating particles effect */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [360, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: 2
          }}
          className="absolute top-40 right-32 w-1 h-1 bg-purple-400/30 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-indigo-400/30 rounded-full"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting — Layout A: keep name */}
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hi, I&apos;m{' '}
            <motion.span 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              {personalInfo.name}
            </motion.span>
          </motion.h1>

          {/* Static headline subtitle (Layout A — replaces rotating roles) */}
          <motion.p
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-blue-400 max-w-3xl mx-auto mb-6 leading-snug"
          >
            {personalInfo.headline}
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {personalInfo.about}
          </motion.p>

          {/* Quick links: GitHub, Google Scholar, OSF, Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {heroQuickLinks.map((link, index) => {
              const Icon = quickLinkIcons[link.name] ?? Github
              const isPrimary = link.name === 'Get in Touch'
              const baseClasses =
                'inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 shadow-md'

              if (!link.available) {
                return (
                  <span
                    key={link.name}
                    title="Coming soon — OSF profile not published yet"
                    className={`${baseClasses} cursor-not-allowed bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700`}
                  >
                    <Icon size={18} />
                    {link.name}
                    <span className="text-xs font-normal opacity-80">(soon)</span>
                  </span>
                )
              }

              if (link.type === 'hash') {
                return (
                  <motion.button
                    key={link.name}
                    type="button"
                    onClick={() => handleQuickLink(link.href, link.type, link.available)}
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.05 + index * 0.08 }}
                    className={`${baseClasses} ${
                      isPrimary
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                        : 'bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    <Icon size={18} />
                    {link.name}
                  </motion.button>
                )
              }

              return (
                <motion.a
                  key={link.name}
                  href={link.href ?? undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.05 + index * 0.08 }}
                  className={`${baseClasses} bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400`}
                >
                  <Icon size={18} />
                  {link.name}
                </motion.a>
              )
            })}
          </motion.div>

          {/* Secondary social icons */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.4 + index * 0.15, 
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100
                  }}
                  className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            {[
              { number: '5+', label: 'Years Building Systems' },
              { number: '4+', label: 'AI Agent Products' },
              { number: '3', label: 'Featured AI Systems' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.7, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 1.8 + index * 0.2, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-center cursor-pointer"
              >
                <motion.div 
                  className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 2.0 + index * 0.2,
                    ease: "easeOut"
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            y: [0, 8, 0],
            opacity: [1, 0.7, 1]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-lg hover:shadow-xl transition-all duration-200"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  )
}
