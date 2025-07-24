import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const convertRegistryPaths = (content: string): string => {
    return content
        .replace(/@\/registry\/default\/ui/g, '@/components/ui')
        .replace(/@\/registry\/default\/hooks/g, '@/hooks')
        .replace(/@\/registry\/default\/lib/g, '@/lib')
}
