import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-start gap-8 flex-col min-h-svh justify-center container">
      <p className="text-lg">👋 Hi there, nice to meet you...</p>
      <h1 className="font-medium text-4xl flex flex-col text-balance leading-normal tracking-tight">
        Web Developer —<span>✦ I focus on building your MVP fast</span>
        <span>✦ You focus on growing it fast.</span>
      </h1>
      <p className="text-muted-foreground font-medium text-balance">
        Developer with over 3+ years of experience in building web applications,
        specializing in rapid MVP development. I leverage modern technologies to
        create scalable and efficient solutions.
      </p>
      <div className="flex items-center gap-4 flex-col sm:flex-row">
        <Link href="/" className={buttonVariants({})}>
          Talk with me
        </Link>
        <Link
          href="/projects"
          className={buttonVariants({ variant: "secondary" })}
        >
          Browse my projects
        </Link>
      </div>
    </main>
  );
}
