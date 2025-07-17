import { urls } from "@/config/urls";

export type ProjectItem = {
  title: string;
  description: string;
  video: string;
  github?: string;
  livePreview?: string;
  showStars?: boolean;
};

export type ExperienceItem = {
  company: string;
  position: string;
  duration: string;
};

export type SiteConfig = {
  landing: {
    hero: {
      topLine: string;
      h1:
        | {
            type: "multi-line";
            content: string[];
          }
        | {
            type: "single-line";
            content: string;
          };
      description: string;
      actions: {
        primary: {
          label: string;
          href: string;
        };
        secondary: {
          label: string;
          href: string;
        };
      };
    };
  };
  projects: {
    title: string;
    projects: ProjectItem[];
  };
  experience?: {
    title: string;
    experiences: ExperienceItem[];
  };
  blog?: {
    title: string;
  };
};

export const siteConfig: SiteConfig = {
  landing: {
    hero: {
      topLine: "👋 Hi there, I'm Ali. nice to meet you...",
      h1: {
        type: "multi-line", // use "single-line" for a single line
        content: [
          "Web Developer.",
          "✦ I focus on building your MVP fast.",
          "✦ You focus on growing it fast.",
        ],
        // content: "YOUR HEADING HERE", // use this for single line
      },
      description:
        "Developer with over 3+ years of experience in building web applications, specializing in rapid MVP development. I leverage modern technologies to create scalable and efficient solutions.",
      actions: {
        primary: {
          label: "Talk with me",
          href: urls.bookCall,
        },
        secondary: {
          label: "Read my blog",
          href: urls.blog,
        },
      },
    },
  },
  projects: {
    title: "Projects",
    projects: [
      {
        title: "Launch mvp fast",
        description:
          "A platform designed to help developers build their MVPs quickly and efficiently.",
        video:
          "https://res.cloudinary.com/dalh8le5w/video/upload/v1752542859/Screen_Recording_2025-07-15_at_6.26.15_AM_tgbdec.mov",
        github: "https://github.com/alifarooq9/launchmvpfast",
        livePreview: "https://www.launchmvpfast.com/",
        showStars: true,
      },
      {
        title: "Prompthing",
        description:
          "A open-source alternative to t3.chat, created it for theo's cloneathon.",
        video:
          "https://res.cloudinary.com/dalh8le5w/video/upload/v1752544093/Screen_Recording_2025-07-15_at_6.47.37_AM_spzl4t.mov",
        github: "https://github.com/alifarooq9/promptthing",
        livePreview: "https://prompthing.vercel.app/",
        showStars: true,
      },
    ],
  },
  experience: {
    title: "Work Experience",
    experiences: [
      {
        company: "Launchmvpfast.com",
        position: "Founder & Developer",
        duration: "2024 - Present",
      },
      {
        company: "Freelance",
        position: "Web Developer",
        duration: "2021 - Present",
      },
    ],
  },
  blog: {
    title: "Writings",
    //blog items will be automatically fetched from the blog directory
    // create a new blog post by adding a .mdx file in the /blog directory
  },
};
