import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import * as m from "motion/react-m";
import { Variants } from "motion";
import { TextEffect } from "@/components/ui/text-effect";

const variants: Variants = {
  initial: { opacity: 0, y: 20, filter: "blur(12px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Home() {
  return (
    <main className="flex items-start gap-8 py-16 flex-col min-h-svh justify-center container">
      <TextEffect
        variants={variants}
        className="text-lg"
        preset="fade-in-blur"
        speedReveal={1.1}
        speedSegment={0.3}
      >
        {siteConfig.landing.hero.topLine}
      </TextEffect>
      <m.h1
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="font-semibold text-4xl flex flex-col text-balance leading-normal tracking-tight"
      >
        {siteConfig.landing.hero.h1.type === "multi-line" ? (
          siteConfig.landing.hero.h1.content.map((line, index) => (
            <span key={index}>{line}</span>
          ))
        ) : (
          <span>{siteConfig.landing.hero.h1.content}</span>
        )}
      </m.h1>
      <m.p
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="text-muted-foreground font-medium text-balance"
      >
        {siteConfig.landing.hero.description}
      </m.p>
      <m.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="flex items-center gap-4 flex-col sm:flex-row"
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
      >
        <Link
          href={siteConfig.landing.hero.actions.primary.href}
          className={buttonVariants()}
        >
          {siteConfig.landing.hero.actions.primary.label}
        </Link>
        <Link
          href={siteConfig.landing.hero.actions.secondary.href}
          className={buttonVariants({ variant: "secondary" })}
        >
          {siteConfig.landing.hero.actions.secondary.label}
        </Link>
      </m.div>
    </main>
  );
}
