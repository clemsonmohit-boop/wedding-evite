"use client"

import { motion } from "framer-motion"
import { OrnamentalDivider } from "./decorative-elements"

const events = [
  {
    name: "Mehendi",
    date: "December 13, 2026",
    time: "4:00 PM onwards",
    venue: "Sharma Residence",
    address: "12 Juhu Tara Road, Mumbai",
    description: "Join us for an afternoon of traditional henna artistry, music, and celebration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2C8 6 4 10 4 14c0 4.4 3.6 8 8 8s8-3.6 8-8c0-4-4-8-8-12z" />
        <path d="M12 6c-2 2.5-4 5-4 7.5 0 2.5 1.8 4.5 4 4.5s4-2 4-4.5c0-2.5-2-5-4-7.5z" />
      </svg>
    ),
  },
  {
    name: "Sangeet",
    date: "December 14, 2026",
    time: "7:00 PM onwards",
    venue: "Grand Ballroom, Taj Lands End",
    address: "Bandstand, Bandra West, Mumbai",
    description: "An evening of music, dance performances, and joyous celebration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    name: "Wedding Ceremony",
    date: "December 15, 2026",
    time: "10:00 AM - 2:00 PM",
    venue: "The Taj Mahal Palace",
    address: "Apollo Bunder, Colaba, Mumbai",
    description: "The auspicious wedding ceremony followed by a grand celebration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    name: "Reception",
    date: "December 15, 2026",
    time: "7:00 PM onwards",
    venue: "Crystal Ballroom, The Taj Mahal Palace",
    address: "Apollo Bunder, Colaba, Mumbai",
    description: "Dinner and dancing to celebrate the newly married couple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M8 21h8m-4-4v4m-4-8a4 4 0 0 1 8 0c0 2-2 3-2 5h-4c0-2-2-3-2-5z" />
        <path d="M12 3v2m6.36 1.64l-1.42 1.42M21 12h-2M6.36 6.64L4.93 5.21M3 12h2" />
      </svg>
    ),
  },
]

export function EventDetails() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Wedding Events</h2>
          <OrnamentalDivider className="mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            We invite you to join us for all the celebrations leading up to our special day
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-sm p-8 hover:border-secondary/50 transition-colors duration-300"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-secondary/30" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-secondary/30" />

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                  {event.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-foreground mb-2">{event.name}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground mb-4">
                    <p className="font-medium text-foreground">{event.date}</p>
                    <p>{event.time}</p>
                    <p className="text-secondary">{event.venue}</p>
                    <p>{event.address}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
