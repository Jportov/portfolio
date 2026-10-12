"use client";
import { useState } from "react";
import { SKILLS } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [containerRef, visible] = useReveal(0.1);

  return (
    <section id="skills" ref={containerRef}>
      <h2 className="text-3xl md:text-4xl font-black mb-2">
        Hard <span className="text-emerald-400">Skills</span>
      </h2>
      <p className="text-zinc-500 mb-8 text-sm">
        Tecnologias que uso nos projetos abaixo.
      </p>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2" role="tablist">
        {Object.keys(SKILLS).map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeTab === cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
              activeTab === cat
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                : "text-zinc-500 hover:text-zinc-300 border border-transparent hover:bg-zinc-800/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul
        className={`flex flex-wrap gap-3 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {SKILLS[activeTab]?.map((skill) => (
          <li
            key={skill}
            className="text-sm font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 px-4 py-2 rounded-lg hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
