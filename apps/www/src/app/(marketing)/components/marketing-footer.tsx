import { navConfig } from '@/config/nav'
import { urls } from '@/config/urls'
import Link from 'next/link'

export function MarketingFooter() {
    return (
        <footer className="bg-background border-grid border-t">
            <div className="container-wrapper overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav
                    aria-label="Footer"
                    className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
                >
                    {navConfig.footerNav.main.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-muted-foreground"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="mt-16 flex justify-center gap-x-10">
                    {navConfig.footerNav.socials.map((item) => (
                        <Link
                            target="_blank"
                            key={item.name}
                            href={item.href}
                            className="text-muted-foreground"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon aria-hidden="true" className="size-6" />
                        </Link>
                    ))}
                </div>
                <div className="mt-10 flex items-center justify-center">
                    <p className="font-heading text-7xl font-medium">
                        Built by developers for developers.
                    </p>
                </div>
                <p className="text-muted-foreground mt-10 text-center text-sm/6">
                    Built by{' '}
                    <Link
                        href={urls.socials.ali}
                        className="underline underline-offset-2"
                    >
                        Ali Farooq
                    </Link>
                    . The source code is available on{' '}
                    <Link
                        href={urls.socials.gh}
                        className="underline underline-offset-2"
                    >
                        Github
                    </Link>
                    .
                </p>
            </div>
        </footer>
    )
}
