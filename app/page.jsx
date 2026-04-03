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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-100">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-3xl" />
      </div>

      <Navbar />

      {/* ══════ HERO ══════ */}
      <header id="hero" className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 rounded-full px-4 py-1.5 text-sm text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            Disponível para oportunidades
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
            João Victor
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Porto
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Desenvolvedor <span className="text-emerald-400 font-semibold">Full Stack</span> construindo
            soluções escaláveis, seguras e inovadoras, do backend ao pixel final.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/20"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-zinc-700 text-zinc-300 font-bold rounded-xl hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
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
                className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
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
                Sobre <span className="text-emerald-400">mim</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Sou desenvolvedor Full Stack com formação pela EBAC e graduação em andamento em
                Engenharia de Software pela Anhanguera. Tenho experiência prática no desenvolvimento
                de sistemas web completos, desde APIs REST robustas com autenticação até interfaces
                responsivas e performáticas.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Meu perfil é proativo, analítico e orientado a resultados. Trabalho com metodologias
                ágeis e busco sempre entregar soluções escaláveis e bem arquitetadas. Atualmente
                focado em aprofundar meus conhecimentos em microsserviços, cloud e arquitetura de
                software.
              </p>
            </div>

            <div className="md:col-span-2 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-mono text-emerald-400 tracking-wider uppercase">
                Informações
              </h3>
              {INFO_ITEMS.map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between text-sm border-b border-zinc-800/60 pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-zinc-500">{k}</span>
                  <span className="text-zinc-300 font-medium">{v}</span>
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
            Projetos <span className="text-emerald-400">Relevantes</span>
          </h2>
          <p className="text-zinc-500 mb-8 text-sm">
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
            Formação <span className="text-emerald-400">& Cursos</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {EDUCATION.map((e) => (
              <div
                key={e.title}
                className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors"
              >
                <span className="text-emerald-400 text-xs font-mono">{e.period}</span>
                <h3 className="text-lg font-bold text-zinc-100 mt-1">{e.title}</h3>
                <p className="text-zinc-400 text-sm mt-1">{e.institution}</p>
                <span
                  className={`inline-block mt-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
                    e.status === "Em andamento"
                      ? "bg-amber-500/15 text-amber-400"
                      : "bg-emerald-500/15 text-emerald-400"
                  }`}
                >
                  {e.status}
                </span>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-zinc-300 mb-4">Cursos Complementares</h3>
          <div className="flex flex-wrap gap-2">
            {COURSES.map((c) => (
              <span
                key={c}
                className="text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1.5 rounded-lg"
              >
                {c}
              </span>
            ))}
          </div>
        </Section>

        {/* ══════ CONTACT ══════ */}
        <Section id="contact">
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Vamos <span className="text-emerald-400">conversar?</span>
            </h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Estou aberto a oportunidades como Desenvolvedor Full Stack.
              Vamos construir algo incrível juntos!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:victorportodev@gmail.com"
                className="px-6 py-3 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/20"
              >
                victorportodev@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/vportodev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-zinc-700 text-zinc-300 font-bold rounded-xl hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-zinc-600 text-sm mt-6">
              Tel.: (22) 99244-3293 · Rio das Ostras/RJ · Disponível para realocação
            </p>
          </div>
        </Section>
      </main>

      {/* ══════ FOOTER ══════ */}
      <footer className="border-t border-zinc-800/60 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <span>
            © {new Date().getFullYear()} João Victor Porto. Todos os direitos reservados.
          </span>
          <span className="flex items-center gap-1.5">
            Feito com{" "}
            <span className="text-emerald-400">Next.js</span>
            {" "}+{" "}
            <span className="text-emerald-400">Tailwind CSS</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
