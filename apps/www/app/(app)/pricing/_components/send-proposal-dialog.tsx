'use client'

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { SendProposalForm } from '@/app/(app)/pricing/_components/send-proposal-form'
import { Button, buttonVariants } from '@/components/ui/button'
import { useMediaQuery } from '@/hooks/use-media-query'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'

export function SendProposalDialog() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery('(min-width: 768px)')

    if (isDesktop)
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button
                        className={buttonVariants({
                            size: 'lg',
                            className: 'w-full cursor-pointer',
                        })}
                    >
                        Send Proposal
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Send a proposal</DialogTitle>
                        <DialogDescription>
                            Fill out the form below to send us your project
                            idea. We try to respond within 24 hours.
                        </DialogDescription>
                    </DialogHeader>
                    <SendProposalForm />
                </DialogContent>
            </Dialog>
        )

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button
                    className={buttonVariants({
                        size: 'lg',
                        className: 'w-full cursor-pointer',
                    })}
                >
                    Send Proposal
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Send a proposal</DrawerTitle>
                    <DrawerDescription>
                        Fill out the form below to send us your project idea. We
                        try to respond within 24 hours.
                    </DrawerDescription>
                </DrawerHeader>
                <div className="overflow-y-auto p-4">
                    <SendProposalForm />
                </div>
            </DrawerContent>
        </Drawer>
    )
}
