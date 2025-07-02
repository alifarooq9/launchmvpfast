import { navConfig } from '@/config/nav'
import { urls } from '@/config/urls'
import Link from 'next/link'

export function MarketingFooter() {
    return (
        <footer className="bg-background border-grid border-t">
            <div className="container-wrapper overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav
                    aria-label="Footer"
                    className="-mb-6 flex flex-wrap gap-x-10 gap-y-3 text-sm/6 md:justify-center"
                >
                    {navConfig.footerNav.main.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-muted-foreground focus-ring px-2"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="mt-10 flex items-center justify-center">
                    <p className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                        By Haitians, for Haiti—One Drone at a Time
                    </p>
                </div>
                <p className="text-muted-foreground mt-10 text-left text-sm/6 md:text-center">
                    Have questions or want to get involved?{' '}
                    <Link
                        href="/contact"
                        className="focus-ring underline underline-offset-2"
                    >
                        Contact us
                    </Link>
                    {' '}to learn more about joining the cooperative.
                </p>
            </div>
        </footer>
    )
}
