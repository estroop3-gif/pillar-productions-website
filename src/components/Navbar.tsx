"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white tracking-tight">
              PILLAR<span className="text-amber-500">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#work" className="text-gray-300 hover:text-white transition-colors">
              Work
            </Link>
            <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#contact" className="bg-amber-500 text-black px-6 py-2 rounded hover:bg-amber-400 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="#work" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                Work
              </Link>
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="#contact" className="bg-amber-500 text-black px-6 py-2 rounded hover:bg-amber-400 transition-colors font-medium text-center" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
