
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
            className="inline-block text-sm font-medium text-purple-700 bg-purple-50 border border-purple-100 rounded-full px-3 py-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Front-End Dev & FullStack
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Olá, eu sou o{" "}
            <span className="text-purple-800">Giovanni</span>{" "}
            <span className="inline-block animate-[wiggle_1s_ease-in-out]">👋</span>
          </motion.h1>

          <motion.p
            className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed"
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
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-purple-800 text-white text-sm font-medium hover:bg-purple-700 transition-colors"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-purple-300 hover:text-purple-700 transition-colors"
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
          <ArrowDown className="text-gray-400" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
