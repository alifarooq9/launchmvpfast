import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import * as m from "motion/react-m";
import { TextEffect } from "@/components/ui/text-effect";
import { Variants } from "motion";
import { cn } from "@/lib/utils";
import { PageDescription, PageHeading } from "@/components/page-header";

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
      <PageHeading
        motion
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
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
      </PageHeading>
      <PageDescription
        motion
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      >
        {siteConfig.landing.hero.description}
      </PageDescription>
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
