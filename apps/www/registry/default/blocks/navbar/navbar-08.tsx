import { buttonVariants, Button } from '@/registry/default/ui/button'
import { cn } from '@/lib/utils'
import { Search } from './search'
import { Separator } from '@/registry/default/ui/separator'
import { Switch } from '@/registry/default/ui/switch'
import { Label } from '@/registry/default/ui/label'
import { BellIcon, PlusCircleIcon, SettingsIcon } from 'lucide-react'
// import Link from 'next/link'

export default function Navbar() {
    const Link = 'a' // if using Next.js remove this line. you can use the Link component from 'next/link'

    return (
        <header className="container mx-auto flex h-14 items-center justify-between gap-4">
            <div className="flex flex-1 items-center justify-start gap-4">
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

                <Search className="mr-2" />
            </div>

            <nav className="flex items-center justify-end gap-2">
                <div className="flex items-center space-x-2">
                    <Switch id="test-mode" className="cursor-pointer" />
                    <Label htmlFor="test-mode" className="cursor-pointer">
                        Test Mode
                    </Label>
                </div>

                <Separator
                    orientation="vertical"
                    className="data-[orientation=vertical]:h-5"
                />

                <Link
                    href="#"
                    className={cn(
                        buttonVariants({ variant: 'ghost', size: 'sm' }),
                        'size-8 cursor-pointer'
                    )}
                >
                    <BellIcon />
                </Link>

                <Separator
                    orientation="vertical"
                    className="data-[orientation=vertical]:h-5"
                />

                <Link
                    href="#"
                    className={cn(
                        buttonVariants({ variant: 'ghost', size: 'sm' }),
                        'size-8 cursor-pointer'
                    )}
                >
                    <SettingsIcon />
                </Link>

                <Separator
                    orientation="vertical"
                    className="data-[orientation=vertical]:h-5"
                />

                <Button
                    variant="ghost"
                    size="icon"
                    className="size-8 cursor-pointer"
                >
                    <PlusCircleIcon />
                </Button>
            </nav>
        </header>
    )
}
