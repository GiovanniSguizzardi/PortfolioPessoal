
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      await emailjs.send(
        "service_jszh6zr",
        "template_8eo481z",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "UODqeW9UiHWPzlvao"
      );
  
      toast({
        title: "Mensagem enviada",
        description: "Obrigado pelo seu contato. Retornarei em breve!",
      });
  
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível enviar sua mensagem.",
        variant: "destructive",
      });
    }
  };

  return (
    <AnimatedSection>
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-gray-600">
            Tem um projeto em mente? Vamos conversar e transformar sua ideia em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 bg-gray-100 p-3 rounded-full">
                <Mail size={20} className="text-gray-800" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <a href="giovanni.sguiconde@gmail.com" className="text-gray-600 hover:text-gray-900">
                  giovanni.sguiconde@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 bg-gray-100 p-3 rounded-full">
                <MapPin size={20} className="text-gray-800" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Localização</h3>
                <p className="text-gray-600">São Paulo, Brasil</p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Seu nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Seu email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white"
              />
            </div>
            <div>
              <Textarea
                placeholder="Sua mensagem"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[120px] bg-white"
              />
            </div>
            <Button type="submit" className="w-full rounded-full">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Contact;