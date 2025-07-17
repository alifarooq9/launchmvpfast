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
      title: "Writings",
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
