import { buttonVariants } from '@/components/ui/button'
import { navConfig } from '@/config/nav'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function MarketingHeader() {
    return (
        <div className="border-border border-b uppercase">
            <header className="mx-auto flex h-12 w-full max-w-screen-2xl items-center justify-between">
                <Link
                    href="/"
                    className={cn(
                        buttonVariants({
                            variant: 'ghost',
                        }),
                        'border-border h-full rounded-none border-x px-6 text-base font-semibold'
                    )}
                >
                    {siteConfig.name}
                </Link>
                <nav className="h-full">
                    <ul className="flex h-full items-center">
                        {navConfig.headerNav.map((navItem, index) => (
                            <li
                                key={navItem.label}
                                className={cn(
                                    buttonVariants({
                                        variant: 'ghost',
                                    }),
                                    'h-full rounded-none p-0',
                                    index === 0 ? 'border-x' : 'border-r',
                                    navItem.iconOnly && 'aspect-square',
                                    navItem.disabled &&
                                        'pointer-events-none cursor-default opacity-60'
                                )}
                            >
                                {navItem.disabled ? (
                                    <span className="h-full w-full content-center px-4">
                                        {navItem.label}
                                    </span>
                                ) : (
                                    <Link
                                        href={navItem.href}
                                        aria-disabled={navItem.disabled}
                                        className="h-full w-full content-center px-4"
                                    >
                                        {navItem.icon && <navItem.icon />}
                                        {!navItem.iconOnly && navItem.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </div>
    )
}
