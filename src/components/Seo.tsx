import { Helmet } from "react-helmet-async";
import { useLanguage, languages, Lang } from "@/components/LanguageProvider";

const SITE_URL = "https://portifolio-minimalista.lovable.app/";

const seo: Record<Lang, { title: string; description: string }> = {
  pt: {
    title: "Giovanni | Portfólio Front-End & FullStack",
    description:
      "Portfólio de Giovanni, desenvolvedor Front-End e FullStack: projetos, experiência profissional e contato.",
  },
  en: {
    title: "Giovanni | Front-End & FullStack Portfolio",
    description:
      "Portfolio of Giovanni, Front-End and FullStack developer: projects, professional experience and contact.",
  },
  es: {
    title: "Giovanni | Portafolio Front-End & FullStack",
    description:
      "Portafolio de Giovanni, desarrollador Front-End y FullStack: proyectos, experiencia profesional y contacto.",
  },
};

const Seo = () => {
  const { lang } = useLanguage();
  const { title, description } = seo[lang];
  const htmlLang = languages.find((l) => l.code === lang)!.html;

  return (
    <Helmet>
      <html lang={htmlLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={SITE_URL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:locale" content={htmlLang.replace("-", "_")} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="alternate" hrefLang="pt-BR" href={SITE_URL} />
      <link rel="alternate" hrefLang="en" href={SITE_URL} />
      <link rel="alternate" hrefLang="es" href={SITE_URL} />
      <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
    </Helmet>
  );
};

export default Seo;
