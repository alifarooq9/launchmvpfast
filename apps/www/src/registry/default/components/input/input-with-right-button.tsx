'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CornerRightUpIcon } from 'lucide-react'

const formSchema = z.object({
    email: z.string().email({
        message: 'Invalid email address',
    }),
})

export default function InputWithRightButton() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log('Form submitted:', data)
        // Handle form submission logic here
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full max-w-4/5 space-y-6"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Input with right button</FormLabel>
                            <div className="flex items-center">
                                <FormControl>
                                    <Input
                                        placeholder="Email"
                                        className="rounded-r-none"
                                        {...field}
                                    />
                                </FormControl>
                                <Button
                                    type="submit"
                                    className="dark:bg-input/30 cursor-pointer rounded-l-none border-l-0 bg-transparent"
                                    variant="outline"
                                >
                                    <CornerRightUpIcon />
                                </Button>
                            </div>
                            <FormDescription>
                                Built with{' '}
                                <Link
                                    target="_blank"
                                    href="https://react-hook-form.com/"
                                    className="underline underline-offset-2"
                                >
                                    react-hook-form
                                </Link>
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}
