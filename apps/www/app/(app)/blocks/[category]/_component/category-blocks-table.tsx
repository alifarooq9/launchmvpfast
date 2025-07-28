'use client'

import { CodeBlock } from '@/app/(app)/_components/code-block'
import { ComponentLoaderClient } from '@/app/(app)/_components/component-loader-client'
import { OpenInV0 } from '@/app/(app)/_components/open-in-v0'
import { Icons } from '@/components/icons'
import { Button, buttonVariants } from '@/components/ui/button'
import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from '@/components/ui/tooltip'
import { Block, Category } from '@/config/registry/blocks'
import { urls } from '@/config/urls'
import { cn } from '@/lib/utils'
import { MaximizeIcon, TerminalIcon, RefreshCwIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { memo } from 'react'

type BlocksCategoryTableProps = {
    category: Category
}

// Individual block component to isolate refresh state
function BlockItem({ block, category }: { block: Block; category: Category }) {
    const [refreshKey, setRefreshKey] = useState(0)

    const handleRefresh = () => {
        setRefreshKey((prev) => prev + 1)
    }

    return (
        <div key={block.id} className="rounded-xl border">
            <div className="flex flex-col items-start justify-between gap-4 border-b p-4 sm:flex-row sm:items-center">
                <h2 className="font-semibold tracking-tight sm:text-lg">
                    {block.name}
                </h2>

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
                                    variant="outline"
                                    size="sm"
                                    className="cursor-pointer"
                                >
                                    <TerminalIcon /> Code
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

            <div className={block.className}>
                <ComponentLoaderClient
                    key={`${block.id}-${refreshKey}`}
                    component={block}
                />
            </div>
        </div>
    )
}

const MemoizedBlockItem = memo(BlockItem)

export function BlocksCategoryTable({ category }: BlocksCategoryTableProps) {
    return (
        <section className="container flex flex-col gap-6">
            {category.blocks.map((block) => (
                <MemoizedBlockItem
                    key={block.id}
                    block={block}
                    category={category}
                />
            ))}
        </section>
    )
}
