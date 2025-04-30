import { ComingSoon } from '@/app/(app)/_components/coming-soon'
import { siteConfig } from '@/config/site'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: `Reusable Page Blocks & Sections | Shadcn UI & Tailwind CSS | ${siteConfig.name}`,
    description:
        'Quickly assemble beautiful pages with our collection of pre-built, responsive blocks and sections built with Shadcn UI and Tailwind CSS.',
}

export default function Blocks() {
    return (
        <>
            <ComingSoon
                title="Blocks"
                description="We're working on a set of powerful, ready-to-use blocks. Join the early access list to get notified"
            />
        </>
    )
}
