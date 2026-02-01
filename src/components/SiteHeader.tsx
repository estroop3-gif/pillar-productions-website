"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/shows", label: "Shows" },
  { href: "/studio-model", label: "Studio Model" },
  { href: "/licensing", label: "Licensing" },
  { href: "/branded-series", label: "Branded Series" },
  { href: "/hubs", label: "Hubs" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="text-sm lg:text-base font-semibold tracking-[0.2em] uppercase"
          >
            Pillar Productions
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center px-5 py-2 bg-white text-black text-xs font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-colors"
            >
              Request Catalog
            </Link>
            <Link
              href="/branded-series#inquiry"
              className="inline-flex items-center justify-center px-5 py-2 border border-neutral-700 text-xs font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
            >
              Brand Inquiry
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-neutral-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 border-t border-neutral-900 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-neutral-400 hover:text-white transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-neutral-900">
                <Link
                  href="/catalog"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-black text-xs font-medium tracking-wide rounded-full hover:bg-neutral-200 transition-colors"
                >
                  Request Catalog
                </Link>
                <Link
                  href="/branded-series#inquiry"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-neutral-700 text-xs font-medium tracking-wide rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                >
                  Brand Inquiry
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
