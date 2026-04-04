import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title:
    "Blog | Brand Entertainment, Film Production, and TV Strategy for Brands",
  description:
    "Insights on branded entertainment, how to make a TV show, brand-funded film production, docuseries, distribution strategy, and how brands are getting into film and television.",
  alternates: { canonical: "https://www.pillarproductionsusa.com/blog" },
  openGraph: {
    title: "Blog | Pillar Productions",
    description:
      "Insights on branded entertainment, film production, and TV strategy for brands.",
  },
};

export default function BlogPage() {
  return (
    <PageShell>
      <section className="pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 lg:px-12">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Blog
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6">
            Insights for brands entering entertainment.
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed mb-16 max-w-2xl">
            Guides, strategies, and perspectives on branded entertainment, film
            production, TV series development, and distribution for brands.
          </p>

          <div className="space-y-12">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group border-t border-neutral-900 pt-10"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mb-4">
                  <span className="tracking-[0.15em] uppercase">
                    {post.category}
                  </span>
                  <span>&middot;</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="block mb-3">
                  <h2 className="text-2xl lg:text-3xl font-semibold leading-tight tracking-tight group-hover:text-neutral-300 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-neutral-400 leading-relaxed mb-4 max-w-2xl">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm text-neutral-500 hover:text-white transition-colors underline underline-offset-4"
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
