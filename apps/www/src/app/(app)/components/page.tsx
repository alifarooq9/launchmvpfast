import { ComingSoon } from '@/app/(app)/_components/coming-soon'
import { GridGap } from '@/app/(app)/_components/grid-gap'
import { Suggest } from '@/app/(app)/_components/suggest'
import { ComponentsHero } from '@/app/(app)/components/_components/components-hero'
import { CategoriesTable } from '@/app/(app)/components/_components/categories-table'
import { siteConfig } from '@/config/site'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: `Open Source UI Components | Shadcn UI & Tailwind CSS | ${siteConfig.name}`,
    description:
        'Browse our library of production-ready, open-source UI components built with Shadcn UI and Tailwind CSS. Copy, paste, and speed up your development',
}

export default function Components() {
    return (
        <>
            {/* <ComingSoon
                title="Components"
                description="We're working on a set of powerful, re-usable components. Join the early access list to get notified"
            /> */}

            <ComponentsHero />

            <GridGap className="h-10" />

            <CategoriesTable />

            <GridGap className="h-10" />

            <Suggest
                title="Didn't find what you were looking for?"
                buttonText="Suggest Component"
                buttonLink="#"
                className="flex-1"
            />
        </>
    )
}
