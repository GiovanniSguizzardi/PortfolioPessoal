
import { Card, CardContent } from "@/components/ui/card";
import { Code, Container, Database, Server, Wrench } from "lucide-react";
import { useEffect, useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-10");
            }, 200 * index);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <AnimatedSection>
    <section id="sobre" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 relative overflow-hidden">
              <span className="inline-block animate-[slide-right_0.5s_ease-out]">Sobre Mim</span>
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gray-800 animate-[width-expand_0.7s_ease-out_forwards]"></span>
            </h2>
            <p className="text-gray-600 mb-6 animate-[fade-in_0.6s_ease-out]">
            Olá! Me chamo Giovanni, e sou formado em Análise e Desenvolvimento de Sistemas e atualmente cursando Sistemas de Informação, além de um desenvolvedor apaixonado por tecnologia, especializado em várias linguagens e plataformas que me permitem criar soluções eficientes e escaláveis.
            </p>
            <p className="text-gray-600 mb-6 animate-[fade-in_0.8s_ease-out]">
              Com mais de 2 anos de experiência no mercado, desenvolvi projetos utilizando Python para análise de dados, Java para aplicações empresariais, e implementei soluções em contêineres com Docker.
            </p>
            <p className="text-gray-600 animate-[fade-in_1s_ease-out]">
              Meu objetivo é construir aplicações robustas e eficientes que resolvam problemas complexos e ofereçam excelentes experiências para os usuários finais.
            </p>
          </div>
          
          <div className="space-y-5">
            <Card 
              ref={(el) => (cardRefs.current[0] = el)}
              className="opacity-0 translate-y-10 transition-all duration-500"
            >
              <CardContent className="flex items-start p-6 hover:shadow-md transition-shadow">
                <div className="mr-4 bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                  <Code size={24} className="text-gray-800 animate-pulse" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">Python & Java</h3>
                  <p className="text-gray-600">
                    Desenvolvimento de aplicações escaláveis em Python e sistemas robustos em Java com foco em performance.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card 
              ref={(el) => (cardRefs.current[1] = el)}
              className="opacity-0 translate-y-10 transition-all duration-500"
            >
              <CardContent className="flex items-start p-6 hover:shadow-md transition-shadow">
                <div className="mr-4 bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                  <Container size={24} className="text-gray-800 animate-pulse" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">Docker & DevOps</h3>
                  <p className="text-gray-600">
                    Containerização de aplicações, orquestração com Kubernetes e implementação de pipelines CI/CD.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card 
              ref={(el) => (cardRefs.current[2] = el)}
              className="opacity-0 translate-y-10 transition-all duration-500"
            >
              <CardContent className="flex items-start p-6 hover:shadow-md transition-shadow">
                <div className="mr-4 bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                  <Database size={24} className="text-gray-800 animate-pulse" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">.NET & Kotlin</h3>
                  <p className="text-gray-600">
                    Desenvolvimento de aplicações web com .NET Core e aplicativos móveis nativos com Kotlin.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card 
              ref={(el) => (cardRefs.current[3] = el)}
              className="opacity-0 translate-y-10 transition-all duration-500">
              <CardContent className="flex items-start p-6 hover:shadow-md transition-shadow">
                <div className="mr-4 bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                  <Server size={24} className="text-gray-800 animate-pulse" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">Arquitetura de Software</h3>
                  <p className="text-gray-600">
                    Implementação de microsserviços, sistemas distribuídos e aplicações cloud-native.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default About;
