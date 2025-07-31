'use client'

import { BlockViewer } from '@/app/(app)/blocks/[category]/_component/block-view'
import { Category } from '@/config/registry/blocks'
import React, { memo } from 'react'

type BlocksCategoryTableProps = {
    category: Category
}

const MemoizedBlockViewer = memo(BlockViewer)

export function BlocksCategoryTable({ category }: BlocksCategoryTableProps) {
    return (
        <section className="container flex flex-col gap-14">
            {category.blocks.map((block) => (
                <MemoizedBlockViewer
                    key={block.id}
                    block={block}
                    category={category}
                />
            ))}
        </section>
    )
}
