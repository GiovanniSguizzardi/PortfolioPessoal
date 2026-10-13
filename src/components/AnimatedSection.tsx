import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

const AnimatedSection = ({ children, className, delay = 0, direction = "up" }: AnimatedSectionProps) => {
  const reducedMotion = useReducedMotion();
  const offset = direction === "up" ? { y: 24, x: 0 } : { y: 0, x: direction === "left" ? -24 : 24 };
  return (
    <motion.div
      className={className}
      data-scroll-reveal=""
      initial={reducedMotion ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      onFocusCapture={(event) => {
        // Keyboard navigation must never land on visually hidden content.
        event.currentTarget.style.opacity = "1";
        event.currentTarget.style.transform = "none";
      }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -24px 0px" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
