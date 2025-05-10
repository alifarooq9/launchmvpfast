import { GridGap } from '@/app/(app)/_components/grid-gap'
import { Suggest } from '@/app/(app)/_components/suggest'
import { CategoryComponentsTable } from '@/app/(app)/components/[category]/_components/category-components-table'
import { CategoryHero } from '@/app/(app)/components/[category]/_components/category-hero'
import { getCategories, getCategory } from '@/config/registry/components'
import { notFound } from 'next/navigation'

type ComponentsCategoryProps = {
    params: Promise<{ category: string }>
}

export async function generateStaticParams() {
    const categories = getCategories()

    return categories.map((c) => ({
        category: c.id,
    }))
}

export default async function ComponentsCategory({
    params,
}: ComponentsCategoryProps) {
    const category = getCategory((await params).category)

    if (!category) {
        return notFound()
    }

    return (
        <>
            <CategoryHero
                name={category.name}
                count={category.components.length}
            />

            <GridGap className="h-10" />

            <CategoryComponentsTable category={category} />

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
