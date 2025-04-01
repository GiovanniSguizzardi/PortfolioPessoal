
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MinecraftPlugins from "@/components/MinecraftPlugins";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Projects />
      <MinecraftPlugins />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
