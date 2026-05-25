// Website developed by Lorenzo Fabres
import { motion } from "framer-motion";

export function LocationSection() {
  // Dark styled Google map (no API key needed - using maps embed)
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.083!2d-46.6566!3d-23.5613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQwLjciUyA0NsKwMzknMjMuOCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000";

  return (
    <section id="localizacao" className="relative py-24 md:py-32 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <div className="eyebrow mb-4">Onde Encontrar</div>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            <span className="gold-gradient-text">Localização</span>
          </h2>
        </motion.div>

        <div className="relative rounded-2xl overflow-hidden border border-border/60">
          <div className="aspect-[16/10] md:aspect-[21/9] w-full relative bg-card">
            <iframe
              title="Mapa"
              src={mapSrc}
              loading="lazy"
              className="absolute inset-0 h-full w-full grayscale-[60%] contrast-110 brightness-[0.5] invert-[0.92] hue-rotate-180"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none bg-background/20" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:absolute md:top-8 md:left-8 md:max-w-sm m-4 md:m-0 glass rounded-2xl p-7"
          >
            <div className="eyebrow mb-3">Visite-nos</div>
            <h3 className="font-display text-2xl mb-5">Aurélien Maison</h3>

            <div className="space-y-5 text-sm">
              <div>
                <div className="text-gold text-xs tracking-widest uppercase mb-1">Endereço</div>
                <p className="text-muted-foreground leading-relaxed">
                  Rua das Oliveiras, 1428 — Jardins<br />São Paulo, SP — 01451-000
                </p>
              </div>
              <div>
                <div className="text-gold text-xs tracking-widest uppercase mb-1">Horários</div>
                <p className="text-muted-foreground leading-relaxed">
                  Terça a Sábado · 19h — 00h<br />Domingo · 12h — 16h
                </p>
              </div>
              <div>
                <div className="text-gold text-xs tracking-widest uppercase mb-1">Estacionamento</div>
                <p className="text-muted-foreground leading-relaxed">
                  Valet exclusivo na entrada principal
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
