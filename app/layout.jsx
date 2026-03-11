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