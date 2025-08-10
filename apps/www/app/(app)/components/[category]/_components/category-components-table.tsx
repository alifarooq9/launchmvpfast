import { CodeBlock } from '@/app/(app)/_components/code-block'
import { ComponentLoaderClient } from '@/app/(app)/_components/component-loader-client'
import { OpenInV0 } from '@/app/(app)/_components/open-in-v0'
import { Category } from '@/config/registry/components'
import { cn } from '@/lib/utils'

type CategoryComponentsTableProps = {
    category: Category
}

export function CategoryComponentsTable({
    category,
}: CategoryComponentsTableProps) {
    return (
        <section className="container">
            <div className="grid grid-flow-dense grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {category.components.map((component) => {
                    const span = component.span || 1
                    return (
                        <div
                            key={component.id}
                            className={cn(
                                'relative flex min-h-50 flex-col items-center justify-center rounded-xl border p-4 py-14 transition-all',
                                // Apply column spans with appropriate caps per breakpoint
                                'col-span-1', // Base mobile (always 1)
                                // SM breakpoint: Cap at 2
                                span >= 2 && 'sm:col-span-2',
                                // LG breakpoint: Cap at 3
                                span === 2 && 'lg:col-span-2',
                                span >= 3 && 'lg:col-span-3',
                                // XL breakpoint: Cap at 4
                                span === 2 && 'xl:col-span-2',
                                span === 3 && 'xl:col-span-3',
                                span >= 4 && 'xl:col-span-4'
                            )}
                        >
                            <div className="absolute top-3 right-4 flex items-center justify-end gap-8">
                                <OpenInV0 component={component} />

                                <CodeBlock component={component} />
                            </div>
                            <div className="flex h-full w-full items-center justify-center">
                                <ComponentLoaderClient component={component} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
