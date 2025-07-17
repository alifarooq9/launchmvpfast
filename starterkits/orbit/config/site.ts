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

export type NavItem = {
  title: string;
  href: string;
  external?: boolean;
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
  connect: {
    title: string;
    email: string;
    socials: {
      label: string;
      href: string;
    }[];
  };
  header: {
    logoImage: string;
    nav: NavItem[];
    button: {
      label: string;
      href: string;
    };
  };
  footer: {
    copyright: string;
  };
};

export const siteConfig: SiteConfig = {
  header: {
    logoImage: "/logo.png",
    nav: [
      {
        title: "Blog",
        href: urls.blog,
      },
      {
        title: "Code",
        href: urls.github,
        external: true,
      },
      {
        title: "Follow",
        href: urls.x,
        external: true,
      },
    ],
    button: {
      label: "Book a Call",
      href: urls.bookCall,
    },
  },
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
        title: "Promptthing",
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
    title: "Blog",
    //blog items will be automatically fetched from the blog directory
    // create a new blog post by adding a .mdx file in the /blog directory
  },
  connect: {
    title: "Connect",
    email: "alidotm.me@gmail.com",
    socials: [
      {
        label: "Github",
        href: "https://github.com/alifarooq9",
      },
      {
        label: "Twitter",
        href: "https://x.com/alifarooqdev",
      },
      {
        label: "Linkedin",
        href: "https://www.linkedin.com/in/alifarooq9/",
      },
      {
        label: "Bluesky",
        href: "https://bsky.app/profile/alifarooq9.bsky.social",
      },
    ],
  },
  footer: {
    copyright: "© 2025 Orbit - launchmvpfast.com",
  },
};
