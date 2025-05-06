import { ComingSoon } from '@/app/(app)/_components/coming-soon'
import { siteConfig } from '@/config/site'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: `Open Source UI Components | Shadcn UI & Tailwind CSS | ${siteConfig.name}`,
    description:
        'Browse our library of production-ready, open-source UI components built with Shadcn UI and Tailwind CSS. Copy, paste, and speed up your development',
}

export default function Components() {
    return (
        <>
            <ComingSoon
                title="Components"
                description="We're working on a set of powerful, re-usable components. Join the early access list to get notified"
            />
        </>
    )
}
