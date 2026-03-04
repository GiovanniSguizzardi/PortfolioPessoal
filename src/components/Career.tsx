
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface Experience {
  id: number;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Estagiário em Suporte e Desenvolvimento",
    company: "GPMIT",
    type: "Estágio",
    period: "Atual",
    location: "São Paulo, Brasil",
    description:
      "Atuação em suporte técnico e desenvolvimento de sistemas, colaborando com a equipe em projetos que abrangem desde integrações com APIs e automações inteligentes até o uso de Inteligência Artificial aplicada a processos internos. Responsável por auxiliar no desenvolvimento e manutenção de soluções proprietárias da empresa, contribuindo para a evolução contínua dos produtos e da infraestrutura tecnológica.",
    highlights: [
      "Integrações com APIs externas e internas",
      "Desenvolvimento de automações para otimização de processos",
      "Aplicação de IA em fluxos de trabalho e suporte",
      "Manutenção e evolução de sistemas proprietários",
      "Suporte técnico a clientes e equipes internas",
    ],
    technologies: ["APIs REST", "Python", "Automação", "IA", "Suporte Técnico"],
  },
  {
    id: 2,
    role: "Técnico em TI",
    company: "Castle House",
    type: "Freelancer",
    period: "Anterior",
    location: "São Paulo, Brasil",
    description:
      "Prestação de serviços de suporte técnico e infraestrutura de TI para a imobiliária Castle House. Responsável pela manutenção preventiva e corretiva de equipamentos, configuração de redes e estações de trabalho, além de garantir a continuidade operacional do ambiente tecnológico da empresa. Atuação direta com os colaboradores para diagnóstico e resolução ágil de problemas, assegurando produtividade e estabilidade dos sistemas internos.",
    highlights: [
      "Manutenção preventiva e corretiva de computadores e periféricos",
      "Configuração e gerenciamento de redes locais e Wi-Fi",
      "Instalação e atualização de softwares e sistemas operacionais",
      "Atendimento e suporte direto aos colaboradores da imobiliária",
      "Diagnóstico e resolução de problemas de hardware e software",
    ],
    technologies: ["Redes", "Windows", "Hardware", "Suporte Técnico", "Infraestrutura"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Career = () => {
  return (
    <AnimatedSection>
      <section id="carreira" className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <span className="inline-block text-sm font-medium text-primary bg-accent border border-border rounded-full px-3 py-1">
              Carreira
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Experiência Profissional
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Minha trajetória profissional e as empresas onde contribuí com soluções reais.
            </p>
          </div>

          <motion.div
            className="max-w-3xl mx-auto relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative pl-16 md:pl-20 pb-12 last:pb-0 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full border-[3px] border-primary bg-background group-hover:bg-primary transition-colors duration-300 z-10" />

                {/* Pulse ring on current */}
                {exp.period === "Atual" && (
                  <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full border-2 border-primary animate-ping opacity-30" />
                )}

                {/* Card */}
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={14} className="text-primary" />
                        <span className="text-sm font-medium text-primary">{exp.company}</span>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight size={14} className="text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Career;
