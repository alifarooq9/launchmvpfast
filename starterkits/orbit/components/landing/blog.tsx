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
import { BlogItem } from "@/components/blog-item";
import { blog } from "@/lib/source";

const variants: Variants = {
  initial: { opacity: 0, y: 20, filter: "blur(12px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const posts = blog
  .getPages()
  .sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  )
  .slice(0, 5);

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
          {posts.map((blog, index) => (
            <BlogItem
              motion
              key={index}
              blog={blog}
              variants={variants}
              initial="initial"
              whileInView="animate"
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2 + index * 0.2,
              }}
              viewport={{ once: true }}
            />
          ))}
        </ul>
        <m.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2 + posts.length * 0.2,
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
            View all blog
            <ArrowUpRightIcon />
          </Link>
        </m.div>
      </SectionContent>
    </SectionHeader>
  );
}
