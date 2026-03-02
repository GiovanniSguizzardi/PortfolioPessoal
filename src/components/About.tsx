
import { motion } from "framer-motion";
import { Code, Container, Database, Server } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const skills = [
  {
    icon: Code,
    title: "Python & Java",
    description: "Aplicações escaláveis em Python e sistemas robustos em Java com foco em performance.",
  },
  {
    icon: Container,
    title: "Docker & DevOps",
    description: "Containerização, orquestração com Kubernetes e pipelines CI/CD.",
  },
  {
    icon: Database,
    title: ".NET & Kotlin",
    description: "Aplicações web com .NET Core e apps móveis nativos com Kotlin.",
  },
  {
    icon: Server,
    title: "Arquitetura de Software",
    description: "Microsserviços, sistemas distribuídos e aplicações cloud-native.",
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
  return (
    <AnimatedSection>
      <section id="sobre" className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Texto */}
            <div className="space-y-6">
              <span className="inline-block text-sm font-medium text-purple-700 bg-purple-50 border border-purple-100 rounded-full px-3 py-1">
                Sobre Mim
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Desenvolvendo soluções{" "}
                <span className="text-purple-800">eficientes e escaláveis</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Olá! Me chamo Giovanni — formado em Análise e Desenvolvimento de Sistemas e cursando
                  Sistemas de Informação. Sou apaixonado por tecnologia e pela criação de soluções que
                  realmente fazem diferença.
                </p>
                <p>
                  Com mais de 2 anos de experiência, desenvolvi projetos em Python para análise de dados,
                  Java para aplicações empresariais e soluções containerizadas com Docker.
                </p>
                <p>
                  Meu objetivo é construir aplicações que resolvam problemas reais e entreguem ótimas
                  experiências aos usuários finais.
                </p>
              </div>
              <div className="flex gap-10 pt-2">
                <div>
                  <p className="text-3xl font-bold text-purple-800">2+</p>
                  <p className="text-sm text-gray-500">Anos de experiência</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-800">6+</p>
                  <p className="text-sm text-gray-500">Projetos entregues</p>
                </div>
              </div>
            </div>

            {/* Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skills.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={cardVariants}
                  className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-50 transition-all duration-300"
                >
                  <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-50 group-hover:bg-purple-100 transition-colors">
                    <Icon size={20} className="text-purple-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
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
