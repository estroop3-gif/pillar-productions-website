import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import EmailCapture from "@/components/EmailCapture";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Free Guide: How to Get Your Brand on Screen | Brand Entertainment Playbook",
  description:
    "Download the free guide on how to get your brand into film and television. Covers formats, budgets, deal structures, distribution, and how to choose the right producing partner.",
  alternates: { canonical: "https://www.pillarproductionsusa.com/guide" },
  openGraph: {
    title: "Free Guide: How to Get Your Brand on Screen",
    description:
      "A step-by-step guide for brands exploring film, series, and branded entertainment production.",
  },
};

const whatYouLearn = [
  "The three deal structures for brand entertainment and which one fits your goals",
  "How to choose between docuseries, competition, scripted, and feature formats",
  "Realistic budget ranges by format so you can plan with confidence",
  "What to look for in a producing partner and red flags to avoid",
  "How distribution works across streaming, broadcast, and FAST channels",
  "The step-by-step process from first call to finished series",
];

export default function GuidePage() {
  return (
    <PageShell>
      <section className="pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
                Free guide
              </p>
              <h1 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6">
                How to Get Your Brand on Screen
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                Everything a brand needs to know before producing a series, film,
                or documentary — in one clear guide. No jargon, no fluff.
              </p>

              <div className="space-y-4 mb-10">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500">
                  What you will learn
                </p>
                {whatYouLearn.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 text-neutral-600 shrink-0">
                      &#10003;
                    </span>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-neutral-500">
                Prefer to talk it through?{" "}
                <Link
                  href="/schedule"
                  className="text-white underline underline-offset-4 hover:text-neutral-300 transition-colors"
                >
                  Book a free strategy call
                </Link>
                .
              </p>
            </div>

            <div className="lg:sticky lg:top-28">
              <EmailCapture
                heading="Get the guide — free"
                description="Enter your email and we will send the full guide to your inbox. No spam, no sequences, just the guide."
                buttonLabel="Send Me the Guide"
                source="guide-page"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
