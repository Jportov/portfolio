"use client";
import { useReveal } from "../hooks/useReveal";
import { GithubIcon, ExternalLinkIcon } from "./icons";

export function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`group relative bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 md:p-8
        hover:border-emerald-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/5
        ${project.featured ? "md:col-span-2" : ""}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {project.featured && (
        <span className="absolute -top-3 left-6 bg-emerald-500 text-zinc-950 text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
          Destaque
        </span>
      )}

      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-emerald-400 text-xs font-mono tracking-wider uppercase">
            {project.tag}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-zinc-100 mt-1">
            {project.title}
          </h3>
        </div>

        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-800 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors text-zinc-400"
              aria-label={`GitHub — ${project.title}`}
            >
              <GithubIcon />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-800 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors text-zinc-400"
              aria-label={`Demo ao vivo — ${project.title}`}
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>

      <p className="text-zinc-400 leading-relaxed mb-5 text-sm md:text-base">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono bg-zinc-800/80 text-emerald-300/80 px-2.5 py-1 rounded-md border border-zinc-700/50"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
