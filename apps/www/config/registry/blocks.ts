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
                dark: '/registry/blocks/hero-dark.svg',
                light: '/registry/blocks/hero-light.svg',
            },
            blocks: [
                {
                    id: 'split-with-image-hero',
                    name: 'Split with image',
                    path: 'default/blocks/hero-sections/split-with-image-hero',
                },
            ],
        },
        {
            id: 'signin-signup',
            name: 'Sign In and Sign Up',
            image: {
                dark: '/registry/blocks/auth-dark.svg',
                light: '/registry/blocks/auth-light.svg',
            },
            blocks: [
                {
                    id: 'center-signin-card-with-email-only',
                    name: 'Center Sign In Card with Email Only',
                    path: 'default/blocks/signin-signup/center-signin-card-with-email-only',
                },
                {
                    id: 'center-signin-card',
                    name: 'Center Sign In Card',
                    path: 'default/blocks/signin-signup/center-signin-card',
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
