"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 lg:px-12 py-3 flex items-center justify-between gap-4">
        <p className="text-sm text-neutral-300 hidden sm:block">
          Thinking about getting your brand into film or TV?
        </p>
        <div className="flex items-center gap-3 ml-auto">
          <Link
            href="/guide"
            className="px-5 py-2 bg-white text-black text-xs font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-colors whitespace-nowrap"
          >
            Free Guide
          </Link>
          <Link
            href="/schedule"
            className="px-5 py-2 border border-neutral-700 text-xs font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors whitespace-nowrap"
          >
            Book a Call
          </Link>
          <button
            onClick={() => setDismissed(true)}
            className="text-neutral-600 hover:text-neutral-400 transition-colors ml-1"
            aria-label="Dismiss"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
