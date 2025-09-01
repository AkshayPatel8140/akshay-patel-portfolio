import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  root?: Element | null
}

interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLElement>
  isIntersecting: boolean
  entry?: IntersectionObserverEntry
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        setEntry(entry)
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
        root: options.root || null,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [options.threshold, options.rootMargin, options.root])

  return { ref: ref as React.RefObject<HTMLElement>, isIntersecting, entry }
}

// Hook for lazy loading images
export function useLazyImage(src: string, options: UseIntersectionObserverOptions = {}) {
  const [imageSrc, setImageSrc] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const { ref, isIntersecting } = useIntersectionObserver(options)

  useEffect(() => {
    if (isIntersecting && !imageSrc) {
      setImageSrc(src)
    }
  }, [isIntersecting, imageSrc, src])

  const handleLoad = () => {
    setIsLoaded(true)
    setHasError(false)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(false)
  }

  return {
    ref,
    imageSrc,
    isLoaded,
    hasError,
    handleLoad,
    handleError,
  }
}

// Hook for performance monitoring
export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<{
    fcp?: number
    lcp?: number
    fid?: number
    cls?: number
  }>({})

  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fcp = entries[entries.length - 1]
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }))
        }
      })
      fcpObserver.observe({ entryTypes: ['paint'] })

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lcp = entries[entries.length - 1]
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }))
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fid = entries[entries.length - 1] as PerformanceEventTiming | undefined
        if (fid && 'processingStart' in fid && 'startTime' in fid) {
          setMetrics(prev => ({ ...prev, fid: (fid as PerformanceEventTiming).processingStart - fid.startTime }))
        }
      })
      fidObserver.observe({ type: 'first-input', buffered: true })

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let cls = 0
        for (const entry of list.getEntries() as PerformanceEntry[]) {
          // 'entry' is likely a LayoutShift entry, but TS doesn't know that.
          // See: https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift
          // We use a type assertion to LayoutShift for type safety.
          const layoutShift = entry as unknown as { value: number; hadRecentInput: boolean }
          if (typeof layoutShift.hadRecentInput === 'boolean' && !layoutShift.hadRecentInput) {
            cls += layoutShift.value
          }
        }
        setMetrics(prev => ({ ...prev, cls }))
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      return () => {
        fcpObserver.disconnect()
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])

  return metrics
}
