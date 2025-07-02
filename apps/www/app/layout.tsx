import type { Metadata } from 'next'
import '../styles/globals.css'
import { fontsVariables } from '@/lib/fonts'
import { Providers } from '@/components/providers/providers'
import { siteConfig } from '@/config/site'
import { Toaster } from '@/components/ui/sonner'
import { urls } from '@/config/urls'
import { Analytics } from '@vercel/analytics/next'
import { PerformanceMonitor } from '@/components/performance-monitor'

export const metadata: Metadata = {
    title: `${siteConfig.noSpacesName}: Drone Cooperative Investment Platform`,
    description:
        'Join our drone cooperative for shared investment opportunities in cutting-edge aerial technology. Democratizing access to drone services and equipment.',
    metadataBase: new URL(urls.public),
    keywords: [
        'Drone Zoe', // Brand
        'Drone Cooperative', // Primary Offering
        'Drone Investment', // Key USP & Offering Type
        'Aerial Services', // Target Use Case
        'Cooperative Ownership', // Secondary Offering
        'Precision Agriculture', // Specific Service
        'Drone Technology', // Core Technology
        'Agricultural Drones', // Specific Technology
        'Survey Drones', // Service Technology
        'Drone Services', // Key Service Technology
        'NextAuth.js', // Key Authentication Technology
        'MVP Development', // Core Service/Benefit
        'Open Source', // Key Value Proposition
        'Better Auth',
        'Shadcn',
    ],
    authors: [
        {
            name: 'alifarooq',
            url: urls.socials.ali,
        },
    ],
    creator: 'alifarooq',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: urls.public,
        title: siteConfig.name,
        description:
            'Build faster with free, open-source starter kits, UI components & blocks from LaunchMVPFast. Accelerate your MVP launch today.',
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImages.base,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description:
            'Build faster with free, open-source starter kits, UI components & blocks from LaunchMVPFast. Accelerate your MVP launch today.',
        images: [siteConfig.ogImages.base],
        creator: '@AliFarooqDev',
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: `${urls.public}/site.webmanifest`,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${fontsVariables} font-sans antialiased`}>
                <div className="relative flex min-h-svh flex-col">
                    <Providers>{children}</Providers>
                </div>

                <Toaster />
                <Analytics />
                <PerformanceMonitor />
            </body>
        </html>
    )
}
