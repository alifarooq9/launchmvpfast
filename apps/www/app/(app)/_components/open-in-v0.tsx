import { Icons } from '@/components/icons'
import Link from 'next/link'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { Component } from '@/config/registry/components'
import { urls } from '@/config/urls'
import { JSX } from 'react'

type OpenInV0Props = {
    component: Component
    Button?: JSX.Element
}

export function OpenInV0({ component, Button }: OpenInV0Props) {
    const componentSource = `${urls.public}/r/${component.id}.json`

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Link
                    className="focus-ring w-fit cursor-pointer"
                    href={`https://v0.dev/chat/api/open?url=${encodeURIComponent(componentSource)}`}
                    aria-label="Open in v0"
                    target="_blank"
                >
                    {Button ?? (
                        <Icons.v0 className="text-muted-foreground h-4 w-4" />
                    )}
                </Link>
            </TooltipTrigger>
            <TooltipContent>
                <p>Open in v0</p>
            </TooltipContent>
        </Tooltip>
    )
}
