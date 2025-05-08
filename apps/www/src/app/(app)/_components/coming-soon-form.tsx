'use client'

import { Button } from '@/components/ui/button'
import { api } from '@/trpc/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Icons } from '@/components/icons'

type ComingSoonFormProps = {
    className?: string
}

const formSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    name: z
        .string()
        .min(1, {
            message: 'Name is required',
        })
        .max(255, {
            message: 'Name must be at most 255 characters',
        }),
})

export function ComingSoonForm({ className }: ComingSoonFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            name: '',
            email: '',
        },
        resolver: zodResolver(formSchema),
    })

    const createEarlyAccess = api.earlyAccess.create.useMutation({
        onSuccess: () => {
            toast.success("You're in the early access list!")
            form.reset()
        },
        onError: () => {
            toast.error('Something went wrong, please try again')
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        createEarlyAccess.mutate({
            email: data.email,
            name: data.name as string,
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Name"
                                    {...field}
                                    value={field.value ?? ''}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    disabled={createEarlyAccess.isPending}
                    size="lg"
                >
                    {createEarlyAccess.isPending ? <Icons.loader /> : null}
                    Submit
                </Button>
            </form>
        </Form>
    )
}
