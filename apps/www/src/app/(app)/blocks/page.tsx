import { GridGap } from '@/app/(app)/_components/grid-gap'
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
}

export default function Blocks() {
    return (
        <>
            <BlocksHero />

            <GridGap className="h-10" />

            <BlocksTable />

            <GridGap className="h-10" />

            <Suggest
                title="Didn't find what you were looking for?"
                buttonText="Suggest Component"
                buttonLink={urls.socials.suggestions}
                className="flex-1"
            />
        </>
    )
}
