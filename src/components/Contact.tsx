
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageProvider";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
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
      toast({ title: t({ pt: "Mensagem enviada", en: "Message sent", es: "Mensaje enviado" }), description: t({ pt: "Obrigado pelo seu contato. Retornarei em breve!", en: "Thanks for reaching out. I'll get back to you soon!", es: "¡Gracias por tu mensaje. Te responderé pronto!" }) });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({ title: t({ pt: "Erro", en: "Error", es: "Error" }), description: t({ pt: "Não foi possível enviar sua mensagem.", en: "Your message could not be sent.", es: "No se pudo enviar tu mensaje." }), variant: "destructive" });
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
              {t({ pt: "Contato", en: "Contact", es: "Contacto" })}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t({ pt: "Entre em Contato", en: "Get in Touch", es: "Ponte en Contacto" })}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t({ pt: "Tem um projeto em mente? Vamos conversar e transformar sua ideia em realidade.", en: "Have a project in mind? Let's talk and turn your idea into reality.", es: "¿Tienes un proyecto en mente? Hablemos y hagamos realidad tu idea." })}
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
                  <h3 className="font-semibold text-foreground mb-0.5">{t({ pt: "Localização", en: "Location", es: "Ubicación" })}</h3>
                  <p className="text-sm text-muted-foreground">{t({ pt: "São Paulo, Brasil", en: "São Paulo, Brazil", es: "São Paulo, Brasil" })}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder={t({ pt: "Seu nome", en: "Your name", es: "Tu nombre" })}
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-card rounded-xl border-border focus-visible:ring-primary"
              />
              <Input
                type="email"
                placeholder={t({ pt: "Seu email", en: "Your email", es: "Tu correo" })}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-card rounded-xl border-border focus-visible:ring-primary"
              />
              <Textarea
                placeholder={t({ pt: "Sua mensagem", en: "Your message", es: "Tu mensaje" })}
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
                {loading ? t({ pt: "Enviando...", en: "Sending...", es: "Enviando..." }) : t({ pt: "Enviar Mensagem", en: "Send Message", es: "Enviar Mensaje" })}
              </button>
            </form>

          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Contact;
