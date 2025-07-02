'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    Wallet,
    TrendingUp,
    Calculator,
    Shield,
    FileText,
    Users,
    CreditCard,
    Phone
} from 'lucide-react'
import { useEffect, useState } from 'react'

const investNavItems = [
    {
        id: 'overview',
        label: "Overview",
        icon: Wallet,
        href: "#overview",
        description: "Investment overview"
    },
    {
        id: 'process',
        label: "Process",
        icon: FileText,
        href: "#process",
        description: "How to invest"
    },
    {
        id: 'levels',
        label: "Investment Levels",
        icon: TrendingUp,
        href: "#levels",
        description: "Investment tiers"
    },
    {
        id: 'returns',
        label: "Returns",
        icon: Calculator,
        href: "#returns",
        description: "Expected returns"
    },
    {
        id: 'governance',
        label: "Governance",
        icon: Users,
        href: "#governance",
        description: "Voting rights"
    },
    {
        id: 'security',
        label: "Security",
        icon: Shield,
        href: "#security",
        description: "Investment protection"
    },
    {
        id: 'payment',
        label: "Payment",
        icon: CreditCard,
        href: "#payment",
        description: "Payment methods"
    },
    {
        id: 'support',
        label: "Support",
        icon: Phone,
        href: "#support",
        description: "Get help"
    },
]

interface InvestPageNavbarProps {
    className?: string
}

export function InvestPageNavbar({ className }: InvestPageNavbarProps) {
    const [activeSection, setActiveSection] = useState('overview')

    useEffect(() => {
        const handleScroll = () => {
            const sections = investNavItems.map(item => item.id)
            const currentSection = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (currentSection) {
                setActiveSection(currentSection)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
                        <Wallet className="h-5 w-5" />
                        <span className="font-semibold">Investment Opportunities</span>
                    </div>
                    <div className="flex items-center gap-1 overflow-x-auto">
                        {investNavItems.map((item) => (
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
