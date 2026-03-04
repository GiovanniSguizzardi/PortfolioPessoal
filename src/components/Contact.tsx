
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
      <section id="contato" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-10">

          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <span className="inline-block text-sm font-medium text-primary bg-accent border border-border rounded-full px-3 py-1">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Entre em Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tem um projeto em mente? Vamos conversar e transformar sua ideia em realidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

            {/* Info */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-0.5">Email</h3>
                  <a
                    href="mailto:giovanni.sguiconde@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    giovanni.sguiconde@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-0.5">Localização</h3>
                  <p className="text-sm text-muted-foreground">São Paulo, Brasil</p>
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
                className="bg-card rounded-xl border-border focus-visible:ring-primary"
              />
              <Input
                type="email"
                placeholder="Seu email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-card rounded-xl border-border focus-visible:ring-primary"
              />
              <Textarea
                placeholder="Sua mensagem"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[120px] bg-card rounded-xl border-border focus-visible:ring-primary"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 disabled:opacity-60 transition-all"
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
