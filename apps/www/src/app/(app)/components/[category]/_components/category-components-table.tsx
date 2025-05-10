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
    const itemCount = category.components.length

    return (
        <section className="container-wrapper">
            <div className="divide-border grid grid-cols-1 divide-y sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.components.map((component, index) => (
                    <div
                        key={component.id}
                        className={cn(
                            'sm[&:nth-child(2n)]:border-r-0 border-grid relative flex min-h-50 flex-col items-center justify-center border-r p-4 py-14 transition-all md:px-6 lg:[&:nth-child(3n)]:border-r-0 xl:[&:nth-child(3n)]:border-r xl:[&:nth-child(4n)]:border-r-0',
                            index >= itemCount - 1 ? 'border-b-0' : '',
                            index >= itemCount - 2 ? 'sm:border-b-0' : '',
                            index >= itemCount - 3 ? 'lg:border-b-0' : '',
                            index >= itemCount - 4 ? 'xl:border-b-0' : '',
                            `col-span-${component.span ?? 1}`
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
                ))}
            </div>
        </section>
    )
}
