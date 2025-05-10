import { urls } from '@/config/urls'

export type Component = {
    id: string
    name: string
    installation: string
    path: string
    span?: 1 | 2 | 3 | 4
}

export type Category = {
    id: string
    name: string
    image: {
        dark: string
        light: string
    }
    components: Component[]
}

export type ComponentsType = {
    default: Category[]
}

export const components: ComponentsType = {
    default: [
        {
            id: 'input',
            name: 'Input',
            image: {
                dark: '/registry/components/input-dark.svg',
                light: '/registry/components/input-light.svg',
            },
            components: [
                {
                    id: 'prompt-input',
                    name: 'Prompt Input',
                    installation: `${urls.public}/r/prompt-input.json`,
                    path: 'default/components/input/prompt-input',
                    span: 2,
                },
            ],
        },
    ],
}

export function getCategories() {
    const categories = components.default.map((c) => ({
        id: c.id,
        name: c.name,
        componentsCount: c.components.length,
        image: c.image,
    }))

    return categories
}

export function getCategory(slug: string): Category | undefined {
    const category = components.default.find((c) => c.id === slug)

    return category ?? undefined
}
