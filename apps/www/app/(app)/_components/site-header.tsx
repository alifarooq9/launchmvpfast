import { ThemeSwitcher } from '@/components/theme-switcher'
import { Button, buttonVariants } from '@/components/ui/button'
import { navConfig } from '@/config/nav'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { Icons } from '@/components/icons'
import { MobileNav } from '@/app/(app)/_components/mobile-nav'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { CommandMenu } from '@/app/(app)/_components/command-menu'
import { Banner } from '@/app/(app)/_components/banner'

export function SiteHeader() {
    const iconsOnlyNav = navConfig.headerNav.filter(
        (item) => item.icon && item.iconOnly
    )
    const navigationLinks = navConfig.headerNav.filter(
        (item) => !item.icon || !item.iconOnly
    )

    return (
        <div className="fixed top-0 z-50 w-full">
            <Banner />

            <header className="bg-background flex h-14 w-full items-center justify-center">
                <div className="relative mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4">
                    {/* Left side */}
                    <div className="flex items-center md:gap-2">
                        {/* Mobile menu trigger */}
                        <MobileNav />

                        <div className="flex items-center gap-6">
                            <Link
                                href="/"
                                className={cn(
                                    buttonVariants({
                                        variant: 'ghost',
                                        size: 'icon',
                                        className:
                                            "rounded-md [&_svg:not([class*='size-'])]:size-6",
                                    })
                                )}
                            >
                                <Icons.logo />
                            </Link>
                            {/* Navigation menu */}
                            <NavigationMenu
                                viewport={false}
                                className="max-md:hidden"
                            >
                                <NavigationMenuList className="gap-2">
                                    {navigationLinks.map((link, index) => (
                                        <NavigationMenuItem key={index}>
                                            {link.subMenu ? (
                                                <>
                                                    <NavigationMenuTrigger className="text-muted-foreground hover:text-primary h-9 rounded-md bg-transparent px-3 font-medium *:[svg]:-me-0.5 *:[svg]:size-3.5">
                                                        {link.label}
                                                    </NavigationMenuTrigger>
                                                    <NavigationMenuContent className="data-[motion=from-end]:slide-in-from-right-16! data-[motion=from-start]:slide-in-from-left-16! data-[motion=to-end]:slide-out-to-right-16! data-[motion=to-start]:slide-out-to-left-16! z-50 p-1">
                                                        <ul
                                                            className={cn(
                                                                'min-w-64'
                                                            )}
                                                        >
                                                            {link.items?.map(
                                                                (
                                                                    item,
                                                                    itemIndex
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            itemIndex
                                                                        }
                                                                    >
                                                                        <NavigationMenuLink
                                                                            asChild
                                                                            className="py-1.5"
                                                                        >
                                                                            <Link
                                                                                href={
                                                                                    item.href as string
                                                                                }
                                                                            >
                                                                                <div className="space-y-1">
                                                                                    <div className="font-medium">
                                                                                        {
                                                                                            item.label
                                                                                        }
                                                                                    </div>
                                                                                    <p className="text-muted-foreground line-clamp-2 text-xs">
                                                                                        {
                                                                                            item.description
                                                                                        }
                                                                                    </p>
                                                                                </div>
                                                                            </Link>
                                                                        </NavigationMenuLink>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </NavigationMenuContent>
                                                </>
                                            ) : (
                                                <NavigationMenuLink
                                                    className="text-muted-foreground hover:text-primary flex h-9 items-center justify-center px-3 py-0 font-medium"
                                                    asChild
                                                >
                                                    <Link
                                                        href={link.href ?? '#'}
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </NavigationMenuLink>
                                            )}
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className="flex items-center">
                        {/* Search */}
                        <div className="hidden px-3 md:block">
                            <CommandMenu />
                        </div>

                        {/* Icons only nav */}
                        <nav className="flex items-center gap-1">
                            {iconsOnlyNav.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href as string}
                                    target={
                                        item.iconOnly ? '_blank' : undefined
                                    }
                                    className={cn(
                                        buttonVariants({
                                            variant: 'ghost',
                                            size:
                                                item.iconOnly &&
                                                item.label !== 'GitHub'
                                                    ? 'icon'
                                                    : 'default',
                                        }),
                                        item.disabled &&
                                            'cursor-not-allowed opacity-60'
                                    )}
                                    aria-disabled={item.disabled}
                                >
                                    {item.icon && <item.icon />}
                                    {!item.iconOnly && item.label}
                                    {item.label === 'GitHub' && <StarCount />}
                                </Link>
                            ))}
                        </nav>
                        <ThemeSwitcher
                            Trigger={
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="ml-1 cursor-pointer [&_svg:not([class*='size-'])]:size-4.5"
                                >
                                    <Sun className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                    <Moon className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                    <span className="sr-only">
                                        Toggle theme
                                    </span>
                                </Button>
                            }
                        />
                    </div>
                </div>
            </header>
        </div>
    )
}

async function StarCount() {
    async function getGitHubStars() {
        try {
            const response = await fetch(
                'https://api.github.com/repos/alifarooq9/launchmvpfast',
                {
                    next: {
                        revalidate: 8400,
                    },
                }
            )
            if (!response?.ok) {
                return null
            }
            const json = await response.json()
            const stars = parseInt(json.stargazers_count)
            return stars ?? 0
        } catch {
            return 0
        }
    }
    const stars = await getGitHubStars()
    return (
        <span className="text-muted-foreground text-sm font-medium">
            {stars}
        </span>
    )
}
