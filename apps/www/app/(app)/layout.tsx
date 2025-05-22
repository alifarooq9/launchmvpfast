import { MarketingFooter } from '@/app/(app)/_components/marketing-footer'
import { MarketingHeader } from '@/app/(app)/_components/marketing-header'
import MotionProvider from '@/registry/default/lib/motion-provider'
import React from 'react'

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex flex-1 flex-col">
            <MotionProvider>
                <MarketingHeader />
                <main className="flex flex-1 flex-col">{children}</main>
                <MarketingFooter />
            </MotionProvider>
        </div>
    )
}
