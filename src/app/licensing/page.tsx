import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "License Original Series and Films for Broadcast and Streaming",
  description:
    "License Pillar Productions original series, docuseries, and films for broadcast, streaming, FAST channels, airlines, hotels, and telcos worldwide. Windowed by territory, platform, and exclusivity. Broadcast-ready deliverables included.",
  alternates: { canonical: "https://www.pillarproductions.tv/licensing" },
  openGraph: {
    title: "License Original Series and Films | Pillar Productions",
    description:
      "License original series and films for broadcast, streaming, and FAST platforms worldwide.",
  },
};

const faq = [
  {
    q: "What formats are available?",
    a: "All titles are delivered in broadcast ready formats with full QC reports. ProRes and H.264 masters are standard. Other codecs available on request.",
  },
  {
    q: "Are music and clearances included?",
    a: "Yes. All Pillar originals ship with fully cleared music, signed releases for all on screen talent, and complete chain of title documentation.",
  },
  {
    q: "What about closed captions and localization?",
    a: "English captions are included. Subtitles and dubbing in additional languages can be arranged as part of the licensing agreement.",
  },
  {
    q: "Can we license a single territory?",
    a: "Absolutely. We license by territory, platform, and window. Exclusivity terms are negotiated per deal.",
  },
  {
    q: "Is pricing listed on this page?",
    a: "No. Pricing depends on territory, window, exclusivity, and platform. Request the catalog and our team will provide a tailored quote.",
  },
];

export default function LicensingPage() {
  return (
    <PageShell>
      <section className="pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-4 lg:px-12">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Licensing
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6 max-w-4xl">
            Own the window. Reach the audience.
          </h1>
          <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed mb-0 max-w-3xl">
            Pillar Productions licenses original series and documentaries to broadcasters, streamers, FAST platforms, airlines, hotels, and telcos worldwide.
          </p>
        </div>
      </section>

      {/* What we license */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            What we license
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-12 max-w-3xl">
            Cinematic originals, ready to travel.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <h3 className="text-xl font-semibold mb-4">Docu series</h3>
              <p className="text-neutral-400 leading-relaxed">
                Character driven documentary series built around sport, culture, and faith. Six to twelve episodes per season.
              </p>
            </div>
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <h3 className="text-xl font-semibold mb-4">Competition formats</h3>
              <p className="text-neutral-400 leading-relaxed">
                Original competition and reality formats with built in audience hooks and strong rewatch value.
              </p>
            </div>
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <h3 className="text-xl font-semibold mb-4">Light seasons</h3>
              <p className="text-neutral-400 leading-relaxed">
                Shorter run series produced at our hub locations. Efficient production, high volume, cinematic quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How windows work */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            How windows work
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-8 max-w-3xl">
            Structured for reach, priced for value.
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-neutral-400 leading-relaxed">
            <p>
              Every Pillar title is windowed by term, territory, exclusivity, and platform type. First window partners get exclusive access for a defined period. Second window and non exclusive deals follow, maximizing the library across markets.
            </p>
            <p>
              We structure deals so each buyer gets clear value without overlap. Territories are defined at the country or regional level. Platform exclusivity can be scoped to linear, SVOD, AVOD, FAST, or a combination.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Deliverables
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-12 max-w-3xl">
            Broadcast ready from day one.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <h3 className="text-xl font-semibold mb-4">Masters and QC</h3>
              <p className="text-neutral-400 leading-relaxed">
                ProRes and H.264 masters delivered with full QC reports. Additional codecs and specs available per platform requirements.
              </p>
            </div>
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <h3 className="text-xl font-semibold mb-4">Music clearance</h3>
              <p className="text-neutral-400 leading-relaxed">
                All music is fully cleared for worldwide broadcast. No additional licensing required by the buyer.
              </p>
            </div>
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <h3 className="text-xl font-semibold mb-4">Releases and chain of title</h3>
              <p className="text-neutral-400 leading-relaxed">
                Signed talent releases, location releases, and complete chain of title documentation included with every deal.
              </p>
            </div>
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
              <h3 className="text-xl font-semibold mb-4">Captions and localization</h3>
              <p className="text-neutral-400 leading-relaxed">
                English closed captions standard. Additional subtitle languages and dubbing available as part of the agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="catalog" className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32 text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6">
            Request the catalog or screener access.
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Get in touch and our team will send the current catalog, set up screener access, or both.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black text-sm font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-colors"
            >
              Get in Touch
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

      {/* FAQ */}
      <section className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-12 max-w-3xl">
            Common questions about licensing.
          </h2>
          <div className="max-w-3xl space-y-8">
            {faq.map((item, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold mb-3">{item.q}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
