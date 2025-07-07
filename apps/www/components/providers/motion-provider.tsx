import { LazyMotion, domAnimation } from 'motion/react'

export function MotionProvider({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}
