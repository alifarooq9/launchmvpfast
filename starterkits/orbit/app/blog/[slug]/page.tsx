import { notFound } from "next/navigation";
import Link from "next/link";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { blog } from "@/lib/source";
import {
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeading,
} from "@/components/page-header";
import { urls } from "@/config/urls";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { format } from "date-fns";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const Mdx = page.data.body;

  return (
    <PageContainer>
      <PageHeader>
        <div className="w-full justify-between flex items-center gap-4">
          <Link
            href={urls.blog}
            className={buttonVariants({ variant: "secondary", size: "sm" })}
          >
            <ArrowLeftIcon /> Blog
          </Link>

          <p className="text-foreground/70 text-sm">
            {format(new Date(page.data.date), "MMMM dd, yyyy")}
          </p>
        </div>
        <PageHeading>{page.data.title}</PageHeading>
        <PageDescription className="text-wrap">
          {page.data.description}
        </PageDescription>
      </PageHeader>
      <PageContent>
        <article>
          <div className="prose min-w-0">
            <InlineTOC items={page.data.toc} />
            <Mdx components={defaultMdxComponents} />
          </div>
          {/* <div className="flex flex-col gap-4 text-sm">
            <div>
              <p className="mb-1 text-fd-muted-foreground">Written by</p>
              <p className="font-medium">{page.data.author}</p>
            </div>
            <div>
              <p className="mb-1 text-sm text-fd-muted-foreground">At</p>
              <p className="font-medium">
                {new Date(page.data.date).toDateString()}
              </p>
            </div>
          </div> */}
        </article>
      </PageContent>
    </PageContainer>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();
  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
