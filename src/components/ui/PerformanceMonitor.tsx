'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePerformanceMonitor } from '@/hooks/useIntersectionObserver'
import { BarChart3, Zap, Clock, TrendingUp } from 'lucide-react'

export default function PerformanceMonitor() {
  const metrics = usePerformanceMonitor()
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Show performance monitor after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const getPerformanceScore = () => {
    let score = 100
    
    if (metrics.fcp && metrics.fcp > 1800) score -= 20
    if (metrics.lcp && metrics.lcp > 2500) score -= 25
    if (metrics.fid && metrics.fid > 100) score -= 20
    if (metrics.cls && metrics.cls > 0.1) score -= 15
    
    return Math.max(0, score)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100 dark:bg-green-900/20'
    if (score >= 70) return 'bg-yellow-100 dark:bg-yellow-900/20'
    return 'bg-red-100 dark:bg-red-900/20'
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="flex items-center gap-2">
              <BarChart3 size={16} />
              <span className="text-sm font-medium">Performance</span>
            </div>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-white/80 hover:text-white transition-colors"
            >
              {showDetails ? '−' : '+'}
            </button>
          </div>

          {/* Score Display */}
          <div className="p-3">
            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${getScoreBg(getPerformanceScore())} mb-2`}>
                <span className={`text-lg font-bold ${getScoreColor(getPerformanceScore())}`}>
                  {getPerformanceScore()}
                </span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Performance Score</p>
            </div>
          </div>

          {/* Detailed Metrics */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-gray-200 dark:border-gray-700"
              >
                <div className="p-3 space-y-2">
                  {metrics.fcp && (
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <Zap size={12} className="text-blue-500" />
                        <span className="text-gray-600 dark:text-gray-400">FCP</span>
                      </div>
                      <span className={`font-medium ${metrics.fcp < 1800 ? 'text-green-600' : 'text-red-600'}`}>
                        {Math.round(metrics.fcp)}ms
                      </span>
                    </div>
                  )}
                  
                  {metrics.lcp && (
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <TrendingUp size={12} className="text-purple-500" />
                        <span className="text-gray-600 dark:text-gray-400">LCP</span>
                      </div>
                      <span className={`font-medium ${metrics.lcp < 2500 ? 'text-green-600' : 'text-red-600'}`}>
                        {Math.round(metrics.lcp)}ms
                      </span>
                    </div>
                  )}
                  
                  {metrics.fid && (
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <Clock size={12} className="text-green-500" />
                        <span className="text-gray-600 dark:text-gray-400">FID</span>
                      </div>
                      <span className={`font-medium ${metrics.fid < 100 ? 'text-green-600' : 'text-red-600'}`}>
                        {Math.round(metrics.fid)}ms
                      </span>
                    </div>
                  )}
                  
                  {metrics.cls && (
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <BarChart3 size={12} className="text-orange-500" />
                        <span className="text-gray-600 dark:text-gray-400">CLS</span>
                      </div>
                      <span className={`font-medium ${metrics.cls < 0.1 ? 'text-green-600' : 'text-red-600'}`}>
                        {metrics.cls.toFixed(3)}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
