'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { api } from '@/trpc/react'
import { toast } from 'sonner'
import { Icons } from '@/components/icons'

const serviceInterests = [
    'Sprint ($1,999) · 2-3 Core Features',
    'Launchpad ($2,999) · 4-5 Core Features',
    'Enterprise (Custom) · Unlimited Features',
    "I'm not sure yet",
] as const

const formSchema = z.object({
    name: z.string().min(1, {
        message: 'Name is required',
    }),
    email: z.string().email({ message: 'Invalid email address' }),
    projectIdea: z
        .string()
        .min(1, {
            message: 'Project idea is required',
        })
        .max(255, {
            message: 'Project idea must be at most 255 characters',
        }),
    projectDescription: z.string().min(1, {
        message: 'Project description is required',
    }),
    serviceInterest: z.enum(serviceInterests),
})

export function SendProposalForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            name: '',
            email: '',
            projectIdea: '',
            projectDescription: '',
        },
        resolver: zodResolver(formSchema),
    })

    const sendProposal = api.proposal.create.useMutation({
        onSuccess: () => {
            form.reset()
            toast.success(
                'Proposal sent successfully! We will get back to you within 24 hours.'
            )
        },
        onError: (error) => {
            console.error(error)
            toast.error(
                'Something went wrong while sending your proposal. Please try again later.'
            )
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        sendProposal.mutate({
            name: data.name,
            email: data.email,
            serviceInterest: data.serviceInterest,
            projectIdea: data.projectIdea,
            projectDescription: data.projectDescription,
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="serviceInterest"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>Service Tier of Interest</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select the service you're interested in" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {serviceInterests.map((interest) => (
                                        <SelectItem
                                            key={interest}
                                            value={interest}
                                        >
                                            {interest}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="projectIdea"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Project Idea / Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="projectDescription"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Briefly Describe Your MVP</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="w-full"
                    disabled={sendProposal.isPending}
                >
                    {sendProposal.isPending ? <Icons.loader /> : null}
                    Submit
                </Button>
            </form>
        </Form>
    )
}
