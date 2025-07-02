import { cn } from '@/lib/utils'
import {
    Bricolage_Grotesque,
    Geist,
    Geist_Mono,
    Instrument_Serif,
    Inter,
} from 'next/font/google'

const fontInter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap',
    preload: true,
})

const fontSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    display: 'swap',
    preload: true,
})

const fontMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    display: 'swap',
    preload: false, // Less critical font
})

const fontHeading = Bricolage_Grotesque({
    variable: '--font-heading',
    subsets: ['latin'],
    display: 'swap',
    preload: true,
})

const fontSerif = Instrument_Serif({
    variable: '--font-serif',
    subsets: ['latin'],
    weight: '400',
    style: 'italic',
    display: 'swap',
    preload: false, // Less critical font
})

export const fontsVariables = cn(
    fontSans.variable,
    fontHeading.variable,
    fontMono.variable,
    fontSerif.variable,
    fontInter.variable
)
