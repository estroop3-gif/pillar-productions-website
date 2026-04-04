import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Original Series Catalog and Screener Access",
  description:
    "Request the Pillar Productions catalog with original series, docuseries, and film titles available for licensing. Includes synopses, episode counts, territory availability, and secure screener access for qualified buyers.",
  alternates: { canonical: "https://www.pillarproductionsusa.com/catalog" },
  openGraph: {
    title: "Original Series Catalog | Pillar Productions",
    description:
      "Request the full catalog and screener access for Pillar Productions original titles.",
  },
};

export default function CatalogPage() {
  return (
    <PageShell>
      <section className="pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 lg:px-12">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Catalog and Screeners
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6">
            Gated access for qualified buyers.
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed mb-8">
            The Pillar catalog includes titles, synopses, episode counts, production status, and territory availability. Screener access provides secure viewing links for titles in consideration.
          </p>
          <p className="text-lg text-neutral-400 leading-relaxed mb-12">
            Get in touch and our team will follow up with access. Response time is typically within one business day.
          </p>

          <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900 mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
              What is included
            </p>
            <ul className="space-y-3 text-neutral-400 leading-relaxed">
              <li>&bull; Full title list with synopses and episode counts</li>
              <li>&bull; Production status and delivery timeline</li>
              <li>&bull; Territory availability map</li>
              <li>&bull; Technical specifications and deliverable formats</li>
              <li>&bull; Secure screener links (on request)</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black text-sm font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-colors"
            >
              Request Access
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-neutral-700 text-sm font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
