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
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Redux Toolkit",
    "React Query",
    "Material-UI",
    "Tailwind CSS",
    "Styled Components",
    "Design Responsivo",
    "Acessibilidade (ARIA)",
  ],
  "Testes e Qualidade": [
    "Testes unitários",
    "Testes de integração",
    "Vitest",
    "Jest",
    "React Testing Library",
    "Storybook",
    "ESLint",
    "Prettier",
  ],
  Backend: [
    "Node.js",
    "Python",
    "Django",
    "Django REST Framework",
    "Java",
    "Spring Boot",
    "APIs REST",
    "JWT",
    "OAuth",
    "OpenAPI (Swagger)",
    "Supabase",
    "PostgreSQL",
  ],
  Ferramentas: ["Git", "GitHub Actions", "CI/CD", "Vercel", "Figma"],
};

export const PROJECTS = [
  {
    title: "Painel de Gestão de Usuários",
    tag: "Frontend",
    description:
      "Painel CRUD completo entregue em 24 horas para teste técnico de vaga React Júnior, com todos os requisitos obrigatórios e os 9 diferenciais. Estado global com Redux Toolkit, cache de servidor com React Query, testes unitários e de integração com Vitest e React Testing Library, CI no GitHub Actions, code splitting, acessibilidade, dark mode e Storybook.",
    tech: ["React", "TypeScript", "Redux Toolkit", "React Query", "MUI", "Vitest", "GitHub Actions"],
    github: null,
    live: "https://test-react-five-lake.vercel.app",
    featured: true,
  },
  {
    title: "GameTracker",
    tag: "Frontend",
    description:
      "Aplicação web para acompanhar jogos, com autenticação OAuth, banco de dados no Supabase e integração com a API RAWG.",
    tech: ["Next.js", "TypeScript", "Supabase", "RAWG API", "OAuth"],
    github: "https://github.com/Jportov/gametracker",
    live: "https://gametracker-livid.vercel.app",
    featured: true,
  },
  {
    title: "Flix App / Flix API",
    tag: "Full Stack",
    description:
      "API REST em Python (Django + DRF) com CRUD de filmes e atores, autenticação JWT e documentação interativa OpenAPI. Frontend em Streamlit com tabelas AgGrid para cadastro, edição e listagem.",
    tech: ["Python", "Django", "DRF", "JWT", "OpenAPI", "Streamlit"],
    github: "https://github.com/Jportov/flix-api",
    live: null,
    featured: false,
  },
  {
    title: "E-food",
    tag: "Frontend",
    description:
      "Plataforma de entregas com interface responsiva em React. Listagem de pratos com imagens, descrição e faixa de preços.",
    tech: ["React", "TypeScript", "API REST"],
    github: "https://github.com/Jportov/efood",
    live: "https://efood-fet2.vercel.app",
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
    period: "Out 2024",
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
  ["Foco", "Frontend"],
  ["Inglês", "Intermediário"],
  ["Disponível", "Remoto e realocação"],
];
