import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
}

const AnimatedSection = ({ children }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Começa invisível e abaixo
      whileInView={{ opacity: 1, y: 0 }} // Anima quando entra na tela
      exit={{ opacity: 0, y: 50 }} // Some quando sai da tela
      transition={{ duration: 0.6, ease: "easeOut" }} // Transição suave
      viewport={{ amount: 0.2 }} // Ativa animação ao passar 20% na tela
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
