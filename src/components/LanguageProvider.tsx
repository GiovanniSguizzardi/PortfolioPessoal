import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "pt" | "en" | "es";
export type T = Record<Lang, string>;

export const languages: { code: Lang; label: string; html: string }[] = [
  { code: "pt", label: "PT", html: "pt-BR" },
  { code: "en", label: "EN", html: "en" },
  { code: "es", label: "ES", html: "es" },
];

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (o: T) => string;
}>({ lang: "pt", setLang: () => {}, t: (o) => o.pt });

const detect = (): Lang => {
  const saved = localStorage.getItem("lang") as Lang | null;
  if (saved && ["pt", "en", "es"].includes(saved)) return saved;
  const nav = navigator.language.slice(0, 2);
  return nav === "en" || nav === "es" ? nav : "pt";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(detect);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = languages.find((l) => l.code === lang)!.html;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: (o) => o[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
