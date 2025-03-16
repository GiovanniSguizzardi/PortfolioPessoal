
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import AnimatedSection from "@/components/AnimatedSection";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <AnimatedSection>
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-lg font-medium">
            gibas.dev
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
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
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4 pb-4 animate-fade-in">
            <a 
              href="#inicio" 
              className="text-sm font-medium hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Início
            </a>
            <a 
              href="#projetos" 
              className="text-sm font-medium hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Projetos
            </a>
            <a 
              href="#sobre" 
              className="text-sm font-medium hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Sobre
            </a>
            <a 
              href="#contato" 
              className="text-sm font-medium hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Contato
            </a>
          </nav>
        )}
      </div>
    </header>
    </AnimatedSection>
  );
};

export default Navbar;
