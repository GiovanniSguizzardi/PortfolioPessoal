
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Server, Blocks } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface Plugin {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  link: string;
}

const plugins: Plugin[] = [
  {
    id: 1,
    title: "GibasWarps",
    description: "Um plugin completo de economia para servidores Minecraft com sistema de lojas, banco e transações entre jogadores.",
    features: ["Teleporte entre mundos", "Customização", "Comandos de admin", "Integração com GUI"],
    image: "https://i.ibb.co/ksYYfyws/minecraft-warps.png",
    link: "https://github.com/GiovanniSguizzardi/GibasWarpPlugin",
  },
  {
    id: 2,
    title: "GibasChat",
    description: "Melhora a experiência do usuario no servidor, com um chat totalmente customizável.",
    features: ["Chat customizado", "Chat local", "Chat global", "Sistema de mensagem privada"],
    image: "https://i.ibb.co/G4VnJVBj/minecraft-chat.png",
    link: "https://github.com/GiovanniSguizzardi/GibasChatPlugin",
  },
  {
    id: 3,
    title: "GibasWelcomeMessage",
    description: "Um plugin que manda uma mensagem personalizada a cada vez que o usuario entra no servidor.",
    features: ["Painel admin", "Sistema de personalização", "Gerenciamento de permissões"],
    image: "https://i.ibb.co/dsKDqQ2p/minecraft-welcome.png",
    link: "https://github.com/GiovanniSguizzardi/GibasWelcomeMessagePlugin",
  },
];

const MinecraftPlugins = () => {
  return (
    <AnimatedSection>
      <section id="minecraft" className="py-20 bg-green-50">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Plugins de Minecraft</h2>
            <p className="text-gray-600 mb-6">
              Plugins personalizados desenvolvidos para melhorar a experiência de jogo em servidores Minecraft
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plugins.map((plugin) => (
              <Card key={plugin.id} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow group">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={plugin.image} 
                      alt={plugin.title} 
                      className="w-full h-35 object-fit"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <a 
                        href={plugin.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/40 backdrop-blur-sm hover:bg-green-900/60 transition-colors"
                      >
                        Ver Plugin <ArrowRight size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-10">
                      <Server size={20} className="text-green-600" />
                      <h3 className="font-medium text-lg">{plugin.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-10">{plugin.description}</p>
                    <div className="border-t pt-4">
                      <h4 className="flex items-center gap-2 text-sm font-medium mb-2">
                        <Blocks size={18} className="text-green-600" />
                        Principais recursos:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1 pl-5 list-disc">
                        {plugin.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://github.com/GiovanniSguizzardi?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 text-lg font-semibold text-white bg-green-700 rounded-full hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg">
              <Server size={24} className="text-white" />
              Ver mais plugins
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default MinecraftPlugins;
