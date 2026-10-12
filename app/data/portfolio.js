// Todo o conteúdo do site fica aqui. Textos que mudam com o idioma usam
// o formato { en: "...", pt: "..." }; o resto vale para os dois idiomas.

export const SITE_URL = "https://portfolio-six-beige-72.vercel.app";

export const DEFAULT_LOCALE = "en";

export const LOCALES = {
  en: { path: "/", htmlLang: "en", ogLocale: "en_US", short: "EN", name: "English" },
  pt: { path: "/pt", htmlLang: "pt-BR", ogLocale: "pt_BR", short: "PT", name: "Português" },
};

const CV_FILES = {
  en: "/cv-joao-porto-en.pdf",
  pt: "/cv-joao-porto-pt.pdf",
};

const CONTENT = {
  meta: {
    title: {
      en: "João Victor Porto | Frontend Developer",
      pt: "João Victor Porto | Desenvolvedor Frontend",
    },
    description: {
      en: "Portfolio of João Victor Porto, a Frontend Developer focused on React, Next.js and TypeScript.",
      pt: "Portfólio de João Victor Porto, Desenvolvedor Frontend com foco em React, Next.js e TypeScript.",
    },
    keywords: [
      "desenvolvedor frontend",
      "frontend developer",
      "react",
      "next.js",
      "typescript",
      "João Victor Porto",
    ],
    author: "João Victor Porto",
    siteName: "VPorto Dev",
  },

  nav: {
    links: [
      { label: { en: "Home", pt: "Início" }, href: "#hero" },
      { label: { en: "About", pt: "Sobre" }, href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: { en: "Projects", pt: "Projetos" }, href: "#projects" },
      { label: { en: "Education", pt: "Formação" }, href: "#education" },
      { label: { en: "Contact", pt: "Contato" }, href: "#contact" },
    ],
    cvLabel: "Download CV",
    openMenu: { en: "Open menu", pt: "Abrir menu" },
    closeMenu: { en: "Close menu", pt: "Fechar menu" },
    languageLabel: { en: "Language", pt: "Idioma" },
  },

  hero: {
    badge: { en: "Open to opportunities", pt: "Disponível para oportunidades" },
    firstName: "João Victor",
    lastName: "Porto",
    // A frase é montada como: before + highlight (em destaque) + after
    tagline: {
      before: { en: "", pt: "Desenvolvedor " },
      highlight: "Frontend",
      after: {
        en: " Developer focused on React, Next.js and TypeScript, building applications from UI to deploy.",
        pt: " com foco em React, Next.js e TypeScript, construindo aplicações da interface ao deploy.",
      },
    },
    primaryCta: { en: "View Projects", pt: "Ver Projetos" },
    secondaryCta: { en: "Get in Touch", pt: "Entrar em Contato" },
  },

  about: {
    // Títulos de seção: "title" em branco, "accent" na cor de destaque
    heading: {
      title: { en: "About", pt: "Sobre" },
      accent: { en: "me", pt: "mim" },
    },
    paragraphs: [
      {
        en: "I'm a Frontend Developer focused on React, Next.js and TypeScript. I completed the Full Stack Java Developer program at EBAC and I'm pursuing a degree in Software Engineering at Anhanguera.",
        pt: "Sou desenvolvedor Frontend com foco em React, Next.js e TypeScript. Me formei no curso Desenvolvedor Full Stack Java da EBAC e estou cursando Engenharia de Software na Anhanguera.",
      },
      {
        en: "I build applications from UI to deploy, with state management (Redux Toolkit, React Query), automated testing (Vitest, Jest, React Testing Library) and continuous integration on GitHub Actions. I also have a backend foundation in Django and Spring Boot.",
        pt: "Desenvolvo aplicações da interface ao deploy, com gerenciamento de estado (Redux Toolkit, React Query), testes automatizados (Vitest, Jest, React Testing Library) e integração contínua no GitHub Actions. Também tenho base em backend com Django e Spring Boot.",
      },
    ],
    infoTitle: { en: "Info", pt: "Informações" },
    info: [
      {
        label: { en: "Location", pt: "Local" },
        value: { en: "Rio das Ostras, RJ, Brazil", pt: "Rio das Ostras/RJ" },
      },
      {
        label: { en: "Education", pt: "Formação" },
        value: { en: "Software Engineering", pt: "Eng. de Software" },
      },
      { label: { en: "Focus", pt: "Foco" }, value: "Frontend" },
      {
        label: { en: "English", pt: "Inglês" },
        value: { en: "Intermediate", pt: "Intermediário" },
      },
      {
        label: { en: "Availability", pt: "Disponível" },
        value: { en: "Remote or relocation", pt: "Remoto e realocação" },
      },
    ],
  },

  skills: {
    heading: { title: "Hard", accent: "Skills" },
    subtitle: {
      en: "Technologies I use in the projects below.",
      pt: "Tecnologias que uso nos projetos abaixo.",
    },
    categories: [
      {
        id: "frontend",
        label: "Frontend",
        items: [
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
          { en: "Responsive Design", pt: "Design Responsivo" },
          { en: "Accessibility (ARIA)", pt: "Acessibilidade (ARIA)" },
        ],
      },
      {
        id: "testing",
        label: { en: "Testing & Quality", pt: "Testes e Qualidade" },
        items: [
          { en: "Unit testing", pt: "Testes unitários" },
          { en: "Integration testing", pt: "Testes de integração" },
          "Vitest",
          "Jest",
          "React Testing Library",
          "Storybook",
          "ESLint",
          "Prettier",
        ],
      },
      {
        id: "backend",
        label: "Backend",
        items: [
          "Node.js",
          "Python",
          "Django",
          "Django REST Framework",
          "Java",
          "Spring Boot",
          { en: "REST APIs", pt: "APIs REST" },
          "JWT",
          "OAuth",
          "OpenAPI (Swagger)",
          "Supabase",
          "PostgreSQL",
        ],
      },
      {
        id: "tools",
        label: { en: "Tools", pt: "Ferramentas" },
        items: ["Git", "GitHub Actions", "CI/CD", "Vercel", "Figma"],
      },
    ],
  },

  projects: {
    heading: {
      title: { en: "Featured", pt: "Projetos" },
      accent: { en: "Projects", pt: "Relevantes" },
    },
    subtitle: {
      en: "A selection of projects that demonstrate my technical skills.",
      pt: "Uma seleção de projetos que demonstram minhas habilidades técnicas.",
    },
    featuredLabel: { en: "Featured", pt: "Destaque" },
    githubLabel: "GitHub",
    liveLabel: { en: "Live demo", pt: "Demo ao vivo" },
    items: [
      {
        title: { en: "User Management Dashboard", pt: "Painel de Gestão de Usuários" },
        tag: "Frontend",
        description: {
          en: "Complete CRUD dashboard delivered in 24 hours for a Junior React technical assessment, meeting every required item and all 9 optional ones. Global state with Redux Toolkit, server-state caching with React Query, unit and integration tests with Vitest and React Testing Library, CI on GitHub Actions, code splitting, accessibility, dark mode and Storybook.",
          pt: "Painel CRUD completo entregue em 24 horas para teste técnico de vaga React Júnior, com todos os requisitos obrigatórios e os 9 diferenciais. Estado global com Redux Toolkit, cache de servidor com React Query, testes unitários e de integração com Vitest e React Testing Library, CI no GitHub Actions, code splitting, acessibilidade, dark mode e Storybook.",
        },
        tech: ["React", "TypeScript", "Redux Toolkit", "React Query", "MUI", "Vitest", "GitHub Actions"],
        github: "https://github.com/Jportov/test-react",
        live: "https://test-react-five-lake.vercel.app",
        featured: true,
      },
      {
        title: "GameTracker",
        tag: "Frontend",
        description: {
          en: "Web app for tracking games, with OAuth authentication, a Supabase database and RAWG API integration.",
          pt: "Aplicação web para acompanhar jogos, com autenticação OAuth, banco de dados no Supabase e integração com a API RAWG.",
        },
        tech: ["Next.js", "TypeScript", "Supabase", "RAWG API", "OAuth"],
        github: "https://github.com/Jportov/gametracker",
        live: "https://gametracker-livid.vercel.app",
        featured: true,
      },
      {
        title: "Flix App / Flix API",
        tag: "Full Stack",
        description: {
          en: "REST API in Python (Django + DRF) with CRUD for movies and actors, JWT authentication and interactive OpenAPI documentation. Streamlit frontend with AgGrid tables for creating, editing and listing records.",
          pt: "API REST em Python (Django + DRF) com CRUD de filmes e atores, autenticação JWT e documentação interativa OpenAPI. Frontend em Streamlit com tabelas AgGrid para cadastro, edição e listagem.",
        },
        tech: ["Python", "Django", "DRF", "JWT", "OpenAPI", "Streamlit"],
        github: "https://github.com/Jportov/flix-api",
        live: null,
        featured: false,
      },
      {
        title: "E-food",
        tag: "Frontend",
        description: {
          en: "Delivery platform with a responsive React interface. Dish listing with images, descriptions and price ranges.",
          pt: "Plataforma de entregas com interface responsiva em React. Listagem de pratos com imagens, descrição e faixa de preços.",
        },
        tech: ["React", "TypeScript", { en: "REST API", pt: "API REST" }],
        github: "https://github.com/Jportov/efood",
        live: "https://efood-fet2.vercel.app",
        featured: false,
      },
    ],
  },

  education: {
    heading: {
      title: { en: "Education", pt: "Formação" },
      accent: { en: "& Courses", pt: "& Cursos" },
    },
    // status: "inProgress" ou "completed" (define a cor da etiqueta)
    statusLabels: {
      inProgress: { en: "In progress", pt: "Em andamento" },
      completed: { en: "Completed", pt: "Concluído" },
    },
    items: [
      {
        period: "2025 – 2029",
        title: { en: "Software Engineering", pt: "Engenharia de Software" },
        institution: "Anhanguera",
        status: "inProgress",
      },
      {
        period: { en: "Oct 2024", pt: "Out 2024" },
        title: { en: "Full Stack Java Developer", pt: "Desenvolvedor Full Stack Java" },
        institution: {
          en: "EBAC – British School of Creative Arts and Technology",
          pt: "EBAC – Escola Britânica de Artes Criativas e Tecnologia",
        },
        status: "completed",
      },
    ],
    coursesTitle: { en: "Additional Courses", pt: "Cursos Complementares" },
    courses: [
      "Django Master – PycodeBR",
      { en: "AI Master – PycodeBR", pt: "IA Master – PycodeBR" },
      "Docker – PycodeBR",
      { en: "Artificial Intelligence – EBAC", pt: "Inteligência Artificial – EBAC" },
      "Integration Master – PycodeBR",
    ],
  },

  contact: {
    heading: {
      title: { en: "Let's", pt: "Vamos" },
      accent: { en: "talk", pt: "conversar?" },
    },
    text: {
      en: "I'm open to Frontend Developer opportunities, remote or with relocation.",
      pt: "Estou aberto a oportunidades como Desenvolvedor Frontend, remotas ou com realocação.",
    },
    email: "victorportodev@gmail.com",
    linkedin: { label: "LinkedIn", href: "https://linkedin.com/in/vportodev" },
    details: {
      en: "Phone: +55 22 99244-3293 · Rio das Ostras, RJ, Brazil · Remote or relocation",
      pt: "Tel.: (22) 99244-3293 · Rio das Ostras/RJ · Remoto ou realocação",
    },
  },

  social: [
    { href: "https://github.com/Jportov", label: "GitHub", type: "github" },
    { href: "https://linkedin.com/in/vportodev", label: "LinkedIn", type: "linkedin" },
    { href: "mailto:victorportodev@gmail.com", label: "Email", type: "email" },
  ],

  footer: {
    rights: {
      en: "João Victor Porto. All rights reserved.",
      pt: "João Victor Porto. Todos os direitos reservados.",
    },
    madeWith: { en: "Built with", pt: "Feito com" },
  },
};

// Troca cada { en, pt } pelo texto do idioma pedido
function resolve(value, lang) {
  if (Array.isArray(value)) return value.map((v) => resolve(v, lang));
  if (value && typeof value === "object") {
    if ("en" in value && "pt" in value) return value[lang];
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, resolve(v, lang)]));
  }
  return value;
}

const RESOLVED = Object.fromEntries(
  Object.keys(LOCALES).map((lang) => [lang, resolve(CONTENT, lang)])
);

export function getContent(lang) {
  return RESOLVED[lang] ?? RESOLVED[DEFAULT_LOCALE];
}

// CVs com o do idioma ativo primeiro
export function getCvLinks(lang) {
  const order = [lang, ...Object.keys(LOCALES).filter((l) => l !== lang)];
  return order.map((l) => ({
    label: LOCALES[l].name,
    lang: LOCALES[l].htmlLang,
    href: CV_FILES[l],
  }));
}
