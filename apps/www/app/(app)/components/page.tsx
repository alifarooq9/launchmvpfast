import { Suggest } from '@/app/(app)/_components/suggest'
import { ComponentsHero } from '@/app/(app)/components/_components/components-hero'
import { CategoriesTable } from '@/app/(app)/components/_components/categories-table'
import { siteConfig } from '@/config/site'
import { Metadata } from 'next'
import { urls } from '@/config/urls'
import { PageContainer } from '@/app/(app)/_components/page-header'

export const metadata: Metadata = {
    title: `Open Source UI Components | Shadcn UI & Tailwind CSS | ${siteConfig.name}`,
    description:
        'Browse our library of production-ready, open-source UI components built with Shadcn UI and Tailwind CSS. Copy, paste, and speed up your development',
    keywords: [
        'shadcn ui',
        'shadcn',
        'tailwind css',
        'tailwind',
        'open source',
        'ui components',
        'components',
        'react components',
        'react',
        'typescript',
        'typescript components',
    ],
}

export default function Components() {
    return (
        <PageContainer>
            <ComponentsHero />

            <CategoriesTable />

            <Suggest
                title="Didn't find what you were looking for?"
                buttonText="Suggest Component"
                buttonLink={urls.socials.suggestions}
                className="flex-1"
            />
        </PageContainer>
    )
}
