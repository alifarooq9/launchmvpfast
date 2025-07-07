import { Button, buttonVariants } from '@/components/ui/button'
import { FlickeringGrid } from '@/components/ui/flickering-grid'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { CornerRightUpIcon } from 'lucide-react'
import Link from 'next/link'
import { motion as m, Variants } from 'motion/react'

const staggerDelay = 0.3
const initialDelay = 0.2 // initial delay before the first element animates

const variants = {
    hidden: () => ({
        opacity: 0,
        filter: 'blur(10px)',
        transform: 'translateY(10px) translateX(-20px) scale(0.95)',
    }),
    visible: (custom: number) => ({
        opacity: 1,
        transform: 'translateY(0) translateX(0) scale(1)',
        filter: 'blur(0)',
        transition: {
            delay: custom * staggerDelay + initialDelay,
            duration: 0.4,
            ease: 'easeInOut',
        },
    }),
}

export default function Hero() {
    return (
        <section className="grid min-h-svh w-full lg:grid-cols-2">
            <div className="flex items-center justify-center px-4 py-4">
                <div className="bg-muted/80 dark:bg-muted/50 flex h-full w-full flex-col items-center justify-center rounded-xl p-4">
                    <Header />
                    <div className="flex max-w-2xl flex-1 flex-col items-start justify-center gap-4">
                        <m.h1
                            initial="hidden"
                            animate="visible"
                            custom={0}
                            variants={variants as Variants}
                            className="text-center text-2xl font-bold text-balance sm:text-3xl md:text-4xl lg:text-left xl:text-5xl"
                        >
                            Collaborate smarter streamlined your workflow
                        </m.h1>
                        <m.p
                            initial="hidden"
                            animate="visible"
                            custom={1}
                            variants={variants as Variants}
                            className="text-muted-foreground text-center text-sm font-medium sm:text-base md:text-lg lg:text-left"
                        >
                            <span className="text-foreground">Collaborate</span>{' '}
                            smarter with our{' '}
                            <span className="text-foreground">
                                innovative platform
                            </span>{' '}
                            that streamlines your workflow and enhances team{' '}
                            <span className="text-foreground">
                                productivity
                            </span>
                            .
                        </m.p>

                        <SignupForm />

                        <SocialProof />
                    </div>
                </div>
            </div>
            <div className="relative hidden place-content-center overflow-hidden lg:block">
                <FlickeringGrid
                    className="absolute inset-0 z-0 size-full"
                    squareSize={4}
                    gridGap={6}
                    color="#444444"
                    maxOpacity={0.5}
                    flickerChance={0.4}
                />
            </div>
        </section>
    )
}

function Header() {
    return (
        <header className="flex h-12 w-full items-center justify-between">
            <Link
                href="#"
                className="focus-visible:border-ring focus-visible:ring-ring/50 flex text-lg font-bold outline-none focus-visible:ring-[3px]"
            >
                Acme
            </Link>
            <Link
                href="#"
                className={cn(
                    buttonVariants({ size: 'sm', variant: 'outline' })
                )}
            >
                Get Started
            </Link>
        </header>
    )
}

function SignupForm() {
    return (
        <m.div
            initial="hidden"
            animate="visible"
            custom={2}
            variants={variants as Variants}
            className="flex w-full flex-col gap-2 md:max-w-4/5"
        >
            <div className="flex items-center">
                <Input
                    placeholder="Enter your email"
                    className="h-10 rounded-r-none md:h-14"
                />
                <Button className="h-10 cursor-pointer rounded-l-none border-l-0 md:h-14">
                    <span className="hidden sm:block">Get Started</span>
                    <CornerRightUpIcon className="h-4 w-4" />
                </Button>
            </div>
        </m.div>
    )
}

function SocialProof() {
    return (
        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-6 lg:justify-start">
            {Object.entries(socialProofIcons).map(([key, Icon], index) => (
                <m.div
                    initial="hidden"
                    animate="visible"
                    custom={3 + index}
                    variants={variants as Variants}
                    key={key}
                >
                    <Icon className="text-muted-foreground hover:text-foreground h-6 w-6 transition-all sm:h-8 sm:w-8" />
                </m.div>
            ))}
        </div>
    )
}

type IconProps = React.HTMLAttributes<SVGElement>

const socialProofIcons = {
    logo: (props: IconProps) => (
        <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
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
    ),
    v0: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            {...props}
        >
            <path
                clipRule="evenodd"
                d="M9.50321 5.5H13.2532C13.3123 5.5 13.3704 5.5041 13.4273 5.51203L9.51242 9.42692C9.50424 9.36912 9.5 9.31006 9.5 9.25L9.5 5.5L8 5.5L8 9.25C8 10.7688 9.23122 12 10.75 12H14.5V10.5L10.75 10.5C10.6899 10.5 10.6309 10.4958 10.5731 10.4876L14.4904 6.57028C14.4988 6.62897 14.5032 6.68897 14.5032 6.75V10.5H16.0032V6.75C16.0032 5.23122 14.772 4 13.2532 4H9.50321V5.5ZM0 5V5.00405L5.12525 11.5307C5.74119 12.3151 7.00106 11.8795 7.00106 10.8822V5H5.50106V9.58056L1.90404 5H0Z"
                fill="currentColor"
                fillRule="evenodd"
            ></path>
        </svg>
    ),
    x: (props: IconProps) => (
        <svg
            viewBox="0 0 1200 1227"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            {...props}
        >
            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
        </svg>
    ),
    gitHub: (props: IconProps) => (
        <svg viewBox="0 0 438.549 438.549" fill="currentColor" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            ></path>
        </svg>
    ),
    shadcnui: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            {...props}
        >
            <rect width="256" height="256" fill="none" />
            <line
                x1="208"
                y1="128"
                x2="128"
                y2="208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
            />
            <line
                x1="192"
                y1="40"
                x2="40"
                y2="192"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
            />
        </svg>
    ),
}
