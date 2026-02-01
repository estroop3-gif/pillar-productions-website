import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tampa, Florida – Headquarters | Pillar Productions",
  description:
    "Pillar Productions headquarters in Tampa, Florida. Our primary production hub on the Gulf Coast.",
};

export default function TampaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="/"
              className="text-sm lg:text-base font-semibold tracking-[0.2em] uppercase"
            >
              Pillar Productions
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/#locations"
                className="text-sm text-neutral-400 hover:text-white transition-colors tracking-wide"
              >
                All Locations
              </Link>
              <Link
                href="/#contact"
                className="text-sm text-neutral-400 hover:text-white transition-colors tracking-wide"
              >
                Contact
              </Link>
            </nav>
            <nav className="flex md:hidden">
              <Link
                href="/"
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="pt-32 lg:pt-40 pb-24 lg:pb-32">
          <div className="max-w-6xl mx-auto px-4 lg:px-12">
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
              Headquarters
            </p>
            <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6">
              Tampa, Florida
            </h1>
            <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed mb-10 max-w-3xl">
              Tampa is where Pillar Productions was born. Located on Florida&apos;s Gulf Coast, our headquarters serves as the central hub for development, production, and post production across all projects.
            </p>
          </div>
        </section>

        <section className="border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Role
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  Central command
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  All projects flow through Tampa. From pre production planning to final delivery, this is where creative decisions are made and the Pillar standard is set.
                </p>
              </div>
              <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-900">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Focus
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  Gulf Coast stories
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  From motorsports culture to coastal communities, Tampa gives us access to a rich landscape of stories shaped by sport, speed, faith, and the energy of Florida.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-900">
          <div className="max-w-6xl mx-auto px-4 lg:px-12 py-24 lg:py-32 text-center">
            <p className="text-lg text-neutral-400 mb-8">
              Want to work with our Tampa team?
            </p>
            <a
              href="mailto:estroop3@gmail.com?subject=Pillar%20Productions%20Tampa%20Inquiry"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-sm font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-neutral-500">
            <p>
              &copy; {new Date().getFullYear()} Pillar Productions. All rights
              reserved.
            </p>
            <p>Tampa &middot; Nigeria &middot; McAllen &middot; Jackson</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
