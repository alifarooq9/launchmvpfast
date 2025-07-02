'use client'

import { useEffect } from 'react'

export function PerformanceMonitor() {
    useEffect(() => {
        // Only run in production
        if (process.env.NODE_ENV !== 'production') return

        // Monitor Core Web Vitals
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    // Log performance metrics (you can send to analytics)
                    if ('value' in entry) {
                        console.log(`${entry.name}: ${entry.value}`)
                    } else {
                        console.log(`${entry.name}: ${entry.duration}ms`)
                    }
                })
            })

            observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] })

            // Cleanup
            return () => observer.disconnect()
        }
    }, [])

    return null
}
