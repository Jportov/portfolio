# 🚀 João Victor Porto — Portfólio

Portfólio pessoal construído com **Next.js 14**, **Tailwind CSS** e deploy na **Vercel**.

🔗 **Live:** [vportodev.vercel.app](https://vportodev.vercel.app)

---

## ✨ Features

- **Dark mode moderno** com paleta emerald/zinc
- **Totalmente responsivo** — mobile-first design
- **SEO otimizado** com meta tags Open Graph e SSR do Next.js
- **Animações de scroll** com Intersection Observer
- **Skill bars animadas** com tabs por categoria
- **Cards de projeto** com destaque para projetos principais
- **Navbar fixa** com blur/glassmorphism no scroll
- **Performance A+** — sem dependências pesadas

## 🛠️ Tech Stack

| Camada     | Tecnologia                |
| ---------- | ------------------------- |
| Framework  | Next.js 14 (App Router)   |
| Styling    | Tailwind CSS 3.4          |
| Linguagem  | JavaScript (React 18)     |
| Fonts      | Outfit + JetBrains Mono   |
| Deploy     | Vercel                    |

## 📦 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/Jportov/portfolio.git
cd portfolio

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
portfolio/
├── app/
│   ├── globals.css       # Estilos globais + Tailwind
│   ├── layout.jsx        # Layout raiz com metadata/SEO
│   └── page.jsx          # Página principal com todas as seções
├── public/               # Assets estáticos (CV, imagens)
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

## 📝 Seções

- **Hero** — Apresentação com links sociais e CTA
- **Sobre** — Resumo profissional + informações rápidas
- **Skills** — Barras de progresso animadas com tabs (Frontend / Backend / DevOps)
- **Projetos** — Cards com destaque, tags de tecnologia e links
- **Formação** — Educação formal e cursos complementares
- **Contato** — CTA final com email, LinkedIn e telefone

## 🚀 Deploy

O projeto está configurado para deploy automático na Vercel. Basta conectar o repositório GitHub à Vercel e o deploy acontece a cada push na branch `main`.

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para se inspirar, mas por favor não copie o conteúdo pessoal.

---

**Feito com ☕ por [João Victor Porto](https://linkedin.com/in/vportodev)**
