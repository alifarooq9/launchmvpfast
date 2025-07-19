import { cloneCmds } from '@/config/clone-cmd'
import { urls } from '@/config/urls'

export type Starterkit = {
    id: string
    name: string
    description: string
    techStack: string[]
    imageUrl: string
    preview: string
    cloneCmd: string
    topLine: string
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
        preview: urls.app.starterkits.saasNextjs.preview,
        cloneCmd: cloneCmds.starterkits.saasNextjs.default,
        topLine: 'SaaS Starterkit',
    },
    {
        id: 'orbit',
        name: 'Orbit',
        description:
            'Modern personal portfolio template with clean design, responsive layout, and smooth animations to showcase your work and skills.',
        techStack: ['nextJs', 'shadcnui', 'tailwindcss', 'typescript'],
        imageUrl: '/starterkits/orbit/landing.png',
        preview: urls.app.starterkits.orbit.preview,
        cloneCmd: cloneCmds.starterkits.orbit.default,
        topLine: 'Personal Portfolio Starterkit',
    },
]
