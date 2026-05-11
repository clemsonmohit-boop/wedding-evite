"use client"

import { motion } from "framer-motion"
import { OrnamentalDivider } from "./decorative-elements"

const events = [
  {
    name: "Reception",
    date: "Saturday, July 4th, 2026",
    time: "6:30 PM onwards",
    venue: "Pullman Chennai Anna Salai",
    address: "Chennai, Tamil Nadu",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M8 21h8m-4-4v4m-4-8a4 4 0 0 1 8 0c0 2-2 3-2 5h-4c0-2-2-3-2-5z" />
        <path d="M12 3v2m6.36 1.64l-1.42 1.42M21 12h-2M6.36 6.64L4.93 5.21M3 12h2" />
      </svg>
    ),
  },
  {
    name: "Wedding Ceremony",
    date: "Sunday, July 5th, 2026",
    time: "6:35 AM - 7:59 AM",
    venue: "Pullman Chennai Anna Salai",
    address: "Chennai, Tamil Nadu",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
]

export function VenueDetails() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Wedding Celebrations</h2>
          <OrnamentalDivider className="mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join us as we celebrate this beautiful union
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-card border border-border rounded-sm p-8 hover:border-secondary/50 transition-colors duration-300"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-secondary/30" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-secondary/30" />

              <div className="text-center">
                <div className="inline-flex w-16 h-16 rounded-full bg-secondary/20 items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300 mb-6">
                  {event.icon}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{event.name}</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-medium text-foreground">{event.date}</p>
                  <p className="text-lg text-secondary">{event.time}</p>
                  <div className="pt-4 mt-4 border-t border-border/50">
                    <p className="font-medium text-foreground">{event.venue}</p>
                    <p className="text-sm">{event.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
