import {
  SectionContent,
  SectionHeader,
  SectionHeading,
} from "@/components/section-header";
import { badgeVariants } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import { Variants } from "motion";
import * as m from "motion/react-m";

const variants: Variants = {
  initial: { opacity: 0, y: 20, filter: "blur(12px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Connect() {
  return (
    <SectionHeader>
      <SectionHeading
        motion
        variants={variants}
        whileInView="animate"
        initial="initial"
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {siteConfig.connect.title}
      </SectionHeading>
      <SectionContent>
        <m.p
          variants={variants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-foreground/70"
        >
          Feel free to reach out to me at{" "}
          <a
            href={`mailto:${siteConfig.connect.email}`}
            className={cn(
              buttonVariants({ variant: "link" }),
              "px-0 text-base underline text-foreground/80 hover:text-foreground/90"
            )}
          >
            {siteConfig.connect.email}
          </a>
        </m.p>

        <div className="flex flex-wrap gap-2">
          {siteConfig.connect.socials.map((item, index) => (
            <m.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={cn(badgeVariants({ variant: "secondary" }), "text-sm")}
              variants={variants}
              initial="initial"
              whileInView="animate"
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2 + index * 0.2,
              }}
              viewport={{ once: true }}
            >
              {item.label}
              <ArrowUpRightIcon />
            </m.a>
          ))}
        </div>
      </SectionContent>
    </SectionHeader>
  );
}
