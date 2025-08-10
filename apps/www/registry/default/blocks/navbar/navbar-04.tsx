import { buttonVariants } from '@/registry/default/ui/button'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuContent,
    NavigationMenuTrigger,
} from '@/registry/default/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { MobileNav } from './mobile-nav'
// import Link from 'next/link'

// Sample navigation links, you can replace these with your actual links
const starterkits = [
    {
        title: 'Orbit',
        description: 'Personal portfolio starter template',
        href: '#',
    },
    {
        title: 'SaaS',
        description: 'Complete SaaS application starter',
        href: '#',
    },
]
const components = [
    {
        title: 'Input',
        description: 'Form input components',
        href: '#',
    },
    {
        title: 'Dropdown Menu',
        description: 'Interactive dropdown menus',
        href: '#',
    },
    {
        title: 'View all',
        description: 'Browse all components',
        href: '#',
    },
]
const blocks = [
    {
        title: 'Hero Section',
        description: 'Landing page hero blocks',
        href: '#',
    },
    {
        title: 'Navbars',
        description: 'Navigation bar components',
        href: '#',
    },
    {
        title: 'Sign-in and Sign-up',
        description: 'Authentication form blocks',
        href: '#',
    },
]
const learning = [
    {
        title: 'Documentation',
        description: 'Complete guides and API reference',
        href: '#',
    },
    {
        title: 'Tutorials',
        description: 'Step-by-step learning materials',
        href: '#',
    },
    {
        title: 'Blog',
        description: 'Latest news and insights',
        href: '#',
    },
]
const support = [
    {
        title: 'Community',
        description: 'Join our developer community',
        href: '#',
    },
    {
        title: 'Help Center',
        description: 'Find answers to common questions',
        href: '#',
    },
    {
        title: 'Contact',
        description: 'Get in touch with our team',
        href: '#',
    },
]

const navigationLinks = {
    mobile: [
        {
            name: 'Menu',
            items: [
                { href: '#', label: 'Docs' },
                { href: '#', label: 'Pricing' },
            ],
        },
        {
            name: 'Starterkits',
            items: starterkits.map((item) => ({
                href: item.href,
                label: item.title,
            })),
        },
        {
            name: 'Components',
            items: components.map((item) => ({
                href: item.href,
                label: item.title,
            })),
        },
        {
            name: 'Blocks',
            items: blocks.map((item) => ({
                href: item.href,
                label: item.title,
            })),
        },
        {
            name: 'Learning',
            items: learning.map((item) => ({
                href: item.href,
                label: item.title,
            })),
        },
        {
            name: 'Support',
            items: support.map((item) => ({
                href: item.href,
                label: item.title,
            })),
        },
    ],
    desktop: [
        {
            href: '#',
            label: 'Products',
            gridCols: 3,
            categories: [
                {
                    name: 'Starterkits',
                    id: 'starterkits',
                    items: starterkits,
                },
                {
                    name: 'Components',
                    id: 'components',
                    items: components,
                },
                {
                    name: 'Blocks',
                    id: 'blocks',
                    items: blocks,
                },
            ],
        },
        {
            href: '#',
            label: 'Resources',
            gridCols: 2,
            categories: [
                {
                    name: 'Learning',
                    id: 'learning',
                    items: learning,
                },
                {
                    name: 'Support',
                    id: 'support',
                    items: support,
                },
            ],
        },
        { href: '#', label: 'Pricing', active: false },
        { href: '#', label: 'Docs', active: false },
    ],
}

