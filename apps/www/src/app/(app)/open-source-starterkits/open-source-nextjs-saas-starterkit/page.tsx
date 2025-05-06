import { GridGap } from '@/app/(app)/_components/grid-gap'
import { SaasStarterkitCta } from '@/app/(app)/open-source-starterkits/open-source-nextjs-saas-starterkit/_components/saas-starterkit-cta'
import { SaasStarterkitDemo } from '@/app/(app)/open-source-starterkits/open-source-nextjs-saas-starterkit/_components/saas-starterkit-demo'
import { SaasStarterkitFaqs } from '@/app/(app)/open-source-starterkits/open-source-nextjs-saas-starterkit/_components/saas-starterkit-faqs'
import SaasStarterkitHero from '@/app/(app)/open-source-starterkits/open-source-nextjs-saas-starterkit/_components/saas-starterkit-hero'
import { SaasStarterkitScreenShots } from '@/app/(app)/open-source-starterkits/open-source-nextjs-saas-starterkit/_components/saas-starterkit-screen-shots'
import { SaasStarterkitTechUsed } from '@/app/(app)/open-source-starterkits/open-source-nextjs-saas-starterkit/_components/saas-starterkit-tech-used'
import { SaasStarterkitWhatsIncluded } from '@/app/(app)/open-source-starterkits/open-source-nextjs-saas-starterkit/_components/saas-starterkit-whats-included'
import { siteConfig } from '@/config/site'
import { urls } from '@/config/urls'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: `Open Source Next.js SaaS Starter Kit | ${siteConfig.name}`,
    description:
        'Open-source Next.js SaaS starter kit with built-in authentication, database (Drizzle), Tailwind CSS, Shadcn UI and more. Launch your MVP faster!',
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
                url: siteConfig.ogImages.nextjsSaas,
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
        images: [siteConfig.ogImages.nextjsSaas],
        creator: '@AliFarooqDev',
    },
}

export default function NextjsSaasStarterkit() {
    return (
        <>
            <SaasStarterkitHero />

            <GridGap className="h-10" />

            <SaasStarterkitDemo />

            <GridGap className="h-20" />

            <SaasStarterkitWhatsIncluded />

            <GridGap className="h-20" />

            <SaasStarterkitTechUsed />

            <GridGap className="h-20" />

            <SaasStarterkitScreenShots />

            <GridGap className="h-20" />

            <SaasStarterkitFaqs />

            <GridGap className="h-20" />

            <SaasStarterkitCta />
        </>
    )
}
