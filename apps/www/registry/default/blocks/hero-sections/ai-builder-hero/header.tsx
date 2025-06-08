'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

const navLinks = [
    {
        href: '#',
        label: 'Features',
    },
    {
        href: '#',
        label: 'About',
    },
    {
        href: '#',
        label: 'Pricing',
    },
    {
        href: '#',
        label: 'Contact',
    },
    {
        href: '#',
        label: 'Teams',
    },
]

export default function Header() {
    return (
        <header className="bg-background sticky top-0 z-20 grid h-14 w-full grid-cols-2 gap-4 border-b px-4 md:grid-cols-5 xl:px-6">
            <div className="flex items-center justify-start gap-4">
                <MobileNav />
                <Link
                    href="#"
                    className="focus-visible:border-ring focus-visible:ring-ring/50 flex text-lg font-bold outline-none focus-visible:ring-[3px]"
                >
                    Acme
                </Link>
            </div>

            <nav className="col-span-3 hidden place-items-center md:grid">
                <ul className="flex items-center gap-2">
                    {navLinks.map((link) => (
                        <li key={link.label} className="inline-block">
                            <Link
                                href={link.href}
                                className={cn(
                                    buttonVariants({
                                        variant: 'ghost',
                                        size: 'sm',
                                    })
                                )}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex items-center justify-end gap-2">
                <Link
                    href="#"
                    className={cn(
                        buttonVariants({ variant: 'ghost', size: 'sm' })
                    )}
                >
                    Log in
                </Link>
                <Link href="#" className={cn(buttonVariants({ size: 'sm' }))}>
                    Sign up
                </Link>
            </div>
        </header>
    )
}

function MobileNav() {
    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    className={cn(
                        'extend-touch-target block h-8 touch-manipulation items-center justify-start gap-2.5 !p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent md:hidden dark:hover:bg-transparent'
                    )}
                >
                    <div className="relative flex h-8 w-4 items-center justify-center">
                        <div className="relative size-4">
                            <span
                                className={cn(
                                    'bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100',
                                    open ? 'top-[0.4rem] -rotate-45' : 'top-1'
                                )}
                            />
                            <span
                                className={cn(
                                    'bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100',
                                    open ? 'top-[0.4rem] rotate-45' : 'top-2.5'
                                )}
                            />
                        </div>
                        <span className="sr-only">Toggle Menu</span>
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="bg-background/90 no-scrollbar h-(--radix-popover-content-available-height) w-(--radix-popover-content-available-width) overflow-y-auto rounded-none border-none p-0 shadow-none backdrop-blur duration-100"
                align="start"
                side="bottom"
                alignOffset={-16}
                sideOffset={14}
            >
                <div className="flex flex-col gap-12 overflow-auto px-6 py-6">
                    <div className="flex flex-col gap-4">
                        <div className="text-muted-foreground text-sm font-medium">
                            Menu
                        </div>
                        <div className="flex flex-col gap-3">
                            {navLinks.map((item, index) => (
                                <MobileLink
                                    key={index}
                                    href={item.href}
                                    onOpenChange={setOpen}
                                >
                                    {item.label}
                                </MobileLink>
                            ))}
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
}: LinkProps & {
    onOpenChange?: (open: boolean) => void
    children: React.ReactNode
    className?: string
}) {
    return (
        <Link
            href={href}
            className={cn('text-2xl font-medium', className)}
            {...props}
        >
            {children}
        </Link>
    )
}
