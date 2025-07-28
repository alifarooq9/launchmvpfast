'use client'

import { Component } from '@/config/registry/components'
import dynamic from 'next/dynamic'

export function ComponentLoaderClient({
    component,
    Loading,
}: {
    component: Component
    Loading?: React.ReactNode
}) {
    const Component = dynamic(
        () => import(`@/registry/${component.path}`).catch(() => () => null),
        {
            ssr: false,
            loading: () => {
                if (Loading) {
                    return <>{Loading}</>
                }
                return (
                    <div className="text-muted-foreground flex h-full w-full items-center justify-center p-6 text-sm">
                        Loading...
                    </div>
                )
            },
        }
    )

    return <Component />
}
