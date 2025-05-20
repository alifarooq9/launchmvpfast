export type Component = {
    id: string
    name: string
    path: string
    span?: 1 | 2 | 3 | 4
}

export type Category = {
    id: string
    name: string
    image: {
        dark: string
        light: string
    }
    components: Component[]
}

export type ComponentsType = {
    default: Category[]
}

export const components: ComponentsType = {
    default: [
        {
            id: 'input',
            name: 'Input',
            image: {
                dark: '/registry/components/input-dark.svg',
                light: '/registry/components/input-light.svg',
            },
            components: [
                {
                    id: 'prompt-input-01',
                    name: 'Prompt Input 01',
                    path: 'default/components/input/prompt-input-01',
                    span: 2,
                },
                {
                    id: 'prompt-input-02',
                    name: 'Prompt Input 02',
                    path: 'default/components/input/prompt-input-02',
                    span: 2,
                },
                {
                    id: 'otp-with-no-spaces',
                    name: 'OTP with No Spaces',
                    path: 'default/components/input/otp-with-no-spaces',
                },
                {
                    id: 'otp-with-spaces',
                    name: 'OTP with Spaces',
                    path: 'default/components/input/otp-with-spaces',
                },
                {
                    id: 'otp-with-seperator',
                    name: 'OTP with Seperator',
                    path: 'default/components/input/otp-with-seperator',
                },
                {
                    id: 'otp-with-numbers-only',
                    name: 'OTP with Numbers Only',
                    path: 'default/components/input/otp-with-numbers-only',
                },
                {
                    id: 'input-with-animated-label',
                    name: 'Input with Animated Label',
                    path: 'default/components/input/input-with-animated-label',
                },
                {
                    id: 'input-with-animated-inset-label',
                    name: 'Input with Animated Inset Label',
                    path: 'default/components/input/input-with-animated-inset-label',
                },
                {
                    id: 'phone-number-input',
                    name: 'Phone Number Input',
                    path: 'default/components/input/phone-number-input',
                },
                {
                    id: 'input-with-right-button',
                    name: 'Input with Right Button',
                    path: 'default/components/input/input-with-right-button',
                },
                {
                    id: 'input-with-left-right-buttons',
                    name: 'Input with Left Right Buttons',
                    path: 'default/components/input/input-with-left-right-buttons',
                },
                {
                    id: 'input-with-left-select',
                    name: 'Input with Left Select',
                    path: 'default/components/input/input-with-left-select',
                },
                {
                    id: 'input-with-right-select',
                    name: 'Input with Right Select',
                    path: 'default/components/input/input-with-right-select',
                },
                {
                    id: 'password-input',
                    name: 'Password Input',
                    path: 'default/components/input/password-input',
                },
                {
                    id: 'copy-input',
                    name: 'Copy Input',
                    path: 'default/components/input/copy-input',
                },
                {
                    id: 'search-input',
                    name: 'Search Input',
                    path: 'default/components/input/search-input',
                },
                {
                    id: 'input-with-prefix',
                    name: 'Input with Prefix',
                    path: 'default/components/input/input-with-prefix',
                },
                {
                    id: 'input-with-suffix',
                    name: 'Input with Suffix',
                    path: 'default/components/input/input-with-suffix',
                },
                {
                    id: 'input-with-email-spell-checker',
                    name: 'Input with Email Spell Checker',
                    path: 'default/components/input/input-with-email-spell-checker',
                },
            ],
        },
        {
            id: 'dropdown-menu',
            name: 'Dropdown Menu',
            image: {
                dark: '/registry/components/dropdown-menu-dark.svg',
                light: '/registry/components/dropdown-menu-light.svg',
            },
            components: [
                {
                    id: 'user-profile-dropdown',
                    name: 'User Profile Dropdown',
                    path: 'default/components/dropdown-menu/user-profile-dropdown',
                },
                {
                    id: 'action-dropdown',
                    name: 'Action Dropdown',
                    path: 'default/components/dropdown-menu/action-dropdown',
                },
                {
                    id: 'action-with-loading-dropdown',
                    name: 'Action with Loading Dropdown',
                    path: 'default/components/dropdown-menu/action-with-loading-dropdown',
                },
                {
                    id: 'button-dropdown',
                    name: 'Button Dropdown',
                    path: 'default/components/dropdown-menu/button-dropdown',
                },
                {
                    id: 'dropdown-with-tag',
                    name: 'Dropdown with Tag',
                    path: 'default/components/dropdown-menu/dropdown-with-tag',
                },
            ],
        },
    ],
}

export function getComponentCategories() {
    const categories = components.default.map((c) => ({
        id: c.id,
        name: c.name,
        componentsCount: c.components.length,
        image: c.image,
    }))

    return categories
}

export function getComponentCategory(slug: string): Category | undefined {
    const category = components.default.find((c) => c.id === slug)

    return category ?? undefined
}
