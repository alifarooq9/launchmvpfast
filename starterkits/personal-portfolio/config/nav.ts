import { urls } from "@/config/urls";

type NavItem = {
  title: string;
  href: string;
  external?: boolean;
};

type Nav = {
  header: NavItem[];
  footer: NavItem[];
};

export const nav: Nav = {
  header: [
    {
      title: "Projects",
      href: urls.projects,
    },
    {
      title: "About",
      href: urls.about,
    },
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
  footer: [],
};
