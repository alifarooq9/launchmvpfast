'use client'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { ChevronDownIcon, PlusIcon, XIcon } from 'lucide-react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form'
import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Badge } from '@/components/ui/badge'

const defaultTags = [
    {
        id: 'frontend',
        label: 'Frontend',
    },
    {
        id: 'backend',
        label: 'Backend',
    },
    {
        id: 'design',
        label: 'Design',
    },
    {
        id: 'devops',
        label: 'DevOps',
    },
    {
        id: 'qa',
        label: 'QA',
    },
    {
        id: 'operations',
        label: 'Operations',
    },
]

type MultipleTagsDropdownProps = {
    side: 'left' | 'right' | 'top' | 'bottom'
    align: 'start' | 'center' | 'end'
}

const formSchema = z.object({
    tag: z.string().min(1, {
        message: 'Tag is required',
    }),
})

export default function MultipleTagsDropdown({
    side = 'bottom',
    align = 'center',
}: MultipleTagsDropdownProps) {
    const [tags, setTags] = React.useState([...defaultTags])
    const [selectedTags, setSelectedTags] = React.useState<string[]>([])
    const [isInputFocused, setIsInputFocused] = React.useState(false)

    const handleOnSelect = (tag: { id: string; label: string }) => {
        if (selectedTags.includes(tag.id)) {
            return setSelectedTags(selectedTags.filter((id) => id !== tag.id))
        }

        setSelectedTags([...selectedTags, tag.id])
    }

    // Handle keyboard events when input is focused
    const handleInputKeyDown = (e: React.KeyboardEvent) => {
        if (isInputFocused) {
            // Stop event propagation to prevent dropdown keyboard navigation
            e.stopPropagation()
        }
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            tag: '',
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        if (!data.tag) return
        if (tags.find((tag) => tag.id === data.tag.toLowerCase())) {
            return form.setValue('tag', '')
        }

        setTags([
            ...tags,
            {
                id: data.tag.toLowerCase(),
                label: data.tag,
            },
        ])
        form.reset()
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-auto py-2">
                    {selectedTags.length > 0 ? (
                        <div className="flex max-w-[150px] flex-wrap gap-1">
                            {selectedTags.map((t) => (
                                <Badge key={t} variant="outline">
                                    {tags.find((tag) => tag.id === t)?.label}
                                </Badge>
                            ))}
                        </div>
                    ) : (
                        <span>Assign Multiple Tags</span>
                    )}
                    <ChevronDownIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align={align}
                side={side}
                className="w-[200px]"
                onKeyDown={(e) => {
                    // Prevent dropdown keyboard navigation when input is focused
                    if (isInputFocused) {
                        e.stopPropagation()
                    }
                }}
            >
                <DropdownMenuLabel>Assign team</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="flex max-h-[200px] flex-wrap gap-1 overflow-y-auto">
                    {tags.map((tag) => (
                        <DropdownMenuItem
                            key={tag.id}
                            onSelect={() => handleOnSelect(tag)}
                            className={cn(
                                'bg-accent focus:bg-accent/50 cursor-pointer py-1'
                            )}
                        >
                            {tag.label}

                            {selectedTags.includes(tag.id) && <XIcon />}
                        </DropdownMenuItem>
                    ))}
                </div>
                <DropdownMenuSeparator />

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex justify-end gap-1 p-1"
                    >
                        <FormField
                            control={form.control}
                            name="tag"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="New Team"
                                            autoFocus
                                            className="h-8"
                                            onFocus={() =>
                                                setIsInputFocused(true)
                                            }
                                            onKeyDown={handleInputKeyDown}
                                            {...field}
                                            onBlur={() => {
                                                setIsInputFocused(false)
                                                field.onBlur()
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                        >
                            <PlusIcon />
                        </Button>
                    </form>
                </Form>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
