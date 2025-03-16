
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Projeto Website",
    description: "Redesign do website corporativo com foco em experiência do usuário.",
    category: "Web Design",
    image: "https://picsum.photos/id/1/600/400",
  },
  {
    id: 2,
    title: "Aplicativo Mobile",
    description: "Desenvolvimento de UI/UX para aplicativo de gerenciamento de tarefas.",
    category: "UI/UX Design",
    image: "https://picsum.photos/id/2/600/400",
  },
  {
    id: 3,
    title: "Identidade Visual",
    description: "Criação de identidade visual completa para startup de tecnologia.",
    category: "Branding",
    image: "https://picsum.photos/id/3/600/400",
  },
  {
    id: 4,
    title: "E-commerce",
    description: "Desenvolvimento de plataforma e-commerce responsiva com React.",
    category: "Desenvolvimento",
    image: "https://picsum.photos/id/4/600/400",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Projetos Selecionados</h2>
          <p className="text-gray-600">
            Uma seleção dos meus trabalhos recentes em design e desenvolvimento.
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
                      href="#" 
                      className="text-white flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-colors"
                    >
                      Ver Detalhes <ArrowRight size={16} />
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
  );
};

export default Projects;
