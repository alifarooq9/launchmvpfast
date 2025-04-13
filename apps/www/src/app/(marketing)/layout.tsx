import { MarketingHeader } from '@/app/(marketing)/components/marketing-header'
import React from 'react'

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex flex-1 flex-col">
            <MarketingHeader />
            <main className="flex flex-1 flex-col">{children}</main>
        </div>
    )
}
