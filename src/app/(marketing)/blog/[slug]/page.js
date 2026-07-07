import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/config/footerPages";
import BlogPostPageContent from "@/modules/marketing/BlogPostPageContent";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return <BlogPostPageContent post={post} />;
}
