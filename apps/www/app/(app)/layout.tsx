import { SiteFooter } from '@/app/(app)/_components/site-footer'
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
            <main className="flex flex-1 flex-col py-30 pb-10 sm:pt-34 sm:pb-14">
                {children}
            </main>
            <SiteFooter />
            {/* </MotionProvider> */}
        </div>
    )
}
