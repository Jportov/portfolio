# 🚀 Guia Completo: Construindo seu Portfólio do Zero
### Next.js 14 + Tailwind CSS + Dark Mode Moderno

> **Para:** João Victor Porto  
> **Stack:** Next.js 14 (App Router) · Tailwind CSS 3.4 · React 18  
> **Deploy:** Vercel  
> **Fontes:** Outfit + JetBrains Mono  
> **Paleta:** zinc (backgrounds) + emerald (accent)

---

## 📋 ÍNDICE

1. [Setup do Projeto](#1-setup-do-projeto)
2. [Estrutura de Pastas](#2-estrutura-de-pastas)
3. [Configuração Base](#3-configuração-base)
4. [Layout e SEO](#4-layout-e-seo)
5. [Estilos Globais](#5-estilos-globais)
6. [Seção Hero](#6-seção-hero)
7. [Seção Sobre](#7-seção-sobre)
8. [Seção Skills](#8-seção-skills)
9. [Seção Projetos](#9-seção-projetos)
10. [Seção Formação](#10-seção-formação)
11. [Seção Contato](#11-seção-contato)
12. [Navbar com Glassmorphism](#12-navbar-com-glassmorphism)
13. [Animações de Scroll](#13-animações-de-scroll)
14. [Responsividade](#14-responsividade)
15. [README Profissional](#15-readme-profissional)
16. [Deploy na Vercel](#16-deploy-na-vercel)
17. [Checklist Final](#17-checklist-final)

---

## 1. SETUP DO PROJETO

### 1.1 Criar o projeto Next.js

```bash
npx create-next-app@latest portfolio --app --tailwind --eslint --src-dir=false --import-alias="@/*"
cd portfolio
```

Quando o CLI perguntar, escolha:
- ✅ TypeScript? → **Não** (pode adicionar depois como exercício)
- ✅ ESLint? → **Sim**
- ✅ Tailwind CSS? → **Sim**
- ✅ `src/` directory? → **Não** (manter simples)
- ✅ App Router? → **Sim**
- ✅ Import alias? → **@/***

### 1.2 Verificar se funciona

```bash
npm run dev
```

Acesse `http://localhost:3000` — deve ver a página padrão do Next.js.

### 1.3 Limpar o projeto

Delete todo o conteúdo padrão:
- Limpe o `app/page.js` (deixe só um `<h1>Portfólio</h1>`)
- Limpe o `app/globals.css` (mantenha só os imports do Tailwind)
- Delete a pasta `public/` e recrie vazia (ou remova os SVGs padrão)

---

## 2. ESTRUTURA DE PASTAS

Organize seu projeto assim:

```
portfolio/
├── app/
│   ├── globals.css          ← Estilos globais
│   ├── layout.js            ← Layout raiz (SEO, fontes, <html>)
│   └── page.js              ← Página principal (todas as seções)
├── components/              ← Componentes reutilizáveis
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── SkillBar.jsx
│   ├── ProjectCard.jsx
│   └── Section.jsx          ← Wrapper com animação de scroll
├── data/
│   └── portfolio-data.js    ← Todos os seus dados centralizados
├── hooks/
│   └── useReveal.js         ← Hook de animação com IntersectionObserver
├── public/
│   └── cv-joao-victor-porto.pdf  ← Seu CV para download
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

> **💡 Dica:** Separar componentes, dados e hooks em pastas é uma boa prática.
> Recrutadores olham a organização do código.

---

## 3. CONFIGURAÇÃO BASE

### 3.1 tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 3.2 postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 3.3 next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;
```

---

## 4. LAYOUT E SEO

### 4.1 Por que o layout importa?

No Next.js App Router, o `layout.js` é o "esqueleto" de todas as páginas.
É aqui que você define:
- Meta tags para SEO (título, descrição, Open Graph)
- Fontes
- A tag `<html>` e `<body>`

### 4.2 Crie o arquivo `app/layout.js`

```jsx
import "./globals.css";

// ── Metadata para SEO ──
// Isso é o que aparece no Google e quando alguém compartilha seu link
export const metadata = {
  title: "João Victor Porto | Desenvolvedor Full Stack",
  description:
    "Portfólio de João Victor Porto — Desenvolvedor Full Stack especializado em React, Next.js, Django e soluções escaláveis.",
  keywords: [
    "desenvolvedor full stack",
    "react",
    "next.js",
    "django",
    "João Victor Porto",
  ],
  authors: [{ name: "João Victor Porto" }],
  // Open Graph = preview quando compartilha no LinkedIn/WhatsApp
  openGraph: {
    title: "João Victor Porto | Desenvolvedor Full Stack",
    description:
      "Portfólio de João Victor Porto — soluções escaláveis do backend ao pixel final.",
    url: "https://vportodev.vercel.app",
    siteName: "VPorto Dev",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,  // Permite Google indexar
    follow: true, // Permite seguir links
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Fontes do Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

> **💡 Conceitos para estudar:**
> - `export const metadata` → é assim que Next.js 14 lida com SEO (sem `<Head>`)
> - `scroll-smooth` no `<html>` → permite scroll suave entre seções
> - `preconnect` → melhora performance das fontes

---

## 5. ESTILOS GLOBAIS

### 5.1 Crie o `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ── Variáveis de fonte ── */
:root {
  --font-body: "Outfit", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}

/* ── Reset básico ── */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 5rem; /* Compensa a navbar fixa */
}

body {
  font-family: var(--font-body);
  background: #09090b; /* zinc-950 */
  color: #fafafa;       /* zinc-50 */
  overflow-x: hidden;
}

/* Aplica JetBrains Mono onde usar font-mono do Tailwind */
.font-mono {
  font-family: var(--font-mono);
}

/* ── Scrollbar customizada ── */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #09090b;
}
::-webkit-scrollbar-thumb {
  background: #27272a;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #3f3f46;
}

/* ── Seleção de texto ── */
::selection {
  background: rgba(16, 185, 129, 0.3); /* emerald com transparência */
  color: #d1fae5;
}

/* ── Focus acessível ── */
a:focus-visible,
button:focus-visible {
  outline: 2px solid #10b981;
  outline-offset: 2px;
  border-radius: 4px;
}
```

> **💡 Conceitos para estudar:**
> - CSS Custom Properties (`--font-body`)
> - `scroll-padding-top` → essencial quando tem navbar fixa
> - Pseudo-elementos (`::selection`, `::-webkit-scrollbar`)

---

## 6. SEÇÃO HERO

A hero é a primeira coisa que o visitante vê. Deve ser impactante.

### 6.1 Estrutura do Hero

```
┌─────────────────────────────────────────────┐
│          [badge: Disponível]                │
│                                             │
│          João Victor                        │
│          Porto  (gradiente emerald)         │
│                                             │
│    Desenvolvedor Full Stack construindo     │
│    soluções escaláveis...                   │
│                                             │
│    [Ver Projetos]  [Entrar em Contato]      │
│                                             │
│    [GitHub] [LinkedIn] [Email]              │
└─────────────────────────────────────────────┘
```

### 6.2 Elementos chave para implementar

1. **Badge "Disponível"** — um `div` com:
   - `inline-flex items-center gap-2`
   - Bolinha verde pulsando: `w-2 h-2 rounded-full bg-emerald-400 animate-pulse`
   - Border e background sutis: `bg-zinc-900/80 border border-zinc-800 rounded-full`

2. **Nome com gradiente** — usar `text-transparent bg-clip-text bg-gradient-to-r`:
   ```jsx
   <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
     Porto
   </span>
   ```

3. **Dois botões CTA** — um sólido (primário) e um outline (secundário):
   - Primário: `bg-emerald-500 text-zinc-950 font-bold rounded-xl`
   - Secundário: `border border-zinc-700 text-zinc-300 rounded-xl`

4. **Ícones sociais** — SVGs inline para GitHub, LinkedIn e Email
   - Dentro de `p-3 rounded-xl bg-zinc-900 border border-zinc-800`
   - Hover: `hover:text-emerald-400 hover:border-emerald-500/40`

### 6.3 Efeito de fundo (ambient glow)

Adicione dois círculos blur gigantes no fundo da página:

```jsx
<div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
  <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-3xl" />
  <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-3xl" />
</div>
```

> **💡 Conceitos para estudar:**
> - CSS gradients (`bg-gradient-to-r`, `bg-clip-text`)
> - Tailwind opacity shorthand (`bg-emerald-500/[0.04]`)
> - `pointer-events-none` para elementos decorativos
> - SVGs inline vs bibliotecas de ícones

---

## 7. SEÇÃO SOBRE

### 7.1 Layout: Grid 5 colunas

```
┌──────────────────────┬──────────────┐
│  Sobre mim           │ INFORMAÇÕES  │
│                      │              │
│  Texto descritivo    │ Local: RJ    │
│  sobre você...       │ Foco: FS     │
│                      │ Inglês: Int  │
│  (col-span-3)        │ (col-span-2) │
└──────────────────────┴──────────────┘
```

```jsx
<div className="grid md:grid-cols-5 gap-10 items-start">
  <div className="md:col-span-3">
    {/* Textos */}
  </div>
  <div className="md:col-span-2">
    {/* Card de informações */}
  </div>
</div>
```

### 7.2 Card de Informações

Use um array de pares `[chave, valor]` e mapeie:

```jsx
{[
  ["Local", "Rio das Ostras/RJ"],
  ["Formação", "Eng. de Software"],
  ["Foco", "Full Stack"],
  ["Inglês", "Intermediário"],
  ["Disponível", "Realocação"],
].map(([k, v]) => (
  <div key={k} className="flex justify-between text-sm border-b border-zinc-800/60 pb-2">
    <span className="text-zinc-500">{k}</span>
    <span className="text-zinc-300 font-medium">{v}</span>
  </div>
))}
```

---

## 8. SEÇÃO SKILLS

### 8.1 Conceito: Tabs + Skill Bars animadas

```
  [Frontend]  [Backend]  [DevOps & Tools]    ← tabs
  
  React          ████████████████████░░  90%
  TypeScript     ████████████████░░░░░░  80%
  Next.js        ███████████████░░░░░░░  75%
```

### 8.2 Dados (em `data/portfolio-data.js`)

```js
export const SKILLS = {
  Frontend: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Vue.js", level: 65 },
    { name: "Tailwind CSS", level: 90 },
  ],
  Backend: [
    { name: "Python / Django", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Java / Spring Boot", level: 70 },
    { name: "APIs REST", level: 90 },
  ],
  "DevOps & Tools": [
    { name: "Git / GitHub", level: 90 },
    { name: "Docker", level: 70 },
    { name: "PostgreSQL / MySQL", level: 80 },
  ],
};
```

### 8.3 Estado do tab ativo

```jsx
const [activeTab, setActiveTab] = useState("Frontend");
```

### 8.4 Componente SkillBar

A barra deve animar de 0% até o valor real quando entrar na viewport:

```jsx
function SkillBar({ name, level, delay }) {
  // Use o hook useReveal (seção 13)
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
            background: `linear-gradient(90deg, #10b981, #34d399)`,
          }}
        />
      </div>
    </div>
  );
}
```

> **💡 Conceitos para estudar:**
> - `useState` para controlar tab ativo
> - IntersectionObserver (seção 13)
> - `transitionDelay` para efeito cascata
> - CSS `linear-gradient` inline

---

## 9. SEÇÃO PROJETOS

### 9.1 Layout: Grid 2 colunas com destaque

Projetos com `featured: true` ocupam 2 colunas (`md:col-span-2`).

```
┌──────────────────────────────────────────┐
│  ★ DESTAQUE                              │
│  Flix App / Flix API          [GH] [Live] │
│  FULL STACK                              │
│  Descrição...                            │
│  [Python] [Django] [DRF] [JWT]           │
│                       (col-span-2)       │
├────────────────────┬─────────────────────┤
│  E-food            │  Portfólio Pessoal  │
│  FRONTEND          │  FULL STACK         │
│  Descrição...      │  Descrição...       │
│  [React] [CSS]     │  [Next.js] [TW]     │
└────────────────────┴─────────────────────┘
```

### 9.2 Dados dos projetos

```js
export const PROJECTS = [
  {
    title: "Flix App / Flix API",
    tag: "Full Stack",
    description: "Sistema completo de filmes com API em Python...",
    tech: ["Python", "Django", "DRF", "Streamlit", "JWT"],
    github: "https://github.com/Jportov",
    live: null, // Adicione quando tiver deploy
    featured: true,
  },
  // ... mais projetos
];
```

### 9.3 Badge "Destaque"

Posicione com `absolute`:

```jsx
{project.featured && (
  <span className="absolute -top-3 left-6 bg-emerald-500 text-zinc-950 text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
    Destaque
  </span>
)}
```

### 9.4 Tags de tecnologia

```jsx
<div className="flex flex-wrap gap-2">
  {project.tech.map((t) => (
    <span key={t} className="text-xs font-mono bg-zinc-800/80 text-emerald-300/80 px-2.5 py-1 rounded-md border border-zinc-700/50">
      {t}
    </span>
  ))}
</div>
```

> **💡 Conceitos para estudar:**
> - CSS Grid com `col-span` dinâmico
> - Posicionamento `absolute` / `relative`
> - `.map()` para renderizar listas
> - Condicionais com `&&` no JSX

---

## 10. SEÇÃO FORMAÇÃO

### 10.1 Cards de educação

Dois cards lado a lado com status visual:
- "Em andamento" → badge amarelo (`bg-amber-500/15 text-amber-400`)
- "Concluído" → badge verde (`bg-emerald-500/15 text-emerald-400`)

### 10.2 Cursos como tags

```jsx
<div className="flex flex-wrap gap-2">
  {COURSES.map((c) => (
    <span key={c} className="text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1.5 rounded-lg">
      {c}
    </span>
  ))}
</div>
```

---

## 11. SEÇÃO CONTATO

### 11.1 CTA final centralizado

```
┌─────────────────────────────────────┐
│                                     │
│       Vamos conversar?              │
│                                     │
│  Estou aberto a oportunidades...    │
│                                     │
│  [Email]         [LinkedIn]         │
│                                     │
│  Tel · Local · Disponibilidade      │
└─────────────────────────────────────┘
```

Card com `rounded-3xl`, centralizado com `max-w-2xl mx-auto`.

---

## 12. NAVBAR COM GLASSMORPHISM

### 12.1 Conceito

A navbar começa transparente e ganha fundo blur quando o usuário rola a página.

### 12.2 Detectar scroll

```jsx
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 40);
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);
```

### 12.3 Classes condicionais

```jsx
<nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
  scrolled
    ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/60"
    : "bg-transparent"
}`}>
```

### 12.4 Logo estilizada

```jsx
<span className="text-emerald-400">&lt;</span>
VPorto
<span className="text-emerald-400"> /&gt;</span>
```

Resultado visual: `<VPorto />`

### 12.5 Menu mobile

Use um estado `menuOpen` e renderize condicionalmente:

```jsx
const [menuOpen, setMenuOpen] = useState(false);

// Botão hambúrguer (visível só em mobile)
<button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
  {/* Ícone hambúrguer / X */}
</button>

// Menu (visível quando aberto)
{menuOpen && (
  <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl">
    {/* Links */}
  </div>
)}
```

> **💡 Conceitos para estudar:**
> - `useEffect` com cleanup (removeEventListener)
> - `backdrop-blur` (glassmorphism)
> - `position: fixed` + `z-index`
> - Renderização condicional no React
> - `"use client"` — necessário para componentes com hooks no App Router

---

## 13. ANIMAÇÕES DE SCROLL

### 13.1 Hook personalizado: `useReveal`

Crie em `hooks/useReveal.js`:

```jsx
"use client";
import { useRef, useState, useEffect } from "react";

export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // Anima só uma vez
        }
      },
      { threshold: 0.15 } // Ativa quando 15% visível
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}
```

### 13.2 Componente Section wrapper

```jsx
"use client";
import { useReveal } from "@/hooks/useReveal";

export function Section({ id, children, className = "" }) {
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
```

### 13.3 Como usar

```jsx
<Section id="about">
  <h2>Sobre mim</h2>
  {/* conteúdo */}
</Section>
```

Cada seção aparece suavemente quando entra na viewport!

> **💡 Conceitos para estudar:**
> - `IntersectionObserver` API
> - Custom hooks no React
> - `useRef` para referência DOM
> - CSS transitions com Tailwind (`translate-y`, `opacity`)

---

## 14. RESPONSIVIDADE

### 14.1 Breakpoints do Tailwind

| Prefixo | Mínimo | Uso |
|---------|--------|-----|
| (nenhum) | 0px | Mobile first! |
| `sm:` | 640px | Celular grande |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Desktop |

### 14.2 Padrões que você vai usar

```
Mobile:  1 coluna, texto menor, menu hambúrguer
Tablet:  2 colunas, grid começa
Desktop: Layout completo, navbar horizontal
```

### 14.3 Exemplos práticos

```jsx
// Título: grande no desktop, menor no mobile
<h1 className="text-4xl sm:text-5xl md:text-7xl">

// Grid: 1 col no mobile, 2 no desktop
<div className="grid md:grid-cols-2 gap-6">

// Navbar: links escondidos no mobile
<div className="hidden md:flex">

// Padding: menor no mobile
<div className="px-4 md:px-6">

// Botões: empilhados no mobile, lado a lado no tablet+
<div className="flex flex-col sm:flex-row gap-4">
```

### 14.4 Teste!

Sempre teste redimensionando o browser ou usando DevTools (F12 → toggle device toolbar).

---

## 15. README PROFISSIONAL

### 15.1 O que incluir

Todo README de portfólio deve ter:

```markdown
# 🚀 Nome — Portfólio

Descrição breve + link para o site live.

## ✨ Features
- Lista das funcionalidades principais

## 🛠️ Tech Stack
- Tabela com tecnologias

## 📦 Como rodar localmente
- Comandos passo a passo

## 📁 Estrutura do Projeto
- Árvore de pastas

## 🚀 Deploy
- Como fazer deploy

## 📄 Licença
```

> **⚠️ NUNCA** deixe o README padrão do Create React App / Next.js.
> É a primeira coisa que recrutadores veem no seu GitHub.

---

## 16. DEPLOY NA VERCEL

### 16.1 Passo a passo

1. Faça push do projeto para o GitHub
2. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
3. Clique em "New Project"
4. Selecione o repositório `portfolio`
5. A Vercel detecta Next.js automaticamente
6. Clique "Deploy"

### 16.2 Domínio customizado (opcional)

Na dashboard da Vercel:
1. Vá em Settings → Domains
2. Adicione seu domínio (ex: `vporto.dev`)
3. Configure o DNS conforme instruções

### 16.3 Deploy automático

Cada `git push` na branch `main` dispara um novo deploy automaticamente.

---

## 17. CHECKLIST FINAL

### Antes de publicar, verifique:

**Código:**
- [ ] "use client" nos componentes com hooks
- [ ] Sem erros no console do browser (F12)
- [ ] `npm run build` roda sem erros

**SEO:**
- [ ] Título e descrição no metadata do layout.js
- [ ] Open Graph tags preenchidas
- [ ] lang="pt-BR" no <html>

**Visual:**
- [ ] Responsivo em mobile (320px até 1440px)
- [ ] Todas as seções animam ao scroll
- [ ] Navbar muda de estilo ao rolar
- [ ] Menu mobile funciona
- [ ] Hover states em todos os botões/links

**Conteúdo:**
- [ ] Links do GitHub funcionam
- [ ] Link do LinkedIn funciona
- [ ] Email correto
- [ ] CV disponível para download
- [ ] Todos os projetos com descrição

**GitHub:**
- [ ] README personalizado (não o padrão)
- [ ] .gitignore configurado (node_modules, .next, etc)
- [ ] Commits com mensagens descritivas

---

## 🎨 PALETA DE CORES REFERÊNCIA

| Uso | Classe Tailwind | Hex |
|-----|----------------|-----|
| Background principal | `bg-zinc-950` | #09090b |
| Cards / surfaces | `bg-zinc-900` | #18181b |
| Borders | `border-zinc-800` | #27272a |
| Texto secundário | `text-zinc-400` | #a1a1aa |
| Texto terciário | `text-zinc-500` | #71717a |
| Texto principal | `text-zinc-100` | #f4f4f5 |
| Accent principal | `text-emerald-400` | #34d399 |
| Accent forte | `bg-emerald-500` | #10b981 |
| Accent hover | `bg-emerald-400` | #34d399 |
| Status warning | `text-amber-400` | #fbbf24 |

---

## 📚 RECURSOS PARA ESTUDAR

- [Next.js Docs (App Router)](https://nextjs.org/docs) — documentação oficial
- [Tailwind CSS Docs](https://tailwindcss.com/docs) — referência de classes
- [MDN: IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) — API de scroll
- [React Hooks](https://react.dev/reference/react) — useRef, useState, useEffect
- [Google Fonts](https://fonts.google.com/) — escolha de fontes

---

**Boa sorte construindo, João! 🚀**
Qualquer dúvida durante o processo, é só perguntar.
