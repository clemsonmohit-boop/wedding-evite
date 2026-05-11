"use client"

import { motion } from "framer-motion"
import { MandalaCorner, OrnamentalDivider } from "./decorative-elements"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Decorative corners */}
      <MandalaCorner className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-60" rotate={0} />
      <MandalaCorner className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-60" rotate={90} />
      <MandalaCorner className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-60" rotate={270} />
      <MandalaCorner className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-60" rotate={180} />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <p className="text-secondary-foreground/80 font-serif text-lg md:text-xl tracking-wide leading-relaxed">
            Om Sri Ganeshaya Namaha
          </p>
          <p className="text-secondary-foreground/80 font-serif text-lg md:text-xl tracking-wide leading-relaxed">
            Om Shri Krishnaya Namaha
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <OrnamentalDivider className="mb-8" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-4"
        >
          Hema
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4 my-6"
        >
          <div className="h-px w-12 bg-secondary" />
          <span className="font-serif text-3xl md:text-4xl text-secondary">&amp;</span>
          <div className="h-px w-12 bg-secondary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-8"
        >
          Mohit
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <OrnamentalDivider className="mb-8" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-muted-foreground font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8"
        >
          Together with their families, request the pleasure of your company at the celebration of their wedding
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="inline-flex flex-col items-center gap-2 px-8 py-4 border border-secondary/50 rounded-sm bg-card/50 backdrop-blur-sm"
        >
          <span className="text-secondary-foreground/60 text-sm uppercase tracking-widest">Save the Date</span>
          <span className="font-serif text-2xl md:text-3xl text-foreground">July 4-5, 2026</span>
          <span className="text-muted-foreground text-sm">Chennai, India</span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 right-6 md:right-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
