import { Navbar } from "./Navbar";
import { Section } from "./Section";
import { SkillsSection } from "./SkillsSection";
import { ProjectCard } from "./ProjectCard";
import { SocialIcon } from "./icons";
import { getContent } from "../data/portfolio";

export function HomePage({ lang }) {
  const { hero, about, projects, education, contact, social, footer } = getContent(lang);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-rose-500/30 selection:text-rose-100">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-rose-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-rose-500/[0.03] rounded-full blur-3xl" />
      </div>

      <Navbar lang={lang} />

      {/* ══════ HERO ══════ */}
      <header id="hero" className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-neutral-900/80 border border-neutral-800 rounded-full px-4 py-1.5 text-sm text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" aria-hidden="true" />
            {hero.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
            {hero.firstName}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">
              {hero.lastName}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto leading-relaxed">
            {hero.tagline.before}
            <span className="text-rose-400 font-semibold">{hero.tagline.highlight}</span>
            {hero.tagline.after}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 bg-rose-500 text-neutral-950 font-bold rounded-xl hover:bg-rose-400 transition-all hover:shadow-lg hover:shadow-rose-500/20"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-neutral-700 text-neutral-300 font-bold rounded-xl hover:border-rose-500/50 hover:text-rose-400 transition-all"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/40 transition-all"
              >
                <SocialIcon type={s.type} />
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-32 pb-32">
        {/* ══════ ABOUT ══════ */}
        <Section id="about">
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-3 space-y-5">
              <h2 className="text-3xl md:text-4xl font-black">
                {about.heading.title} <span className="text-rose-400">{about.heading.accent}</span>
              </h2>
              {about.paragraphs.map((p) => (
                <p key={p} className="text-neutral-400 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="md:col-span-2 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-mono text-rose-400 tracking-wider uppercase">
                {about.infoTitle}
              </h3>
              {about.info.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between text-sm border-b border-neutral-800/60 pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-neutral-500">{item.label}</span>
                  <span className="text-neutral-300 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ══════ SKILLS ══════ */}
        <SkillsSection lang={lang} />

        {/* ══════ PROJECTS ══════ */}
        <Section id="projects">
          <h2 className="text-3xl md:text-4xl font-black mb-2">
            {projects.heading.title}{" "}
            <span className="text-rose-400">{projects.heading.accent}</span>
          </h2>
          <p className="text-neutral-500 mb-8 text-sm">{projects.subtitle}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.items.map((p, i) => (
              <ProjectCard
                key={p.title}
                project={p}
                index={i}
                labels={{
                  featured: projects.featuredLabel,
                  github: projects.githubLabel,
                  live: projects.liveLabel,
                }}
              />
            ))}
          </div>
        </Section>

        {/* ══════ EDUCATION ══════ */}
        <Section id="education">
          <h2 className="text-3xl md:text-4xl font-black mb-8">
            {education.heading.title}{" "}
            <span className="text-rose-400">{education.heading.accent}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {education.items.map((e) => (
              <div
                key={e.title}
                className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 hover:border-rose-500/30 transition-colors"
              >
                <span className="text-rose-400 text-xs font-mono">{e.period}</span>
                <h3 className="text-lg font-bold text-neutral-100 mt-1">{e.title}</h3>
                <p className="text-neutral-400 text-sm mt-1">{e.institution}</p>
                <span
                  className={`inline-block mt-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
                    e.status === "inProgress"
                      ? "bg-amber-500/15 text-amber-400"
                      : "bg-emerald-500/15 text-emerald-400"
                  }`}
                >
                  {education.statusLabels[e.status]}
                </span>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-neutral-300 mb-4">{education.coursesTitle}</h3>
          <div className="flex flex-wrap gap-2">
            {education.courses.map((c) => (
              <span
                key={c}
                className="text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-400 px-3 py-1.5 rounded-lg"
              >
                {c}
              </span>
            ))}
          </div>
        </Section>

        {/* ══════ CONTACT ══════ */}
        <Section id="contact">
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              {contact.heading.title}{" "}
              <span className="text-rose-400">{contact.heading.accent}</span>
            </h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">{contact.text}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="px-6 py-3 bg-rose-500 text-neutral-950 font-bold rounded-xl hover:bg-rose-400 transition-all hover:shadow-lg hover:shadow-rose-500/20"
              >
                {contact.email}
              </a>
              <a
                href={contact.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-neutral-700 text-neutral-300 font-bold rounded-xl hover:border-rose-500/50 hover:text-rose-400 transition-all"
              >
                {contact.linkedin.label}
              </a>
            </div>
            <p className="text-neutral-600 text-sm mt-6">{contact.details}</p>
          </div>
        </Section>
      </main>

      {/* ══════ FOOTER ══════ */}
      <footer className="border-t border-neutral-800/60 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <span>
            © {new Date().getFullYear()} {footer.rights}
          </span>
          <span className="flex items-center gap-1.5">
            {footer.madeWith}{" "}
            <span className="text-rose-400">Next.js</span>
            {" "}+{" "}
            <span className="text-rose-400">Tailwind CSS</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
