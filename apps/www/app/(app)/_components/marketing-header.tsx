'use client'

import { ThemeSwitcher } from '@/components/theme-switcher'
import { Button, buttonVariants } from '@/components/ui/button'
import { navConfig } from '@/config/nav'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { Icons } from '@/components/icons'
import { MobileNav } from '@/app/(app)/_components/mobile-nav'
import { usePathname } from 'next/navigation'

export function MarketingHeader() {
    const pathname = usePathname()
    
    const isActive = (href: string) => {
        // Handle exact matches first
        if (href === '/' && pathname === '/') return true
        if (href !== '/' && pathname === href) return true
        
        // Handle sub-routes - if we're on a sub-route of the nav item
        if (href !== '/' && pathname.startsWith(href + '/')) return true
        
        return false
    }
    return (
        <header className="border-grid bg-background m sticky top-0 z-50 w-full border-b">
            <div className="container-wrapper border-grid uppercase">
                <div className="mx-auto flex h-12 w-full max-w-screen-2xl items-center justify-between px-0 xl:px-0">
                    <Link
                        href="/"
                        className={cn(
                            buttonVariants({
                                variant: 'ghost',
                            }),
                            "border-border h-full rounded-none border-r px-4 text-base font-bold xl:px-6 [&_svg:not([class*='size-'])]:size-5"
                        )}
                    >
                        <Icons.logo />
                        <span className="hidden lg:block">
                            {siteConfig.name}
                        </span>
                    </Link>

                    <MobileNav />

                    <nav className="hidden h-full md:block">
                        <ul className="flex h-full items-center">
                            {navConfig.headerNav.map((navItem) => (
                                <li
                                    key={navItem.label}
                                    className="h-full border-r first:border-l last:border-0"
                                >
                                    {navItem.disabled ? (
                                        <span
                                            className={cn(
                                                buttonVariants({
                                                    variant: 'ghost',
                                                }),
                                                'h-full rounded-none',
                                                navItem.iconOnly &&
                                                    'aspect-square',
                                                navItem.disabled &&
                                                    'pointer-events-none cursor-default opacity-60'
                                            )}
                                        >
                                            {navItem.label}
                                        </span>
                                    ) : (
                                        <Link
                                            href={navItem.href}
                                            aria-disabled={navItem.disabled}
                                            target={
                                                navItem.iconOnly
                                                    ? '_blank'
                                                    : undefined
                                            }
                                            className={cn(
                                                buttonVariants({
                                                    variant: isActive(navItem.href) ? 'default' : 'ghost',
                                                }),
                                                'h-full rounded-none transition-all duration-200',
                                                navItem.iconOnly &&
                                                    'aspect-square',
                                                navItem.disabled &&
                                                    'pointer-events-none cursor-default opacity-60',
                                                isActive(navItem.href) &&
                                                    'bg-primary text-primary-foreground shadow-sm border-primary/20',
                                                !isActive(navItem.href) &&
                                                    'hover:bg-accent hover:text-accent-foreground'
                                            )}
                                        >
                                            {navItem.icon && <navItem.icon />}
                                            {!navItem.iconOnly && navItem.label}
                                        </Link>
                                    )}
                                </li>
                            ))}

                            <li className="aspect-square h-full border-r first:border-l last:border-0">
                                <ThemeSwitcher
                                    Trigger={
                                        <Button
                                            variant="ghost"
                                            className="aspect-sqaure h-full w-full rounded-none [&_svg:not([class*='size-'])]:size-4.5"
                                        >
                                            <Sun className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                            <Moon className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                            <span className="sr-only">
                                                Toggle theme
                                            </span>
                                        </Button>
                                    }
                                />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
