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
      en: "João Victor Porto | Full Stack Developer",
      pt: "João Victor Porto | Desenvolvedor Full Stack",
    },
    description: {
      en: "Portfolio of João Victor Porto, a Full Stack Developer building web apps with React, Next.js, TypeScript, Node.js and Django.",
      pt: "Portfólio de João Victor Porto, Desenvolvedor Full Stack que constrói aplicações web com React, Next.js, TypeScript, Node.js e Django.",
    },
    keywords: [
      "desenvolvedor full stack",
      "full stack developer",
      "desenvolvedor frontend",
      "react",
      "next.js",
      "typescript",
      "node.js",
      "django",
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
      highlight: "Full Stack",
      after: {
        en: " Developer building complete web apps, from the database and REST API to the UI and deploy.",
        pt: " que constrói aplicações web completas, do banco de dados e da API REST até a interface e o deploy.",
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
        en: "I'm a Full Stack Developer who builds complete web applications, from the database and API to the UI and deploy. I completed the Full Stack Java Developer program at EBAC and I'm pursuing a degree in Software Engineering at Anhanguera.",
        pt: "Sou desenvolvedor Full Stack e construo aplicações web completas, do banco de dados e da API até a interface e o deploy. Me formei no curso Desenvolvedor Full Stack Java da EBAC e estou cursando Engenharia de Software na Anhanguera.",
      },
      {
        en: "On the front end I use React, Next.js and TypeScript with Redux Toolkit, React Query and automated tests (Jest, Vitest, React Testing Library). On the back end I build REST APIs with Django REST Framework and Node.js/Express, with JWT and OAuth authentication, on PostgreSQL (Supabase), MySQL and Firebase, with CI on GitHub Actions.",
        pt: "No front-end uso React, Next.js e TypeScript com Redux Toolkit, React Query e testes automatizados (Jest, Vitest, React Testing Library). No back-end desenvolvo APIs REST com Django REST Framework e Node.js/Express, com autenticação JWT e OAuth, sobre PostgreSQL (Supabase), MySQL e Firebase, com CI no GitHub Actions.",
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
      { label: { en: "Focus", pt: "Foco" }, value: "Full Stack" },
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
          "Express",
          "Python",
          "Django",
          "Django REST Framework",
          "Java",
          "Spring Boot",
          { en: "REST APIs", pt: "APIs REST" },
          "JWT",
          "OAuth",
          "OpenAPI (Swagger)",
        ],
      },
      {
        id: "data",
        label: { en: "Databases", pt: "Banco de Dados" },
        items: [
          "PostgreSQL",
          "Supabase",
          "Row Level Security",
          "MySQL",
          "SQLite",
          "Firebase Firestore",
          "SQL",
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
        title: "GameTracker",
        tag: "Full Stack",
        description: {
          en: "Full stack app for cataloguing games. OAuth sign-in (Google, Discord and GitHub) with Supabase Auth, a personal library stored in PostgreSQL with Row Level Security, server-side RAWG API calls so the key never reaches the client, middleware-protected routes and security headers. Unit tests with Jest and CI on GitHub Actions (lint, typecheck, tests and build).",
          pt: "Aplicação full stack para catalogar jogos. Login OAuth (Google, Discord e GitHub) com Supabase Auth, biblioteca pessoal salva em PostgreSQL com Row Level Security, chamadas à API RAWG feitas no servidor para a chave não chegar ao cliente, rotas protegidas por middleware e security headers. Testes unitários com Jest e CI no GitHub Actions (lint, typecheck, testes e build).",
        },
        tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "OAuth", "Jest", "GitHub Actions"],
        github: "https://github.com/Jportov/gametracker",
        live: "https://gametracker-livid.vercel.app",
        featured: true,
      },
      {
        title: { en: "SGE · Inventory Management System", pt: "SGE · Sistema de Gestão de Estoque" },
        tag: "Full Stack",
        description: {
          en: "Web inventory system for products, suppliers, brands and categories. Purchases and sales update stock automatically through Django signals, a dashboard shows KPIs (stock value, profit margin, last 7 days of sales) computed with Pandas, and a REST API uses JWT authentication with per-module permissions.",
          pt: "Sistema web de estoque com produtos, fornecedores, marcas e categorias. Entradas e saídas atualizam a quantidade automaticamente com Django signals, um dashboard mostra indicadores (valor em estoque, margem de lucro, vendas dos últimos 7 dias) calculados com Pandas, e a API REST usa autenticação JWT com permissões por módulo.",
        },
        tech: ["Python", "Django", "DRF", "JWT", "Pandas"],
        github: "https://github.com/Jportov/sge",
        live: null,
        featured: true,
      },
      {
        title: { en: "User Management Dashboard", pt: "Painel de Gestão de Usuários" },
        tag: "Frontend",
        description: {
          en: "CRUD dashboard delivered in 24 hours for a Junior React technical assessment, meeting every requirement and all 9 optional items. Redux Toolkit, React Query with optimistic updates, tests, CI on GitHub Actions, code splitting, accessibility, dark mode and Storybook.",
          pt: "Painel CRUD entregue em 24 horas para teste técnico de vaga React Júnior, com todos os requisitos e os 9 diferenciais. Redux Toolkit, React Query com atualização otimista, testes, CI no GitHub Actions, code splitting, acessibilidade, dark mode e Storybook.",
        },
        tech: ["React", "TypeScript", "Redux Toolkit", "React Query", "MUI", "GitHub Actions"],
        github: "https://github.com/Jportov/test-react",
        live: "https://test-react-five-lake.vercel.app",
        featured: false,
      },
      {
        title: { en: "Customer Registry", pt: "Cadastro de Clientes" },
        tag: "Full Stack",
        description: {
          en: "Full CRUD with a REST API in Node.js/Express and MySQL, unique tax ID (CPF/CNPJ), form validation with React Hook Form and Yup, and address autofill from the postal code via the ViaCEP API.",
          pt: "CRUD completo com API REST em Node.js/Express e MySQL, CPF/CNPJ único, validação de formulários com React Hook Form e Yup, e preenchimento de endereço pelo CEP com a API ViaCEP.",
        },
        tech: ["React", "Node.js", "Express", "MySQL"],
        github: "https://github.com/Jportov/cadastroclientev2",
        live: null,
        featured: false,
      },
      {
        title: "Flix App / Flix API",
        tag: "Full Stack",
        description: {
          en: "REST API in Python (Django + DRF) with CRUD for movies and actors, JWT authentication and interactive OpenAPI documentation. Streamlit frontend with AgGrid tables for creating, editing and listing records.",
          pt: "API REST em Python (Django + DRF) com CRUD de filmes e atores, autenticação JWT e documentação interativa OpenAPI. Frontend em Streamlit com tabelas AgGrid para cadastro, edição e listagem.",
        },
        tech: ["Python", "Django", "DRF", "JWT", "OpenAPI", "Streamlit"],
        github: "https://github.com/Jportov/flix_api",
        live: null,
        featured: false,
      },
      {
        title: "PetShop",
        tag: "Full Stack",
        description: {
          en: "Online store with an admin panel protected by Firebase Auth, product CRUD on Firestore, a cart saved in the browser and checkout through a formatted WhatsApp message.",
          pt: "Loja on-line com painel administrativo protegido por Firebase Auth, CRUD de produtos no Firestore, carrinho salvo no navegador e fechamento do pedido por mensagem formatada no WhatsApp.",
        },
        tech: ["JavaScript", "Firebase Auth", "Firestore"],
        github: "https://github.com/Jportov/petshop",
        live: null,
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
      en: "I'm open to Full Stack and Front-end Developer opportunities, remote or with relocation.",
      pt: "Estou aberto a oportunidades como Desenvolvedor Full Stack ou Front-end, remotas ou com realocação.",
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
