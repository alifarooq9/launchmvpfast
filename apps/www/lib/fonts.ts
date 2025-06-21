import { cn } from '@/lib/utils'
import { Inter, Geist_Mono } from 'next/font/google'

const fontInter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
})

const fontMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const fontsVariables = cn(fontMono.variable, fontInter.variable)
