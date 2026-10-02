import { languages, useLanguage } from "@/components/LanguageProvider";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center rounded-full border border-border p-0.5 text-xs font-medium" role="group" aria-label="Idioma / Language">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2 py-1 rounded-full transition-colors ${
            lang === code ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
