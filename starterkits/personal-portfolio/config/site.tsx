import { urls } from "@/config/urls";
import { JSX } from "react";

type SiteConfig = {
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
};

export const siteConfig: SiteConfig = {
  landing: {
    hero: {
      topLine: "👋 Hi there, I'm Ali. nice to meet you...",
      h1: {
        type: "multi-line",
        content: [
          "Web Developer.",
          "✦ I focus on building your MVP fast.",
          "✦ You focus on growing it fast.",
        ],
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
};
