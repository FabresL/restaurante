// Website developed by Lorenzo Fabres
import { motion } from "framer-motion";
import { Instagram, Phone, Mail, MessageCircle, Github } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="relative pt-24 pb-10 px-5 md:px-10 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <div className="eyebrow mb-4">Fale Conosco</div>
          <h2 className="font-display text-4xl md:text-6xl font-light gold-gradient-text">
            Reserve a sua noite
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-muted-foreground font-light">
            Nossa equipe está à disposição para cuidar de cada detalhe da sua visita.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-14">
          {[
            { icon: Phone, label: "Telefone", value: "+55 11 4002-8922", href: "tel:+551140028922" },
            { icon: MessageCircle, label: "WhatsApp", value: "+55 11 99876-5432", href: "https://wa.me/5511998765432" },
            { icon: Mail, label: "E-mail", value: "contato@aurelien.com", href: "mailto:contato@aurelien.com" },
            { icon: Github, label: "GitHub", value: "lorenzofabres", href: "https://github.com/lorenzofabres" },
          ].map((c) => (
            <motion.a
              key={c.label}
              href={c.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              target={c.label === "GitHub" ? "_blank" : undefined}
              rel={c.label === "GitHub" ? "noreferrer" : undefined}
              className="glass rounded-2xl p-6 flex items-center gap-5 hover-lift group"
            >
              <div className="h-12 w-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-300">
                <c.icon size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{c.label}</div>
                <div className="font-display text-lg">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="divider-gold mb-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-display text-2xl gold-gradient-text">Aurélien Maison</div>
            <div className="text-xs text-muted-foreground mt-1 tracking-wider">
              © {new Date().getFullYear()} — Todos os direitos reservados
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[
              { Icon: Instagram, href: "https://instagram.com/fabreslorenzo", label: "Instagram" },
              { Icon: MessageCircle, href: "https://wa.me/5551998806267", label: "WhatsApp" },
              { Icon: Mail, href: "mailto:fabreslorenzo@outlook.com", label: "Email" },
              { Icon: Github, href: "https://github.com/FabresL", label: "GitHub" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank" rel="noreferrer"
                className="h-11 w-11 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-gold hover:border-gold transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Signature — Designed & Developed by Lorenzo Fabres */}
        <motion.div
          initial={{ opacity: 1 }}
          className="mt-10 flex flex-col items-center"
        >
          <a
            href="https://github.com/FabresL"
            target="_blank"
            rel="noreferrer"
            className="signature-link"
          >
            Designed & Developed by Lorenzo Fabres
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
