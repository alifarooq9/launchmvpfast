import { PageContainer } from '@/app/(app)/_components/page-header'
import { StarterkitsHero } from '@/app/(app)/open-source-starterkits/_components/starterkits-hero'
import StarterkitsTable from '@/app/(app)/open-source-starterkits/_components/starterkits-table'
import { siteConfig } from '@/config/site'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: `Free Open Source Starter Kits | Next.js & More | ${siteConfig.name}`,
    description:
        'Discover our curated collection of free, open-source starter kits designed to accelerate your SaaS MVP and web application development.',
}

export default function StarterKits() {
    return (
        <PageContainer>
            <StarterkitsHero />

            <StarterkitsTable />
        </PageContainer>
    )
}
