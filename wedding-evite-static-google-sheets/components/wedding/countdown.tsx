"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { OrnamentalDivider } from "./decorative-elements"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(): TimeLeft {
  const weddingDate = new Date("2026-07-05T06:35:00+05:30")
  const now = new Date()
  const difference = weddingDate.getTime() - now.getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-20 h-20 md:w-28 md:h-28 border border-secondary/50 rounded-sm bg-card flex items-center justify-center">
          <span className="font-serif text-3xl md:text-5xl text-foreground">
            {value.toString().padStart(2, "0")}
          </span>
        </div>
        {/* Decorative corners */}
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-secondary" />
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-secondary" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-secondary" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-secondary" />
      </div>
      <span className="mt-3 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <section className="py-20 px-6 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Counting Down</h2>
          <OrnamentalDivider className="mb-12" />
          <div className="flex justify-center gap-4 md:gap-8">
            {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
              <CountdownUnit key={label} value={0} label={label} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Counting Down</h2>
          <OrnamentalDivider className="mb-4" />
          <p className="text-muted-foreground mb-12">To the beginning of forever</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 md:gap-8"
        >
          <CountdownUnit value={timeLeft.days} label="Days" />
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <CountdownUnit value={timeLeft.minutes} label="Minutes" />
          <CountdownUnit value={timeLeft.seconds} label="Seconds" />
        </motion.div>
      </div>
    </section>
  )
}
