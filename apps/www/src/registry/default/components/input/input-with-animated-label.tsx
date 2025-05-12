'use client'

import { Input } from '@/components/ui/input'
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
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

const formSchema = z.object({
    input: z.string().min(1, {
        message: 'Input is required',
    }),
})

export default function InputWithAnimatedLabel() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: '',
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
                    name="input"
                    render={({ field }) => (
                        <FormItem>
                            <div className="group relative">
                                <FormLabel className="text-muted-foreground group-focus-within:text-foreground bg-background has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 left-2 origin-center -translate-y-1/2 cursor-text px-1 transition-all group-focus-within:top-0 group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium">
                                    Label with Animation
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        className="dark:bg-background"
                                        placeholder=""
                                        {...field}
                                    />
                                </FormControl>
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
