import { buttonVariants } from "@/components/ui/button";
import { BlogPage } from "@/lib/source";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import * as m from "motion/react-m";
import { HTMLMotionProps } from "motion/react";
import React from "react";

type BlogItemProps =
  | ({ motion: true; blog: BlogPage } & HTMLMotionProps<"div"> &
      React.HTMLAttributes<HTMLDivElement>)
  | ({ motion?: false; blog: BlogPage } & React.HTMLAttributes<HTMLDivElement>);

export function BlogItem({ blog, ...props }: BlogItemProps) {
  const content = (
    <Link
      href={blog.url}
      className="flex items-center justify-between gap-4 group"
    >
      <div
        className={cn(
          buttonVariants({ variant: "secondary", size: "lg" }),
          "justify-between bg-secondary/90 text-base h-auto py-2.5 border px-4 flex-1 hover:bg-secondary/60 group-hover:bg-secondary/60 min-w-0 overflow-hidden"
        )}
      >
        <h3 className="break-words flex-1 min-w-0 whitespace-normal">
          {blog.data.title}
        </h3>
        <ArrowUpRightIcon className="shrink-0 ml-2" />
      </div>
      <p className="text-sm text-foreground/50 w-24 whitespace-nowrap shrink-0 text-right">
        {format(new Date(blog.data.date), "MMM dd, yyyy")}
      </p>
    </Link>
  );

  if ("motion" in props && props.motion) {
    const { motion, ...motionProps } = props;
    return <m.div {...motionProps}>{content}</m.div>;
  }

  const { motion, ...regularProps } = props as {
    motion?: false;
    blog: BlogPage;
  } & React.HTMLAttributes<HTMLDivElement>;
  return <div {...regularProps}>{content}</div>;
}
