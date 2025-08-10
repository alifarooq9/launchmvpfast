'use client'

import { Button } from '@/registry/default/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/registry/default/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import {
    EllipsisIcon,
    LockIcon,
    ScanSearchIcon,
    SquarePenIcon,
    Trash2Icon,
} from 'lucide-react'

type ActionDropdownProps = {
    align?: 'start' | 'end' | 'center'
    side?: 'top' | 'right' | 'bottom' | 'left'
}

type Item = {
    id: string
    subItems: {
        label: string
        shortcut: string
        icon: React.ReactNode
        action: () => void
        variant?: 'destructive' | 'default'
    }[]
}

const items: Item[] = [
    {
        id: 'general',
        subItems: [
            {
                label: 'Edit',
                shortcut: 'E',
                icon: <SquarePenIcon />,
                action: () => {
                    console.log('Edit clicked')
                },
            },
            {
                label: 'View',
                shortcut: 'V',
                icon: <ScanSearchIcon />,
                action: () => {
                    console.log('View clicked')
                },
            },
            {
                label: 'Block',
                shortcut: 'B',
                icon: <LockIcon />,
                action: () => {
                    console.log('Block clicked')
                },
            },
        ],
    },
    {
        id: 'destructive',
        subItems: [
            {
                label: 'Delete',
                shortcut: 'D',
                icon: <Trash2Icon />,
                action: () => {
                    console.log('Delete clicked')
                },
                variant: 'destructive',
            },
        ],
    },
]

export default function ActionDropdown({
    align = 'end',
    side = 'bottom',
}: ActionDropdownProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="cursor-pointer">
                    <span>Actions</span>
                    <EllipsisIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align={align}
                side={side}
                className="w-[200px]"
            >
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {items.map((item, index) => (
                    <DropdownMenuGroup key={item.id}>
                        {item.subItems.map((subItem) => (
                            <DropdownMenuItem
                                key={subItem.label}
                                onClick={subItem.action}
                                variant={subItem.variant}
                            >
                                {subItem.icon}
                                <span className="flex-1">{subItem.label}</span>
                                <DropdownMenuShortcut
                                    className={cn(
                                        subItem.variant === 'destructive' &&
                                            'text-destructive'
                                    )}
                                >
                                    {subItem.shortcut}
                                </DropdownMenuShortcut>
                            </DropdownMenuItem>
                        ))}
                        {index < items.length - 1 && <DropdownMenuSeparator />}
                    </DropdownMenuGroup>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
