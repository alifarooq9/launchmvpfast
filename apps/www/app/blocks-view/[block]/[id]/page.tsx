import { ComponentLoaderClient } from '@/app/(app)/_components/component-loader-client'
import { getBlockCategory, getBlocksCategories } from '@/config/registry/blocks'
import { siteConfig } from '@/config/site'
import { notFound } from 'next/navigation'

export const revalidate = false
export const dynamic = 'force-static'
export const dynamicParams = false

export async function generateMetadata({
    params,
}: {
    params: Promise<{ block: string; id: string }>
}) {
    const par = await params
    const category = getBlockCategory(par.block)
    const block = category?.blocks.find((b) => b.id === par.id)

    if (!block) {
        return notFound()
    }

    return {
        title: `${block.name} | Shadcn UI & Tailwind CSS | ${siteConfig.name}`,
        description: `Browse our library of production-ready, open-source ${block.name} blocks built with Shadcn UI and Tailwind CSS. Copy, paste, and speed up your development`,
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

    return categories.flatMap((category) => {
        const categoryBlocks = getBlockCategory(category.id)?.blocks || []
        return categoryBlocks.map((block) => ({
            block: category.id,
            id: block.id,
        }))
    })
}

export default async function Component({
    params,
}: {
    params: Promise<{ block: string; id: string }>
}) {
    const par = await params
    const category = getBlockCategory(par.block)
    const block = category?.blocks.find((b) => b.id === par.id)

    if (!block) {
        return notFound()
    }

    return <ComponentLoaderClient component={block} />
}
