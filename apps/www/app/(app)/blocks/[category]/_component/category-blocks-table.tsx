import { CodeBlock } from '@/app/(app)/_components/code-block'
import { ComponentLoaderServer } from '@/app/(app)/_components/component-loader-server'
import { GridGap } from '@/app/(app)/_components/grid-gap'
import { ImageContentWrapper } from '@/app/(app)/_components/image-content-wrapper'
import { OpenInV0 } from '@/app/(app)/_components/open-in-v0'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Category } from '@/config/registry/blocks'
import { TerminalIcon } from 'lucide-react'

type BlocksCategoryTableProps = {
    category: Category
}

export function BlocksCategoryTable({ category }: BlocksCategoryTableProps) {
    return (
        <section className="container-wrapper flex flex-col">
            {category.blocks.map((block, index) => (
                <div key={block.id}>
                    <div className="container flex flex-col items-start justify-between gap-4 py-4 sm:flex-row sm:items-center">
                        <h2 className="font-heading sm:text-lg">
                            {block.name}
                        </h2>

                        <div className="flex items-center gap-2">
                            <OpenInV0
                                component={block}
                                Button={
                                    <Button
                                        size="sm"
                                        className="cursor-pointer"
                                    >
                                        Open in <Icons.v0 />
                                    </Button>
                                }
                            />

                            <CodeBlock
                                component={block}
                                Button={
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="cursor-pointer"
                                    >
                                        <TerminalIcon /> Show Code
                                    </Button>
                                }
                            />
                        </div>
                    </div>

                    <ImageContentWrapper>
                        <ComponentLoaderServer component={block} />
                    </ImageContentWrapper>

                    {index !== category.blocks.length - 1 && (
                        <GridGap className="h-20 border-x-0" />
                    )}
                </div>
            ))}
        </section>
    )
}
