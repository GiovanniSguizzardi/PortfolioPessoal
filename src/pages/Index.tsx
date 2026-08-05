import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import CollegeProjects from "@/components/CollegeProjects";
import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useWebMCP } from "@/hooks/useWebMCP";

const Index = () => {
  useWebMCP();
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <Hero />
      <Projects />
      <CollegeProjects />
      <About />
      <Career />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
