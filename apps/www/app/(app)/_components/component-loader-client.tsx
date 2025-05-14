'use client'

import { Component } from '@/config/registry/components'
import dynamic from 'next/dynamic'

export function ComponentLoaderClient({ component }: { component: Component }) {
    const Component = dynamic(
        () => import(`@/registry/${component.path}`).catch(() => () => null),
        {
            ssr: false,
        }
    )

    return <Component />
}
