import { buttonVariants } from '@/components/ui/button'
import { navConfig } from '@/config/nav'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function MarketingHeader() {
    return (
        <header className="border-grid bg-background sticky top-0 z-50 w-full border-b">
            <div className="container-wrapper border-grid uppercase">
                <div className="mx-auto flex h-12 w-full max-w-screen-2xl items-center justify-between px-0 xl:px-0">
                    <Link
                        href="/"
                        className={cn(
                            buttonVariants({
                                variant: 'ghost',
                            }),
                            'border-border h-full rounded-none border-r px-6 text-base font-bold'
                        )}
                    >
                        {siteConfig.name}
                    </Link>
                    <nav className="h-full">
                        <ul className="flex h-full items-center">
                            {navConfig.headerNav.map((navItem, index) => (
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
                                            {navItem.icon && <navItem.icon />}
                                            {!navItem.iconOnly && navItem.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
