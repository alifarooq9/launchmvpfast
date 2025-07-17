import Link from "next/link";
import { blog } from "@/lib/source";
import { PageContent, PageHeader, PageHeading } from "@/components/page-header";

export default function Home() {
  const posts = blog.getPages();

  return (
    <PageHeader>
      <PageHeading>Writings</PageHeading>
      <PageContent>
        <div></div>
      </PageContent>
    </PageHeader>
  );
}
