import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, FileText } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      
      setScrollProgress(progress);
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 py-4 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md backdrop-blur-lg" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      {/* Barra de progresso do scroll */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
        <div
          className="h-1 bg-purple-600 transition-all"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-lg font-medium">
            gibas.dev
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Início
            </a>
            <a href="#projetos" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Projetos
            </a>
            <a href="#sobre" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Contato
            </a>
          </nav>

          {/* Ícones de Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="https://github.com/GiovanniSguizzardi" target="_blank" rel="noopener noreferrer">
              <Github size={24} className="text-gray-700 hover:text-black transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/giovanni-sguizzardi/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} className="text-gray-700 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://drive.google.com/file/d/1VCIoaEILVbL9TcQ50c2nh9jwIjwfECQ6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FileText size={24} className="text-gray-700 hover:text-purple-600 transition-colors" />
            </a>
          </div>

          {/* Botão de menu mobile */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4 pb-4 animate-fade-in">
            <a href="#inicio" className="text-sm font-medium hover:text-gray-600 transition-colors" onClick={toggleMenu}>
              Início
            </a>
            <a href="#projetos" className="text-sm font-medium hover:text-gray-600 transition-colors" onClick={toggleMenu}>
              Projetos
            </a>
            <a href="#sobre" className="text-sm font-medium hover:text-gray-600 transition-colors" onClick={toggleMenu}>
              Sobre
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-gray-600 transition-colors" onClick={toggleMenu}>
              Contato
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
