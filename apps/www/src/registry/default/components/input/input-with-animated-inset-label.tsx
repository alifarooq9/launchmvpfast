'use client'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
    input: z.string().min(1, {
        message: 'Input is required',
    }),
})

export default function InputWithAnimatedInsetLabel() {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleContainerClick = () => {
        inputRef.current?.focus()
    }

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
                            <div
                                onClick={handleContainerClick}
                                className={cn(
                                    'selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input relative flex w-full min-w-0 flex-col justify-end rounded-md border bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 md:text-sm',
                                    'focus-within:border-ring focus-within:ring-ring/50 group focus-within:ring-[3px]',
                                    'has-aria-invalid:ring-destructive/20 has-dark:aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive h-14 w-full cursor-text'
                                )}
                            >
                                <FormLabel className="text-muted-foreground absolute top-1/2 -translate-y-1/2 cursor-text px-3 transition-all group-focus-within:top-2 group-focus-within:-translate-y-0 group-focus-within:text-xs group-focus-within:font-medium *:placeholder-shown:top-1/2 has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-2 has-[+input:not(:placeholder-shown)]:-translate-y-0 has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium">
                                    Inset Label with Animation
                                </FormLabel>
                                <FormControl>
                                    <input
                                        type="text"
                                        className="placeholder:text-muted-foreground h-9 bg-transparent px-3 py-1 focus-visible:outline-none"
                                        placeholder=""
                                        {...field}
                                        ref={inputRef}
                                    />
                                </FormControl>
                            </div>
                            <FormDescription>
                                Built with{' '}
                                <a
                                    target="_blank"
                                    href="https://react-hook-form.com/"
                                    className="underline underline-offset-2"
                                >
                                    react-hook-form
                                </a>
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}
