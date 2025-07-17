import { cn } from "@/lib/utils";
import React from "react";
import * as m from "motion/react-m";
import { HTMLMotionProps } from "motion/react";

export function SectionHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn("flex flex-col items-start gap-8 w-full", className)}
      {...props}
    >
      {children}
    </section>
  );
}

type SectionHeadingProps =
  | ({ motion: true } & HTMLMotionProps<"h2"> &
      React.HTMLAttributes<HTMLHeadingElement>)
  | ({ motion?: false } & React.HTMLAttributes<HTMLHeadingElement>);

export function SectionHeading({
  className,
  children,
  ...props
}: SectionHeadingProps) {
  if ("motion" in props && props.motion) {
    const { motion, ...motionProps } = props;
    return (
      <m.h2 className={cn("text-lg font-medium", className)} {...motionProps}>
        {children}
      </m.h2>
    );
  }

  const { motion, ...regularProps } = props as {
    motion?: false;
  } & React.HTMLAttributes<HTMLHeadingElement>;
  return (
    <h2 className={cn("text-lg font-medium", className)} {...regularProps}>
      {children}
    </h2>
  );
}

export function SectionContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-4 w-full", className)} {...props}>
      {children}
    </div>
  );
}
