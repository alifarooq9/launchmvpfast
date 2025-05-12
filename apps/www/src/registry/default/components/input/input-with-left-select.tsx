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

const prefixKeys = {
    mr: 'mr',
    ms: 'ms',
    dr: 'dr',
    prof: 'prof',
    sir: 'sir',
    madam: 'madam',
} as const

const prefixs = [
    { value: prefixKeys.mr, label: 'Mr.' },
    { value: prefixKeys.ms, label: 'Ms.' },
    { value: prefixKeys.dr, label: 'Dr.' },
    { value: prefixKeys.prof, label: 'Prof.' },
    { value: prefixKeys.sir, label: 'Sir' },
    { value: prefixKeys.madam, label: 'Madam' },
] as const

const fromSchema = z.object({
    prefix: z.enum(Object.keys(prefixKeys) as [keyof typeof prefixKeys]),
    name: z.string().min(1, {
        message: 'Name is required',
    }),
})

export default function InputWithLeftSelect() {
    const form = useForm<z.infer<typeof fromSchema>>({
        resolver: zodResolver(fromSchema),
        defaultValues: {
            prefix: prefixKeys.dr,
            name: '',
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
                    name="name"
                    render={({ field }) => (
                        <FormItem id="name">
                            <FormLabel>Input with right button</FormLabel>
                            <FormControl>
                                <div className="flex items-center">
                                    <FormField
                                        control={form.control}
                                        name="prefix"
                                        render={({ field }) => (
                                            <FormItem id="prefix">
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    value={field.value}
                                                    defaultValue={field.value}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger className="rounded-r-none border-r-0">
                                                            <SelectValue placeholder="Select a verified email to display" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {prefixs.map((item) => (
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
                                    <Input
                                        placeholder="Shadcn"
                                        className="rounded-l-none"
                                        {...field}
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
