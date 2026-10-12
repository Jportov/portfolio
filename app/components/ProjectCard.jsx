"use client";
import { useReveal } from "../hooks/useReveal";
import { GithubIcon, ExternalLinkIcon } from "./icons";

export function ProjectCard({ project, index, labels }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`group relative bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-8
        hover:border-rose-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-500/5
        ${project.featured ? "md:col-span-2" : ""}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {project.featured && (
        <span className="absolute -top-3 left-6 bg-rose-500 text-neutral-950 text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
          {labels.featured}
        </span>
      )}

      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-rose-400 text-xs font-mono tracking-wider uppercase">
            {project.tag}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-neutral-100 mt-1">
            {project.title}
          </h3>
        </div>

        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-800 hover:bg-rose-500/20 hover:text-rose-400 transition-colors text-neutral-400"
              aria-label={`${labels.github} — ${project.title}`}
            >
              <GithubIcon />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-800 hover:bg-rose-500/20 hover:text-rose-400 transition-colors text-neutral-400"
              aria-label={`${labels.live} — ${project.title}`}
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>

      <p className="text-neutral-400 leading-relaxed mb-5 text-sm md:text-base">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono bg-neutral-800/80 text-rose-300/80 px-2.5 py-1 rounded-md border border-neutral-700/50"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
