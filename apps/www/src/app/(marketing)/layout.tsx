import { MarketingHeader } from '@/app/(marketing)/_components/marketing-header'
import React from 'react'

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <React.Fragment>
            <MarketingHeader />
            {children}
        </React.Fragment>
    )
}
