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
                    <div className="text-muted-foreground flex h-full min-h-96 w-full items-center justify-center text-sm">
                        Loading...
                    </div>
                )
            },
        }
    )

    return <Component />
}
