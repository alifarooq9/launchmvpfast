import { cn } from '@/lib/utils'
import {
    Bricolage_Grotesque,
    Geist,
    Geist_Mono,
    Instrument_Serif,
    Inter,
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

const fontSerif = Instrument_Serif({
    variable: '--font-serif',
    subsets: ['latin'],
    weight: '400',
    style: 'italic',
})

const fontInter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
})

export const fontsVariables = cn(
    fontSans.variable,
    fontHeading.variable,
    fontMono.variable,
    fontSerif.variable,
    fontInter.variable
)
