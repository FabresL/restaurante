// Website developed by Lorenzo Fabres
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Cardápio", href: "#cardapio" },
  { label: "Aperitivos", href: "#aperitivos" },
  { label: "Sobremesas", href: "#sobremesas" },
  { label: "Bebidas", href: "#bebidas" },
  { label: "Drinks", href: "#drinks" },
  { label: "Eventos", href: "#eventos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-display text-2xl md:text-3xl gold-gradient-text tracking-wide">
            Aurélien
          </span>
          <span className="hidden md:inline text-[0.6rem] tracking-[0.35em] text-muted-foreground uppercase border-l border-border pl-2">
            Maison
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a href="#reservar" className="hidden md:inline-flex btn-outline-gold !py-2 !px-5 !text-[0.65rem]">
          Reservar
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block h-px w-5 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="lg:hidden overflow-hidden"
      >
        <div className="px-5 pb-6 pt-2 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.2em] py-2 border-b border-border/40 text-muted-foreground hover:text-gold transition"
            >
              {l.label}
            </a>
          ))}
          <a href="#reservar" onClick={() => setOpen(false)} className="btn-gold mt-3">
            Reservar Mesa
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
