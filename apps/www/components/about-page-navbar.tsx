'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    Users,
    Target,
    Award,
    Heart,
    Building,
    Handshake,
    Phone,
    MapPin
} from 'lucide-react'
import { useEffect, useState } from 'react'

const aboutNavItems = [
    {
        id: 'mission',
        label: "Mission & Vision",
        icon: Target,
        href: "#mission",
        description: "Our purpose and goals"
    },
    {
        id: 'team',
        label: "Leadership",
        icon: Users,
        href: "#team",
        description: "Our founding team"
    },
    {
        id: 'cooperative',
        label: "Cooperative Model",
        icon: Handshake,
        href: "#cooperative",
        description: "How we work together"
    },
    {
        id: 'values',
        label: "Our Values",
        icon: Heart,
        href: "#values",
        description: "What drives us"
    },
    {
        id: 'governance',
        label: "Governance",
        icon: Building,
        href: "#governance",
        description: "Democratic structure"
    },
    {
        id: 'commitment',
        label: "Community",
        icon: Award,
        href: "#commitment",
        description: "Our commitment"
    },
    {
        id: 'location',
        label: "Location",
        icon: MapPin,
        href: "#location",
        description: "Where we operate"
    },
    {
        id: 'contact',
        label: "Contact",
        icon: Phone,
        href: "#contact",
        description: "Get in touch"
    },
]

interface AboutPageNavbarProps {
    className?: string
}

export function AboutPageNavbar({ className }: AboutPageNavbarProps) {
    const [activeSection, setActiveSection] = useState('mission')

    useEffect(() => {
        const handleScroll = () => {
            const sections = aboutNavItems.map(item => item.id)
            let currentSection = null
            let closestDistance = Infinity
            
            // Find the section that's closest to the top of the viewport
            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    const headerOffset = 140
                    
                    // Calculate distance from the ideal viewing position (just below header)
                    const distance = Math.abs(rect.top - headerOffset)
                    
                    // Section is in view if it's not completely above or below viewport
                    const isInView = rect.top < window.innerHeight && rect.bottom > 0
                    
                    if (isInView && distance < closestDistance) {
                        closestDistance = distance
                        currentSection = section
                    }
                }
            }
            
            // Fallback: if no section is close enough, find the one that's most visible
            if (!currentSection) {
                let maxVisibleArea = 0
                for (const section of sections) {
                    const element = document.getElementById(section)
                    if (element) {
                        const rect = element.getBoundingClientRect()
                        const visibleTop = Math.max(0, rect.top)
                        const visibleBottom = Math.min(window.innerHeight, rect.bottom)
                        const visibleArea = Math.max(0, visibleBottom - visibleTop)
                        
                        if (visibleArea > maxVisibleArea) {
                            maxVisibleArea = visibleArea
                            currentSection = section
                        }
                    }
                }
            }

            if (currentSection && currentSection !== activeSection) {
                setActiveSection(currentSection)
            }
        }

        // Throttle scroll events for better performance
        let timeoutId: NodeJS.Timeout
        const throttledHandleScroll = () => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(handleScroll, 50)
        }

        // Check on mount with a small delay to ensure DOM is ready
        const initTimeoutId = setTimeout(handleScroll, 100)
        
        window.addEventListener('scroll', throttledHandleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', throttledHandleScroll)
            clearTimeout(timeoutId)
            clearTimeout(initTimeoutId)
        }
    }, [activeSection])

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId) // Immediately update active section
        const element = document.getElementById(sectionId)
        if (element) {
            // Remove any existing highlights
            document.querySelectorAll('.section-highlight').forEach(el => {
                el.classList.remove('section-highlight')
            })
            
            // Add highlight to target section
            element.classList.add('section-highlight')
            
            // Calculate the offset more precisely
            const headerOffset = 140 // Account for sticky headers + some padding
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            // Use requestAnimationFrame for smoother scrolling
            window.scrollTo({
                top: Math.max(0, offsetPosition), // Ensure we don't scroll above the page
                behavior: 'smooth'
            })
            
            // Remove highlight after animation completes
            setTimeout(() => {
                element.classList.remove('section-highlight')
            }, 2000)
            
            // Log for debugging
            console.log(`Scrolled to section: ${sectionId}, offset: ${offsetPosition}`)
        } else {
            console.warn(`Section with id "${sectionId}" not found`)
        }
    }

    return (
        <nav className={cn(
            "sticky top-12 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
            className
        )}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        <span className="font-semibold">About Us</span>
                    </div>
                    <div className="flex items-center gap-1 overflow-x-auto">
                        {aboutNavItems.map((item) => (
                            <Button
                                key={item.id}
                                variant={activeSection === item.id ? "default" : "ghost"}
                                size="sm"
                                onClick={() => scrollToSection(item.id)}
                                className={cn(
                                    "flex items-center gap-1 text-sm font-medium transition-all duration-200",
                                    "whitespace-nowrap relative",
                                    activeSection === item.id 
                                        ? "bg-primary text-primary-foreground shadow-md scale-105 ring-2 ring-primary/20" 
                                        : "hover:bg-accent hover:text-accent-foreground hover:scale-102"
                                )}
                            >
                                <item.icon className="h-4 w-4" />
                                <span className="hidden sm:block">{item.label}</span>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}
