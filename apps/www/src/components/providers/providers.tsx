'use client'

import { ThemeProvider } from '@/components/providers/theme-provider'
import { TRPCReactProvider } from '@/trpc/react'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <TRPCReactProvider>{children}</TRPCReactProvider>
        </ThemeProvider>
    )
}
