'use client'

import Link, { LinkProps } from 'next/link'
import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { navConfig } from '@/config/nav'

export function MobileNav() {
    const [open, setOpen] = React.useState(false)

    const navigationLinks = navConfig.headerNav.filter(
        (item) => !item.icon || !item.iconOnly
    )

    return (
        <Popover open={open} onOpenChange={setOpen} modal={true}>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        'extend-touch-target block touch-manipulation items-center justify-start gap-2.5 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent md:hidden dark:hover:bg-transparent'
                    )}
                >
                    <div className="relative flex items-center justify-center">
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
                        <p className="text-muted-foreground text-sm font-medium">
                            Menu
                        </p>
                        <div className="flex flex-col gap-3">
                            {navigationLinks.map((item, index) => {
                                if (item.subMenu) {
                                    return item.items?.map(
                                        (subItem, subIndex) => {
                                            return (
                                                <MobileLink
                                                    key={`${index}-${subIndex}`}
                                                    href={
                                                        subItem.href as string
                                                    }
                                                    onOpenChange={setOpen}
                                                >
                                                    {subItem.label}
                                                </MobileLink>
                                            )
                                        }
                                    )
                                }

                                return (
                                    <MobileLink
                                        key={index}
                                        href={item.href as string}
                                        onOpenChange={setOpen}
                                    >
                                        {item.label}
                                    </MobileLink>
                                )
                            })}
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
            onClick={() => {
                if (onOpenChange) {
                    onOpenChange(false)
                }
            }}
            {...props}
        >
            {children}
        </Link>
    )
}
