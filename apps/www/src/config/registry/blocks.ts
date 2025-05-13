export type Block = {
    id: string
    name: string
    path: string
}

export type Category = {
    id: string
    name: string
    image: {
        dark: string
        light: string
    }
    blocks: Block[]
}

export type ComponentsType = {
    default: Category[]
}

export const blocks: ComponentsType = {
    default: [
        {
            id: 'hero-sections',
            name: 'Hero Sections',
            image: {
                dark: '/registry/components/input-dark.svg',
                light: '/registry/components/input-light.svg',
            },
            blocks: [
                {
                    id: 'hero-01',
                    name: 'Hero 01',
                    path: 'default/blocks/hero-sections/hero-01',
                },
            ],
        },
    ],
}

export function getBlocksCategories() {
    const categories = blocks.default.map((c) => ({
        id: c.id,
        name: c.name,
        blocksCount: c.blocks.length,
        image: c.image,
    }))

    return categories
}

export function getBlockCategory(slug: string): Category | undefined {
    const category = blocks.default.find((c) => c.id === slug)

    return category ?? undefined
}
