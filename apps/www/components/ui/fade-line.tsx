'use client'

interface FadeLineProps {
    className?: string
    color?: string
    height?: number
    fadeWidth?: string
    orientation?: 'horizontal' | 'vertical'
    opacity?: number
}

export function FadeLine({
    className = '',
    color = 'var(--foreground)',
    fadeWidth = '25%',
    orientation,
    opacity = 1,
}: FadeLineProps) {
    // Auto-detect orientation based on classes if not explicitly provided
    const autoDetectOrientation = () => {
        if (orientation) return orientation

        // If className contains w-px or similar, assume vertical
        if (
            className.includes('w-px') ||
            className.includes('w-0.5') ||
            className.includes('w-[1px]')
        ) {
            return 'vertical'
        }

        return 'horizontal'
    }

    const lineOrientation = autoDetectOrientation()
    const gradientDirection =
        lineOrientation === 'vertical' ? 'to bottom' : 'to right'

    return (
        <span
            className={`${className}`}
            style={{
                background: `linear-gradient(${gradientDirection}, transparent 0%, ${color} ${fadeWidth}, ${color} calc(100% - ${fadeWidth}), transparent 100%)`,
                opacity,
            }}
        />
    )
}
