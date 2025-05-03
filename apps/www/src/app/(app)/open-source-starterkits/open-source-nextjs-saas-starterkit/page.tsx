import { GridGap } from '@/app/(app)/_components/grid-gap'
import { SaasStarterkitCta } from '@/app/(app)/open-source-starterkits/open-source-nextjs-saas-starterkit/_components/saas-starterkit-cta'
import { SaasStarterkitDemo } from '@/app/(app)/open-source-starterkits/open-source-nextjs-saas-starterkit/_components/saas-starterkit-demo'
import { SaasStarterkitFaqs } from '@/app/(app)/open-source-starterkits/open-source-nextjs-saas-starterkit/_components/saas-starterkit-faqs'
import SaasStarterkitHero from '@/app/(app)/open-source-starterkits/open-source-nextjs-saas-starterkit/_components/saas-starterkit-hero'
import { SaasStarterkitScreenShots } from '@/app/(app)/open-source-starterkits/open-source-nextjs-saas-starterkit/_components/saas-starterkit-screen-shots'
import { SaasStarterkitTechUsed } from '@/app/(app)/open-source-starterkits/open-source-nextjs-saas-starterkit/_components/saas-starterkit-tech-used'
import { SaasStarterkitWhatsIncluded } from '@/app/(app)/open-source-starterkits/open-source-nextjs-saas-starterkit/_components/saas-starterkit-whats-included'
import { siteConfig } from '@/config/site'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: `Open Source Next.js SaaS Starter Kit [Better-Auth, Drizzle, Shadcn UI] | ${siteConfig.name}`,
    description:
        'Open-source Next.js SaaS starter kit with built-in authentication, database (Drizzle), Tailwind CSS, Shadcn UI and more. Launch your MVP faster!',
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
