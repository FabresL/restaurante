// Website developed by Lorenzo Fabres
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="font-display text-4xl md:text-5xl gold-gradient-text tracking-wide">
              Aurélien
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-px w-40 origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
            />
            <div className="text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground">
              Maison Gastronomique
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
