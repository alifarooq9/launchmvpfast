import { IconProps, Icons } from '@/components/icons'
import { urls } from '@/config/urls'

type NavItem = {
    label: string
    href: string
    icon?: React.ComponentType<IconProps>
    disabled?: boolean
    iconOnly?: boolean
}

type SocialItem = {
    name: string
    href: string
    icon: React.ComponentType<IconProps>
}

type NavConfig = {
    headerNav: NavItem[]
    footerNav: {
        main: NavItem[]
        socials: SocialItem[]
    }
}

export const navConfig: NavConfig = {
    headerNav: [
        {
            label: 'Starterkits',
            href: urls.app.starterkits.base,
        },
        {
            label: 'Components',
            href: urls.app.components,
        },
        {
            label: 'Blocks',
            href: urls.app.blocks,
        },
        {
            label: 'Pricing',
            href: urls.app.pricing,
        },
        {
            label: 'Docs',
            href: urls.docs.base,
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
    footerNav: {
        main: [
            {
                label: 'Starter kits',
                href: urls.app.starterkits.base,
            },
            {
                label: 'Components',
                href: urls.app.components,
            },
            {
                label: 'Blocks',
                href: urls.app.blocks,
            },
            {
                label: 'Pricing',
                href: urls.app.pricing,
            },
            {
                label: 'Docs',
                href: urls.docs.base,
            },
        ],
        socials: [
            {
                name: 'Github',
                href: urls.socials.gh,
                icon: Icons.gitHub,
            },
            {
                name: 'X',
                href: urls.socials.x,
                icon: Icons.x,
            },
        ],
    },
}
