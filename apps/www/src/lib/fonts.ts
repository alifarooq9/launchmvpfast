import { cn } from '@/lib/utils'
import {
    Bricolage_Grotesque,
    Bungee_Shade,
    Geist,
    Geist_Mono,
    Oswald,
} from 'next/font/google'

const fontSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const fontMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

const fontHeading = Bricolage_Grotesque({
    variable: '--font-heading',
    subsets: ['latin'],
})

export const fontsVariables = cn(
    fontSans.variable,
    fontHeading.variable,
    fontMono.variable
)
