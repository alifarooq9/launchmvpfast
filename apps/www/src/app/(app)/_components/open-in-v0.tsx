import { Icons } from '@/components/icons'
import Link from 'next/link'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'

export function OpenInV0() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href="#" className="focus-ring w-fit cursor-pointer">
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
