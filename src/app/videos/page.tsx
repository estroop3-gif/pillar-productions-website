import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import EmailCapture from "@/components/EmailCapture";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Videos | How Brands Get Into Film and TV — Pillar Productions",
  description:
    "Watch videos from Pillar Productions on branded entertainment, how to make a TV show for your brand, production strategy, and the business of film and television.",
  alternates: { canonical: "https://www.pillarproductionsusa.com/videos" },
  openGraph: {
    title: "Videos | Pillar Productions",
    description:
      "Videos on branded entertainment, film production, and TV strategy for brands.",
  },
};

// Add video IDs here as you create them
// Example: { id: "dQw4w9WgXcQ", title: "How Brands Get Into Film", description: "..." }
const videos: { id: string; title: string; description: string }[] = [];

export default function VideosPage() {
  return (
    <PageShell>
      <section className="pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 lg:px-12">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Videos
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6">
            See how brands enter entertainment.
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed mb-16 max-w-2xl">
            Insights on branded entertainment, the production process, and how
            to get your brand into film and television.
          </p>

          {videos.length > 0 ? (
            <div className="space-y-16">
              {videos.map((video) => (
                <div key={video.id}>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-900 mb-6">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">{video.title}</h2>
                  <p className="text-neutral-400 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-neutral-950 rounded-2xl p-12 border border-neutral-900 text-center mb-16">
              <p className="text-neutral-500 mb-2">Videos coming soon.</p>
              <p className="text-sm text-neutral-600">
                Get notified when new videos drop by grabbing the free guide below.
              </p>
            </div>
          )}

          <div className="mt-16">
            <EmailCapture
              heading="Get the free guide while you wait"
              description="How to Get Your Brand on Screen — formats, budgets, deal structures, and what to look for in a producing partner."
              source="videos-page"
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-neutral-700 text-sm font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
