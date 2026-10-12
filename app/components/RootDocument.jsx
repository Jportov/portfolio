import { LOCALES } from "../data/portfolio";

// Estrutura <html> compartilhada pelos layouts de cada idioma
export function RootDocument({ lang, children }) {
  return (
    <html lang={LOCALES[lang].htmlLang} className="scroll-smooth">
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
