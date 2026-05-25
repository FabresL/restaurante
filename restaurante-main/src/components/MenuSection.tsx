// Website developed by Lorenzo Fabres
import { motion } from "framer-motion";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export function MenuSection({ id, eyebrow, title, subtitle, items }: Props) {
  return (
    <section id={id} className="relative py-24 md:py-32 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="eyebrow mb-4">{eyebrow}</div>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            <span className="gold-gradient-text">{title}</span>
          </h2>
          {subtitle && (
            <p className="mt-5 max-w-xl mx-auto text-muted-foreground font-light">{subtitle}</p>
          )}
          <div className="divider-gold mt-10 max-w-xs mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group hover-lift glass rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row h-full">
                <div className="relative sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/40 opacity-0 sm:opacity-100" />
                </div>
                <div className="flex flex-col justify-between p-6 md:p-8 sm:w-3/5">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-medium leading-tight">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-end justify-between">
                    <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent mr-4 mb-2" />
                    <span className="font-display text-3xl md:text-4xl gold-gradient-text font-medium">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
