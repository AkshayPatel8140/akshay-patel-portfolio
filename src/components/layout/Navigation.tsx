'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { navigationConfig } from '@/data'
import type { NavigationConfig } from '@/types/portfolio'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const pathname = usePathname()
  const isBlogPage = pathname === '/blog'
  const isYouTubePage = pathname === '/youtube'
  const isExternalPage = isBlogPage || isYouTubePage

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  // Generate navigation items based on centralized config
  const navItems = navigationConfig.links.map(link => ({
    name: link.name,
    href: link.type === 'hash' 
      ? (isExternalPage ? `/#${link.href.substring(1)}` : link.href)
      : link.href
  }))

  const handleMobileNavigation = () => {
    setIsOpen(false) // Just close the mobile menu
  }

  const handleHashNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // If it's a hash link on the same page, scroll smoothly
      const sectionId = href.substring(1) // Remove '#' to get section ID
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    // For all other navigation (including /blog, /youtube), let Next.js handle it normally
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-soft">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Enhanced with modern styling */}
          <Link 
            href="/" 
            className="relative group flex items-center space-x-2"
          >
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 animate-pulse">
                <span className="text-white font-bold text-lg lg:text-xl tracking-wider">
                  {navigationConfig.logo.initials}
                </span>
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Floating animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-xl animate-bounce-gentle"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {navigationConfig.logo.fullName}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Moved to right side */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group"
                onClick={() => handleHashNavigation(item.href)}
              >
                {item.name}
                {/* Hover underline effect */}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Moved to right side */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800 dark:hover:to-purple-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-medium"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-200 group"
                  onClick={handleMobileNavigation}
                >
                  {item.name}
                  {/* Mobile hover effect */}
                  <span className="absolute left-0 top-1/2 w-1 h-0 bg-gradient-to-b from-blue-600 to-purple-600 group-hover:h-full group-hover:top-0 transition-all duration-300 rounded-r-full"></span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
