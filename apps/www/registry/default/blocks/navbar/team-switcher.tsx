'use client'

import { Button } from '@/registry/default/ui/button'
import { cn } from '@/lib/utils'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/registry/default/ui/popover'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/registry/default/ui/command'
import { ChevronsUpDownIcon, CheckIcon, PlusCircleIcon } from 'lucide-react'
import React from 'react'

const defaultTeams = [
    { id: 'alifarooq', name: "Ali Farooq's Team" },
    { id: 'shadcn', name: "Shad CN's Team" },
    { id: 'leerob', name: "Lee Robinson's Team" },
]

export function TeamSwitcher() {
    const [team, setTeam] = React.useState(defaultTeams[0])
    const [open, setOpen] = React.useState(false)

    const onCreateNewTeam = () => {
        // Logic to create a new team can be added here
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(
                        "dark:hover:bg-accent max-w-[140px] cursor-pointer justify-start px-2 has-[>svg]:px-2 sm:max-w-[180px] [&_svg:not([class*='size-'])]:size-3"
                    )}
                >
                    <div className="size-5 shrink-0 rounded-full bg-white" />
                    <p className="truncate">{team.name}</p>
                    <ChevronsUpDownIcon />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" align="start">
                <Command>
                    <CommandInput placeholder="Search team..." />
                    <CommandList>
                        <CommandEmpty>No team found.</CommandEmpty>
                        <CommandGroup className="max-h-60 overflow-y-auto">
                            {defaultTeams.map((teamOption) => (
                                <CommandItem
                                    key={teamOption.id}
                                    value={teamOption.id}
                                    onSelect={(currentValue) => {
                                        setTeam(
                                            defaultTeams.find(
                                                (t) => t.id === currentValue
                                            ) || defaultTeams[0]
                                        )
                                        setOpen(false)
                                    }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="size-5 rounded-full bg-white" />
                                    {teamOption.name}
                                    <CheckIcon
                                        className={cn(
                                            'ml-auto h-4 w-4',
                                            team.id === teamOption.id
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup>
                            <CommandItem onSelect={onCreateNewTeam}>
                                <PlusCircleIcon />
                                Create new team
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
