'use client'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useMutation } from '@tanstack/react-query'
import {
    EllipsisIcon,
    Loader2Icon,
    LockIcon,
    ScanSearchIcon,
    SquarePenIcon,
    Trash2Icon,
} from 'lucide-react'
import React, { Dispatch, JSX, SetStateAction } from 'react'

type ActionDropdownProps = {
    align?: 'start' | 'end' | 'center'
    side?: 'top' | 'right' | 'bottom' | 'left'
}

type ComponentProps = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

type Item = {
    id: string
    subItems: {
        id: string
        icon: React.ReactNode
        variant?: 'destructive' | 'default'
        Component: ({ open, setOpen }: ComponentProps) => JSX.Element
    }[]
}

const items: Item[] = [
    {
        id: 'general',
        subItems: [
            {
                id: 'edit',
                icon: <SquarePenIcon />,
                Component: EditItem,
            },
            {
                id: 'view',
                icon: <ScanSearchIcon />,
                Component: ViewItem,
            },
            {
                id: 'block',
                icon: <LockIcon />,
                Component: BlockItem,
            },
        ],
    },
    {
        id: 'destructive',
        subItems: [
            {
                id: 'delete',
                icon: <Trash2Icon />,
                Component: DeleteItem,
                variant: 'destructive',
            },
        ],
    },
]

export default function ActionWithLoadingDropdown({
    align = 'end',
    side = 'bottom',
}: ActionDropdownProps) {
    const [open, setOpen] = React.useState(false)

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="cursor-pointer">
                    <span>Actions with loading</span>
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
                        {item.subItems.map(({ Component, id }) => (
                            <Component open={open} setOpen={setOpen} key={id} />
                        ))}
                        {index < items.length - 1 && <DropdownMenuSeparator />}
                    </DropdownMenuGroup>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function EditItem({ setOpen }: ComponentProps) {
    const { isPending, mutate } = useMutation({
        mutationFn: async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('Edit')
                }, 1000)
            })
        },
        onSuccess: () => {
            console.log(`Mutation successful: Edit`)
        },
        onError: () => {
            console.log(`Mutation failed: Edit`)
        },
        onSettled: () => {
            setOpen(false)
        },
    })

    return (
        <DropdownMenuItem
            onSelect={(e) => {
                e.preventDefault()
                console.log('Edit clicked')
                mutate()
            }}
            disabled={isPending}
        >
            {isPending ? (
                <Loader2Icon className="animate-spin" />
            ) : (
                <SquarePenIcon />
            )}
            <span className="flex-1">Edit</span>
            <DropdownMenuShortcut>E</DropdownMenuShortcut>
        </DropdownMenuItem>
    )
}

function ViewItem({ setOpen }: ComponentProps) {
    const { isPending, mutate } = useMutation({
        mutationFn: async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('View')
                }, 1000)
            })
        },
        onSuccess: () => {
            console.log(`Mutation successful: View`)
        },
        onError: () => {
            console.log(`Mutation failed: View`)
        },
        onSettled: () => {
            setOpen(false)
        },
    })

    return (
        <DropdownMenuItem
            onSelect={(e) => {
                e.preventDefault()
                console.log('View clicked')
                mutate()
            }}
            disabled={isPending}
        >
            {isPending ? (
                <Loader2Icon className="animate-spin" />
            ) : (
                <ScanSearchIcon />
            )}
            <span className="flex-1">View</span>
            <DropdownMenuShortcut>V</DropdownMenuShortcut>
        </DropdownMenuItem>
    )
}

function BlockItem({ setOpen }: ComponentProps) {
    const { isPending, mutate } = useMutation({
        mutationFn: async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('Block')
                }, 1000)
            })
        },
        onSuccess: () => {
            console.log(`Mutation successful: Block`)
        },
        onError: () => {
            console.log(`Mutation failed: Block`)
        },
        onSettled: () => {
            setOpen(false)
        },
    })

    return (
        <DropdownMenuItem
            onSelect={(e) => {
                e.preventDefault()
                console.log('Block clicked')
                mutate()
            }}
            disabled={isPending}
        >
            {isPending ? (
                <Loader2Icon className="animate-spin" />
            ) : (
                <LockIcon />
            )}
            <span className="flex-1">Block</span>
            <DropdownMenuShortcut>B</DropdownMenuShortcut>
        </DropdownMenuItem>
    )
}

function DeleteItem({ setOpen }: ComponentProps) {
    const { isPending, mutate } = useMutation({
        mutationFn: async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('Delete')
                }, 1000)
            })
        },
        onSuccess: () => {
            console.log(`Mutation successful: Delete`)
        },
        onError: () => {
            console.log(`Mutation failed: Delete`)
        },
        onSettled: () => {
            setOpen(false)
        },
    })

    return (
        <DropdownMenuItem
            onSelect={(e) => {
                e.preventDefault()
                console.log('Delete clicked')
                mutate()
            }}
            variant="destructive"
            disabled={isPending}
        >
            {isPending ? (
                <Loader2Icon className="animate-spin" />
            ) : (
                <Trash2Icon />
            )}
            <span className="flex-1">Delete</span>
            <DropdownMenuShortcut className="text-destructive">
                D
            </DropdownMenuShortcut>
        </DropdownMenuItem>
    )
}
