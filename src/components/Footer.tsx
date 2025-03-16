
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {currentYear} Seu Nome. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <span>Feito com</span>
            <Heart size={14} className="mx-1 text-red-500" />
            <span>no Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
