"use client";
import { useState, useEffect, useRef } from "react";
import { NAV_LINKS, CV_LINKS } from "../data/portfolio";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const cvRef = useRef(null);

  useEffect(() => {
    if (!cvOpen) return;
    const onPointerDown = (e) => {
      if (!cvRef.current?.contains(e.target)) setCvOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setCvOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [cvOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/60 shadow-lg shadow-neutral-950/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-black text-lg tracking-tight">
          <span className="text-rose-400">&lt;</span>
          VPortoDev
          <span className="text-rose-400"> /&gt;</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-neutral-400 hover:text-rose-400 transition-colors rounded-lg hover:bg-neutral-800/50"
            >
              {l.label}
            </a>
          ))}
          <div className="relative ml-3" ref={cvRef}>
            <button
              type="button"
              onClick={() => setCvOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={cvOpen}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-rose-500 text-neutral-950 rounded-lg hover:bg-rose-400 transition-colors"
            >
              Download CV
              <svg
                className={`w-4 h-4 transition-transform ${cvOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {cvOpen && (
              <div className="absolute right-0 mt-2 w-48 p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl shadow-xl shadow-neutral-950/50">
                {CV_LINKS.map((cv) => (
                  <a
                    key={cv.href}
                    href={cv.href}
                    hrefLang={cv.lang}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setCvOpen(false)}
                    className="flex items-center justify-between px-3 py-2 text-sm text-neutral-300 hover:text-rose-400 hover:bg-neutral-800/50 rounded-lg transition-colors"
                  >
                    {cv.label}
                    <span className="text-xs font-mono text-neutral-500">PDF</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-neutral-400 hover:text-neutral-100"
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
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800 px-6 pb-6 space-y-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm text-neutral-300 hover:text-rose-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <p className="pt-4 pb-2 text-xs font-mono tracking-wider uppercase text-neutral-500">
            Download CV
          </p>
          <div className="flex gap-2">
            {CV_LINKS.map((cv) => (
              <a
                key={cv.href}
                href={cv.href}
                hrefLang={cv.lang}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center px-4 py-2.5 text-sm font-semibold bg-rose-500 text-neutral-950 rounded-lg"
              >
                {cv.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
