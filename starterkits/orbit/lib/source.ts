import { createMDXSource } from "fumadocs-mdx";
import { InferMetaType, InferPageType, loader } from "fumadocs-core/source";
import { blogPosts } from "@/.source";

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogPosts),
});

export type BlogPage = InferPageType<typeof blog>;
export type BlogMeta = InferMetaType<typeof blog>;
