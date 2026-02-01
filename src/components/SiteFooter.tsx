import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.15em] uppercase mb-4">
              Pillar Productions
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              A multi hub studio building owned series at scale.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-4">
              Pages
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/shows" className="text-sm text-neutral-400 hover:text-white transition-colors">Shows</Link>
              <Link href="/studio-model" className="text-sm text-neutral-400 hover:text-white transition-colors">Studio Model</Link>
              <Link href="/licensing" className="text-sm text-neutral-400 hover:text-white transition-colors">Licensing</Link>
              <Link href="/branded-series" className="text-sm text-neutral-400 hover:text-white transition-colors">Branded Series</Link>
              <Link href="/hubs" className="text-sm text-neutral-400 hover:text-white transition-colors">Hubs</Link>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-4">
              Ecosystem
            </p>
            <div className="flex flex-col gap-2">
              <a href="https://www.thebtcp.com" target="_blank" rel="noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors">Born to Create Project</a>
              <a href="https://www.secondwatchnetwork.com" target="_blank" rel="noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors">Second Watch Network</a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-neutral-500">
          <p>&copy; {year} Pillar Productions. All rights reserved.</p>
          <p>Tampa &middot; Abuja &middot; McAllen &middot; Jackson</p>
        </div>
      </div>
    </footer>
  );
}
