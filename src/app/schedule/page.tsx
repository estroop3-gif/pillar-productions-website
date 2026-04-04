import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Book a Free Strategy Call | Brand Entertainment Consultation",
  description:
    "Book a free 30-minute strategy call with Pillar Productions. We will discuss how to get your brand into film and television, which format fits your goals, and what the process looks like from concept to screen.",
  alternates: { canonical: "https://www.pillarproductions.tv/schedule" },
  openGraph: {
    title: "Book a Free Strategy Call | Pillar Productions",
    description:
      "Free 30-minute call to discuss how to get your brand into film and TV. No commitment, no pitch.",
  },
};

export default function SchedulePage() {
  return (
    <PageShell>
      <section className="pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 lg:px-12">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Schedule
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6">
            Book a time to talk.
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed mb-12 max-w-2xl">
            Pick a time that works for you. In 30 minutes we will cover your goals, the right format for your brand, and concrete next steps. No pitch, no commitment.
          </p>

          <CalendlyEmbed />

          <p className="mt-12 text-sm text-neutral-500">
            Want to share more details first?{" "}
            <Link
              href="/brands#consultation"
              className="text-white underline underline-offset-4 hover:text-neutral-300 transition-colors"
            >
              Fill out the brand consultation form
            </Link>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
