import { IconProps, Icons } from '@/components/icons'
import { urls } from '@/config/urls'

type NavItem = {
    label: string
    href: string
    icon?: React.ComponentType<IconProps>
    disabled?: boolean
    iconOnly?: boolean
}

type NavConfig = {
    headerNav: NavItem[]
}

export const navConfig: NavConfig = {
    headerNav: [
        {
            label: 'Starter kits',
            href: urls.app.starterkits,
        },
        {
            label: 'Components',
            href: urls.app.components,
            disabled: true,
        },
        {
            label: 'Blocks',
            href: urls.app.blocks,
        },
        {
            label: 'GitHub',
            href: urls.socials.gh,
            icon: Icons.gitHub,
            iconOnly: true,
        },
        {
            label: '𝕏',
            href: urls.socials.x,
            icon: Icons.x,
            iconOnly: true,
        },
    ],
}
