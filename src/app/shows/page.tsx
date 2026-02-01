import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Shows | Pillar Productions",
  description:
    "Flagship and developing titles from Pillar Productions. Coastal Torque, Serve It Up, Serving for Greece, and more.",
  openGraph: {
    title: "Shows | Pillar Productions",
    description:
      "Flagship and developing titles from Pillar Productions.",
  },
};

const shows = [
  {
    label: "Flagship",
    title: "Coastal Torque",
    format: "Docu series",
    status: "In production",
    description:
      "A motorsports docu series set in Sarasota, following builders, drivers, and dreamers chasing speed, community, and calling on and off the track.",
    trailerPlaceholder: true,
  },
  {
    label: "Flagship",
    title: "Serve It Up",
    format: "Competition reality",
    status: "In development",
    description:
      "Twelve contestants, six pros and six amateurs, compete across a full season of pickleball. Pros and amateurs live in two separate houses. Each week, every pro is paired with a different beginner. Every third episode culminates in a tournament. Point standings are never revealed to the players. At the end of the season, the top scoring pro and the top scoring amateur split a $10,000 prize.",
    trailerPlaceholder: true,
  },
  {
    label: "Production",
    title: "Serving for Greece",
    format: "Mini documentary series",
    status: "In production",
    description:
      "A six part docu series following Niko and Christie Fronimos as they represent Greece at the Pickleball World Cup, blending elite sport, family, and faith.",
    trailerPlaceholder: true,
  },
];

export default function ShowsPage() {
  return (
    <PageShell>
      <section className="pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-4 lg:px-12">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Shows
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6 max-w-4xl">
            The Pillar slate.
          </h1>
          <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed max-w-3xl">
            Flagship originals and developing titles across documentary, competition, and narrative formats. All titles are Pillar owned and available for licensing.
          </p>
        </div>
      </section>

      {shows.map((show) => (
        <section key={show.title} className="border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
                  {show.label} &middot; {show.format}
                </p>
                <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6">
                  {show.title}
                </h2>
                <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                  {show.description}
                </p>
                <p className="text-sm text-neutral-600 mb-8">
                  Status: {show.status}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/catalog"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-colors"
                  >
                    Request Catalog
                  </Link>
                  <Link
                    href="/licensing#screeners"
                    className="inline-flex items-center justify-center px-6 py-3 border border-neutral-700 text-sm font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Request Screener
                  </Link>
                </div>
              </div>
              <div>
                {show.trailerPlaceholder && (
                  <div className="bg-neutral-950 rounded-2xl border border-neutral-900 aspect-video flex flex-col items-center justify-center">
                    <p className="text-sm text-neutral-600 tracking-wide mb-2">
                      Trailer coming soon
                    </p>
                    <p className="text-xs text-neutral-700">
                      Request catalog access for preview materials
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* One sheet placeholder */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Downloads
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6">
            One sheets and press materials.
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-2xl mx-auto">
            Downloadable one sheets and press kits for each title are available through the catalog. Request access to receive the full package.
          </p>
          <div className="inline-flex items-center justify-center px-8 py-4 border border-neutral-800 text-sm font-medium tracking-wide rounded-full text-neutral-600 cursor-not-allowed">
            Downloads available via Catalog request
          </div>
        </div>
      </section>
    </PageShell>
  );
}
