
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_jszh6zr",
        "template_8eo481z",
        { name: formData.name, email: formData.email, message: formData.message },
        "UODqeW9UiHWPzlvao"
      );
      toast({ title: "Mensagem enviada", description: "Obrigado pelo seu contato. Retornarei em breve!" });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Erro", description: "Não foi possível enviar sua mensagem.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedSection>
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-10">

          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <span className="inline-block text-sm font-medium text-purple-700 bg-purple-50 border border-purple-100 rounded-full px-3 py-1">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Entre em Contato</h2>
            <p className="text-gray-500 leading-relaxed">
              Tem um projeto em mente? Vamos conversar e transformar sua ideia em realidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

            {/* Info */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-50 shrink-0">
                  <Mail size={18} className="text-purple-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-0.5">Email</h3>
                  <a
                    href="mailto:giovanni.sguiconde@gmail.com"
                    className="text-sm text-gray-500 hover:text-purple-700 transition-colors"
                  >
                    giovanni.sguiconde@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-50 shrink-0">
                  <MapPin size={18} className="text-purple-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-0.5">Localização</h3>
                  <p className="text-sm text-gray-500">São Paulo, Brasil</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Seu nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white rounded-xl border-gray-200 focus-visible:ring-purple-400"
              />
              <Input
                type="email"
                placeholder="Seu email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white rounded-xl border-gray-200 focus-visible:ring-purple-400"
              />
              <Textarea
                placeholder="Sua mensagem"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[120px] bg-white rounded-xl border-gray-200 focus-visible:ring-purple-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-purple-800 text-white text-sm font-medium hover:bg-purple-700 disabled:opacity-60 transition-colors"
              >
                <Send size={16} />
                {loading ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>

          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Contact;
