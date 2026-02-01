import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nigeria – Coming Soon | Pillar Productions",
  description:
    "Pillar Productions Nigeria. Bringing cinematic, spiritually aware storytelling to West Africa. Coming soon.",
};

export default function NigeriaPage() {
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

      <main className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-6">
            West Africa
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6">
            Nigeria
          </h1>
          <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Pillar Productions is expanding into one of the world&apos;s most vibrant storytelling markets. More details coming soon.
          </p>
          <p className="text-sm tracking-[0.2em] uppercase text-neutral-600 mb-12">
            Coming soon
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-neutral-700 text-sm font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
          >
            Back to home
          </Link>
        </div>
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
