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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

const suffixKeys = {
    com: 'com',
    org: 'org',
    net: 'net',
    co: 'co',
    io: 'io',
    dev: 'dev',
    edu: 'edu',
    xyz: 'xyz',
    tech: 'tech',
} as const

const suffix = [
    { value: suffixKeys.com, label: '.com' },
    { value: suffixKeys.org, label: '.org' },
    { value: suffixKeys.net, label: '.net' },
    { value: suffixKeys.co, label: '.co' },
    { value: suffixKeys.io, label: '.io' },
    { value: suffixKeys.dev, label: '.dev' },
    { value: suffixKeys.edu, label: '.edu' },
    { value: suffixKeys.xyz, label: '.xyz' },
    { value: suffixKeys.tech, label: '.tech' },
] as const

const fromSchema = z.object({
    suffix: z.enum(Object.keys(suffixKeys) as [keyof typeof suffixKeys]),
    webName: z.string().min(1, {
        message: 'Website name is required',
    }),
})

export default function InputWithLeftSelect() {
    const form = useForm<z.infer<typeof fromSchema>>({
        resolver: zodResolver(fromSchema),
        defaultValues: {
            suffix: suffixKeys.com,
            webName: '',
        },
    })

    function onSubmit(data: z.infer<typeof fromSchema>) {
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
                    name="webName"
                    render={({ field, fieldState }) => (
                        <FormItem id="name">
                            <FormLabel>Input with right select</FormLabel>
                            <FormControl>
                                <div className="flex items-center">
                                    <Input
                                        placeholder="launchmvpfast"
                                        className="rounded-r-none"
                                        aria-invalid={!!fieldState.invalid}
                                        {...field}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="suffix"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    value={field.value}
                                                    defaultValue={field.value}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger className="rounded-l-none border-l-0">
                                                            <SelectValue placeholder="Select a verified email to display" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent align="end">
                                                        {suffix.map((item) => (
                                                            <SelectItem
                                                                key={item.value}
                                                                value={
                                                                    item.value
                                                                }
                                                            >
                                                                {item.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </FormControl>

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
