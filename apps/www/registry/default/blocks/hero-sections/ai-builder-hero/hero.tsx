'use client'

import Line from '@/registry/default/blocks/hero-sections/ai-builder-hero/line'
import Header from '@/registry/default/blocks/hero-sections/ai-builder-hero/header'
import PromptInput02 from '@/registry/default/components/input/prompt-input-02'
import { motion as m, Variants } from 'motion/react'

const quickPrompts = [
    {
        label: 'Logo',
        value: 'Generate a logo for a tech startup',
    },
    {
        label: 'Poster',
        value: 'Create a poster for an upcoming event',
    },
    {
        label: 'Business Card',
        value: 'Design a business card for a freelance designer',
    },
    {
        label: 'Landing Page',
        value: 'Design a landing page for a new product launch',
    },
]

const staggerDelay = 0.2
const initialDelay = 0.2 // initial delay before the first element animates

const variants = {
    hidden: () => ({
        opacity: 0,
        filter: 'blur(10px)',
        transform: 'scale(0.95)',
    }),
    visible: (custom: number) => ({
        opacity: 1,
        transform: 'scale(1)',
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
        <div className="flex min-h-svh w-full flex-col">
            {/* header */}
            <Header />

            {/* hero section */}
            <section className="flex h-full flex-1 flex-col items-center justify-center border-x">
                <div className="container-line-wrapper h-36" />
                <Line />
                <h1 className="container-line-wrapper px-4 py-6 text-center text-3xl font-bold md:text-5xl">
                    <m.span
                        initial="hidden"
                        animate="visible"
                        custom={0}
                        variants={variants as Variants}
                    >
                        Create
                    </m.span>{' '}
                    <m.span
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        variants={variants as Variants}
                    >
                        Stunning
                    </m.span>{' '}
                    <m.span
                        initial="hidden"
                        animate="visible"
                        custom={2}
                        variants={variants as Variants}
                    >
                        Visuals
                    </m.span>
                </h1>
                <Line />
                <div className="container-line-wrapper bg-muted/70 flex w-full flex-col items-center justify-center p-4">
                    <m.div
                        initial="hidden"
                        animate="visible"
                        custom={3}
                        variants={variants as Variants}
                        className="w-full"
                    >
                        <PromptInput02 quickPrompts={quickPrompts} />
                    </m.div>
                </div>
                <Line />
                <StarterTemplate />
            </section>
        </div>
    )
}

function StarterTemplate() {
    return (
        <div className="container-line-wrapper flex-1 p-4 xl:px-6">
            <m.h2
                initial="hidden"
                animate="visible"
                custom={4}
                variants={variants as Variants}
                className="font-semibold"
            >
                Browse Templates
            </m.h2>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {templates.map((template, index) => (
                    <m.button
                        initial="hidden"
                        animate="visible"
                        custom={5 + index}
                        variants={variants as Variants}
                        key={template.title}
                        className="border-border bg-card hover:bg-card/50 flex flex-col items-start rounded-lg border p-4 transition-all"
                    >
                        <template.icon className="size-6" />
                        <h3 className="mt-3 text-left text-sm font-medium">
                            {template.title}
                        </h3>
                        <p className="text-muted-foreground mt-1 text-left text-sm">
                            {template.description}
                        </p>
                    </m.button>
                ))}
            </div>
        </div>
    )
}

type IconProps = React.HTMLAttributes<SVGElement>

const templates = [
    {
        title: 'Next.js',
        description: 'A React framework for production',
        icon: (props: IconProps) => (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <mask
                    id="mask0_408_139"
                    style={{
                        maskType: 'alpha',
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={180}
                    height={180}
                >
                    <circle cx={90} cy={90} r={90} fill="black" />
                </mask>
                <g mask="url(#mask0_408_139)">
                    <circle
                        cx={90}
                        cy={90}
                        r={87}
                        fill="black"
                        stroke="white"
                        strokeWidth={6}
                    />
                    <path
                        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                        fill="url(#paint0_linear_408_139)"
                    />
                    <rect
                        x={115}
                        y={54}
                        width={12}
                        height={72}
                        fill="url(#paint1_linear_408_139)"
                    />
                </g>
                <defs>
                    <linearGradient
                        id="paint0_linear_408_139"
                        x1={109}
                        y1={116.5}
                        x2={144.5}
                        y2={160.5}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" />
                        <stop offset={1} stopColor="white" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_408_139"
                        x1={121}
                        y1={54}
                        x2={120.799}
                        y2={106.875}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" />
                        <stop offset={1} stopColor="white" stopOpacity={0} />
                    </linearGradient>
                </defs>
            </svg>
        ),
    },
    {
        title: 'Supabase',
        description: 'Open source Firebase alternative',
        icon: (props: IconProps) => (
            <svg
                viewBox="0 0 109 113"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                {...props}
            >
                <path
                    d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                    fill="url(#paint0_linear)"
                />
                <path
                    d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                    fill="url(#paint1_linear)"
                    fillOpacity={0.2}
                />
                <path
                    d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
                    fill="#3ECF8E"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear"
                        x1={53.9738}
                        y1={54.974}
                        x2={94.1635}
                        y2={71.8295}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#249361" />
                        <stop offset={1} stopColor="#3ECF8E" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear"
                        x1={36.1558}
                        y1={30.578}
                        x2={54.4844}
                        y2={65.0806}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop />
                        <stop offset={1} stopOpacity={0} />
                    </linearGradient>
                </defs>
            </svg>
        ),
    },
    {
        title: 'Neon',
        description: 'Serverless Postgres database',
        icon: (props: IconProps) => (
            <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid"
                {...props}
            >
                <defs>
                    <linearGradient
                        id="a"
                        x1="100%"
                        x2="12.069%"
                        y1="100%"
                        y2="0%"
                    >
                        <stop offset="0%" stopColor="#62F755" />
                        <stop
                            offset="100%"
                            stopColor="#8FF986"
                            stopOpacity={0}
                        />
                    </linearGradient>
                    <linearGradient
                        id="b"
                        x1="100%"
                        x2="40.603%"
                        y1="100%"
                        y2="76.897%"
                    >
                        <stop offset="0%" stopOpacity={0.9} />
                        <stop
                            offset="100%"
                            stopColor="#1A1A1A"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <path
                    fill="#00E0D9"
                    d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"
                />
                <path
                    fill="url(#a)"
                    d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"
                />
                <path
                    fill="url(#b)"
                    fillOpacity={0.4}
                    d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"
                />
                <path
                    fill="#63F655"
                    d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"
                />
            </svg>
        ),
    },
    {
        title: 'Vercel',
        description: 'Platform for frontend frameworks and static sites',
        icon: (props: IconProps) => (
            <svg
                viewBox="0 0 256 222"
                width="1em"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                {...props}
            >
                <path fill="#fff" d="m128 0 128 221.705H0z" />
            </svg>
        ),
    },
    {
        title: 'Upstash',
        description: 'Serverless Redis and Kafka',
        icon: (props: IconProps) => (
            <svg
                viewBox="0 0 256 341"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid"
                {...props}
            >
                <path
                    fill="#00C98D"
                    d="M0 298.417c56.554 56.553 148.247 56.553 204.801 0 56.554-56.554 56.554-148.247 0-204.801l-25.6 25.6c42.415 42.416 42.415 111.185 0 153.6-42.416 42.416-111.185 42.416-153.601 0L0 298.416Z"
                />
                <path
                    fill="#00C98D"
                    d="M51.2 247.216c28.277 28.277 74.123 28.277 102.4 0 28.277-28.276 28.277-74.123 0-102.4l-25.6 25.6c14.14 14.138 14.14 37.061 0 51.2-14.138 14.139-37.061 14.139-51.2 0l-25.6 25.6ZM256 42.415c-56.554-56.553-148.247-56.553-204.8 0-56.555 56.555-56.555 148.247 0 204.801l25.599-25.6c-42.415-42.415-42.415-111.185 0-153.6 42.416-42.416 111.185-42.416 153.6 0L256 42.416Z"
                />
                <path
                    fill="#00C98D"
                    d="M204.8 93.616c-28.276-28.277-74.124-28.277-102.4 0-28.278 28.277-28.278 74.123 0 102.4l25.6-25.6c-14.14-14.138-14.14-37.061 0-51.2 14.138-14.139 37.06-14.139 51.2 0l25.6-25.6Z"
                />
                <path
                    fill="#FFF"
                    fillOpacity={0.4}
                    d="M256 42.415c-56.554-56.553-148.247-56.553-204.8 0-56.555 56.555-56.555 148.247 0 204.801l25.599-25.6c-42.415-42.415-42.415-111.185 0-153.6 42.416-42.416 111.185-42.416 153.6 0L256 42.416Z"
                />
                <path
                    fill="#FFF"
                    fillOpacity={0.4}
                    d="M204.8 93.616c-28.276-28.277-74.124-28.277-102.4 0-28.278 28.277-28.278 74.123 0 102.4l25.6-25.6c-14.14-14.138-14.14-37.061 0-51.2 14.138-14.139 37.06-14.139 51.2 0l25.6-25.6Z"
                />
            </svg>
        ),
    },
]
