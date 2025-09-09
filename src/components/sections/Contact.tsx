'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  title: string
  value: string
  link?: string
  color: string
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0)

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      title: 'Email',
      value: 'akshaygpatel1997@gmail.com',
      link: 'mailto:akshaygpatel1997@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (669) 231-9631',
      link: 'tel:+16692319631',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'United States',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/AkshayPatel8140',
      color: 'hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/akshaypatel8140',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/akshaypatel8140',
      color: 'hover:bg-blue-400'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Rate limiting: prevent multiple submissions within 30 seconds
    const now = Date.now()
    if (now - lastSubmissionTime < 30000) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send form data to Make.com webhook
      const response = await fetch('https://hook.us2.make.com/bjfxoha5wrpmjwtc5ehp78lpu230gkik', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          timestamp: new Date().toISOString(),
          source: 'Portfolio Contact Form',
          userAgent: navigator.userAgent,
          referrer: document.referrer || 'Direct',
          pageUrl: window.location.href
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setLastSubmissionTime(now)
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name.trim() && 
                     formData.email.trim() && 
                     formData.subject.trim() && 
                     formData.message.trim() &&
                     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Let&apos;s{' '}
            <motion.span 
              className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Connect
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to bring your ideas to life? Based in the United States, I&apos;m available for remote collaboration 
            and local projects. Whether you have a project in mind, want to collaborate, 
            or just want to say hello, I&apos;d love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            >
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              >
                Get In Touch
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
              >
                Based in the United States, I&apos;m always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation. Available for both remote and local collaborations.
              </motion.p>
            </motion.div>

            {/* Enhanced Contact Details */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30, scale: 0.9, x: -20 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1, x: 0 } : { opacity: 0, y: 30, scale: 0.9, x: -20 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 1.8 + index * 0.2, 
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-center gap-4 cursor-pointer"
                  >
                    <motion.div 
                      className={`p-3 bg-gradient-to-r ${info.color} rounded-xl shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <motion.h4 
                        className="font-semibold text-gray-900 dark:text-white"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.6, delay: 2.0 + index * 0.2, ease: "easeOut" }}
                      >
                        {info.title}
                      </motion.h4>
                      {info.link ? (
                        <motion.a
                          href={info.link}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.6, delay: 2.2 + index * 0.2, ease: "easeOut" }}
                          whileHover={{ scale: 1.05, x: 3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {info.value}
                        </motion.a>
                      ) : (
                        <motion.p 
                          className="text-gray-600 dark:text-gray-400"
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.6, delay: 2.2 + index * 0.2, ease: "easeOut" }}
                        >
                          {info.value}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
            >
              <motion.h4 
                className="text-lg font-semibold text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.6, delay: 2.6, ease: "easeOut" }}
              >
                Follow Me
              </motion.h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.7, y: 20, rotateY: -15 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0, rotateY: 0 } : { opacity: 0, scale: 0.7, y: 20, rotateY: -15 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 2.8 + index * 0.2, 
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -5,
                        rotateY: 10,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-gray-700 dark:text-gray-300 transition-all duration-300 cursor-pointer hover:shadow-xl ${social.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 30, scale: 0.95 }}
            transition={{ duration: 1, delay: 3.0, ease: "easeOut" }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
          >
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 3.2, ease: "easeOut" }}
            >
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.8, delay: 3.4, ease: "easeOut" }}
              >
                Send a Message
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.8, delay: 3.6, ease: "easeOut" }}
              >
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </motion.p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="What&apos;s this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isFormValid && !isSubmitting
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 hover:shadow-lg active:scale-95'
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-800 dark:text-green-200 font-medium">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span className="text-red-800 dark:text-red-200 font-medium">
                    Something went wrong. Please try again or contact me directly.
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Additional Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let&apos;s collaborate to bring your vision to life. Based in the United States, I&apos;m available for 
              both remote and local projects. Whether it&apos;s a web application, 
              mobile app, or AI-powered solution, I&apos;m here to help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Start a Project
              </button>
              <a
                href="mailto:akshaygpatel1997@gmail.com"
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
