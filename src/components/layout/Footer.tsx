'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const isBlogPage = pathname === '/blog'
  const isYouTubePage = pathname === '/youtube'
  const isExternalPage = isBlogPage || isYouTubePage

  const scrollToTop = () => {
    if (isExternalPage) {
      // If on external page, navigate to main page first, then scroll to top
      window.location.href = '/'
    } else {
      // If on main page, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleQuickLinkClick = (sectionId: string) => {
    if (isExternalPage) {
      // If on external page, navigate to main page first, then scroll to section
      const url = `/#${sectionId}`
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/AkshayPatel8140', icon: Github, color: 'hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/akshay-patel-04a714116', icon: Linkedin, color: 'hover:bg-blue-600' },
    { name: 'Twitter', href: 'https://twitter.com/AGPatel97', icon: Twitter, color: 'hover:bg-blue-400' },
    { name: 'Email', href: 'mailto:akshaygpatel1997@gmail.com', icon: Mail, color: 'hover:bg-red-500' }
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="inline-block mb-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Akshay Patel
                </h3>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-md">
                Full-stack software developer based in the United States, passionate about creating innovative solutions 
                and building amazing user experiences.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <a 
                    href="mailto:akshaygpatel1997@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    akshaygpatel1997@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-green-500" />
                  <a 
                    href="tel:+16692319631"
                    className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200"
                  >
                    +1 (669) 231-9631
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-purple-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    United States
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
                <li key={item}>
                  <Link
                    href={isExternalPage ? `/#${item.toLowerCase()}` : `#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                    onClick={() => handleQuickLinkClick(item.toLowerCase())}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300 transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center sm:text-left">
            © {currentYear} Akshay Patel. Made with <Heart className="inline w-4 h-4 text-red-500" /> in the United States
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 sm:mt-0 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
