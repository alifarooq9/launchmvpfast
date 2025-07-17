import { buttonVariants } from "@/components/ui/button";
import { nav } from "@/config/nav";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { urls } from "@/config/urls";

export function SiteHeader() {
  return (
    <header className="flex container w-full z-50 items-center justify-center h-16 fixed top-0 left-0 right-0 bg-transparent">
      <div className="flex items-center w-full container px-2 py-2 justify-between h-14 bg-background border border-border rounded-lg">
        <Link href="/" className="focus-ring p-1 text-sm font-bold">
          <Image
            src="/logo.png"
            alt="Logo"
            width={30}
            height={30}
            className="rounded-full"
          />
        </Link>

        <nav className="flex items-center gap-3">
          {nav.header.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={cn(
                buttonVariants({
                  variant: "link",
                  size: "sm",
                }),
                "px-1.5 has-[>svg]:px-1.5 text-foreground/70 gap-1"
              )}
            >
              {item.title}
              {item.external && <ArrowUpRightIcon />}
            </Link>
          ))}

          <Link href={urls.bookCall} className={buttonVariants({ size: "sm" })}>
            Book a Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
