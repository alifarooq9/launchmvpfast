'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Moon, Sun, SunMoon } from 'lucide-react'

type ThemeSwitcherProps = {
    Trigger: React.ReactNode
}

export function ThemeSwitcher({ Trigger }: ThemeSwitcherProps) {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>{Trigger}</DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    <Sun /> Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    <Moon /> Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    <SunMoon /> System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
