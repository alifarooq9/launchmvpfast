import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import * as m from "motion/react-m";
import { TextEffect } from "@/components/ui/text-effect";
import { Variants } from "motion";
import { cn } from "@/lib/utils";

const variants: Variants = {
  initial: { opacity: 0, y: 20, filter: "blur(12px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Hero() {
  return (
    <section className="flex flex-col items-start gap-5 sm:gap-8">
      <TextEffect
        variants={variants}
        className="text-base sm:text-lg"
        preset="fade-in-blur"
        speedReveal={1.1}
        speedSegment={0.5}
      >
        {siteConfig.landing.hero.topLine}
      </TextEffect>
      <m.h1
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="font-semibold text-2xl sm:text-3xl md:text-4xl flex flex-col  leading-normal tracking-tight"
      >
        {siteConfig.landing.hero.h1.type === "multi-line" ? (
          siteConfig.landing.hero.h1.content.map((line, index) => (
            <span key={index}>{line}</span>
          ))
        ) : (
          <span className="text-balance">
            {siteConfig.landing.hero.h1.content}
          </span>
        )}
      </m.h1>
      <m.p
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className="text-muted-foreground text-sm sm:text-base font-medium text-balance"
      >
        {siteConfig.landing.hero.description}
      </m.p>
      <m.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="flex items-center gap-4 flex-col sm:flex-row w-full"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
      >
        <Link
          href={siteConfig.landing.hero.actions.primary.href}
          className={cn(buttonVariants(), "w-full sm:w-fit")}
        >
          {siteConfig.landing.hero.actions.primary.label}
        </Link>
        <Link
          href={siteConfig.landing.hero.actions.secondary.href}
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "w-full sm:w-fit"
          )}
        >
          {siteConfig.landing.hero.actions.secondary.label}
        </Link>
      </m.div>
    </section>
  );
}
