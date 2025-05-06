import type { Metadata } from 'next'
import '../styles/globals.css'
import { fontsVariables } from '@/lib/fonts'
import { Providers } from '@/components/providers/providers'
import { siteConfig } from '@/config/site'
import { Toaster } from '@/components/ui/sonner'
import { urls } from '@/config/urls'

export const metadata: Metadata = {
    title: `${siteConfig.noSpacesName}: Open Source Starter Kits & UI Components`,
    description:
        'Build faster with free, open-source starter kits, UI components & blocks from LaunchMVPFast. Accelerate your MVP launch today.',
    metadataBase: new URL(urls.public),
    keywords: [
        'Launch MVP Fast', // Brand
        'Next.js Starter Kit', // Primary Offering & Tech
        'Open Source Starter Kit', // Key USP & Offering Type
        'SaaS MVP', // Target Use Case
        'Reusable UI Components', // Secondary Offering
        'Tailwind CSS Components', // Specific Tech for UI
        'Next.js', // Core Technology
        'React', // Underlying Technology
        'Tailwind CSS', // Core Styling Technology
        'Drizzle ORM', // Key Backend Technology
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
            <head>
                <meta
                    name="apple-mobile-web-app-title"
                    content="Launch MVP Fast"
                />
            </head>
            <body className={`${fontsVariables} font-sans antialiased`}>
                <div className="relative flex min-h-svh flex-col">
                    <Providers>{children}</Providers>
                </div>
                <Toaster />
            </body>
        </html>
    )
}
