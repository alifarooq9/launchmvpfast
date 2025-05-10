'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
    ArrowUpIcon,
    CloudUploadIcon,
    GlobeIcon,
    LightbulbIcon,
    MicIcon,
    PaperclipIcon,
} from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { Toggle } from '@/components/ui/toggle'

export default function PromptInput() {
    const [message, setMessage] = React.useState<string>('')
    const [searchToggle, setSearchToggle] = React.useState<boolean>(false)
    const [reasonToggle, setReasonToggle] = React.useState<boolean>(false)

    const handleSubmit = () => {
        if (message.trim() === '') return
        // Handle message submission logic here
        console.log('Message submitted:', message)
        console.log(
            'Search toggle state:',
            searchToggle ? 'Enabled' : 'Disabled'
        )
        console.log(
            'Reason toggle state:',
            reasonToggle ? 'Enabled' : 'Disabled'
        )
        setMessage('')
    }

    return (
        <div
            className={cn(
                'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input rounded-md border bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm',
                'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]',
                'has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive group p-4',
                'flex w-full flex-col gap-6'
            )}
        >
            <TextareaAutosize
                className="min-h-9 w-full resize-none border-none bg-transparent text-base focus-visible:outline-none"
                placeholder="Ask anything..."
                minRows={1}
                rows={1}
                maxRows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <div className="flex items-center justify-between">
                <TooltipProvider delayDuration={0}>
                    <div className="flex items-center gap-2">
                        <Attachments />

                        <Tooltip>
                            <Toggle
                                value="search"
                                variant="outline"
                                asChild
                                pressed={searchToggle}
                                onPressedChange={setSearchToggle}
                                className="cursor-pointer"
                            >
                                <TooltipTrigger>
                                    <GlobeIcon />
                                    <span className="hidden sm:block">
                                        Search
                                    </span>
                                </TooltipTrigger>
                            </Toggle>
                            <TooltipContent>
                                <p>Search the web</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <Toggle
                                value="reason"
                                variant="outline"
                                asChild
                                pressed={reasonToggle}
                                onPressedChange={setReasonToggle}
                                className="cursor-pointer"
                            >
                                <TooltipTrigger>
                                    <LightbulbIcon />
                                    <span className="hidden sm:block">
                                        Reason
                                    </span>
                                </TooltipTrigger>
                            </Toggle>
                            <TooltipContent>
                                <p>Think before responding</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>

                    <div className="flex items-center gap-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    type="button"
                                    size="icon"
                                    className="cursor-pointer"
                                    variant="outline"
                                >
                                    <MicIcon />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Dictate</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    type="submit"
                                    size="icon"
                                    className="cursor-pointer"
                                    disabled={!message || message.length === 0}
                                    onClick={() => handleSubmit()}
                                >
                                    <ArrowUpIcon />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Send</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </TooltipProvider>
            </div>
        </div>
    )
}

function Attachments() {
    return (
        <DropdownMenu>
            <Tooltip>
                <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="cursor-pointer"
                        >
                            <PaperclipIcon />
                            <span className="sr-only">Attachments</span>
                        </Button>
                    </DropdownMenuTrigger>
                </TooltipTrigger>

                <TooltipContent>
                    <p>Add photos and files</p>
                </TooltipContent>
            </Tooltip>

            <DropdownMenuContent align="start" side="top">
                <DropdownMenuItem className="cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 87.3 78"
                    >
                        <path
                            fill="#0066da"
                            d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z"
                        />
                        <path
                            fill="#00ac47"
                            d="M43.65 25 29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44A9.06 9.06 0 0 0 0 53h27.5z"
                        />
                        <path
                            fill="#ea4335"
                            d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75L86.1 57.5c.8-1.4 1.2-2.95 1.2-4.5H59.798l5.852 11.5z"
                        />
                        <path
                            fill="#00832d"
                            d="M43.65 25 57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z"
                        />
                        <path
                            fill="#2684fc"
                            d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
                        />
                        <path
                            fill="#ffba00"
                            d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z"
                        />
                    </svg>
                    Connect to Google Drive
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                    <CloudUploadIcon /> Add photos and files
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