export default function Navbar() {
    const Link = 'a' // if using Next.js remove this line. you can use the Link component from 'next/link'

    return (
        <header className="container mx-auto flex h-14 items-center justify-between gap-4">
            <div className="flex items-center justify-start gap-2">
                <MobileNav nav={navigationLinks.mobile} />

                <Link
                    href="#"
                    className={cn(
                        buttonVariants({ variant: 'ghost', size: 'icon' }),
                        "dark:hover:bg-accent text-accent-foreground [&_svg:not([class*='size-'])]:size-6"
                    )}
                >
                    <svg
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.7699 21.8258L7.42207 20.485C5 19.9996 5 20 6.6277 17.875L9.77497 13.9892C10.4003 13.2172 11.3407 12.7687 12.3342 12.7687L19.2668 13.0726M11.7699 21.8258C11.7699 21.8258 12.8773 24.5436 14.1667 25.833C15.4561 27.1223 18.1738 28.2296 18.1738 28.2296M18.1738 28.2296L19.0938 32.0266C19.5 34.5 19.5 34.5 21.6117 33.0063L25.7725 30.2146C26.684 29.603 27.2308 28.5775 27.2308 27.4798L26.927 20.733M26.927 20.733C31.5822 16.4657 34.5802 12.4926 34.9962 6.59335C35.1164 4.8888 35.1377 4.88137 33.4062 5.00345C27.507 5.41937 23.534 8.4174 19.2668 13.0726M11.7699 31.6146C11.7699 33.4841 10.2544 34.9996 8.38495 34.9996H5V31.6146C5 29.7453 6.5155 28.2298 8.38495 28.2298C10.2544 28.2298 11.7699 29.7453 11.7699 31.6146Z"
                            fill="currentColor"
                        />
                        <path
                            d="M12.5 22.9996L11 20.4996C11 20.0996 16 12.9996 20 12.9996C22.1667 14.8329 26.1172 16.4682 27 19.9996C27.5 21.9996 21.5 26.1663 18.5 28.4996L12.5 22.9996Z"
                            fill="currentColor"
                        />
                    </svg>
                </Link>
            </div>

            <NavigationMenu className="max-md:hidden" viewport={false}>
                <NavigationMenuList>
                    {navigationLinks.desktop.map((link, index) => {
                        if (link.categories && link.categories?.length > 0) {
                            return (
                                <NavigationMenuItem key={index}>
                                    <NavigationMenuTrigger className="h-8 rounded-md px-3 py-1.5 font-medium">
                                        {link.label}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent
                                        className={cn(
                                            'z-50 p-3 pb-0 md:w-[400px]',
                                            link.gridCols === 1 &&
                                                'columns-1 lg:w-[400px]',
                                            link.gridCols === 2 &&
                                                'columns-2 gap-4 lg:w-[500px]',
                                            link.gridCols === 3 &&
                                                'columns-3 gap-4 lg:w-[600px]',
                                            link.gridCols &&
                                                link.gridCols > 3 &&
                                                `columns-${link.gridCols} gap-4 lg:w-[600px]`
                                        )}
                                    >
                                        {link.categories.map((category) => (
                                            <div
                                                key={category.id}
                                                className="mb-3 break-inside-avoid"
                                            >
                                                <h3 className="text-foreground/70 mb-3 px-2 text-sm font-light">
                                                    {category.name}
                                                </h3>
                                                <ul className="grid gap-1">
                                                    {category.items.map(
                                                        (item) => (
                                                            <ListItem
                                                                key={item.title}
                                                                title={
                                                                    item.title
                                                                }
                                                                href={item.href}
                                                            >
                                                                {
                                                                    item.description
                                                                }
                                                            </ListItem>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        ))}
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            )
                        }

                        return (
                            <NavigationMenuItem key={index}>
                                <NavigationMenuLink
                                    href={link.href}
                                    asChild
                                    data-active={link.active}
                                    className="rounded-md px-3 py-1.5 font-medium"
                                >
                                    <Link>{link.label}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )
                    })}
                </NavigationMenuList>
            </NavigationMenu>

            <div className="flex flex-1 items-center justify-end gap-2">
                <Link
                    href="#"
                    className={cn(
                        buttonVariants({ variant: 'secondary', size: 'sm' })
                    )}
                >
                    Sign-in
                </Link>
                <Link href="#" className={cn(buttonVariants({ size: 'sm' }))}>
                    Get Started
                </Link>
            </div>
        </header>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
    const Link = 'a' // if using Next.js remove this line. you can use the Link component from 'next/link'

    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">
                        {title}
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-xs leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
