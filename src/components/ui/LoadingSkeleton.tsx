import React from 'react'

interface LoadingSkeletonProps {
  className?: string
  count?: number
  height?: string
  width?: string
}

export default function LoadingSkeleton({ 
  className = '', 
  count = 1, 
  height = 'h-4', 
  width = 'w-full' 
}: LoadingSkeletonProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`${height} ${width} bg-gray-200 dark:bg-gray-700 rounded animate-pulse`}
        />
      ))}
    </div>
  )
}

// Specialized skeleton components
export function ProjectCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 animate-pulse">
      {/* Image skeleton */}
      <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-xl mb-4" />
      
      {/* Title skeleton */}
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-3 w-3/4" />
      
      {/* Description skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
      </div>
      
      {/* Technologies skeleton */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"
          />
        ))}
      </div>
      
      {/* Buttons skeleton */}
      <div className="flex gap-2">
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-24" />
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-20" />
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 animate-pulse">
        {/* Title skeleton */}
        <div className="space-y-4">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-96" />
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-80" />
        </div>
        
        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-96" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-80" />
        </div>
        
        {/* Buttons skeleton */}
        <div className="flex justify-center gap-4">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-32" />
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-32" />
        </div>
      </div>
    </div>
  )
}

export function NavigationSkeleton() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo skeleton */}
          <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
          
          {/* Navigation items skeleton */}
          <div className="hidden md:flex items-center space-x-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"
              />
            ))}
          </div>
          
          {/* Buttons skeleton */}
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
            <div className="md:hidden h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
