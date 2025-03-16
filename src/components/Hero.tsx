
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Hero = () => {
  return (
    <AnimatedSection>
    <section 
      id="inicio" 
      className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Olá, eu sou o<span className="text-purple-900"> Giovanni ;)</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-600 mb-5">
            Front-End Dev & FullStack
          </p>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Criando experiências digitais elegantes e funcionais com foco em design minimalista e usabilidade.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild variant="default" className="rounded-full px-6">
              <a href="#projetos">Ver Projetos</a>
            </Button>
            <Button asChild variant="default" className="rounded-full px-6">
              <a href="#contato">Entre em Contato</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-20 md:mt-30 animate-bounce">
        <a href="#projetos" aria-label="Ver projetos">
          <ArrowDown className="text-gray-400" />
        </a>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Hero;
