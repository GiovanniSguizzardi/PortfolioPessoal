
import { Github, Linkedin, FileText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Giovanni Sguizzardi. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/GiovanniSguizzardi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-gray-900 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/giovanni-sguizzardi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://drive.google.com/file/d/1xFnb18ROST6KZlE6aSHyQdBLN74Z2iuU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Currículo"
              className="text-gray-400 hover:text-purple-600 transition-colors"
            >
              <FileText size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
