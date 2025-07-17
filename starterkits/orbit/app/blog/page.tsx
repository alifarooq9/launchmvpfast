import { blog } from "@/lib/source";
import {
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeading,
} from "@/components/page-header";
import { BlogItem } from "@/components/blog-item";

const allPosts = blog.getPages();
const groupPosts = allPosts
  .sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  )
  .reduce((acc, post) => {
    const year = new Date(post.data.date).getFullYear().toString();
    const existingYear = acc.find((item) => item.year === year);

    if (existingYear) {
      existingYear.posts.push(post);
    } else {
      acc.push({ year, posts: [post] });
    }

    return acc;
  }, [] as Array<{ year: string; posts: typeof allPosts }>);

export default function Home() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeading>Blog</PageHeading>
        <PageDescription>Some things i wrote.</PageDescription>
      </PageHeader>
      <PageContent>
        <ul className="grid grid-cols-1 gap-14">
          {groupPosts.map((item, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <h2 className="text-xl font-semibold font-mono mb-4">
                {item.year}
              </h2>
              {item.posts.map((blog, index) => (
                <BlogItem key={index} blog={blog} />
              ))}
            </div>
          ))}
        </ul>
      </PageContent>
    </PageContainer>
  );
}
