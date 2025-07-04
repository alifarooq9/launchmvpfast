import { PageContainer } from '@/app/(app)/_components/page-header'
import { Suggest } from '@/app/(app)/_components/suggest'
import { BlocksHero } from '@/app/(app)/blocks/_components/blocks-hero'
import { BlocksTable } from '@/app/(app)/blocks/_components/blocks-table'
import { siteConfig } from '@/config/site'
import { urls } from '@/config/urls'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: `Reusable Page Blocks & Sections | Shadcn UI & Tailwind CSS | ${siteConfig.name}`,
    description:
        'Quickly assemble beautiful pages with our collection of pre-built, responsive blocks and sections built with Shadcn UI and Tailwind CSS.',
    keywords: [
        'shadcn ui',
        'shadcn',
        'tailwind css',
        'tailwind',
        'open source',
        'ui blocks',
        'blocks',
        'react blocks',
        'react',
        'typescript',
        'nextjs',
        'blocks sections',
        'page blocks',
        'page sections',
    ],
}

export default function Blocks() {
    return (
        <PageContainer>
            <BlocksHero />

            <BlocksTable />

            <Suggest
                title="Didn't find what you were looking for?"
                buttonText="Suggest Block"
                buttonLink={urls.socials.suggestions}
                className="flex-1"
            />
        </PageContainer>
    )
}
