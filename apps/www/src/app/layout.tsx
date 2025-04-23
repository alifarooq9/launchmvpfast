import type { Metadata } from 'next'
import '../styles/globals.css'
import { MarketingHeader } from '@/app/(app)/_components/marketing-header'
import { fontsVariables } from '@/lib/fonts'
import { Providers } from '@/components/providers/providers'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
    title: `${siteConfig.noSpacesName}: Open Source Starter Kits & UI Components`,
    description:
        'Build faster with free, open-source starter kits, UI components & blocks from LaunchMVPFast. Accelerate your MVP launch today.',
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
            </body>
        </html>
    )
}
