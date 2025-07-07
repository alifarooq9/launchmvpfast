import { urls } from '@/config/urls'

export type Starterkit = {
    id: string
    name: string
    description: string
    techStack: string[]
    imageUrl: string
    buttonText: string
    buttonUrl: string
    preview: string
}

export const starterkits: Starterkit[] = [
    {
        id: 'saas-v1-nextjs',
        name: 'SaaS Next.js Starterkit',
        description:
            'Open-source Next.js SaaS starter kit with built-in authentication, database ORM, styling, landing page, dashboard, and more.',
        techStack: [
            'nextJs',
            'shadcnui',
            'nextauth',
            'uploadthing',
            'lemon',
            'drizzle',
            'tailwindcss',
            'typescript',
        ],
        imageUrl: '/starterkits/saas-v1/landing.png',
        buttonText: 'Get Starter-kit - (Free)',
        buttonUrl: urls.app.starterkits.saasNextjs.base,
        preview: urls.app.starterkits.saasNextjs.preview,
    },
]
