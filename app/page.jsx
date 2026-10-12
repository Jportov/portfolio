import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectCard } from "./components/ProjectCard";
import { SocialIcon } from "./components/icons";
import {
  PROJECTS,
  EDUCATION,
  COURSES,
  SOCIAL_LINKS,
  INFO_ITEMS,
} from "./data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-rose-500/30 selection:text-rose-100">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-rose-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-rose-500/[0.03] rounded-full blur-3xl" />
      </div>

      <Navbar />

      {/* ══════ HERO ══════ */}
      <header id="hero" className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-neutral-900/80 border border-neutral-800 rounded-full px-4 py-1.5 text-sm text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" aria-hidden="true" />
            Disponível para oportunidades
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
            João Victor
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">
              Porto
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Desenvolvedor <span className="text-rose-400 font-semibold">Frontend</span> com foco em
            React, Next.js e TypeScript, construindo aplicações da interface ao deploy.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 bg-rose-500 text-neutral-950 font-bold rounded-xl hover:bg-rose-400 transition-all hover:shadow-lg hover:shadow-rose-500/20"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-neutral-700 text-neutral-300 font-bold rounded-xl hover:border-rose-500/50 hover:text-rose-400 transition-all"
            >
              Entrar em Contato
            </a>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            {SOCIAL_LINKS.map((s) => (
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
                Sobre <span className="text-rose-400">mim</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                Sou desenvolvedor Frontend com foco em React, Next.js e TypeScript. Me formei no
                curso Desenvolvedor Full Stack Java da EBAC e estou cursando Engenharia de Software
                na Anhanguera.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Desenvolvo aplicações da interface ao deploy, com gerenciamento de estado (Redux
                Toolkit, React Query), testes automatizados (Vitest, Jest, React Testing Library) e
                integração contínua no GitHub Actions. Também tenho base em backend com Django e
                Spring Boot.
              </p>
            </div>

            <div className="md:col-span-2 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-mono text-rose-400 tracking-wider uppercase">
                Informações
              </h3>
              {INFO_ITEMS.map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between text-sm border-b border-neutral-800/60 pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-neutral-500">{k}</span>
                  <span className="text-neutral-300 font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ══════ SKILLS ══════ */}
        <SkillsSection />

        {/* ══════ PROJECTS ══════ */}
        <Section id="projects">
          <h2 className="text-3xl md:text-4xl font-black mb-2">
            Projetos <span className="text-rose-400">Relevantes</span>
          </h2>
          <p className="text-neutral-500 mb-8 text-sm">
            Uma seleção de projetos que demonstram minhas habilidades técnicas.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </Section>

        {/* ══════ EDUCATION ══════ */}
        <Section id="education">
          <h2 className="text-3xl md:text-4xl font-black mb-8">
            Formação <span className="text-rose-400">& Cursos</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {EDUCATION.map((e) => (
              <div
                key={e.title}
                className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 hover:border-rose-500/30 transition-colors"
              >
                <span className="text-rose-400 text-xs font-mono">{e.period}</span>
                <h3 className="text-lg font-bold text-neutral-100 mt-1">{e.title}</h3>
                <p className="text-neutral-400 text-sm mt-1">{e.institution}</p>
                <span
                  className={`inline-block mt-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
                    e.status === "Em andamento"
                      ? "bg-amber-500/15 text-amber-400"
                      : "bg-rose-500/15 text-rose-400"
                  }`}
                >
                  {e.status}
                </span>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-neutral-300 mb-4">Cursos Complementares</h3>
          <div className="flex flex-wrap gap-2">
            {COURSES.map((c) => (
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
              Vamos <span className="text-rose-400">conversar?</span>
            </h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              Estou aberto a oportunidades como Desenvolvedor Frontend,
              remotas ou com realocação.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:victorportodev@gmail.com"
                className="px-6 py-3 bg-rose-500 text-neutral-950 font-bold rounded-xl hover:bg-rose-400 transition-all hover:shadow-lg hover:shadow-rose-500/20"
              >
                victorportodev@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/vportodev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-neutral-700 text-neutral-300 font-bold rounded-xl hover:border-rose-500/50 hover:text-rose-400 transition-all"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-neutral-600 text-sm mt-6">
              Tel.: (22) 99244-3293 · Rio das Ostras/RJ · Remoto ou realocação
            </p>
          </div>
        </Section>
      </main>

      {/* ══════ FOOTER ══════ */}
      <footer className="border-t border-neutral-800/60 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <span>
            © {new Date().getFullYear()} João Victor Porto. Todos os direitos reservados.
          </span>
          <span className="flex items-center gap-1.5">
            Feito com{" "}
            <span className="text-rose-400">Next.js</span>
            {" "}+{" "}
            <span className="text-rose-400">Tailwind CSS</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
