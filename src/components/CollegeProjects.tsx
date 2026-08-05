import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface CollegeProject {
  id: number;
  title: string;
  description: string;
  partner: string;
  role: string;
  date: string;
  image: string;
  link?: string;
  technologies: string[];
}

const collegeProjects: CollegeProject[] = [
  {
    id: 1,
    title: "VivoJornada",
    description:
      "MVP web responsivo para onboarding de colaboradores da Vivo, com trilhas de 90 dias, checklists por cargo, barra de progresso e dashboards para gestores e buddies. Controle de acesso por perfil (RBAC) e área administrativa para gestão de jornadas, conteúdos e usuários.",
    partner: "Vivo (Telefônica Brasil)",
    role: "Desenvolvedor FullStack",
    date: "30/09/2025",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Figma"],
  },
  {
    id: 2,
    title: "Marine Mentor",
    description:
      "Backend RESTful em Java com Spring Boot para projeto de mentoria marinha, incluindo endpoints CRUD para usuários, artigos e eventos. Aplicação containerizada com Docker Compose e integração com Oracle DB para persistência de dados.",
    partner: "Softtek, AWS, Select Soluções e Pacto Global",
    role: "Desenvolvedor Kotlin & Java",
    date: "07/06/2024",
    image:
      "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Java", "Spring Boot", "Docker Compose", "Oracle DB", "REST"],
  },
  {
    id: 3,
    title: "EnerGym",
    description:
      "Aplicativo Android para gestão ecológica de academias, com autenticação, cadastro de unidades e sistema de pontos por QR Code. Integração com Firebase Realtime Database para sincronização em tempo real e persistência local para uso offline.",
    partner: "FIA, Ultragaz, UltraCargo e SAP",
    role: "Desenvolvedor Kotlin",
    date: "29/11/2024",
    image:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Kotlin", "Android Jetpack", "Firebase", "OkHttp", "QR Code"],
  },
  {
    id: 4,
    title: "AI-Hack Medicine",
    description:
      "Aplicativo Android para agendamento de consultas e pedidos de medicamentos, entregue em duas sprints. Inclui validações, operações CRUD, sincronização em tempo real, animações e feedback visual com Lottie.",
    partner: "Plusoft",
    role: "Desenvolvedor Kotlin",
    date: "31/10/2024",
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Kotlin", "Firebase", "OkHttp", "Android Jetpack", "Lottie"],
  },
];

const CollegeProjects = () => {
  return (
    <AnimatedSection>
      <section id="projetos-faculdade" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-3xl mx-auto text-center mb-10 space-y-3">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-accent border border-border rounded-full px-3 py-1">
              <GraduationCap size={14} />
              Projetos Acadêmicos
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Projetos da Faculdade
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Experiências práticas desenvolvidas em parceria com empresas durante a graduação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {collegeProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border-border shadow-sm hover:shadow-md transition-shadow group bg-card"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-60 object-cover"
                      loading="lazy"
                    />
                    {project.link && (
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
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-sm text-primary font-medium">{project.partner}</span>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {project.date}
                      </span>
                    </div>
                    <h3 className="font-medium text-lg mb-1 text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      <span className="font-medium text-foreground">{project.role}</span>
                    </p>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default CollegeProjects;
