"use client";
import { useState } from "react";
import { getContent } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export function SkillsSection({ lang }) {
  const { heading, subtitle, categories } = getContent(lang).skills;
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [containerRef, visible] = useReveal(0.1);
  const activeCategory = categories.find((cat) => cat.id === activeTab);

  return (
    <section id="skills" ref={containerRef}>
      <h2 className="text-3xl md:text-4xl font-black mb-2">
        {heading.title} <span className="text-rose-400">{heading.accent}</span>
      </h2>
      <p className="text-neutral-500 mb-8 text-sm">{subtitle}</p>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeTab === cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
              activeTab === cat.id
                ? "bg-rose-500/15 text-rose-400 border border-rose-500/30"
                : "text-neutral-500 hover:text-neutral-300 border border-transparent hover:bg-neutral-800/50"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <ul
        className={`flex flex-wrap gap-3 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {activeCategory?.items.map((skill) => (
          <li
            key={skill}
            className="text-sm font-mono bg-neutral-900 border border-neutral-800 text-neutral-300 px-4 py-2 rounded-lg hover:border-rose-500/40 hover:text-rose-300 transition-colors"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
