'use client'

import { Button } from '@/registry/default/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/registry/default/ui/dropdown-menu'
import { DropdownMenuItem as RadixDropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { Label } from '@/registry/default/ui/label'
import {
    ArrowDownAZIcon,
    ArrowUpAZIcon,
    ChevronDownIcon,
    XIcon,
} from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/registry/default/ui/select'
import { Switch } from '@/registry/default/ui/switch'
import React from 'react'
import { useTheme } from 'next-themes'

type Item = {
    label: string
    ItemComponent: React.ReactNode
}

const items: Item[] = [
    {
        label: 'Filter',
        ItemComponent: <FilterItem />,
    },
    {
        label: 'Title',
        ItemComponent: <TitleComponent />,
    },
    { label: 'Custom Config', ItemComponent: <CustomConfigComponent /> },
    { label: 'Dark Mode', ItemComponent: <DarkModeComponent /> },
]

export default function RichDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="cursor-pointer">
                    Rich Dropdown <ChevronDownIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[100svw] max-w-[250px]">
                {items.map((item) => (
                    <div
                        key={item.label}
                        className="focus-within:bg-accent focus-within:text-accent-foreground grid min-h-9 grid-cols-2 place-content-center gap-2 rounded-md px-2 py-1.5 transition-all"
                    >
                        <Label className="pl-2">{item.label}</Label>

                        {item.ItemComponent}
                    </div>
                ))}

                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex justify-center pl-0">
                    Clear all
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function FilterItem() {
    return (
        <Select defaultValue="asc">
            <div className="flex justify-center">
                <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
                    <SelectTrigger className="w-fit" size="sm">
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                </DropdownMenuItem>
            </div>

            <SelectContent align="end">
                <SelectItem value="asc">
                    <ArrowDownAZIcon /> Asc
                </SelectItem>
                <SelectItem value="desc">
                    <ArrowUpAZIcon /> Desc
                </SelectItem>
                <SelectItem value="none">
                    <XIcon /> None
                </SelectItem>
            </SelectContent>
        </Select>
    )
}

function TitleComponent() {
    return (
        <div className="flex items-center justify-center">
            <RadixDropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
                <Switch />
            </RadixDropdownMenuItem>
        </div>
    )
}

function CustomConfigComponent() {
    return (
        <div className="flex items-center justify-center">
            <RadixDropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
                <Switch />
            </RadixDropdownMenuItem>
        </div>
    )
}

function DarkModeComponent() {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <div className="flex items-center justify-center">
            <RadixDropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
                <Switch
                    checked={resolvedTheme === 'dark'}
                    onCheckedChange={(checked) =>
                        setTheme(checked ? 'dark' : 'light')
                    }
                />
            </RadixDropdownMenuItem>
        </div>
    )
}
