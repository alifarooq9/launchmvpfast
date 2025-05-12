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
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from '@/components/ui/input-otp'

// Change the inputLength to the desired number of slots
const inputLength = [3, 3]
const sum = () => inputLength.reduce((a, b) => a + b, 0)

const FormSchema = z.object({
    pin: z.string().min(sum(), {
        message: `Your one-time password must be ${sum()} characters.`,
    }),
})

export default function OtpWithSeperator() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: '',
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log('Form submitted:', data)
        // Handle form submission logic here
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex max-w-4/5 justify-center space-y-6"
            >
                <FormField
                    control={form.control}
                    name="pin"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>OTP with seperator</FormLabel>
                            <FormControl>
                                <InputOTP maxLength={sum()} {...field}>
                                    <InputOTPGroup>
                                        {Array.from(
                                            { length: inputLength[0] },
                                            (_, index) => (
                                                <InputOTPSlot
                                                    key={index}
                                                    index={index}
                                                />
                                            )
                                        )}
                                    </InputOTPGroup>
                                    <InputOTPSeparator className="text-muted" />
                                    <InputOTPGroup>
                                        {Array.from(
                                            { length: inputLength[1] },
                                            (_, index) => (
                                                <InputOTPSlot
                                                    key={index}
                                                    index={
                                                        index + inputLength[0]
                                                    }
                                                />
                                            )
                                        )}
                                    </InputOTPGroup>
                                </InputOTP>
                            </FormControl>

                            <FormDescription>
                                Built with{' '}
                                <a
                                    target="_blank"
                                    href="https://input-otp.rodz.dev/"
                                    className="underline underline-offset-2"
                                >
                                    input-otp
                                </a>{' '}
                                and{' '}
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
