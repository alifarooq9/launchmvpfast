import {
  SectionContent,
  SectionHeader,
  SectionHeading,
} from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { type ProjectItem, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import { Variants } from "motion";
import * as m from "motion/react-m";

const variants: Variants = {
  initial: { opacity: 0, y: 20, filter: "blur(12px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function SelectedProjects() {
  return (
    <SectionHeader>
      <SectionHeading
        variants={variants}
        initial="initial"
        animate="animate"
        motion
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
      >
        Selected Projects
      </SectionHeading>
      <SectionContent>
        <div className="grid grid-cols-2 gap-4">
          {siteConfig.selectedProjects.projects.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </div>
      </SectionContent>
    </SectionHeader>
  );
}

export function ProjectItem({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  return (
    <m.div
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 1.4 + index * 0.4,
      }}
      className="flex flex-col gap-1"
    >
      <video
        src={project.video}
        autoPlay
        loop
        muted
        className="rounded-xl border border-border"
      />
      <div className="flex items-cener gap-2 mt-2">
        <h3 className="font-medium text-balance">{project.title}</h3>
        {project.showStars && project.github && (
          <StarCount githubUrl={project.github} />
        )}
      </div>
      <p className="text-muted-foreground font-light text-balance">
        {project.description}
      </p>
      <div className="flex items-center gap-4 flex-wrap">
        {project.github && (
          <a
            href={project.github}
            className={cn(
              buttonVariants({
                variant: "link",
                size: "sm",
              }),
              "px-0 has-[>svg]:px-0 text-foreground/90"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
            <ArrowUpRightIcon />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            className={cn(
              buttonVariants({
                variant: "link",
                size: "sm",
              }),
              "px-0 has-[>svg]:px-0 text-foreground/90"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Preview
            <ArrowUpRightIcon />
          </a>
        )}
      </div>
    </m.div>
  );
}

export async function StarCount({ githubUrl }: { githubUrl?: string }) {
  async function getGitHubStars() {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${githubUrl?.slice(
          "https://github.com/".length
        )}`,
        {
          next: {
            revalidate: 8400,
          },
        }
      );
      if (!response?.ok) {
        return null;
      }
      const json = await response.json();
      const stars = parseInt(json.stargazers_count);
      return stars ?? 0;
    } catch {
      return 0;
    }
  }
  const stars = await getGitHubStars();
  return (
    <Badge variant="secondary">
      <StarIcon className="fill-yellow-500 text-yellow-500" />
      {stars}
    </Badge>
  );
}
