import { siteConfig } from '@/config/site'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: `Open Source Next.js SaaS Starter Kit [Better-Auth, Drizzle, Shadcn UI] | ${siteConfig.name}`,
    description:
        'Open-source Next.js SaaS starter kit with built-in authentication, database (Drizzle), Tailwind CSS, Shadcn UI and more. Launch your MVP faster!',
}

export default function NextjsSaasStarterkit() {
    return (
        <>
            <h1>Starter Kits</h1>
        </>
    )
}
