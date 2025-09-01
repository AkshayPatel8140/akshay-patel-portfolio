'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const roles = [
    'Full-Stack Developer',
    'UI/UX Designer',
    'Problem Solver',
    'Tech Enthusiast'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval as NodeJS.Timeout)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AkshayPatel8140', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/akshay-patel-04a714116', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/AGPatel97', label: 'Twitter' },
    { icon: Mail, href: 'mailto:akshaygpatel1997@gmail.com', label: 'Email' }
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
      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting with enhanced animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hi, I&apos;m{' '}
            <motion.span 
              className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              Akshay Patel
            </motion.span>
          </motion.h1>

          {/* Enhanced Animated Role Text */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="h-16 sm:h-20 flex items-center justify-center mb-6"
          >
            <span className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300">
              I&apos;m a{' '}
              <motion.span 
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-semibold text-blue-600 dark:text-blue-400 inline-block"
              >
                {roles[currentTextIndex]}
              </motion.span>
              <motion.span 
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block ml-1"
              >
                |
              </motion.span>
            </span>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Passionate about creating innovative digital solutions and building 
            amazing user experiences. I turn ideas into reality through code.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary group"
            >
              View My Work
              <motion.div
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-outline group"
            >
              Get In Touch
              <motion.div
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                →
              </motion.div>
            </button>
          </motion.div>

          {/* Enhanced Social Links */}
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

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '30+', label: 'Projects Completed' },
              { number: '10+', label: 'Technologies' }
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

      {/* Enhanced Scroll Indicator */}
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
