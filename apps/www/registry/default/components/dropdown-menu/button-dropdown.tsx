'use client'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDownIcon, GitForkIcon } from 'lucide-react'
import React from 'react'

const options = [
    { label: 'Fork Starterkits', value: 'fork-startkits' },
    { label: 'Fork Components', value: 'fork-components' },
    { label: 'Fork Blocks', value: 'fork-blocks' },
    { label: 'Fork All', value: 'fork-all' },
]

type ButtonDropdownProps = {
    side: 'left' | 'right' | 'top' | 'bottom'
    align: 'start' | 'center' | 'end'
}

export default function ButtonDropdown({
    side = 'bottom',
    align = 'end',
}: ButtonDropdownProps) {
    const [value, setValue] = React.useState('fork-all')
    const option = options.find((option) => option.value === value)

    return (
        <div className="flex items-center">
            <Button
                variant="outline"
                className="cursor-pointer rounded-r-none border-r-0"
            >
                <GitForkIcon />
                {option?.label}
            </Button>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="cursor-pointer rounded-l-none"
                    >
                        <ChevronDownIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="w-[220px]"
                    side={side}
                    align={align}
                >
                    {options.map((option) => (
                        <DropdownMenuCheckboxItem
                            key={option.value}
                            checked={value === option.value}
                            onCheckedChange={() => setValue(option.value)}
                        >
                            {option.label}
                        </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
