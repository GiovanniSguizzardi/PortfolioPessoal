
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block text-sm font-medium text-primary bg-accent border border-border rounded-full px-3 py-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Front-End Dev & FullStack
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Olá, eu sou o{" "}
            <span className="text-primary">Giovanni</span>{" "}
            <span className="inline-block animate-[wiggle_1s_ease-in-out]">👋</span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Criando experiências digitais elegantes e funcionais com foco em design minimalista e usabilidade.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center pt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            <a
              href="#projetos"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border text-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              Entre em Contato
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="flex justify-center mt-20 md:mt-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a href="#projetos" aria-label="Ver projetos" className="animate-bounce">
          <ArrowDown className="text-muted-foreground" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
