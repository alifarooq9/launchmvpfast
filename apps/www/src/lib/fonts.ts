import { cn } from '@/lib/utils'
import { Geist } from 'next/font/google'

const fontSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

export const fontsVariables = cn(fontSans.variable)
