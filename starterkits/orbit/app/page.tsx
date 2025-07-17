import { Blog } from "@/components/landing/blog";
import { Connect } from "@/components/landing/connect";
import { Experience } from "@/components/landing/experience";
import { Hero } from "@/components/landing/hero";
import { Projects } from "@/components/landing/projects";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <PageHeader>
      <Hero />
      <Projects />
      {siteConfig.blog && <Blog />}
      {siteConfig.experience && <Experience />}
      <Connect />
    </PageHeader>
  );
}
