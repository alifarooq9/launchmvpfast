export type Block = {
    id: string
    name: string
    path: string
    meta?: {
        className?: string
        iframeHeight?: string
    }
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
                    id: 'ai-builder-hero',
                    name: 'AI Builder Hero',
                    path: 'default/blocks/hero-sections/ai-builder-hero',
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
        {
            id: 'navbar',
            name: 'Navbar',
            image: {
                dark: '/registry/blocks/navbar-dark.svg',
                light: '/registry/blocks/navbar-light.svg',
            },
            blocks: [
                {
                    id: 'navbar-01',
                    name: 'Navbar 01',
                    path: 'default/blocks/navbar/navbar-01',
                    meta: {
                        iframeHeight: '450',
                    },
                },
                {
                    id: 'navbar-02',
                    name: 'Navbar 02',
                    path: 'default/blocks/navbar/navbar-02',
                    meta: {
                        iframeHeight: '450',
                    },
                },
                {
                    id: 'navbar-03',
                    name: 'Navbar 03',
                    path: 'default/blocks/navbar/navbar-03',
                    meta: {
                        iframeHeight: '450',
                    },
                },
                {
                    id: 'navbar-04',
                    name: 'Navbar 04',
                    path: 'default/blocks/navbar/navbar-04',
                    meta: {
                        iframeHeight: '450',
                    },
                },
                {
                    id: 'navbar-05',
                    name: 'Navbar 05',
                    path: 'default/blocks/navbar/navbar-05',
                    meta: {
                        iframeHeight: '450',
                    },
                },
                {
                    id: 'navbar-06',
                    name: 'Navbar 06',
                    path: 'default/blocks/navbar/navbar-06',
                    meta: {
                        iframeHeight: '450',
                    },
                },
                {
                    id: 'navbar-07',
                    name: 'Navbar 07',
                    path: 'default/blocks/navbar/navbar-07',
                    meta: {
                        iframeHeight: '450',
                    },
                },
                {
                    id: 'navbar-08',
                    name: 'Navbar 08',
                    path: 'default/blocks/navbar/navbar-08',
                    meta: {
                        iframeHeight: '450',
                    },
                },
                {
                    id: 'navbar-09',
                    name: 'Navbar 09',
                    path: 'default/blocks/navbar/navbar-09',
                    meta: {
                        iframeHeight: '450',
                    },
                },
                {
                    id: 'navbar-10',
                    name: 'Navbar 10',
                    path: 'default/blocks/navbar/navbar-10',
                    meta: {
                        iframeHeight: '450',
                    },
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
