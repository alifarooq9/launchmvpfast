import { Experience } from "@/components/landing/experience";
import { Hero } from "@/components/landing/hero";
import { Projects } from "@/components/landing/projects";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex items-start gap-20 py-36 flex-col justify-center container">
      <Hero />
      <Projects />
      {siteConfig.experience && <Experience />}
    </main>
  );
}
