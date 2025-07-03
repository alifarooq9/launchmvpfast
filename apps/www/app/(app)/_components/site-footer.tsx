import { Icons } from '@/components/icons'
import { navConfig } from '@/config/nav'
import { urls } from '@/config/urls'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export function SiteFooter() {
    return (
        <footer className="bg-background border-grid border-t">
            <div className="container flex flex-col items-start justify-between gap-10 py-20 md:flex-row">
                <div className="flex w-full max-w-72 flex-col gap-2">
                    <Link
                        href={urls.base}
                        className="focus-ring flex items-center gap-2 text-lg font-bold tracking-tight"
                    >
                        <Icons.logo className="size-6" />
                        {siteConfig.name}
                    </Link>
                    <p className="text-muted-foreground text-sm text-balance">
                        Build and ship faster. Transform ideas into reality with
                        pre-built components, blocks, starterkits and more.
                    </p>
                    <Link
                        href={urls.docs.base}
                        className={buttonVariants({
                            size: 'sm',
                            className: 'mt-4 w-fit',
                        })}
                    >
                        Get Started
                    </Link>
                </div>
                <nav className="grid w-full grid-cols-2 gap-6 lg:grid-cols-4">
                    <ul className="col-span-1">
                        <p className="mb-4 font-semibold">Everything by us</p>
                        {navConfig.footerNav.everythingByUs.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href as string}
                                    className={cn(
                                        buttonVariants({
                                            variant: 'link',
                                            size: 'sm',
                                        }),
                                        'text-muted-foreground h-7 px-0 font-semibold has-[>svg]:px-0'
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="col-span-1">
                        <p className="mb-4 font-semibold">Pro Features</p>
                        {navConfig.footerNav.pro.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href as string}
                                    className={cn(
                                        buttonVariants({
                                            variant: 'link',
                                            size: 'sm',
                                        }),
                                        'text-muted-foreground h-7 px-0 font-semibold has-[>svg]:px-0'
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="col-span-1">
                        <p className="mb-4 font-semibold">Documentation</p>
                        {navConfig.footerNav.docs.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href as string}
                                    className={cn(
                                        buttonVariants({
                                            variant: 'link',
                                            size: 'sm',
                                        }),
                                        'text-muted-foreground h-7 px-0 font-semibold has-[>svg]:px-0'
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="col-span-1">
                        <p className="mb-4 font-semibold">Socials</p>
                        {navConfig.footerNav.socials.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href as string}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        buttonVariants({
                                            variant: 'link',
                                            size: 'sm',
                                        }),
                                        'text-muted-foreground h-7 px-0 font-semibold has-[>svg]:px-0'
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="font-heading text-foreground/10 pointer-events-none relative hidden w-full overflow-hidden text-center text-[6vw] font-bold whitespace-nowrap select-none md:block">
                <div className="from-background pointer-events-none absolute inset-0 z-10 bg-gradient-to-b via-transparent to-transparent"></div>
                Built by Developers for Developers
            </div>
        </footer>
    )
}
