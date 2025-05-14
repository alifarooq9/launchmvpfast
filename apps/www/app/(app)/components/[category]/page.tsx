import { GridGap } from '@/app/(app)/_components/grid-gap'
import { Suggest } from '@/app/(app)/_components/suggest'
import { CategoryComponentsTable } from '@/app/(app)/components/[category]/_components/category-components-table'
import { ComponentsCategoryHero } from '@/app/(app)/components/[category]/_components/category-hero'
import {
    getComponentCategories,
    getComponentCategory,
} from '@/config/registry/components'
import { siteConfig } from '@/config/site'
import { urls } from '@/config/urls'
import { notFound } from 'next/navigation'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ category: string }>
}) {
    const category = getComponentCategory((await params).category)

    if (!category) {
        return notFound()
    }

    return {
        title: `${category.name} Components | Shadcn UI & Tailwind CSS | ${siteConfig.name}`,
        description: `Browse our library of production-ready, open-source ${category.name} components built with Shadcn UI and Tailwind CSS. Copy, paste, and speed up your development`,
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
}

export async function generateStaticParams() {
    const categories = getComponentCategories()

    return categories.map((c) => ({
        category: c.id,
    }))
}

type ComponentsCategoryProps = {
    params: Promise<{ category: string }>
}

export default async function ComponentsCategory({
    params,
}: ComponentsCategoryProps) {
    const category = getComponentCategory((await params).category)

    if (!category) {
        return notFound()
    }

    return (
        <>
            <ComponentsCategoryHero
                name={category.name}
                count={category.components.length}
            />

            <GridGap className="h-10" />

            <CategoryComponentsTable category={category} />

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
