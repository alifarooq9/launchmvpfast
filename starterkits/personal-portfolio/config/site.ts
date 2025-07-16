import { urls } from "@/config/urls";

export type ProjectItem = {
  title: string;
  description: string;
  video: string;
  github?: string;
  livePreview?: string;
  showStars?: boolean;
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
  selectedProjects: {
    title: string;
    projects: ProjectItem[];
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
          label: "Browse my projects",
          href: urls.projects,
        },
      },
    },
  },
  selectedProjects: {
    title: "Selected Projects",
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
};
