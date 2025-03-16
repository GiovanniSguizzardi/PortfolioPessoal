import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Projeto FunToy",
    description: "Uma aplicação web desenvolvida em Java com Spring Boot para a gestão de um inventário de brinquedos.",
    category: "Java & HTML",
    image: "https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/GiovanniSguizzardi/RepositorioEmpresaBrinquedos",
  },
  {
    id: 2,
    title: "Projeto Severance",
    description: "Um site sobre a série Severance, onde você poderá ver tudo de mais recente e relevante.",
    category: "HTML & CSS",
    image: "https://portal.pucrs.br/wp-content/uploads/2025/01/Ruptura-1.png",
    link: "https://github.com/GiovanniSguizzardi/SeveranceSite",
  },
  {
    id: 3,
    title: "Identidade Visual do coletor de dados da JadLog",
    description: "Um projeto de design para a identidade visual do coletor de dados da empresa JadLog",
    category: "Branding",
    image: "https://www.codecia.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/o/logo_ladlog3.png",
    link: "https://www.figma.com/design/PirBJCE671sdTrIvcfuOUh/Jadlog---Design-coletor-de-dados?node-id=0-1&t=1yarYpcCY3ntH2vU-1",
  },
  {
    id: 4,
    title: "Sistema de Gerenciamento de Processos Aduaneiros",
    description: "Um sistema web desenvolvido em Flask para gerenciar processos de importação/exportação, permitindo o upload, consulta e gerenciamento de planilhas e documentos anexados por CNPJ.",
    category: "Python",
    image: "https://images.pexels.com/photos/4440788/pexels-photo-4440788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/GiovanniSguizzardi/SistemaGerencidorProcessosAduaneiros",
  },
];

const Projects = () => {
  return (
  <AnimatedSection>
    <section id="projetos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Projetos Selecionados</h2>
          <p className="text-gray-600">
            Uma seleção dos meus trabalhos recentes...
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow group">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-colors"
                    >
                      Ver Detalhes <ArrowRight size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{project.category}</div>
                  <h3 className="font-medium text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Projects;