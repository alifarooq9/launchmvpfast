import { cn } from "@/lib/utils";
import type { HTMLMotionProps } from "motion/react";
import * as m from "motion/react-m";

export function PageContainer({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main
      className={cn(
        "flex items-start gap-12 sm:gap-20 pt-24 sm:pt-36 pb-20 flex-col justify-center container",
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
}

export function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "flex flex-col items-start gap-5 sm:gap-8 w-full",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

type PageHeadingProps =
  | ({ motion: true } & HTMLMotionProps<"h1"> &
      React.HTMLAttributes<HTMLHeadingElement>)
  | ({ motion?: false } & React.HTMLAttributes<HTMLHeadingElement>);

export function PageHeading({
  className,
  children,
  ...props
}: PageHeadingProps) {
  if ("motion" in props && props.motion) {
    const { motion, ...motionProps } = props;
    return (
      <m.h1
        className={cn(
          "font-semibold text-2xl sm:text-3xl md:text-4xl flex flex-col leading-normal tracking-tight",
          className
        )}
        {...motionProps}
      >
        {children}
      </m.h1>
    );
  }

  const { motion, ...regularProps } = props as {
    motion?: false;
  } & React.HTMLAttributes<HTMLHeadingElement>;
  return (
    <h2
      className={cn(
        "font-semibold text-2xl sm:text-3xl md:text-4xl flex flex-col leading-normal tracking-tight",
        className
      )}
      {...regularProps}
    >
      {children}
    </h2>
  );
}

type PageDescriptionProps =
  | ({ motion: true } & HTMLMotionProps<"p"> &
      React.HTMLAttributes<HTMLParagraphElement>)
  | ({ motion?: false } & React.HTMLAttributes<HTMLParagraphElement>);

export function PageDescription({
  className,
  children,
  ...props
}: PageDescriptionProps) {
  if ("motion" in props && props.motion) {
    const { motion, ...motionProps } = props;
    return (
      <m.p
        className={cn(
          "text-muted-foreground text-sm sm:text-base font-medium text-balance",
          className
        )}
        {...motionProps}
      >
        {children}
      </m.p>
    );
  }

  const { motion, ...regularProps } = props as {
    motion?: false;
  } & React.HTMLAttributes<HTMLParagraphElement>;
  return (
    <p
      className={cn(
        "text-muted-foreground text-sm sm:text-base font-medium text-balance",
        className
      )}
      {...regularProps}
    >
      {children}
    </p>
  );
}

export function PageContent({
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
