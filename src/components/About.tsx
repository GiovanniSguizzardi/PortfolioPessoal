
import { Card, CardContent } from "@/components/ui/card";
import { Code, Layout, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Sobre Mim</h2>
            <p className="text-gray-600 mb-6">
              Olá! Sou um designer e desenvolvedor apaixonado por criar interfaces limpas e funcionais que proporcionam excelentes experiências aos usuários.
            </p>
            <p className="text-gray-600 mb-6">
              Com mais de 5 anos de experiência no mercado, trabalhei em diversos projetos para startups e empresas estabelecidas, sempre buscando unir estética e funcionalidade.
            </p>
            <p className="text-gray-600">
              Meu objetivo é transformar ideias complexas em soluções simples e elegantes que atendam às necessidades dos clientes e encantem os usuários finais.
            </p>
          </div>
          
          <div className="space-y-4 animate-slide-up">
            <Card>
              <CardContent className="flex items-start p-6">
                <div className="mr-4 bg-gray-100 p-3 rounded-full">
                  <Layout size={24} className="text-gray-800" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Design de UI/UX</h3>
                  <p className="text-gray-600">
                    Criação de interfaces intuitivas e agradáveis, com foco na experiência do usuário.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-start p-6">
                <div className="mr-4 bg-gray-100 p-3 rounded-full">
                  <Code size={24} className="text-gray-800" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Desenvolvimento Web</h3>
                  <p className="text-gray-600">
                    Implementação de aplicações web responsivas utilizando tecnologias modernas.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-start p-6">
                <div className="mr-4 bg-gray-100 p-3 rounded-full">
                  <Lightbulb size={24} className="text-gray-800" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Consultoria Criativa</h3>
                  <p className="text-gray-600">
                    Orientação estratégica para ajudar marcas a definirem sua presença digital.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
