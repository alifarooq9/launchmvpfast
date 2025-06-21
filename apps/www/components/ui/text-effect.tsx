'use client'
import { cn } from '@/lib/utils'
import { AnimatePresence } from 'motion/react'
import type {
    TargetAndTransition,
    Transition,
    Variant,
    Variants,
} from 'motion/react'
import * as m from 'motion/react-m'
import React from 'react'

export type PresetType = 'blur' | 'fade-in-blur' | 'scale' | 'fade' | 'slide'

export type PerType = 'word' | 'char' | 'line'

export type TextEffectProps = {
    children: React.ReactNode
    per?: PerType
    as?: keyof React.JSX.IntrinsicElements
    variants?: {
        container?: Variants
        item?: Variants
    }
    className?: string
    preset?: PresetType
    delay?: number
    speedReveal?: number
    speedSegment?: number
    trigger?: boolean
    onAnimationComplete?: () => void
    onAnimationStart?: () => void
    segmentWrapperClassName?: string
    containerTransition?: Transition
    segmentTransition?: Transition
    style?: React.CSSProperties
}

const defaultStaggerTimes: Record<PerType, number> = {
    char: 0.03,
    word: 0.05,
    line: 0.1,
}

const defaultContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
    exit: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

const defaultItemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
    },
    exit: { opacity: 0 },
}

const presetVariants: Record<
    PresetType,
    { container: Variants; item: Variants }
> = {
    blur: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, filter: 'blur(12px)' },
            visible: { opacity: 1, filter: 'blur(0px)' },
            exit: { opacity: 0, filter: 'blur(12px)' },
        },
    },
    'fade-in-blur': {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            exit: { opacity: 0, y: 20, filter: 'blur(12px)' },
        },
    },
    scale: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0 },
        },
    },
    fade: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
            exit: { opacity: 0 },
        },
    },
    slide: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 20 },
        },
    },
}

const AnimationComponent: React.FC<{
    segment: React.ReactNode
    variants: Variants
    per: 'line' | 'word' | 'char'
    segmentWrapperClassName?: string
}> = React.memo(({ segment, variants, per, segmentWrapperClassName }) => {
    const content =
        per === 'line' ? (
            <m.span variants={variants as any} className="block">
                {segment}
            </m.span>
        ) : per === 'word' ? (
            <m.span
                aria-hidden="true"
                variants={variants as any}
                className="inline-block whitespace-pre"
            >
                {segment}
            </m.span>
        ) : (
            <m.span className="inline-block whitespace-pre">
                {typeof segment === 'string'
                    ? segment.split('').map((char, charIndex) => (
                          <m.span
                              key={`char-${charIndex}`}
                              aria-hidden="true"
                              variants={variants as any}
                              className="inline-block whitespace-pre"
                          >
                              {char}
                          </m.span>
                      ))
                    : segment}
            </m.span>
        )

    if (!segmentWrapperClassName) {
        return content
    }

    const defaultWrapperClassName = per === 'line' ? 'block' : 'inline-block'

    return (
        <span className={cn(defaultWrapperClassName, segmentWrapperClassName)}>
            {content}
        </span>
    )
})

AnimationComponent.displayName = 'AnimationComponent'

const extractTextFromNode = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node
    if (typeof node === 'number') return node.toString()
    if (React.isValidElement(node)) {
        if (
            node.props &&
            typeof node.props === 'object' &&
            'children' in node.props &&
            typeof node.props.children === 'string'
        ) {
            return node.props.children
        }
        if (
            node.props &&
            typeof node.props === 'object' &&
            'children' in node.props &&
            Array.isArray(node.props.children)
        ) {
            return node.props.children.map(extractTextFromNode).join('')
        }
        if (
            node.props &&
            typeof node.props === 'object' &&
            'children' in node.props
        ) {
            return extractTextFromNode(node.props.children as React.ReactNode)
        }
    }
    if (Array.isArray(node)) {
        return node.map(extractTextFromNode).join('')
    }
    return ''
}

