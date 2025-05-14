import { Component } from '@/config/registry/components'

export async function ComponentLoaderServer({
    component,
}: {
    component: Component
}) {
    try {
        const Component = (await import(`@/registry/${component.path}`)).default
        return <Component />
    } catch (error) {
        console.error(`Failed to load component ${component.name}:`, error)
        return null
    }
}
