import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { getPost, getAllSlugs } from "@/data/blog";
import EmailCapture from "@/components/EmailCapture";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://www.pillarproductionsusa.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: { type: string; content: string }[] = [];
  let currentParagraph: string[] = [];

  const flush = () => {
    if (currentParagraph.length > 0) {
      elements.push({ type: "p", content: currentParagraph.join(" ") });
      currentParagraph = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("## ")) {
      flush();
      elements.push({ type: "h2", content: trimmed.slice(3) });
    } else if (trimmed === "") {
      flush();
    } else {
      currentParagraph.push(trimmed);
    }
  }
  flush();

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const elements = renderMarkdown(post.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://www.pillarproductionsusa.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Pillar Productions",
      url: "https://www.pillarproductionsusa.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.pillarproductionsusa.com/blog/${post.slug}`,
    },
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-4 lg:px-12">
          {/* Back link */}
          <Link
            href="/blog"
            className="text-sm text-neutral-500 hover:text-white transition-colors underline underline-offset-4 mb-10 inline-block"
          >
            &larr; All posts
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mb-6">
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

          {/* Title */}
          <h1 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed mb-12 border-b border-neutral-900 pb-12">
            {post.description}
          </p>

          {/* Body */}
          <div className="space-y-6">
            {elements.map((el, i) => {
              if (el.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-semibold leading-tight tracking-tight mt-12 mb-4"
                  >
                    {el.content}
                  </h2>
                );
              }
              return (
                <p
                  key={i}
                  className="text-neutral-300 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: el.content
                      .replace(
                        /\*\*(.+?)\*\*/g,
                        '<strong class="text-white font-semibold">$1</strong>'
                      ),
                  }}
                />
              );
            })}
          </div>

          {/* Mid-article lead capture */}
          <div className="mt-12 mb-12">
            <EmailCapture source={`blog-${post.slug}`} />
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-neutral-900 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to explore what entertainment could look like for your
              brand?
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">
              Book a free 30-minute strategy call. We will discuss your goals,
              the right format, and what the process looks like.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black text-sm font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-colors"
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/brands"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-neutral-700 text-sm font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
