export const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Formação", href: "#education" },
  { label: "Contato", href: "#contact" },
];

export const SKILLS = {
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

export const PROJECTS = [
  {
    title: "Flix App / Flix API",
    tag: "Full Stack",
    description:
      "Sistema completo de filmes com API em Python (Django + DRF), autenticação JWT, documentação interativa e frontend com Streamlit. Tabelas dinâmicas com AgGrid para CRUD completo.",
    tech: ["Python", "Django", "DRF", "Streamlit", "JWT", "AgGrid"],
    github: "https://github.com/Jportov/flix-api",
    live: null,
    featured: true,
  },
  {
    title: "GameTracker",
    tag: "Frontend",
    description:
      "Aplicação web de gerenciamento de jogos construída com React e Redux. Estado centralizado garantindo previsibilidade, com interface responsiva e moderna usando Styled Components.",
    tech: ["React", "Redux", "Styled Components", "JavaScript"],
    github: "https://github.com/Jportov/gametracker",
    live: null,
    featured: true,
  },
  {
    title: "E-food",
    tag: "Frontend",
    description:
      "Plataforma de entregas com interface responsiva em React. Listagem de pratos com imagens, descrição e faixa de preços, seguindo boas práticas de design e UX.",
    tech: ["React", "CSS", "UX Design", "API REST"],
    github: "https://github.com/Jportov/efood",
    live: null,
    featured: false,
  },
];

export const EDUCATION = [
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

export const COURSES = [
  "Django Master – PycodeBR",
  "IA Master – PycodeBR",
  "Docker – PycodeBR",
  "Inteligência Artificial – EBAC",
  "Integration Master – PycodeBR",
];

export const SOCIAL_LINKS = [
  {
    href: "https://github.com/Jportov",
    label: "GitHub",
    type: "github",
  },
  {
    href: "https://linkedin.com/in/vportodev",
    label: "LinkedIn",
    type: "linkedin",
  },
  {
    href: "mailto:victorportodev@gmail.com",
    label: "Email",
    type: "email",
  },
];

export const INFO_ITEMS = [
  ["Local", "Rio das Ostras/RJ"],
  ["Formação", "Eng. de Software"],
  ["Foco", "Full Stack"],
  ["Inglês", "Intermediário"],
  ["Disponível", "Realocação"],
];
