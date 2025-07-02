'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    BarChart3,
    TrendingUp,
    MapPin,
    Users,
    DollarSign,
    Activity,
    Target,
    Zap,
    ChevronDown,
    Menu
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const impactNavItems = [
    {
        id: 'overview',
        label: "Overview",
        icon: Activity,
        href: "#overview",
        description: "General impact metrics"
    },
    {
        id: 'financial',
        label: "Financial",
        icon: DollarSign,
        href: "#financial",
        description: "Revenue and returns"
    },
    {
        id: 'community',
        label: "Community",
        icon: Users,
        href: "#community",
        description: "Community impact"
    },
    {
        id: 'growth',
        label: "Environmental",
        icon: TrendingUp,
        href: "#growth",
        description: "Environmental impact"
    },
    {
        id: 'coverage',
        label: "Coverage",
        icon: MapPin,
        href: "#coverage",
        description: "Geographic reach"
    },
    {
        id: 'goals',
        label: "Success Stories",
        icon: Target,
        href: "#goals",
        description: "Case studies"
    },
    {
        id: 'realtime',
        label: "Live Feed",
        icon: Zap,
        href: "#realtime",
        description: "Real-time activity"
    },
    {
        id: 'transparency',
        label: "Transparency",
        icon: BarChart3,
        href: "#transparency",
        description: "Accountability measures"
    },
]

interface ImpactPageNavbarProps {
    className?: string
}

export function ImpactPageNavbar({ className }: ImpactPageNavbarProps) {
    const [activeSection, setActiveSection] = useState('overview')

    useEffect(() => {
        const handleScroll = () => {
            const sections = impactNavItems.map(item => item.id)
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
                console.log(`Auto-switching to section: ${currentSection}`)
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
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-2">
                        <Activity className="h-5 w-5" />
                        <span className="font-semibold">Impact Dashboard Navigation</span>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-2">
                        {impactNavItems.map((item) => (
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
                                <span>{item.label}</span>
                            </Button>
                        ))}
                    </div>

                    {/* Mobile Dropdown */}
                    <div className="lg:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="flex items-center gap-2">
                                    <Menu className="h-4 w-4" />
                                    <span>Sections</span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end">
                                <DropdownMenuLabel>Impact Sections</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {impactNavItems.map((item) => (
                                    <DropdownMenuItem 
                                        key={item.id} 
                                        onClick={() => scrollToSection(item.id)}
                                        className="flex items-center gap-2"
                                    >
                                        <item.icon className="h-4 w-4" />
                                        <div className="flex flex-col">
                                            <span>{item.label}</span>
                                            <span className="text-xs text-muted-foreground">
                                                {item.description}
                                            </span>
                                        </div>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Compact Navigation - Medium screens */}
                    <div className="hidden md:flex lg:hidden items-center gap-1">
                        {impactNavItems.slice(0, 4).map((item) => (
                            <Button
                                key={item.id}
                                variant={activeSection === item.id ? "default" : "ghost"}
                                size="sm"
                                onClick={() => scrollToSection(item.id)}
                                className={cn(
                                    "flex items-center gap-1 text-sm font-medium transition-colors",
                                    activeSection === item.id && "bg-primary text-primary-foreground"
                                )}
                            >
                                <item.icon className="h-4 w-4" />
                            </Button>
                        ))}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {impactNavItems.slice(4).map((item) => (
                                    <DropdownMenuItem 
                                        key={item.id} 
                                        onClick={() => scrollToSection(item.id)}
                                        className="flex items-center gap-2"
                                    >
                                        <item.icon className="h-4 w-4" />
                                        {item.label}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    )
}
