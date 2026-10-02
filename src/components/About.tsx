
import { motion } from "framer-motion";
import { Code, Container, Database, Server } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageProvider";

const skills = [
  {
    icon: Code,
    title: { pt: "Python & Java", en: "Python & Java", es: "Python & Java" },
    description: {
      pt: "Aplicações escaláveis em Python e sistemas robustos em Java com foco em performance.",
      en: "Scalable Python applications and robust Java systems focused on performance.",
      es: "Aplicaciones escalables en Python y sistemas robustos en Java con foco en rendimiento.",
    },
  },
  {
    icon: Container,
    title: { pt: "Docker & DevOps", en: "Docker & DevOps", es: "Docker & DevOps" },
    description: {
      pt: "Containerização, orquestração com Kubernetes e pipelines CI/CD.",
      en: "Containerization, Kubernetes orchestration and CI/CD pipelines.",
      es: "Contenedorización, orquestación con Kubernetes y pipelines CI/CD.",
    },
  },
  {
    icon: Database,
    title: { pt: ".NET & Kotlin", en: ".NET & Kotlin", es: ".NET & Kotlin" },
    description: {
      pt: "Aplicações web com .NET Core e apps móveis nativos com Kotlin.",
      en: "Web applications with .NET Core and native mobile apps with Kotlin.",
      es: "Aplicaciones web con .NET Core y apps móviles nativas con Kotlin.",
    },
  },
  {
    icon: Server,
    title: { pt: "Arquitetura de Software", en: "Software Architecture", es: "Arquitectura de Software" },
    description: {
      pt: "Microsserviços, sistemas distribuídos e aplicações cloud-native.",
      en: "Microservices, distributed systems and cloud-native applications.",
      es: "Microservicios, sistemas distribuidos y aplicaciones cloud-native.",
    },
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const About = () => {
  const { t } = useLanguage();
  return (
    <AnimatedSection>
      <section id="sobre" className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="space-y-6">
              <span className="inline-block text-sm font-medium text-primary bg-accent border border-border rounded-full px-3 py-1">
                {t({ pt: "Sobre Mim", en: "About Me", es: "Sobre Mí" })}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {t({ pt: "Desenvolvendo soluções", en: "Building", es: "Desarrollando soluciones" })}{" "}
                <span className="text-primary">
                  {t({ pt: "eficientes e escaláveis", en: "efficient, scalable solutions", es: "eficientes y escalables" })}
                </span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {t({
                    pt: "Olá! Me chamo Giovanni — formado em Análise e Desenvolvimento de Sistemas e cursando Sistemas de Informação. Sou apaixonado por tecnologia e pela criação de soluções que realmente fazem diferença.",
                    en: "Hi! I'm Giovanni — graduated in Systems Analysis and Development and currently studying Information Systems. I'm passionate about technology and about building solutions that truly make a difference.",
                    es: "¡Hola! Soy Giovanni — graduado en Análisis y Desarrollo de Sistemas y cursando Sistemas de Información. Me apasiona la tecnología y crear soluciones que realmente marcan la diferencia.",
                  })}
                </p>
                <p>
                  {t({
                    pt: "Com mais de 2 anos de experiência, desenvolvi projetos em Python para análise de dados, Java para aplicações empresariais e soluções containerizadas com Docker.",
                    en: "With over 2 years of experience, I've built Python projects for data analysis, Java enterprise applications and containerized solutions with Docker.",
                    es: "Con más de 2 años de experiencia, he desarrollado proyectos en Python para análisis de datos, Java para aplicaciones empresariales y soluciones contenedorizadas con Docker.",
                  })}
                </p>
                <p>
                  {t({
                    pt: "Meu objetivo é construir aplicações que resolvam problemas reais e entreguem ótimas experiências aos usuários finais.",
                    en: "My goal is to build applications that solve real problems and deliver great experiences to end users.",
                    es: "Mi objetivo es construir aplicaciones que resuelvan problemas reales y ofrezcan excelentes experiencias a los usuarios finales.",
                  })}
                </p>
              </div>
              <div className="flex gap-10 pt-2">
                <div>
                  <p className="text-3xl font-bold text-primary">2+</p>
                  <p className="text-sm text-muted-foreground">
                    {t({ pt: "Anos de experiência", en: "Years of experience", es: "Años de experiencia" })}
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">6+</p>
                  <p className="text-sm text-muted-foreground">
                    {t({ pt: "Projetos entregues", en: "Projects delivered", es: "Proyectos entregados" })}
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skills.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title.pt}
                  variants={cardVariants}
                  className="group bg-card border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent group-hover:bg-primary/10 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{t(title)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(description)}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default About;
