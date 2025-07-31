import { Component } from '@/config/registry/components'
import React from 'react'

export async function ComponentLoaderServer({
    component,
}: {
    component: Component
}) {
    try {
        const LazyComponent = React.lazy(async () => {
            const mod = await import(`@/registry/${component.path}`)
            const exportName =
                Object.keys(mod).find(
                    (key) =>
                        typeof mod[key] === 'function' ||
                        typeof mod[key] === 'object'
                ) || component.name
            return { default: mod.default || mod[exportName] }
        })
        return <LazyComponent />
    } catch (error) {
        console.error(`Failed to load component ${component.name}:`, error)
        return null
    }
}
