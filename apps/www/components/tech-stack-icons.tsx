import { Icons } from '@/components/icons'
import { JSX } from 'react'

type TechStackIconType = {
    [key: string]: {
        name: string
        icon: JSX.Element
    }
}
export const techStackIcons: TechStackIconType = {
    nextJs: {
        name: 'Nextjs',
        icon: <Icons.nextJS />,
    },
    shadcnui: {
        name: 'ShadcnUI',
        icon: <Icons.shadcnui />,
    },
    uploadthing: {
        name: 'Uploadthing',
        icon: <Icons.uploadthing />,
    },
    stripe: {
        name: 'Stripe',
        icon: <Icons.stripe />,
    },
    tailwindcss: {
        name: 'Tailwindcss',
        icon: <Icons.tailwindcss />,
    },
    typescript: {
        name: 'Typescript',
        icon: <Icons.typescript />,
    },
    drizzle: {
        name: 'Drizzle',
        icon: <Icons.drizzle />,
    },
    lemon: {
        name: 'Lemon Squeezy',
        icon: <Icons.lemon />,
    },
    nextauth: {
        name: 'NextAuth',
        icon: <Icons.uploadthing />,
    },
    fumadocs: {
        name: 'FumaDocs',
        icon: <Icons.fumadocs />,
    },
}
