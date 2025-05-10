import { Icons } from '@/components/icons'
import Link from 'next/link'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { Component } from '@/config/registry/components'
import { urls } from '@/config/urls'

type OpenInV0Props = {
    component: Component
}

export function OpenInV0({ component }: OpenInV0Props) {
    const componentSource = `${urls.public}/r/${component.id}.json`

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link
                        className="focus-ring w-fit cursor-pointer"
                        href={`https://v0.dev/chat/api/open?url=${encodeURIComponent(componentSource)}`}
                        aria-label="Open in v0"
                        target="_blank"
                    >
                        <Icons.v0 className="text-muted-foreground h-4 w-4" />
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Open in v0</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
