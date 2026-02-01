import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Hubs | Pillar Productions",
  description:
    "Pillar Productions hub locations in Abuja, McAllen, and Jackson. Skeleton crews producing light seasons at scale with local stories and global reach.",
  openGraph: {
    title: "Hubs | Pillar Productions",
    description:
      "Pillar Productions hub locations producing owned series at scale across Abuja, McAllen, and Jackson.",
  },
};

const hubs = [
  {
    city: "Abuja",
    region: "Nigeria",
    tag: "West Africa",
    lanes: "Faith and family, diaspora stories, music culture, sports, community transformation",
    relevance:
      "Nigeria is home to the world's second largest film industry and a rapidly growing audience for premium content. Buyers serving African markets and diaspora audiences gain access to authentic, cinematic Nigerian stories produced to international delivery standards.",
    output: "12 light seasons per year baseline, scalable toward 24 as the hub matures.",
    partners:
      "Local broadcast partners, pan African streamers, diaspora focused platforms, location sponsors, and faith organizations seeking cinematic storytelling.",
  },
  {
    city: "McAllen",
    region: "Texas",
    tag: "South Texas",
    lanes: "Bicultural narratives, border life, Latin sports culture, faith communities, agriculture and trade",
    relevance:
      "The Rio Grande Valley sits at the intersection of American and Latin culture. Content from this hub speaks to both English and Spanish language audiences, making it highly relevant for US Hispanic networks, Latin American platforms, and multicultural buyers.",
    output: "12 light seasons per year baseline, scalable toward 24 as the hub matures.",
    partners:
      "US Hispanic broadcasters, bilingual streaming platforms, regional sponsors, agricultural brands, and community organizations.",
  },
  {
    city: "Jackson",
    region: "Mississippi",
    tag: "Deep South",
    lanes: "Southern culture, faith and church life, civil rights legacy, music and food, resilience stories",
    relevance:
      "Mississippi carries some of the richest untold stories in America. Content from Jackson connects with audiences who value authenticity, spiritual depth, and the complex beauty of the South. Buyers focused on faith, culture, and underserved American narratives will find strong material here.",
    output: "12 light seasons per year baseline, scalable toward 24 as the hub matures.",
    partners:
      "Faith networks, regional broadcasters, hospitality and tourism brands, cultural foundations, and Southern lifestyle platforms.",
  },
];

export default function HubsPage() {
  return (
    <PageShell>
      <section className="pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-4 lg:px-12">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Hubs
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6 max-w-4xl">
            Local crews. Global catalog.
          </h1>
          <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed max-w-3xl">
            Each Pillar hub operates with a skeleton crew that produces light seasons on the ground. Stories are locally rooted, production is lean, and every title flows through Tampa HQ for quality control and delivery.
          </p>
        </div>
      </section>

      {hubs.map((hub, i) => (
        <section key={hub.city} className="border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
              {hub.tag}
            </p>
            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-8">
              {hub.city}, {hub.region}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Signature lanes
                </p>
                <p className="text-neutral-400 leading-relaxed">{hub.lanes}</p>
              </div>
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Buyer relevance
                </p>
                <p className="text-neutral-400 leading-relaxed">{hub.relevance}</p>
              </div>
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Output expectations
                </p>
                <p className="text-neutral-400 leading-relaxed">{hub.output}</p>
              </div>
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Partner opportunities
                </p>
                <p className="text-neutral-400 leading-relaxed">{hub.partners}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-colors"
              >
                Request Catalog
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-neutral-700 text-sm font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
              >
                Build a Hub With Us
              </Link>
            </div>

            {i < hubs.length - 1 && <div className="sr-only" />}
          </div>
        </section>
      ))}
    </PageShell>
  );
}
