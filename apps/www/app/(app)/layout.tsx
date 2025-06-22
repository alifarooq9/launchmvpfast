import { MarketingFooter } from '@/app/(app)/_components/marketing-footer'
import { SiteHeader } from '@/app/(app)/_components/site-header'
import React from 'react'

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex flex-1 flex-col">
            {/* <MotionProvider> */}
            <SiteHeader />
            <main className="flex flex-1 flex-col pt-20">{children}</main>
            <MarketingFooter />
            {/* </MotionProvider> */}
        </div>
    )
}
