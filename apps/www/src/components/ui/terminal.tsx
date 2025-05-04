'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { motion, MotionProps } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

interface AnimatedSpanProps extends MotionProps {
    children: React.ReactNode
    delay?: number
    className?: string
}

export const AnimatedSpan = ({
    children,
    delay = 0,
    className,
    ...props
}: AnimatedSpanProps) => (
    <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: delay / 1000 }}
        className={cn('grid text-sm font-normal tracking-tight', className)}
        {...props}
    >
        {children}
    </motion.div>
)

interface TypingAnimationProps extends MotionProps {
    children: string
    className?: string
    duration?: number
    delay?: number
    as?: React.ElementType
}

export const TypingAnimation = ({
    children,
    className,
    duration = 60,
    delay = 0,
    as: Component = 'span',
    ...props
}: TypingAnimationProps) => {
    if (typeof children !== 'string') {
        throw new Error('TypingAnimation: children must be a string. Received:')
    }

    const MotionComponent = motion.create(Component, {
        forwardMotionProps: true,
    })

    const [displayedText, setDisplayedText] = useState<string>('')
    const [started, setStarted] = useState(false)
    const elementRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true)
        }, delay)
        return () => clearTimeout(startTimeout)
    }, [delay])

    useEffect(() => {
        if (!started) return

        let i = 0
        const typingEffect = setInterval(() => {
            if (i < children.length) {
                setDisplayedText(children.substring(0, i + 1))
                i++
            } else {
                clearInterval(typingEffect)
            }
        }, duration)

        return () => {
            clearInterval(typingEffect)
        }
    }, [children, duration, started])

    return (
        <MotionComponent
            ref={elementRef}
            className={cn('text-sm font-normal tracking-tight', className)}
            {...props}
        >
            {displayedText}
        </MotionComponent>
    )
}

interface TerminalProps {
    children: React.ReactNode
    className?: string
    copyText?: string
}

export const Terminal = ({ children, className, copyText }: TerminalProps) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(copyText ?? '')
        setCopied(true)
    }

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false)
            }, 2000)
        }
    }, [copied])

    return (
        <div
            className={cn(
                'border-border bg-accent/20 z-0 h-full max-h-[430px] w-full rounded-md border',
                className
            )}
        >
            <div className="border-border flex items-center justify-between gap-2 px-4 pt-3">
                <div className="flex flex-row gap-x-2">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>

                {copyText && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleCopy}
                        className="size-7"
                    >
                        {copied ? <CheckIcon /> : <CopyIcon />}
                    </Button>
                )}
            </div>
            <pre className="p-4">
                <code className="grid gap-y-1 overflow-auto font-mono">
                    {children}
                </code>
            </pre>
        </div>
    )
}
