import { Button } from '@/components/ui/button'
import { CommandIcon, SearchIcon } from 'lucide-react'

export function Search() {
    return (
        <Button
            variant="secondary"
            className="text-muted-foreground rounded-md text-sm font-light"
        >
            <SearchIcon />
            Search components...
            <div className="flex items-center gap-1 text-xs">
                <CommandIcon className="size-3" />K
            </div>
        </Button>
    )
}
