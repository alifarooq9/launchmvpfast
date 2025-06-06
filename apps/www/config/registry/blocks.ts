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
                    id: 'center-with-image-hero',
                    name: 'Center with image',
                    path: 'default/blocks/hero-sections/center-with-image-hero',
                },
                {
                    id: 'center-content-dark-hero',
                    name: 'Center Content Dark',
                    path: 'default/blocks/hero-sections/center-content-dark-hero',
                },
                {
                    id: 'simple-hero-with-content-bottom',
                    name: 'Simple with Content Bottom',
                    path: 'default/blocks/hero-sections/simple-hero-with-content-bottom',
                },
            ],
        },
        {
            id: 'signin-signup',
            name: 'Sign-In and Sign-Up',
            image: {
                dark: '/registry/blocks/auth-dark.svg',
                light: '/registry/blocks/auth-light.svg',
            },
            blocks: [
                {
                    id: 'simple-signin',
                    name: 'Simple Sign-In',
                    path: 'default/blocks/signin-signup/simple-signin',
                },
                {
                    id: 'simple-signup',
                    name: 'Simple Sign-Up',
                    path: 'default/blocks/signin-signup/simple-signup',
                },
                {
                    id: 'center-signin-card-with-email-only',
                    name: 'Center Sign-In Card with Email Only',
                    path: 'default/blocks/signin-signup/center-signin-card-with-email-only',
                },
                {
                    id: 'center-signin-card',
                    name: 'Center Sign-In Card',
                    path: 'default/blocks/signin-signup/center-signin-card',
                },
                {
                    id: 'center-signup-card',
                    name: 'Center Sign-Up Card',
                    path: 'default/blocks/signin-signup/center-signup-card',
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
