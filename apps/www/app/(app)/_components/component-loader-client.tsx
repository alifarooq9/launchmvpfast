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
        async () => {
            const mod = await import(`@/registry/${component.path}`)
            const exportName =
                Object.keys(mod).find(
                    (key) =>
                        typeof mod[key] === 'function' ||
                        typeof mod[key] === 'object'
                ) || component.name
            return { default: mod.default || mod[exportName] }
        },
        {
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
