'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code, Database, Smartphone, Cloud, Zap, Users, 
  Brain, Globe, Shield, Cpu, Palette, Rocket,
  TrendingUp, BookOpen, Lightbulb, Target
} from 'lucide-react'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const technicalSkills = [
    {
      category: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React', proficiency: 95 },
        { name: 'TypeScript', proficiency: 88 },
        { name: 'Next.js', proficiency: 90 },
        { name: 'Tailwind CSS', proficiency: 92 },
        { name: 'HTML/CSS', proficiency: 95 },
        { name: 'JavaScript', proficiency: 93 }
      ]
    },
    {
      category: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js', proficiency: 90 },
        { name: 'Express.js', proficiency: 88 },
        { name: 'Python', proficiency: 85 },
        { name: 'Django', proficiency: 80 },
        { name: 'REST APIs', proficiency: 92 },
        { name: 'GraphQL', proficiency: 75 }
      ]
    },
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        { name: 'AI Agents', proficiency: 85 },
        { name: 'Chatbots', proficiency: 88 },
        { name: 'Machine Learning', proficiency: 80 },
        { name: 'Python ML', proficiency: 82 },
        { name: 'NLP', proficiency: 75 },
        { name: 'Data Analysis', proficiency: 78 }
      ]
    },
    {
      category: 'Mobile & Cloud',
      icon: Cloud,
      skills: [
        { name: 'React Native', proficiency: 80 },
        { name: 'Flutter', proficiency: 75 },
        { name: 'AWS', proficiency: 85 },
        { name: 'Docker', proficiency: 82 },
        { name: 'CI/CD', proficiency: 80 },
        { name: 'Serverless', proficiency: 78 }
      ]
    }
  ]

  const softSkills = [
    { icon: Users, title: 'Team Collaboration', description: 'Working effectively in cross-functional teams' },
    { icon: Lightbulb, title: 'Problem Solving', description: 'Analytical thinking and creative solutions' },
    { icon: BookOpen, title: 'Continuous Learning', description: 'Always exploring new technologies' },
    { icon: Target, title: 'Project Management', description: 'Leading projects from concept to delivery' },
    { icon: TrendingUp, title: 'Adaptability', description: 'Quickly learning and adapting to new challenges' },
    { icon: Shield, title: 'Quality Focus', description: 'Writing clean, maintainable code' }
  ]

  const currentLearning = [
    { icon: Rocket, name: 'Advanced AI/ML', status: 'In Progress' },
    { icon: Globe, name: 'Blockchain', status: 'Exploring' },
    { icon: Cpu, name: 'System Design', status: 'Learning' },
    { icon: Palette, name: 'UI/UX Design', status: 'Improving' }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Skills &{' '}
            <motion.span 
              className="gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Expertise
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my technical skills, soft skills, and continuous learning journey 
            in software development and artificial intelligence.
          </motion.p>
        </motion.div>

        {/* Enhanced Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Technical Skills
          </motion.h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {technicalSkills.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -80 : 80, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: categoryIndex % 2 === 0 ? -80 : 80, scale: 0.9 }}
                  transition={{ 
                    duration: 1, 
                    delay: 1.2 + categoryIndex * 0.2, 
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 80
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 cursor-pointer"
                >
                  <motion.div 
                    className="flex items-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.4 + categoryIndex * 0.2, ease: "easeOut" }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-semibold text-white">{category.category}</h4>
                  </motion.div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -30, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.95 }}
                        transition={{ 
                          duration: 0.7, 
                          delay: 1.6 + categoryIndex * 0.2 + skillIndex * 0.1, 
                          ease: "easeOut",
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          x: 5,
                          transition: { duration: 0.2 }
                        }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-200">{skill.name}</span>
                          <motion.span 
                            className="text-blue-400 font-semibold"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: 2.0 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                          >
                            {skill.proficiency}%
                          </motion.span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0, scaleX: 0 }}
                            animate={isInView ? { 
                              width: `${skill.proficiency}%`, 
                              scaleX: 1 
                            } : { width: 0, scaleX: 0 }}
                            transition={{ 
                              duration: 1.5, 
                              delay: 2.2 + categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: "easeOut",
                              type: "spring",
                              stiffness: 60
                            }}
                            className="h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full origin-left"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Enhanced Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
          className="mb-20"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 3.0, ease: "easeOut" }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Soft Skills & Professional Qualities
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 40, scale: 0.8, rotateY: -15 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : { opacity: 0, y: 40, scale: 0.8, rotateY: -15 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 3.2 + index * 0.15, 
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 80
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group cursor-pointer"
                >
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 10, scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <motion.h4 
                    className="text-lg font-semibold text-white text-center mb-3 group-hover:text-purple-300 transition-colors duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 3.4 + index * 0.15, ease: "easeOut" }}
                  >
                    {skill.title}
                  </motion.h4>
                  <motion.p 
                    className="text-gray-300 text-center text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 3.6 + index * 0.15, ease: "easeOut" }}
                  >
                    {skill.description}
                  </motion.p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Enhanced Current Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 4.0, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 4.2, ease: "easeOut" }}
            className="text-3xl font-bold text-white mb-8"
          >
            Currently Learning & Exploring
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {currentLearning.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.7, y: 30, rotateY: -20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0, rotateY: 0 } : { opacity: 0, scale: 0.7, y: 30, rotateY: -20 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 4.4 + index * 0.2, 
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -10,
                    rotateY: 10,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group cursor-pointer"
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h4 
                    className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 4.6 + index * 0.2, ease: "easeOut" }}
                  >
                    {item.name}
                  </motion.h4>
                  <motion.span 
                    className="inline-block px-3 py-1 bg-blue-500/30 text-blue-300 rounded-full text-sm font-medium group-hover:bg-blue-500/50 group-hover:text-blue-200 transition-all duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 4.8 + index * 0.2, ease: "easeOut" }}
                  >
                    {item.status}
                  </motion.span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 5.0, ease: "easeOut" }}
          className="text-center mt-20"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 5.2, ease: "easeOut" }}
            className="text-lg sm:text-xl mb-8 text-gray-300"
          >
            Ready to see these skills in action?
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 5.4, ease: "easeOut" }}
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
              transition={{ duration: 0.8, delay: 5.6, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-400 hover:text-gray-900"
            >
              Let&apos;s Collaborate
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
