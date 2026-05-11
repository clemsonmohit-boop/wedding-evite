"use client"

import { motion } from "framer-motion"
import { OrnamentalDivider } from "./decorative-elements"

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-gradient-to-b from-background to-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <OrnamentalDivider className="mb-8" />
        
        <p className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Hema &amp; Mohit
        </p>

        <p className="text-muted-foreground mb-8">July 4-5, 2026 | Chennai, India</p>

        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="h-px w-8 bg-secondary/50" />
          <span className="text-secondary text-lg">#HemaWedsMohit</span>
          <div className="h-px w-8 bg-secondary/50" />
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            With love and blessings from our families
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
