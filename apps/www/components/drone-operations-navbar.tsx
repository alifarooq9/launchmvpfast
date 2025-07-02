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
    LayoutDashboard,
    Plane,
    Radio,
    MapPin,
    Wallet,
    TrendingUp,
    ClipboardList,
    Settings2,
    ChevronDown,
    Menu
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const droneNavItems = [
    {
        label: "Fleet Dashboard",
        icon: LayoutDashboard,
        href: "/drone/dashboard",
        description: "Monitor all drone operations"
    },
    {
        label: "Flight Management",
        icon: Plane,
        href: "/drone/flights",
        description: "Schedule and track flights"
    },
    {
        label: "Mission Control",
        icon: Radio,
        href: "/drone/missions",
        description: "Active mission monitoring"
    },
    {
        label: "Locations",
        icon: MapPin,
        href: "/drone/locations",
        description: "Service area coverage"
    },
    {
        label: "Investments",
        icon: Wallet,
        href: "/drone/investments",
        description: "Investment tracking"
    },
    {
        label: "Analytics",
        icon: TrendingUp,
        href: "/drone/analytics",
        description: "Performance metrics"
    },
    {
        label: "Reports",
        icon: ClipboardList,
        href: "/drone/reports",
        description: "Detailed reporting"
    },
    {
        label: "Settings",
        icon: Settings2,
        href: "/drone/settings",
        description: "System configuration"
    },
]

interface DroneOperationsNavbarProps {
    className?: string
    variant?: 'horizontal' | 'compact' | 'dropdown'
}

export function DroneOperationsNavbar({ 
    className, 
    variant = 'horizontal' 
}: DroneOperationsNavbarProps) {
    const [isOpen, setIsOpen] = useState(false)

    if (variant === 'dropdown') {
        return (
            <div className={cn("w-full", className)}>
                <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                    <DropdownMenuTrigger asChild>
                        <Button 
                            variant="outline" 
                            className="w-full justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
                        >
                            <div className="flex items-center gap-2">
                                <Radio className="h-4 w-4" />
                                <span>Drone Operations</span>
                            </div>
                            <ChevronDown className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="start">
                        <DropdownMenuLabel>Drone Operations</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {droneNavItems.map((item) => (
                            <DropdownMenuItem key={item.href} asChild>
                                <Link href={item.href} className="flex items-center gap-2">
                                    <item.icon className="h-4 w-4" />
                                    <div className="flex flex-col">
                                        <span>{item.label}</span>
                                        <span className="text-xs text-muted-foreground">
                                            {item.description}
                                        </span>
                                    </div>
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        )
    }

    if (variant === 'compact') {
        return (
            <nav className={cn(
                "sticky top-16 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
                className
            )}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-2">
                            <Radio className="h-5 w-5" />
                            <span className="font-semibold">Drone Operations</span>
                        </div>
                        <div className="flex items-center gap-1 overflow-x-auto">
                            {droneNavItems.slice(0, 6).map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md hover:bg-accent",
                                        "whitespace-nowrap"
                                    )}
                                >
                                    <item.icon className="h-4 w-4" />
                                    <span className="hidden sm:block">{item.label}</span>
                                </Link>
                            ))}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                        <Menu className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    {droneNavItems.slice(6).map((item) => (
                                        <DropdownMenuItem key={item.href} asChild>
                                            <Link href={item.href} className="flex items-center gap-2">
                                                <item.icon className="h-4 w-4" />
                                                {item.label}
                                            </Link>
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

    // Default horizontal variant
    return (
        <nav className={cn(
            "sticky top-16 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
            className
        )}>
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-6 py-4">
                    <div className="flex items-center gap-2">
                        <Radio className="h-5 w-5" />
                        <span className="font-semibold">Drone Operations</span>
                    </div>
                    <div className="flex items-center gap-4 overflow-x-auto">
                        {droneNavItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md hover:bg-accent",
                                    "whitespace-nowrap min-w-fit"
                                )}
                            >
                                <item.icon className="h-4 w-4" />
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}
