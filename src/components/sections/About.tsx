'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Code, Database, Smartphone, Cloud, Zap, Users, Award, BookOpen } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { icon: Code, title: 'Frontend Development', description: 'React, Next.js, TypeScript, Tailwind CSS' },
    { icon: Smartphone, title: 'Mobile Development', description: 'React Native, Flutter, iOS, Android' },
    { icon: Database, title: 'Backend Development', description: 'Node.js, Express, Python, Django' },
    { icon: Cloud, title: 'Cloud & DevOps', description: 'AWS, Docker, CI/CD' },
    { icon: Zap, title: 'AI & Machine Learning', description: 'AI Agents, Chatbots, ML Models' },
    { icon: Users, title: 'Team Leadership', description: 'Agile, Code Reviews, Mentoring' }
  ]

  const achievements = [
    { icon: Award, title: '5+ Years Experience', description: 'Building scalable web applications' },
    { icon: BookOpen, title: 'AI & ML Expert', description: 'AI agents, chatbots, machine learning' },
    { icon: Users, title: '30+ Projects', description: 'Successfully delivered to clients' },
    { icon: Zap, title: 'Innovation Leader', description: 'Cutting-edge tech solutions' }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About{' '}
            <motion.span
              className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Me
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate software developer with a love for creating innovative digital solutions
            and building amazing user experiences.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Enhanced Personal Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-left"
              >
                My Journey
              </motion.h3>
              <div className="space-y-4 text-left">
                {[
                  `${process.env.NEXT_PUBLIC_BASE_PATH}`,
                  "I'm Akshay Patel, a full-stack software developer with over 5 years of experience in creating web and mobile applications. My journey in tech started with curiosity and has evolved into a passion for building solutions that make a difference.",
                  "I specialize in modern technologies like React, Node.js, React Native and cloud platforms, plus cutting-edge AI and Machine Learning. I've built AI agents, intelligent chatbots, and ML models that solve real-world problems. What drives me is the challenge of turning complex problems into elegant, user-friendly solutions that people love to use.",
                  "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
                ].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20, x: -20 }}
                    animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 20, x: -20 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.7 + index * 0.2,
                      ease: "easeOut"
                    }}
                    className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Key Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-left"
              >
                What I Do Best
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.title}
                      initial={{ opacity: 0, y: 30, scale: 0.9, x: -20 }}
                      animate={isInView ? { opacity: 1, y: 0, scale: 1, x: 0 } : { opacity: 0, y: 30, scale: 0.9, x: -20 }}
                      transition={{
                        duration: 0.7,
                        delay: 1.3 + index * 0.15,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                      className="flex items-start space-x-4 p-5 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group cursor-pointer"
                    >
                      <motion.div
                        className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {skill.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-20 mt-10"
          >
            {/* Enhanced Profile Image Placeholder */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-3xl flex items-center justify-center shadow-2xl border border-white/20 dark:border-gray-700/30"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* If you need to show the name with how your photos here ,then make it False */}
                {true ?
                  <div className="text-center p-8">
                    <motion.div
                      className="w-70 h-70 rounded-full mx-auto overflow-hidden shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Image
                        src="/avatar.png"
                        alt="Akshay Patel - Professional Photo"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </motion.div>
                  </div>
                  :
                  <div className="text-center p-8">
                    <motion.div
                      className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-4xl font-bold text-white">AP</span>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
                      className="text-gray-600 dark:text-gray-400 text-sm font-medium"
                    >
                      Add your professional photo here
                    </motion.p>
                  </div>
                }
              </motion.div>

              {/* Enhanced Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                animate={isInView ? {
                  opacity: 1,
                  scale: 1,
                  y: [0, -15, 0],
                  rotate: [0, 10, 0]
                } : { opacity: 0, scale: 0, rotate: -90 }}
                transition={{
                  duration: 0.8,
                  delay: 1.5,
                  ease: "easeOut",
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-6 -right-6 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl"
              >
                <Zap className="w-5 h-5 text-white" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 90 }}
                animate={isInView ? {
                  opacity: 1,
                  scale: 1,
                  y: [0, 15, 0],
                  rotate: [0, -10, 0]
                } : { opacity: 0, scale: 0, rotate: 90 }}
                transition={{
                  duration: 0.8,
                  delay: 1.7,
                  ease: "easeOut",
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-xl"
              >
                <Code className="w-4 h-4 text-white" />
              </motion.div>

              {/* Additional floating element */}
              <motion.div
                initial={{ opacity: 0, scale: 0, x: 20 }}
                animate={isInView ? {
                  opacity: 1,
                  scale: 1,
                  x: [0, 10, 0],
                  y: [0, -10, 0]
                } : { opacity: 0, scale: 0, x: 20 }}
                transition={{
                  duration: 0.8,
                  delay: 1.9,
                  ease: "easeOut",
                  x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }
                }}
                className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl"
              >
                <BookOpen className="w-3 h-3 text-white" />
              </motion.div>
            </motion.div>

            {/* Enhanced Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
                className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center"
              >
                Key Achievements
              </motion.h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, scale: 0.7, y: 30 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: 30 }}
                      transition={{
                        duration: 0.7,
                        delay: 1.5 + index * 0.2,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -3,
                        transition: { duration: 0.2 }
                      }}
                      className="text-center p-5 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group cursor-pointer"
                    >
                      <motion.div
                        className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {achievement.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1.7, ease: "easeOut" }}
          className="text-center mt-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 1.9, ease: "easeOut" }}
            className="text-lg sm:text-xl mb-8 text-gray-600 dark:text-gray-400"
          >
            Ready to see what I can build for you?
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 2.1, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
            >
              View My Projects
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 2.3, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white"
            >
              Let&apos;s Talk
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
