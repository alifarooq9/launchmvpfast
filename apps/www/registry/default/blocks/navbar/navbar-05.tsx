import { buttonVariants } from '@/registry/default/ui/button'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/registry/default/ui/navigation-menu'
import { Separator } from '@/registry/default/ui/separator'
import { cn } from '@/lib/utils'
import { BellIcon, BookOpenIcon, SlashIcon } from 'lucide-react'
import UserProfileDropdown from './user-profile-dropdown'
import { TeamSwitcher } from './team-switcher'
import { Search } from './search'
// import Link from 'next/link'

// Sample navigation links, you can replace these with your actual links
const navigationLinks = [
    { href: '#', label: 'Overview', active: true },
    { href: '#', label: 'Integrations' },
    { href: '#', label: 'Deployments' },
    { href: '#', label: 'Domains' },
    { href: '#', label: 'Usage' },
    { href: '#', label: 'Storage' },
    { href: '#', label: 'Settings' },
]

export default function Navbar() {
    const Link = 'a' // if using Next.js remove this line. you can use the Link component from 'next/link'

    return (
        <header className="border-border mt-4 flex w-full flex-col items-center justify-between gap-3 border-b px-4 xl:px-6">
            <div className="flex w-full items-center justify-between gap-4">
                <div className="flex flex-1 items-center justify-start gap-2">
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

                    <SlashIcon className="text-muted size-4 -rotate-[20deg]" />

                    <TeamSwitcher />
                </div>

                <div className="flex flex-1 items-center justify-end gap-4">
                    <Search />

                    <Separator
                        orientation="vertical"
                        className="data-[orientation=vertical]:h-5"
                    />

                    <div className="flex items-center gap-1.5">
                        <Link
                            href="#"
                            className={cn(
                                buttonVariants({
                                    variant: 'outline',
                                    size: 'icon',
                                }),
                                'size-8'
                            )}
                        >
                            <BellIcon />
                        </Link>

                        <Link
                            href="#"
                            className={cn(
                                buttonVariants({
                                    variant: 'outline',
                                    size: 'icon',
                                }),
                                'size-8'
                            )}
                        >
                            <BookOpenIcon />
                        </Link>
                    </div>

                    <Separator
                        orientation="vertical"
                        className="data-[orientation=vertical]:h-5"
                    />

                    <UserProfileDropdown align="end" size={8} />
                </div>
            </div>

            <div className="flex w-full items-center justify-start pb-1.5">
                <NavigationMenu className="max-md:hidden">
                    <NavigationMenuList>
                        {navigationLinks.map((link, index) => (
                            <NavigationMenuItem key={index}>
                                <Link
                                    href={link.href}
                                    data-active={link.active}
                                    className="text-foreground/60 data-[active=true]:text-accent-foreground data-[active=true]:hover:bg-accent hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground data-[active=true]:before:border-accent-foreground flex flex-col gap-1 rounded-md p-2 px-3 py-1.5 text-sm font-normal transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 data-[active=true]:relative data-[active=true]:bg-transparent data-[active=true]:before:absolute data-[active=true]:before:right-0 data-[active=true]:before:bottom-[-0.375rem] data-[active=true]:before:left-0 data-[active=true]:before:border-b-2 data-[active=true]:before:content-[''] [&_svg:not([class*='size-'])]:size-4"
                                >
                                    {link.label}
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}
