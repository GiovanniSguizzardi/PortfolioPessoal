import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage, T } from "@/components/LanguageProvider";

interface Project {
  id: number;
  title: T;
  description: T;
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: { pt: "Projeto FunToy", en: "FunToy Project", es: "Proyecto FunToy" },
    description: {
      pt: "Uma aplicação web desenvolvida em Java com Spring Boot para a gestão de um inventário de brinquedos.",
      en: "A web application built in Java with Spring Boot to manage a toy inventory.",
      es: "Una aplicación web desarrollada en Java con Spring Boot para gestionar un inventario de juguetes.",
    },
    category: "Java & HTML",
    image: "https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/GiovanniSguizzardi/RepositorioEmpresaBrinquedos",
  },
  {
    id: 2,
    title: { pt: "Projeto Severance", en: "Severance Project", es: "Proyecto Severance" },
    description: {
      pt: "Um site sobre a série Severance, onde você poderá ver tudo de mais recente e relevante.",
      en: "A website about the Severance series, featuring the latest and most relevant updates.",
      es: "Un sitio sobre la serie Severance, donde podrás ver todo lo más reciente y relevante.",
    },
    category: "HTML & CSS",
    image: "https://portal.pucrs.br/wp-content/uploads/2025/01/Ruptura-1.png",
    link: "https://github.com/GiovanniSguizzardi/SeveranceSite",
  },
  {
    id: 3,
    title: {
      pt: "Identidade Visual do coletor de dados da JadLog",
      en: "JadLog Data Collector Visual Identity",
      es: "Identidad visual del colector de datos de JadLog",
    },
    description: {
      pt: "Um projeto de design para a identidade visual do coletor de dados da empresa JadLog",
      en: "A design project for the visual identity of JadLog's data collector.",
      es: "Un proyecto de diseño para la identidad visual del colector de datos de la empresa JadLog.",
    },
    category: "Branding",
    image: "https://www.codecia.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/o/logo_ladlog3.png",
    link: "https://www.figma.com/design/PirBJCE671sdTrIvcfuOUh/Jadlog---Design-coletor-de-dados?node-id=0-1&t=1yarYpcCY3ntH2vU-1",
  },
  {
    id: 4,
    title: {
      pt: "Sistema de Gerenciamento de Processos Aduaneiros",
      en: "Customs Process Management System",
      es: "Sistema de Gestión de Procesos Aduaneros",
    },
    description: {
      pt: "Um sistema web desenvolvido em Flask para gerenciar processos de importação/exportação.",
      en: "A web system built with Flask to manage import/export processes.",
      es: "Un sistema web desarrollado en Flask para gestionar procesos de importación/exportación.",
    },
    category: "Python",
    image: "https://images.pexels.com/photos/4440788/pexels-photo-4440788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/GiovanniSguizzardi/SistemaGerencidorProcessosAduaneiros",
  },
  {
    id: 5,
    title: { pt: "PassGuardian", en: "PassGuardian", es: "PassGuardian" },
    description: {
      pt: "PassGuardian é um aplicativo Android de gerenciamento de senhas, desenvolvido para uso pessoal e familiar, com foco em segurança local, simplicidade de uso e boa experiência para usuários não técnicos.",
      en: "PassGuardian is an Android password manager built for personal and family use, focused on local security, simplicity and a great experience for non-technical users.",
      es: "PassGuardian es una aplicación Android de gestión de contraseñas, pensada para uso personal y familiar, con foco en seguridad local, simplicidad y buena experiencia para usuarios no técnicos.",
    },
    category: "Kotlin",
    image: "https://images.pexels.com/photos/2882630/pexels-photo-2882630.jpeg",
    link: "https://github.com/GiovanniSguizzardi/PassGuardian",
  },
  {
    id: 6,
    title: { pt: "FinanceApp", en: "FinanceApp", es: "FinanceApp" },
    description: {
      pt: "Uma aplicação web moderna e minimalista para controle de finanças pessoais, permitindo que múltiplos usuários gerenciem suas receitas e despesas de forma independente.",
      en: "A modern, minimalist web app for personal finance tracking, letting multiple users manage their income and expenses independently.",
      es: "Una aplicación web moderna y minimalista para el control de finanzas personales, que permite a varios usuarios gestionar sus ingresos y gastos de forma independiente.",
    },
    category: "JavaScript",
    image: "https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg",
    link: "https://github.com/GiovanniSguizzardi/FinanceApp",
  },
];

const Projects = () => {
  const { t } = useLanguage();
  return (
    <AnimatedSection>
      <section id="projetos" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t({ pt: "Projetos Selecionados", en: "Selected Projects", es: "Proyectos Seleccionados" })}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden border-border shadow-sm hover:shadow-md transition-shadow group bg-card">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={t(project.title)}
                      className="w-full h-60 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-colors"
                      >
                        {t({ pt: "Ver Detalhes", en: "View Details", es: "Ver Detalles" })} <ArrowRight size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{project.category}</div>
                    <h3 className="font-medium text-lg mb-2 text-foreground">{t(project.title)}</h3>
                    <p className="text-muted-foreground">{t(project.description)}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-5 text-center">
            <a
              href="https://github.com/GiovanniSguizzardi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 text-lg font-semibold text-primary-foreground bg-primary rounded-full hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              <Github size={24} />
              {t({ pt: "Ver mais no GitHub", en: "See more on GitHub", es: "Ver más en GitHub" })}
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Projects;
