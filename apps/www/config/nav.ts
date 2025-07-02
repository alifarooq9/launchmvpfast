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
            label: 'About',
            href: urls.app.about,
        },
        {
            label: 'Services',
            href: urls.app.services,
        },
        {
            label: 'Invest',
            href: urls.app.invest,
        },
        {
            label: 'Impact',
            href: urls.app.impact,
        },
        {
            label: 'Blog',
            href: urls.app.blog,
        },
        {
            label: 'Contact',
            href: urls.app.contact,
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
                label: 'About',
                href: urls.app.about,
            },
            {
                label: 'Services',
                href: urls.app.services,
            },
            {
                label: 'Invest',
                href: urls.app.invest,
            },
            {
                label: 'Impact',
                href: urls.app.impact,
            },
            {
                label: 'Partners',
                href: urls.app.partners,
            },
            {
                label: 'Legal',
                href: urls.app.legal,
            },
            {
                label: 'Contact',
                href: urls.app.contact,
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
