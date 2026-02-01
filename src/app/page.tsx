import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main className="pt-20">
        {/* Hero */}
        <section className="min-h-[calc(100vh-5rem)] flex items-center">
          <div className="max-w-6xl mx-auto px-4 lg:px-12 py-16 lg:py-24 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
                  Multi hub studio
                </p>
                <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6">
                  Stories that outlive the moment.
                </h1>
                <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed mb-10 max-w-xl">
                  Pillar Productions is a multi hub studio building owned series at scale. Cinematic, character driven, and spiritually aware work for film, television, and streaming.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/catalog"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-colors"
                  >
                    Request Catalog
                  </Link>
                  <Link
                    href="/branded-series#inquiry"
                    className="inline-flex items-center justify-center px-6 py-3 border border-neutral-700 text-sm font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                  >
                    Brand Inquiry
                  </Link>
                </div>
              </div>
              <div className="lg:justify-self-end w-full lg:w-96">
                <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-3xl p-4 border border-neutral-800">
                  <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-4 px-2">
                    Slate preview
                  </p>
                  <div className="aspect-video rounded-2xl overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/UC0JFH25mag"
                      title="Pillar Productions Slate Preview"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Pillar Works */}
        <section className="border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
              How Pillar works
            </p>
            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-12 max-w-3xl">
              Three engines. One studio.
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <h3 className="text-xl font-semibold mb-4">HQ</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Tampa is the control tower where flagship shows are developed, finished, and quality controlled.
                </p>
                <Link href="/studio-model" className="text-sm text-neutral-500 hover:text-white transition-colors underline underline-offset-4">
                  Learn more
                </Link>
              </div>
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <h3 className="text-xl font-semibold mb-4">Hubs</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Skeleton crews in Abuja, McAllen, and Jackson produce light seasons with local stories at volume.
                </p>
                <Link href="/studio-model" className="text-sm text-neutral-500 hover:text-white transition-colors underline underline-offset-4">
                  Learn more
                </Link>
              </div>
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <h3 className="text-xl font-semibold mb-4">Windows</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Every title is licensed through structured windows by territory, platform, and exclusivity.
                </p>
                <Link href="/studio-model" className="text-sm text-neutral-500 hover:text-white transition-colors underline underline-offset-4">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
              About Pillar
            </p>
            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-8 max-w-3xl">
              Built for a new era of storytelling.
            </h2>
            <div className="max-w-3xl space-y-6">
              <p className="text-lg text-neutral-400 leading-relaxed">
                Pillar Productions exists for stories that last longer than the scroll. We develop and produce original series, documentaries, and features that are grounded, character driven, and spiritually aware without feeling preachy.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                From early development through delivery, our small, focused team handles concept, production, and post with an eye on both artistry and distribution so that every project can live on platforms, networks, or events from day one.
              </p>
            </div>
          </div>
        </section>

        {/* What we make */}
        <section className="border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
              What we make
            </p>
            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-12 max-w-4xl">
              Series, documentaries, and features with cinematic weight.
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Scripted
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  Narrative projects
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  Grounded narrative stories with cinematic visuals and emotional weight, from pilots and short form to full seasons and features.
                </p>
              </div>
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Documentary
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  Docu series and films
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  Docu follow and documentary projects that live up close with real people, real stakes, and real transformation.
                </p>
              </div>
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Branded and live
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  Partners and events
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  Cinematic branded content, live events, and series for partners who want visual excellence and meaningful storytelling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Selected projects */}
        <section id="work" className="border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
              Selected projects
            </p>
            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-12 max-w-3xl">
              A slate shaped by sport, speed, and faith.
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900 flex flex-col">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Docu series &middot; Flagship
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  Coastal Torque
                </h3>
                <p className="text-neutral-400 leading-relaxed mb-6 flex-grow">
                  A motorsports docu series set in Sarasota, following builders, drivers, and dreamers chasing speed, community, and calling on and off the track.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-neutral-600">
                    Status: In production
                  </p>
                  <div className="bg-neutral-900 rounded-full px-3 py-1 text-xs text-neutral-600 cursor-not-allowed">
                    Trailer coming soon
                  </div>
                </div>
              </div>
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900 flex flex-col">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Competition reality &middot; Flagship
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  Serve It Up
                </h3>
                <p className="text-neutral-400 leading-relaxed mb-6 flex-grow">
                  Twelve contestants, six pros and six amateurs, compete across a full season of pickleball. Pros and amateurs live in two separate houses. Each week, every pro is paired with a different beginner. Every third episode culminates in a tournament. Point standings are never revealed to the players. At the end, the top scoring pro and the top scoring amateur split a $10,000 prize.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-neutral-600">
                    Status: In development
                  </p>
                  <div className="bg-neutral-900 rounded-full px-3 py-1 text-xs text-neutral-600 cursor-not-allowed">
                    Trailer coming soon
                  </div>
                </div>
              </div>
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900 flex flex-col">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Mini documentary series
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  Serving for Greece
                </h3>
                <p className="text-neutral-400 leading-relaxed mb-6 flex-grow">
                  A six part docu series following Niko and Christie Fronimos as they represent Greece at the Pickleball World Cup, blending elite sport, family, and faith.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-neutral-600">
                    Status: In production
                  </p>
                  <div className="bg-neutral-900 rounded-full px-3 py-1 text-xs text-neutral-600 cursor-not-allowed">
                    Trailer coming soon
                  </div>
                </div>
              </div>
            </div>

            {/* Proof element: one sheet + catalog access */}
            <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-2">
                  One sheets and press materials
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  Downloadable one sheets, episode guides, and technical specs are available through the catalog.
                </p>
              </div>
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-colors whitespace-nowrap"
              >
                Request Catalog
              </Link>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
              Approach
            </p>
            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6 max-w-3xl">
              Lean crews, clear vision, eternal stakes.
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-12 max-w-3xl">
              We keep our teams focused and our sets intentional. Every project is built around the story, the people, and the audience that will live with it.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Cinematic by design
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  Visuals with intention
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  Strong composition, deliberate camera choices, and thoughtful color for work that feels theatrical even on a phone.
                </p>
              </div>
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  People first
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  Trust on and off camera
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  We build relationships with cast, crew, and participants so performances and moments feel honest instead of manufactured.
                </p>
              </div>
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Faith aware
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  Spiritually grounded stories
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  We are unafraid to explore belief, doubt, and redemption in ways that resonate with both faith audiences and those who are simply curious.
                </p>
              </div>
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Built for distribution
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  Platform ready from day one
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  Runtimes, break points, and structure are designed with networks and platforms in mind so projects are ready to travel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <section id="ecosystem" className="border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
              Ecosystem
            </p>
            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6 max-w-3xl">
              More than a production company.
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-12 max-w-3xl">
              Pillar Productions is part of a broader ecosystem serving filmmakers, audiences, and partners through formation, community, and distribution.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900 flex flex-col">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Formation and retreats
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  The Born to Create Project
                </h3>
                <p className="text-neutral-400 leading-relaxed mb-4 flex-grow">
                  Born to Create Project is a filmmaking and storytelling retreat experience for faith driven creatives. It is a sacred space for filmmakers, photographers, and storytellers to encounter God, refine their craft, and release work that carries eternal weight.
                </p>
                <p className="text-sm text-neutral-500 italic mb-6">
                  &ldquo;Where creativity meets calling.&rdquo;
                </p>
                <a
                  href="https://www.thebtcp.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-neutral-700 text-sm font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors w-fit"
                >
                  Visit thebtcp.com
                </a>
              </div>
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900 flex flex-col">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Network and distribution
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  Second Watch Network
                </h3>
                <p className="text-neutral-400 leading-relaxed mb-6 flex-grow">
                  Second Watch Network is a developing TV and streaming ecosystem for cinematic, spiritually aware storytelling. It is designed as a home for originals, series, and films that take audience formation as seriously as entertainment.
                </p>
                <a
                  href="https://www.secondwatchnetwork.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-neutral-700 text-sm font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors w-fit"
                >
                  Visit secondwatchnetwork.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32 text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
              Get started
            </p>
            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6 max-w-3xl mx-auto">
              Ready to license, partner, or build?
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you are a broadcaster looking for content, a brand exploring a series, or a partner interested in building a hub, we want to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-sm font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-colors"
              >
                Request Catalog
              </Link>
              <Link
                href="/branded-series#inquiry"
                className="inline-flex items-center justify-center px-8 py-4 border border-neutral-700 text-sm font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
              >
                Brand Inquiry
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-neutral-700 text-sm font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
