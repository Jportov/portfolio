"use client";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Formação", href: "#education" },
  { label: "Contato", href: "#contact" },
];

const SKILLS = {
  Frontend: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Vue.js", level: 65 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Angular", level: 55 },
  ],
  Backend: [
    { name: "Python / Django", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Java / Spring Boot", level: 70 },
    { name: "APIs REST", level: 90 },
    { name: "JWT / Auth", level: 80 },
  ],
  "DevOps & Tools": [
    { name: "Git / GitHub", level: 90 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 55 },
    { name: "PostgreSQL / MySQL", level: 80 },
    { name: "Jest / Cypress", level: 65 },
  ],
};

const PROJECTS = [
  {
    title: "Flix App / Flix API",
    tag: "Full Stack",
    description:
      "Sistema completo de filmes com API em Python (Django + DRF), autenticação JWT, documentação interativa e frontend com Streamlit. Tabelas dinâmicas com AgGrid para CRUD completo.",
    tech: ["Python", "Django", "DRF", "Streamlit", "JWT", "AgGrid"],
    github: "https://github.com/Jportov",
    live: null,
    featured: true,
  },
  {
    title: "Game Turf",
    tag: "Frontend",
    description:
      "Aplicação web de gerenciamento de jogos construída com React e Redux. Estado centralizado garantindo previsibilidade, com interface responsiva e moderna usando Styled Components.",
    tech: ["React", "Redux", "Styled Components", "JavaScript"],
    github: "https://github.com/Jportov",
    live: null,
    featured: true,
  },
  {
    title: "E-food",
    tag: "Frontend",
    description:
      "Plataforma de entregas com interface responsiva em React. Listagem de pratos com imagens, descrição e faixa de preços, seguindo boas práticas de design e UX.",
    tech: ["React", "CSS", "UX Design", "API REST"],
    github: "https://github.com/Jportov",
    live: null,
    featured: false,
  },
  {
    title: "Portfólio Pessoal",
    tag: "Full Stack",
    description:
      "Este portfólio! Construído com Next.js 14, Tailwind CSS e TypeScript. SEO otimizado, responsivo e com design dark mode moderno.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    github: "https://github.com/Jportov/portfolio",
    live: "https://vportodev.vercel.app",
    featured: false,
  },
];

const EDUCATION = [
  {
    period: "2025 – 2029",
    title: "Engenharia de Software",
    institution: "Anhanguera",
    status: "Em andamento",
  },
  {
    period: "2024",
    title: "Desenvolvedor Full Stack Java",
    institution: "EBAC – Escola Britânica de Artes Criativas e Tecnologia",
    status: "Concluído",
  },
];

const COURSES = [
  "Django Master – PycodeBR",
  "IA Master – PycodeBR",
  "Docker – PycodeBR",
  "Inteligência Artificial – EBAC",
  "Integration Master – PycodeBR",
];

/* ── Animated section hook ── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Section({ id, children, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  );
}

/* ── Skill bar component ── */
function SkillBar({ name, level, delay }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-zinc-300 font-medium">{name}</span>
        <span className="text-emerald-400 font-mono text-xs">{level}%</span>
      </div>
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${level}%` : "0%",
            transitionDelay: `${delay * 80}ms`,
            background: `linear-gradient(90deg, #10b981 0%, #34d399 ${level}%)`,
          }}
        />
      </div>
    </div>
  );
}

/* ── Project card ── */
function ProjectCard({ project, index }) {
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
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-800 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors text-zinc-400"
              aria-label="Live demo"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
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

/* ════════════════════════════════════════════════════
   MAIN PAGE
   ════════════════════════════════════════════════════ */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Frontend");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-100">
      {/* ── Ambient glow ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-3xl" />
      </div>

      {/* ══════ NAVBAR ══════ */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/60 shadow-lg shadow-zinc-950/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a
            href="#hero"
            className="font-black text-lg tracking-tight"
          >
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
              className="ml-3 px-4 py-2 text-sm font-semibold bg-emerald-500 text-zinc-950 rounded-lg hover:bg-emerald-400 transition-colors"
            >
              Download CV
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
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
              className="inline-block mt-3 px-4 py-2 text-sm font-semibold bg-emerald-500 text-zinc-950 rounded-lg"
            >
              Download CV
            </a>
          </div>
        )}
      </nav>

      {/* ══════ HERO ══════ */}
      <header id="hero" className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 rounded-full px-4 py-1.5 text-sm text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
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
            soluções escaláveis, seguras e inovadoras — do backend ao pixel final.
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
          {/* Social links */}
          <div className="flex justify-center gap-4 pt-4">
            {[
              {
                href: "https://github.com/Jportov",
                label: "GitHub",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                ),
              },
              {
                href: "https://linkedin.com/in/vportodev",
                label: "LinkedIn",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                href: "mailto:victorportodev@gmail.com",
                label: "Email",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              >
                {s.icon}
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
                de sistemas web completos — desde APIs REST robustas com autenticação até interfaces
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
              {[
                ["Local", "Rio das Ostras/RJ"],
                ["Formação", "Eng. de Software"],
                ["Foco", "Full Stack"],
                ["Inglês", "Intermediário"],
                ["Disponível", "Realocação"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm border-b border-zinc-800/60 pb-2 last:border-0 last:pb-0">
                  <span className="text-zinc-500">{k}</span>
                  <span className="text-zinc-300 font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ══════ SKILLS ══════ */}
        <Section id="skills">
          <h2 className="text-3xl md:text-4xl font-black mb-2">
            Hard <span className="text-emerald-400">Skills</span>
          </h2>
          <p className="text-zinc-500 mb-8 text-sm">
            Nível de proficiência baseado em experiência prática em projetos.
          </p>

          {/* Tabs */}
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
            {SKILLS[activeTab]?.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={i} />
            ))}
          </div>
        </Section>

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
            Feito com
            <span className="text-emerald-400">Next.js</span>
            +
            <span className="text-emerald-400">Tailwind CSS</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