const splitReactNodes = (
    children: React.ReactNode,
    per: PerType
): React.ReactNode[] => {
    const textContent = extractTextFromNode(children)

    if (per === 'line') {
        return textContent
            .split('\n')
            .map((line, index) => (
                <React.Fragment key={`line-${index}`}>{line}</React.Fragment>
            ))
    }

    // For word and char splitting, we need to work with the original nodes
    const segments: React.ReactNode[] = []

    const processNode = (node: React.ReactNode, currentIndex = 0): number => {
        if (typeof node === 'string') {
            const words = node.split(/(\s+)/)
            words.forEach((word) => {
                if (word.trim()) {
                    segments.push(word)
                } else if (word) {
                    segments.push(word)
                }
            })
            return currentIndex + words.length
        }

        if (React.isValidElement(node)) {
            // Clone the element and process its children
            const clonedElement = React.cloneElement(node, {
                key: `element-${currentIndex}`,
            })
            segments.push(clonedElement)
            return currentIndex + 1
        }

        if (Array.isArray(node)) {
            let index = currentIndex
            node.forEach((child) => {
                index = processNode(child, index)
            })
            return index
        }

        return currentIndex
    }

    processNode(children)
    return segments
}

const hasTransition = (
    variant?: Variant
): variant is TargetAndTransition & { transition?: Transition } => {
    if (!variant) return false
    return typeof variant === 'object' && 'transition' in variant
}

const createVariantsWithTransition = (
    baseVariants: Variants,
    transition?: Transition & { exit?: Transition }
): Variants => {
    if (!transition) return baseVariants

    const { exit: _, ...mainTransition } = transition

    return {
        ...baseVariants,
        visible: {
            ...baseVariants.visible,
            transition: {
                ...(hasTransition(baseVariants.visible)
                    ? baseVariants.visible.transition
                    : {}),
                ...mainTransition,
            },
        },
        exit: {
            ...baseVariants.exit,
            transition: {
                ...(hasTransition(baseVariants.exit)
                    ? baseVariants.exit.transition
                    : {}),
                ...mainTransition,
                staggerDirection: -1,
            },
        },
    }
}

export function TextEffect({
    children,
    per = 'word',
    as = 'p',
    variants,
    className,
    preset = 'fade',
    delay = 0,
    speedReveal = 1,
    speedSegment = 1,
    trigger = true,
    onAnimationComplete,
    onAnimationStart,
    segmentWrapperClassName,
    containerTransition,
    segmentTransition,
    style,
}: TextEffectProps) {
    const segments = splitReactNodes(children, per)
    const MotionTag = m[as as keyof typeof m] as typeof m.div

    const baseVariants = preset
        ? presetVariants[preset]
        : { container: defaultContainerVariants, item: defaultItemVariants }

    const stagger = defaultStaggerTimes[per] / speedReveal

    const baseDuration = 0.3 / speedSegment

    const customStagger = hasTransition(variants?.container?.visible ?? {})
        ? (variants?.container?.visible as TargetAndTransition).transition
              ?.staggerChildren
        : undefined

    const customDelay = hasTransition(variants?.container?.visible ?? {})
        ? (variants?.container?.visible as TargetAndTransition).transition
              ?.delayChildren
        : undefined

    const computedVariants = {
        container: createVariantsWithTransition(
            variants?.container || baseVariants.container,
            {
                staggerChildren: customStagger ?? stagger,
                delayChildren: customDelay ?? delay,
                ...containerTransition,
                exit: {
                    staggerChildren: customStagger ?? stagger,
                    staggerDirection: -1,
                },
            }
        ),
        item: createVariantsWithTransition(
            variants?.item || baseVariants.item,
            {
                duration: baseDuration,
                ...segmentTransition,
            }
        ),
    }

    const textContent = extractTextFromNode(children)

    return (
        <AnimatePresence mode="popLayout">
            {trigger && (
                <MotionTag
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={computedVariants.container as any}
                    className={className}
                    onAnimationComplete={onAnimationComplete}
                    onAnimationStart={onAnimationStart}
                    style={style}
                >
                    {per !== 'line' ? (
                        <span className="sr-only">{textContent}</span>
                    ) : null}
                    {segments.map((segment, index) => (
                        <AnimationComponent
                            key={`${per}-${index}`}
                            segment={segment}
                            variants={computedVariants.item}
                            per={per}
                            segmentWrapperClassName={segmentWrapperClassName}
                        />
                    ))}
                </MotionTag>
            )}
        </AnimatePresence>
    )
}
