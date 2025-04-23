type ComingSoonProps = {
    title: string
    description: string
}

export function ComingSoon({ title, description }: ComingSoonProps) {
    return (
        <div>
            <h1 className="flex flex-col">
                <span>{title} are</span> <span>Coming Soon</span>
            </h1>
        </div>
    )
}
