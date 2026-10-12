import { SITE_URL, LOCALES, getContent } from "../data/portfolio";

// ── Metadata para SEO ──
// Isso é o que aparece no Google e quando alguém compartilha seu link
export function buildMetadata(lang) {
  const { meta } = getContent(lang);
  const locale = LOCALES[lang];
  const otherLocales = Object.values(LOCALES).filter((l) => l !== locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: meta.author }],
    // Diz ao Google que / e /pt são a mesma página em idiomas diferentes
    alternates: {
      canonical: locale.path,
      languages: {
        ...Object.fromEntries(Object.values(LOCALES).map((l) => [l.htmlLang, l.path])),
        "x-default": "/",
      },
    },
    // Open Graph = preview quando compartilha no LinkedIn/WhatsApp
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: locale.path,
      siteName: meta.siteName,
      locale: locale.ogLocale,
      alternateLocale: otherLocales.map((l) => l.ogLocale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true, // Permite Google indexar
      follow: true, // Permite seguir links
    },
  };
}
