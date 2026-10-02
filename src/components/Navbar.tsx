
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, FileText, Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const navLinks = [
  { href: "#inicio", label: { pt: "Início", en: "Home", es: "Inicio" } },
  { href: "#projetos", label: { pt: "Projetos", en: "Projects", es: "Proyectos" } },
  { href: "#projetos-faculdade", label: { pt: "Faculdade", en: "University", es: "Universidad" } },
  { href: "#sobre", label: { pt: "Sobre", en: "About", es: "Sobre mí" } },
  { href: "#carreira", label: { pt: "Carreira", en: "Career", es: "Carrera" } },
  { href: "#contato", label: { pt: "Contato", en: "Contact", es: "Contacto" } },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const themeLabel = t({ pt: "Alternar tema", en: "Toggle theme", es: "Cambiar tema" });

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / scrollHeight) * 100);
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-background shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-muted">
        <div className="h-full bg-primary transition-all" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">

          <a href="#" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
            giovanni.com
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {t(label)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <LanguageSwitcher />
            <button
              onClick={toggleTheme}
              aria-label={themeLabel}
              className="relative w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors hover:bg-muted"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun size={18} />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <div className="w-px h-4 bg-border" />
            <a href="https://github.com/GiovanniSguizzardi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/giovanni-sguizzardi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://drive.google.com/file/d/15XR2_a9nxo064T4xfB4xS1zoFsbizlpn/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label={t({ pt: "Currículo", en: "Resume", es: "Currículum" })}>
              <FileText size={20} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={toggleTheme}
              aria-label={themeLabel}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="text-foreground"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden flex flex-col gap-4 pt-4 pb-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={toggleMenu}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(label)}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
