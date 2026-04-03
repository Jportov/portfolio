"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/portfolio";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/60 shadow-lg shadow-zinc-950/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-black text-lg tracking-tight">
          <span className="text-emerald-400">&lt;</span>
          VPortoDev
          <span className="text-emerald-400"> /&gt;</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-zinc-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-zinc-800/50"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/cvjoao.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 text-sm font-semibold bg-emerald-500 text-zinc-950 rounded-lg hover:bg-emerald-400 transition-colors"
          >
            Download CV
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 px-6 pb-6 space-y-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/cvjoao.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 text-sm font-semibold bg-emerald-500 text-zinc-950 rounded-lg"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
