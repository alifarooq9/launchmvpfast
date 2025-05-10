import { CodeBlock } from '@/app/(app)/_components/code-block'
import { ComponentLoaderServer } from '@/app/(app)/_components/component-loader-server'
import { OpenInV0 } from '@/app/(app)/_components/open-in-v0'
import { Category } from '@/config/registry/components'
import { cn } from '@/lib/utils'

type CategoryComponentsTableProps = {
    category: Category
}

export function CategoryComponentsTable({
    category,
}: CategoryComponentsTableProps) {
    // Calculate total columns used by components with spans
    let totalColsUsed = category.components.reduce(
        (acc, component) => acc + (component.span || 1),
        0
    )

    // Create filler divs for different breakpoints
    const createFillers = () => {
        // For each breakpoint, add enough fillers to complete the row
        const fillers = []

        // XL screens - 4 columns
        const xlRemainder = totalColsUsed % 4
        if (xlRemainder > 0) {
            const xlSpan = 4 - xlRemainder
            fillers.push(
                <div
                    key="filler-xl"
                    className={cn(
                        'bg-background hidden xl:block',
                        xlSpan === 1 && 'xl:col-span-1',
                        xlSpan === 2 && 'xl:col-span-2',
                        xlSpan === 3 && 'xl:col-span-3'
                    )}
                />
            )
        }

        // LG screens - 3 columns
        const lgRemainder = totalColsUsed % 3
        if (lgRemainder > 0) {
            const lgSpan = 3 - lgRemainder
            fillers.push(
                <div
                    key="filler-lg"
                    className={cn(
                        'bg-background hidden lg:block xl:hidden',
                        lgSpan === 1 && 'lg:col-span-1',
                        lgSpan === 2 && 'lg:col-span-2'
                    )}
                />
            )
        }

        // SM screens - 2 columns
        const smRemainder = totalColsUsed % 2
        if (smRemainder > 0) {
            fillers.push(
                <div
                    key="filler-sm"
                    className="bg-background hidden sm:col-span-1 sm:block lg:hidden"
                />
            )
        }

        return fillers
    }

    return (
        <section className="container-wrapper">
            <div className="bg-border grid grid-flow-dense grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.components.map((component) => {
                    const span = component.span || 1
                    return (
                        <div
                            key={component.id}
                            className={cn(
                                'bg-background relative flex min-h-50 flex-col items-center justify-center p-4 py-14 transition-all md:px-6',
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
                                <ComponentLoaderServer component={component} />
                            </div>
                        </div>
                    )
                })}

                {/* Add filler divs to complete the row */}
                {createFillers()}
            </div>
        </section>
    )
}
