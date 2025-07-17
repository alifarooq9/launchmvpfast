import {
  SectionContent,
  SectionHeader,
  SectionHeading,
} from "@/components/section-header";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import { Variants } from "motion";
import Link from "next/link";
import * as m from "motion/react-m";

const variants: Variants = {
  initial: { opacity: 0, y: 20, filter: "blur(12px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const tempBlogs = [
  {
    title: "How to Build a Personal Portfolio",
    date: "Mar 11, 2025",
    description: "A guide to creating a personal portfolio that stands out.",
    href: "/blog/how-to-build-a-personal-portfolio",
  },
  {
    title: "Understanding React Hooks",
    date: "Apr 5, 2025",
    description:
      "An introduction to React Hooks and how to use them effectively.",
    href: "/blog/understanding-react-hooks",
  },
  {
    title: "CSS Grid vs Flexbox",
    date: "May 20, 2025",
    description:
      "A comparison of CSS Grid and Flexbox for responsive web design.",
    href: "/blog/css-grid-vs-flexbox",
  },
  {
    title: "Next.js Best Practices",
    date: "Jun 15, 2025",
    description:
      "Best practices for building applications with Next.js for optimal performance.",
    href: "/blog/nextjs-best-practices",
  },
];

export function Blog() {
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
        {siteConfig.blog?.title}
      </SectionHeading>
      <SectionContent>
        <ul className="grid grid-cols-1 gap-2">
          {tempBlogs.map((blog, index) => (
            <m.div
              key={index}
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
              <Link
                href={blog.href}
                className="flex items-center justify-between gap-4 group"
              >
                <div
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "justify-between text-base bg-card h-auto py-2.5 border px-4 flex-1 group-hover:bg-secondary/80 min-w-0 overflow-hidden"
                  )}
                >
                  <h3 className="break-words flex-1 min-w-0 whitespace-normal">
                    {blog.title}
                  </h3>
                  <ArrowUpRightIcon className="shrink-0 ml-2" />
                </div>
                <p className="text-sm text-foreground/50 w-24 whitespace-nowrap shrink-0 text-right">
                  {blog.date}
                </p>
              </Link>
            </m.div>
          ))}
        </ul>
        <m.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2 + tempBlogs.length * 0.2,
          }}
          viewport={{ once: true }}
          className="mr-auto"
        >
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ variant: "link", size: "sm" }),
              "px-0 has-[>svg]:px-0"
            )}
          >
            View all writings
            <ArrowUpRightIcon />
          </Link>
        </m.div>
      </SectionContent>
    </SectionHeader>
  );
}
