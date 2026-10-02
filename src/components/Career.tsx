
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage, T } from "@/components/LanguageProvider";

interface Experience {
  id: number;
  role: T;
  company: string;
  type: T;
  current: boolean;
  location: T;
  description: T;
  highlights: T[];
  technologies: T[];
}

const location: T = { pt: "São Paulo, Brasil", en: "São Paulo, Brazil", es: "São Paulo, Brasil" };
const support: T = { pt: "Suporte Técnico", en: "Technical Support", es: "Soporte Técnico" };
const same = (s: string): T => ({ pt: s, en: s, es: s });

const experiences: Experience[] = [
  {
    id: 1,
    role: {
      pt: "Estagiário em Suporte e Desenvolvimento",
      en: "Support & Development Intern",
      es: "Practicante de Soporte y Desarrollo",
    },
    company: "GPMIT",
    type: { pt: "Estágio", en: "Internship", es: "Prácticas" },
    current: true,
    location,
    description: {
      pt: "Atuação em suporte técnico e desenvolvimento de sistemas, colaborando com a equipe em projetos que abrangem desde integrações com APIs e automações inteligentes até o uso de Inteligência Artificial aplicada a processos internos. Responsável por auxiliar no desenvolvimento e manutenção de soluções proprietárias da empresa, contribuindo para a evolução contínua dos produtos e da infraestrutura tecnológica.",
      en: "Working in technical support and systems development, collaborating with the team on projects ranging from API integrations and smart automations to Artificial Intelligence applied to internal processes. Responsible for helping develop and maintain the company's proprietary solutions, contributing to the continuous evolution of its products and technology infrastructure.",
      es: "Actuación en soporte técnico y desarrollo de sistemas, colaborando con el equipo en proyectos que abarcan desde integraciones con APIs y automatizaciones inteligentes hasta el uso de Inteligencia Artificial aplicada a procesos internos. Responsable de apoyar el desarrollo y mantenimiento de soluciones propias de la empresa, contribuyendo a la evolución continua de los productos y de la infraestructura tecnológica.",
    },
    highlights: [
      { pt: "Integrações com APIs externas e internas", en: "Integrations with external and internal APIs", es: "Integraciones con APIs externas e internas" },
      { pt: "Desenvolvimento de automações para otimização de processos", en: "Building automations to optimize processes", es: "Desarrollo de automatizaciones para optimizar procesos" },
      { pt: "Aplicação de IA em fluxos de trabalho e suporte", en: "Applying AI to workflows and support", es: "Aplicación de IA en flujos de trabajo y soporte" },
      { pt: "Manutenção e evolução de sistemas proprietários", en: "Maintaining and evolving proprietary systems", es: "Mantenimiento y evolución de sistemas propios" },
      { pt: "Suporte técnico a clientes e equipes internas", en: "Technical support for clients and internal teams", es: "Soporte técnico a clientes y equipos internos" },
    ],
    technologies: [
      same("APIs REST"),
      same("Python"),
      { pt: "Automação", en: "Automation", es: "Automatización" },
      { pt: "IA", en: "AI", es: "IA" },
      support,
    ],
  },
  {
    id: 2,
    role: { pt: "Técnico em TI", en: "IT Technician", es: "Técnico en TI" },
    company: "Castle House",
    type: same("Freelancer"),
    current: false,
    location,
    description: {
      pt: "Prestação de serviços de suporte técnico e infraestrutura de TI para a imobiliária Castle House. Responsável pela manutenção preventiva e corretiva de equipamentos, configuração de redes e estações de trabalho, além de garantir a continuidade operacional do ambiente tecnológico da empresa. Atuação direta com os colaboradores para diagnóstico e resolução ágil de problemas, assegurando produtividade e estabilidade dos sistemas internos.",
      en: "Provided technical support and IT infrastructure services for the Castle House real estate agency. Responsible for preventive and corrective equipment maintenance, network and workstation setup, and ensuring the operational continuity of the company's technology environment. Worked directly with staff to diagnose and quickly resolve issues, ensuring productivity and stability of internal systems.",
      es: "Prestación de servicios de soporte técnico e infraestructura de TI para la inmobiliaria Castle House. Responsable del mantenimiento preventivo y correctivo de equipos, configuración de redes y estaciones de trabajo, además de garantizar la continuidad operativa del entorno tecnológico de la empresa. Trabajo directo con los colaboradores para diagnosticar y resolver problemas ágilmente, asegurando productividad y estabilidad de los sistemas internos.",
    },
    highlights: [
      { pt: "Manutenção preventiva e corretiva de computadores e periféricos", en: "Preventive and corrective maintenance of computers and peripherals", es: "Mantenimiento preventivo y correctivo de computadoras y periféricos" },
      { pt: "Configuração e gerenciamento de redes locais e Wi-Fi", en: "Setup and management of local and Wi-Fi networks", es: "Configuración y gestión de redes locales y Wi-Fi" },
      { pt: "Instalação e atualização de softwares e sistemas operacionais", en: "Installing and updating software and operating systems", es: "Instalación y actualización de software y sistemas operativos" },
      { pt: "Atendimento e suporte direto aos colaboradores da imobiliária", en: "Direct assistance and support for the agency's staff", es: "Atención y soporte directo a los colaboradores de la inmobiliaria" },
      { pt: "Diagnóstico e resolução de problemas de hardware e software", en: "Diagnosing and fixing hardware and software issues", es: "Diagnóstico y resolución de problemas de hardware y software" },
    ],
    technologies: [
      { pt: "Redes", en: "Networking", es: "Redes" },
      same("Windows"),
      same("Hardware"),
      support,
      { pt: "Infraestrutura", en: "Infrastructure", es: "Infraestructura" },
    ],
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
  const { t } = useLanguage();
  return (
    <AnimatedSection>
      <section id="carreira" className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <span className="inline-block text-sm font-medium text-primary bg-accent border border-border rounded-full px-3 py-1">
              {t({ pt: "Carreira", en: "Career", es: "Carrera" })}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t({ pt: "Experiência Profissional", en: "Professional Experience", es: "Experiencia Profesional" })}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t({
                pt: "Minha trajetória profissional e as empresas onde contribuí com soluções reais.",
                en: "My professional journey and the companies where I contributed real solutions.",
                es: "Mi trayectoria profesional y las empresas donde contribuí con soluciones reales.",
              })}
            </p>
          </div>

          <motion.div
            className="max-w-3xl mx-auto relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative pl-16 md:pl-20 pb-12 last:pb-0 group"
              >
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full border-[3px] border-primary bg-background group-hover:bg-primary transition-colors duration-300 z-10" />

                {exp.current && (
                  <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full border-2 border-primary animate-ping opacity-30" />
                )}

                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{t(exp.role)}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={14} className="text-primary" />
                        <span className="text-sm font-medium text-primary">{exp.company}</span>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                          {t(exp.type)}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.current
                          ? t({ pt: "Atual", en: "Current", es: "Actual" })
                          : t({ pt: "Anterior", en: "Previous", es: "Anterior" })}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={12} />
                        {t(exp.location)}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(exp.description)}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight size={14} className="text-primary mt-0.5 shrink-0" />
                        <span>{t(item)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech.pt}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground border border-border"
                      >
                        {t(tech)}
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
