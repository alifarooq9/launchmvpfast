'use client'

import { CodeBlock } from '@/app/(app)/_components/code-block'
import { ComponentLoaderClient } from '@/app/(app)/_components/component-loader-client'
import { GridGap } from '@/app/(app)/_components/grid-gap'
import { ImageContentWrapper } from '@/app/(app)/_components/image-content-wrapper'
import { OpenInV0 } from '@/app/(app)/_components/open-in-v0'
import { Icons } from '@/components/icons'
import { Button, buttonVariants } from '@/components/ui/button'
import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from '@/components/ui/tooltip'
import { Category } from '@/config/registry/blocks'
import { urls } from '@/config/urls'
import { cn } from '@/lib/utils'
import { MaximizeIcon, TerminalIcon, RefreshCwIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

type BlocksCategoryTableProps = {
    category: Category
}

// Individual block component to isolate refresh state
function BlockItem({
    block,
    category,
    isLast,
}: {
    block: any
    category: Category
    isLast: boolean
}) {
    const [refreshKey, setRefreshKey] = useState(0)

    const handleRefresh = () => {
        setRefreshKey((prev) => prev + 1)
    }

    return (
        <div key={block.id}>
            <div className="container flex flex-col items-start justify-between gap-4 py-4 sm:flex-row sm:items-center">
                <h2 className="font-heading sm:text-lg">{block.name}</h2>

                <div className="flex items-center gap-2">
                    <TooltipProvider delayDuration={0}>
                        <OpenInV0
                            component={block}
                            Button={
                                <Button size="sm" className="cursor-pointer">
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

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="iconSm"
                                    className="cursor-pointer"
                                    onClick={handleRefresh}
                                    aria-label="Refresh animation"
                                >
                                    <RefreshCwIcon />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Refresh animation</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={`${urls.app.blocksRegistry}/${category.id}/${block.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open in full screen"
                                    className={cn(
                                        buttonVariants({
                                            variant: 'outline',
                                            size: 'iconSm',
                                            className: 'cursor-pointer',
                                        })
                                    )}
                                >
                                    <MaximizeIcon />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>Open in full screen</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>

            <ImageContentWrapper>
                <ComponentLoaderClient
                    key={`${block.id}-${refreshKey}`}
                    component={block}
                />
            </ImageContentWrapper>

            {!isLast && <GridGap className="h-20 border-x-0" />}
        </div>
    )
}

export function BlocksCategoryTable({ category }: BlocksCategoryTableProps) {
    return (
        <section className="container-wrapper flex flex-col">
            {category.blocks.map((block, index) => (
                <BlockItem
                    key={block.id}
                    block={block}
                    category={category}
                    isLast={index === category.blocks.length - 1}
                />
            ))}
        </section>
    )
}
