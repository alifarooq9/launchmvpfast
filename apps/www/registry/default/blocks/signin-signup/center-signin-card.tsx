'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
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
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from 'lucide-react'
import React from 'react'

const formSchema = z.object({
    email: z
        .string()
        .email({
            message: 'Invalid email address',
        })
        .min(1, {
            message: 'Email is required',
        }),
    password: z
        .string()
        .min(8, {
            message: 'Password must be at least 8 characters long',
        })
        .refine((val) => /[A-Z]/.test(val), {
            message: 'Password must contain at least one uppercase letter',
        })
        .refine((val) => /[a-z]/.test(val), {
            message: 'Password must contain at least one lowercase letter',
        })
        .refine((val) => /\d/.test(val), {
            message: 'Password must contain at least one number',
        }),
})

export default function Signin() {
    const [show, setShow] = React.useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        console.log('Form submitted:', data)
        // Handle form submission logic here
    }

    return (
        <section className="flex w-full flex-col items-center justify-center p-4 py-28 xl:px-6">
            <Card className="w-full max-w-md">
                <CardHeader className="flex flex-col items-center">
                    <svg
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-foreground mb-4 h-12 w-12 opacity-90"
                    >
                        <path
                            d="M11.7699 21.8258L7.42207 20.485C5 19.9996 5 20 6.6277 17.875L9.77497 13.9892C10.4003 13.2172 11.3407 12.7687 12.3342 12.7687L19.2668 13.0726M11.7699 21.8258C11.7699 21.8258 12.8773 24.5436 14.1667 25.833C15.4561 27.1223 18.1738 28.2296 18.1738 28.2296M18.1738 28.2296L19.0938 32.0266C19.5 34.5 19.5 34.5 21.6117 33.0063L25.7725 30.2146C26.684 29.603 27.2308 28.5775 27.2308 27.4798L26.927 20.733M26.927 20.733C31.5822 16.4657 34.5802 12.4926 34.9962 6.59335C35.1164 4.8888 35.1377 4.88137 33.4062 5.00345C27.507 5.41937 23.534 8.4174 19.2668 13.0726M11.7699 31.6146C11.7699 33.4841 10.2544 34.9996 8.38495 34.9996H5V31.6146C5 29.7453 6.5155 28.2298 8.38495 28.2298C10.2544 28.2298 11.7699 29.7453 11.7699 31.6146Z"
                            fill="currentColor"
                        />
                        <path
                            d="M12.5 22.9996L11 20.4996C11 20.0996 16 12.9996 20 12.9996C22.1667 14.8329 26.1172 16.4682 27 19.9996C27.5 21.9996 21.5 26.1663 18.5 28.4996L12.5 22.9996Z"
                            fill="currentColor"
                        />
                    </svg>
                    <h1 className="w-full text-center text-xl font-semibold text-balance">
                        Welcome to Launch MVP Fast
                    </h1>
                    <p className="text-muted-foreground w-full text-center text-sm text-balance">
                        Enter your email below to login to your account
                    </p>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4"
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field, fieldState }) => (
                                    <FormItem>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <div className="relative w-full">
                                                <MailIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
                                                <Input
                                                    placeholder="ali@example.com"
                                                    className="ps-8"
                                                    aria-invalid={
                                                        !!fieldState.invalid
                                                    }
                                                    {...field}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormDescription>
                                            Enter your email address to login
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field, fieldState }) => (
                                    <FormItem>
                                        <div className="flex items-center justify-between">
                                            <FormLabel>Password</FormLabel>
                                            <a
                                                href="#"
                                                className="text-sm font-medium hover:underline hover:underline-offset-4"
                                            >
                                                Forgot password?
                                            </a>
                                        </div>
                                        <FormControl>
                                            <div className="relative w-full">
                                                <LockIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
                                                <Input
                                                    placeholder="Password"
                                                    type={
                                                        show
                                                            ? 'text'
                                                            : 'password'
                                                    }
                                                    className="ps-8 pe-9"
                                                    aria-invalid={
                                                        !!fieldState.invalid
                                                    }
                                                    {...field}
                                                />

                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    type="button"
                                                    className="absolute top-1/2 right-0.5 h-8 w-8 -translate-y-1/2 cursor-pointer"
                                                    onClick={() =>
                                                        setShow(!show)
                                                    }
                                                >
                                                    {show ? (
                                                        <EyeOffIcon />
                                                    ) : (
                                                        <EyeIcon />
                                                    )}
                                                </Button>
                                            </div>
                                        </FormControl>
                                        <FormDescription>
                                            Enter your password to login
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="w-full cursor-pointer"
                            >
                                Continue with Email
                            </Button>
                        </form>
                    </Form>

                    <div className="after:border-border relative py-6 text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                        <span className="bg-card text-muted-foreground relative z-10 px-2">
                            Or
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        <Button
                            type="button"
                            variant="secondary"
                            className="cursor-pointer"
                        >
                            <svg
                                viewBox="0 0 256 262"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMidYMid"
                            >
                                <path
                                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                    fill="#34A853"
                                />
                                <path
                                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                    fill="#EB4335"
                                />
                            </svg>
                            Continue with Google
                        </Button>
                        <Button
                            type="button"
                            variant="secondary"
                            className="cursor-pointer"
                        >
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                                    transform="scale(64)"
                                    fill="currentColor"
                                />
                            </svg>
                            Continue with Github
                        </Button>
                    </div>
                </CardContent>
                <CardFooter>
                    <p className="text-muted-foreground w-full text-center text-sm">
                        Want to create an account?{' '}
                        <a href="#" className="underline underline-offset-2">
                            Register
                        </a>
                    </p>
                </CardFooter>
            </Card>

            <p className="text-muted-foreground mt-4 max-w-md text-center text-sm text-balance">
                By clicking continue, you agree to our{' '}
                <a href="#" className="underline underline-offset-2">
                    Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="underline underline-offset-2">
                    Privacy Policy
                </a>
                .
            </p>
        </section>
    )
}
