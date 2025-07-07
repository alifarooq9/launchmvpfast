import { PageContainer } from '@/app/(app)/_components/page-header'
import { Suggest } from '@/app/(app)/_components/suggest'
import { BlocksCategoryTable } from '@/app/(app)/blocks/[category]/_component/category-blocks-table'
import { BlocksCategoryHero } from '@/app/(app)/blocks/[category]/_component/category-hero'
import { getBlockCategory, getBlocksCategories } from '@/config/registry/blocks'
import { siteConfig } from '@/config/site'
import { urls } from '@/config/urls'
import { notFound } from 'next/navigation'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ category: string }>
}) {
    const category = getBlockCategory((await params).category)

    if (!category) {
        return notFound()
    }

    return {
        title: `${category.name} Blocks | Shadcn UI & Tailwind CSS | ${siteConfig.name}`,
        description: `Browse our library of production-ready, open-source ${category.name} blocks built with Shadcn UI and Tailwind CSS. Copy, paste, and speed up your development`,
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
}

export async function generateStaticParams() {
    const categories = getBlocksCategories()

    return categories.map((c) => ({
        category: c.id,
    }))
}

type BlocksCategoryProps = {
    params: Promise<{ category: string }>
}

export default async function BlocksCategory({ params }: BlocksCategoryProps) {
    const category = getBlockCategory((await params).category)

    if (!category) {
        return notFound()
    }

    return (
        <PageContainer>
            <BlocksCategoryHero
                name={category.name}
                count={category.blocks.length}
            />

            <BlocksCategoryTable category={category} />

            <Suggest
                title="Didn't find what you were looking for?"
                buttonText="Suggest Block"
                buttonLink={urls.socials.suggestions}
                className="flex-1"
            />
        </PageContainer>
    )
}
