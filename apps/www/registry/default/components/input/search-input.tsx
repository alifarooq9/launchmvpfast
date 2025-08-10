'use client'

import { Button } from '@/registry/default/ui/button'
import { Input } from '@/registry/default/ui/input'
import { Label } from '@/registry/default/ui/label'
import { SearchIcon, XCircleIcon } from 'lucide-react'
import React, { useId } from 'react'

export default function SearchInput() {
    const id = useId()

    const [value, setValue] = React.useState<string>('')

    return (
        <div className="flex w-full max-w-4/5 flex-col gap-2">
            <Label htmlFor={id}>Search input</Label>

            <div className="relative w-full">
                <SearchIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />

                <Input
                    id={id}
                    type="text"
                    className="ps-8 pe-8"
                    placeholder="Search..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-1/2 right-1 h-6 w-6 -translate-y-1/2 cursor-pointer"
                    onClick={() => setValue('')}
                    disabled={!value}
                >
                    <XCircleIcon className="text-muted-foreground" />
                </Button>
            </div>
        </div>
    )
}
