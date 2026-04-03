"use client";
import { useState } from "react";
import { SKILLS } from "../data/portfolio";
import { SkillBar } from "./SkillBar";
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
        Nível de proficiência baseado em experiência prática em projetos.
      </p>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {Object.keys(SKILLS).map((cat) => (
          <button
            key={cat}
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

      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
        {SKILLS[activeTab]?.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={i}
            visible={visible}
          />
        ))}
      </div>
    </section>
  );
}
