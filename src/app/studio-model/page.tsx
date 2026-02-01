import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Studio Model | Pillar Productions",
  description:
    "How Pillar Productions operates as a multi hub studio. HQ in Tampa, skeleton crews in Abuja, McAllen, and Jackson, window licensing, and a growing library flywheel.",
  openGraph: {
    title: "Studio Model | Pillar Productions",
    description:
      "How Pillar Productions operates as a multi hub studio building owned series at scale.",
  },
};

export default function StudioModelPage() {
  return (
    <PageShell>
      <section className="pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-4 lg:px-12">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Studio Model
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6 max-w-4xl">
            A studio built to own and scale.
          </h1>
          <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed max-w-3xl">
            Pillar Productions is a multi hub studio that produces owned series at volume, licenses rights through structured windows, and builds a library that compounds in value over time.
          </p>
        </div>
      </section>

      {/* HQ */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Headquarters
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-8 max-w-3xl">
            Tampa is the control tower.
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-neutral-400 leading-relaxed">
            <p>
              Tampa HQ is where flagship shows are developed, produced, and finished. It is also the quality control center for every title that ships from any hub. Development, post production, QC, and distribution all run through Tampa.
            </p>
            <p>
              Flagship seasons are full scale productions with larger crews, higher budgets, and longer post schedules. These are the marquee titles that anchor the catalog and set the creative bar for the entire network.
            </p>
          </div>
        </div>
      </section>

      {/* Hubs */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Hub system
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-8 max-w-3xl">
            Skeleton crews. Real volume.
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-neutral-400 leading-relaxed">
            <p>
              Each hub operates with a lean skeleton crew that produces light seasons, shorter run series optimized for speed and efficiency without sacrificing cinematic quality. A single hub targets a baseline of 12 light seasons per year, scalable toward 24 as operations mature.
            </p>
            <p>
              Hubs are placed in markets with strong local stories, production friendly conditions, and strategic buyer relevance. Current hubs are in Abuja, McAllen, and Jackson.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/hubs"
              className="inline-flex items-center justify-center px-6 py-3 border border-neutral-700 text-sm font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
            >
              View all hubs
            </Link>
          </div>
        </div>
      </section>

      {/* Light season vs flagship */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Production tiers
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-12 max-w-3xl">
            Two production tiers. One standard.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <h3 className="text-xl font-semibold mb-4">Light season</h3>
              <p className="text-neutral-400 leading-relaxed">
                Produced at hub locations with lean crews. Shorter episode orders, faster turnaround, and efficient budgets. Designed for volume without compromising the look and feel of a Pillar production.
              </p>
            </div>
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <h3 className="text-xl font-semibold mb-4">Flagship season</h3>
              <p className="text-neutral-400 leading-relaxed">
                Produced at HQ or on location with full crews. Higher production value, longer post schedules, and larger budgets. These are the anchor titles that define the catalog and attract first window buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rights and windowing */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Ownership and windowing
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-8 max-w-3xl">
            Own everything. License strategically.
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-neutral-400 leading-relaxed">
            <p>
              Pillar retains full ownership of every original title. Revenue comes from licensing rights in structured windows: first window exclusive deals, second window broader access, and non exclusive AVOD and FAST placements over time.
            </p>
            <p>
              Each window is scoped by territory, platform type, and term length. This approach maximizes the revenue life of every title while giving each buyer a clear and valuable position.
            </p>
          </div>
        </div>
      </section>

      {/* Library flywheel */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Library flywheel
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-8 max-w-3xl">
            Every title makes the next one more valuable.
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-neutral-400 leading-relaxed">
            <p>
              As the catalog grows, Pillar becomes more valuable to buyers. A larger library means more programming hours per deal, stronger bundle opportunities, and a dedicated home on Second Watch Network for long tail distribution.
            </p>
            <p>
              Second Watch Network is Pillar&apos;s own streaming ecosystem. Titles that have moved through their initial licensing windows find a permanent home there, generating ongoing audience value and building brand recognition for the studio.
            </p>
          </div>
        </div>
      </section>

      {/* QC workflow */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Quality control
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-12 max-w-3xl">
            Hub cuts. HQ finish.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">Step 1</p>
              <h3 className="text-xl font-semibold mb-4">Hub rough cut</h3>
              <p className="text-neutral-400 leading-relaxed">
                Hub crews shoot and assemble rough cuts on location. Footage, selects, and assembly edits are delivered to Tampa for review.
              </p>
            </div>
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">Step 2</p>
              <h3 className="text-xl font-semibold mb-4">HQ quality control</h3>
              <p className="text-neutral-400 leading-relaxed">
                Tampa runs full QC on every episode: edit notes, color, sound mix, graphics, music clearance, and deliverable specs.
              </p>
            </div>
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">Step 3</p>
              <h3 className="text-xl font-semibold mb-4">Delivery</h3>
              <p className="text-neutral-400 leading-relaxed">
                Final masters are rendered, QC reports are generated, and titles are delivered to buyers in the required formats and specs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32 text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-8">
            Ready to work with Pillar?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/licensing"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-sm font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-colors"
            >
              Explore Licensing
            </Link>
            <Link
              href="/branded-series"
              className="inline-flex items-center justify-center px-8 py-4 border border-neutral-700 text-sm font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
            >
              Branded Series
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
