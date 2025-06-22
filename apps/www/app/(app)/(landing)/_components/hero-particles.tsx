'use client'

import { Particles } from '@/components/ui/particles'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function HeroParticles() {
    const { resolvedTheme } = useTheme()
    const [color, setColor] = useState('#ffffff')

    useEffect(() => {
        setColor(resolvedTheme === 'dark' ? '#ffffff' : '#000000')
    }, [resolvedTheme])

    return (
        <Particles
            className="absolute inset-0 -z-10"
            quantity={150}
            ease={80}
            color={color}
            refresh
        />
    )
}
