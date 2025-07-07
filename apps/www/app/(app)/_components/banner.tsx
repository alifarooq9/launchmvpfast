import { urls } from '@/config/urls'
import Link from 'next/link'

const maskImage =
    'linear-gradient(to bottom,white,transparent), radial-gradient(circle at top center, white, transparent)'

function flow({ colors }: { colors: string[] }) {
    return (
        <>
            <div
                className="absolute inset-0 z-10"
                style={
                    {
                        maskImage,
                        maskComposite: 'intersect',
                        animation: 'moving-banner 20s linear infinite',
                        backgroundImage: `repeating-linear-gradient(70deg, ${[...colors, colors[0]].map((color, i) => `${color} ${(i * 50) / colors.length}%`).join(', ')})`,
                        backgroundSize: '200% 100%',
                        filter: 'saturate(2)',
                    } as object
                }
            />
            <style>
                {`@keyframes moving-banner {
            from { background-position: 0% 0;  }
            to { background-position: 100% 0;  }
         }`}
            </style>
        </>
    )
}

export function Banner() {
    return (
        <div className="bg-background relative flex h-12 w-full items-center justify-center gap-2 text-center text-sm font-semibold">
            {flow({
                colors: [
                    'rgba(255,255,255, 0.5)',
                    'rgba(255,255,255, 0.5)',
                    'transparent',
                    'rgba(255,255,255, 0.5)',
                    'transparent',
                    'rgba(255,255,255, 0.5)',
                    'transparent',
                ],
            })}

            <div className="z-20 flex items-center justify-center gap-1.5">
                <p>
                    More components, starterkits, and blocks are coming soon! —
                </p>

                <Link
                    href={urls.app.earlyAccess}
                    className="focus-ring hover:underline hover:underline-offset-2"
                >
                    Get early access
                </Link>
            </div>
        </div>
    )
}
