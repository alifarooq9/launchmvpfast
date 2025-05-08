'use client'

import { ThemeSwitcher } from '@/components/theme-switcher'
import { Button, buttonVariants } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { navConfig } from '@/config/nav'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import React from 'react'
import { urls } from '@/config/urls'
import { Icons } from '@/components/icons'

export function MobileNav() {
    const [open, setOpen] = React.useState(false)

    return (
        <nav className="flex h-full items-center md:hidden">
            <Link
                href={urls.socials.gh}
                target="_blank"
                className={buttonVariants({
                    variant: 'ghost',
                    className: 'aspect-square h-full border-x',
                })}
            >
                <Icons.gitHub className="size-4" />
            </Link>
            <div className="aspect-square h-full border-r first:border-l last:border-0">
                <ThemeSwitcher
                    Trigger={
                        <Button
                            variant="ghost"
                            className="aspect-sqaure h-full w-full rounded-none [&_svg:not([class*='size-'])]:size-4.5"
                        >
                            <Sun className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    }
                />
            </div>
            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                    <Button className="aspect-square h-full" variant="ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="!size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 9h16.5m-16.5 6.75h16.5"
                            />
                        </svg>
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="min-h-[80svh]">
                    <DrawerHeader>
                        <DrawerTitle>{siteConfig.name}</DrawerTitle>
                    </DrawerHeader>
                    <div className="overflow-y-auto">
                        {navConfig.headerNav
                            .filter((n) => n.iconOnly !== true)
                            .map((navItem) => (
                                <Link
                                    key={navItem.label}
                                    href={navItem.href}
                                    className="border-grid flex h-full items-center gap-2 border-b p-4 first:border-t"
                                    onClick={() => setOpen(false)}
                                >
                                    <span>{navItem.label}</span>
                                </Link>
                            ))}

                        <div className="divide-border flex w-full items-center divide-x divide-y">
                            {navConfig.headerNav
                                .filter((n) => n.iconOnly)
                                .map((navItem) => (
                                    <Link
                                        key={navItem.label}
                                        href={navItem.href}
                                        className="border-grid flex h-full w-full items-center justify-center gap-2 border-b p-4"
                                        target="_blank"
                                    >
                                        <span className="sr-only">
                                            {navItem.label}
                                        </span>
                                        {navItem.icon && (
                                            <navItem.icon className="size-5" />
                                        )}
                                    </Link>
                                ))}
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </nav>
    )
}
