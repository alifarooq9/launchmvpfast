'use client'

export const DistortedGlass = () => {
    return (
        <>
            <div className="absolute -z-10 h-14 w-full overflow-hidden">
                <div className="pointer-events-none absolute bottom-0 z-10 h-full w-full overflow-hidden rounded-xl">
                    <div className="glass-effect h-full w-full"></div>
                </div>
                <svg>
                    <defs>
                        <filter id="fractal-noise-glass">
                            <feTurbulence
                                type="fractalNoise"
                                baseFrequency="0.12 0.12"
                                numOctaves="1"
                                result="warp"
                            ></feTurbulence>
                            <feDisplacementMap
                                xChannelSelector="R"
                                yChannelSelector="G"
                                scale="30"
                                in="SourceGraphic"
                                in2="warp"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>

            <style jsx>{`
                .glass-effect {
                    filter: url(#fractal-noise-glass);
                    background-size: 6px 6px;
                    backdrop-filter: blur(0px);
                }
            `}</style>
        </>
    )
}
