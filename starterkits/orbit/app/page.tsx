import { Blog } from "@/components/landing/blog";
import { Connect } from "@/components/landing/connect";
import { Experience } from "@/components/landing/experience";
import { Hero } from "@/components/landing/hero";
import { Projects } from "@/components/landing/projects";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex items-start gap-12 sm:gap-20 pt-24 sm:pt-36 pb-20 flex-col justify-center container">
      <Hero />
      <Projects />
      {siteConfig.blog && <Blog />}
      {siteConfig.experience && <Experience />}
      <Connect />
    </main>
  );
}
