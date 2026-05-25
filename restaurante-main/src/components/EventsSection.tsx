// Website developed by Lorenzo Fabres
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";

const events = [
  { title: "Casamentos", description: "Cerimônias íntimas e celebrações memoráveis em um ambiente refinado.", image: event1 },
  { title: "Aniversários", description: "Comemore mais um ano com um menu degustação assinado pelo chef.", image: event2 },
  { title: "Festa de 15 Anos", description: "Um marco celebrado com elegância, cuidado e atmosfera única.", image: event3 },
  { title: "Eventos Corporativos", description: "Encontros de negócios em salões privativos com serviço exclusivo.", image: event4 },
];

export function EventsSection() {
  const [active, setActive] = useState(0);
  const item = events[active];

  return (
    <section id="eventos" className="relative py-24 md:py-32 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <div className="eyebrow mb-4">Eventos Privativos</div>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            <span className="gold-gradient-text">Celebrações Memoráveis</span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-muted-foreground font-light">
            Cada ocasião merece um cenário à sua altura. Compomos experiências sob medida
            para os momentos que merecem ser eternizados.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={item.image}
                src={item.image}
                alt={item.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="font-display text-3xl md:text-5xl"
                  >
                    {item.title}
                  </motion.h3>
                </AnimatePresence>
              </div>
              <div className="flex gap-2">
                <button
                  aria-label="Anterior"
                  onClick={() => setActive((a) => (a - 1 + events.length) % events.length)}
                  className="h-11 w-11 rounded-full glass flex items-center justify-center hover:bg-gold/10 transition"
                >
                  <span className="text-gold">←</span>
                </button>
                <button
                  aria-label="Próximo"
                  onClick={() => setActive((a) => (a + 1) % events.length)}
                  className="h-11 w-11 rounded-full glass flex items-center justify-center hover:bg-gold/10 transition"
                >
                  <span className="text-gold">→</span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            {events.map((e, i) => (
              <button
                key={e.title}
                onClick={() => setActive(i)}
                className={`text-left p-5 rounded-xl border transition-all duration-500 ${
                  active === i
                    ? "border-gold/50 bg-gold/5"
                    : "border-border/40 hover:border-gold/30 hover:bg-card/50"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-display text-xl ${active === i ? "text-gold" : ""}`}>
                    {e.title}
                  </span>
                  <span className="text-xs tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {e.description}
                </p>
              </button>
            ))}
            <a href="#contato" className="btn-gold mt-4 self-start">Solicitar Orçamento</a>
          </div>
        </div>
      </div>
    </section>
  );
}
