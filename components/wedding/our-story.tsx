"use client"

import { motion } from "framer-motion"
import { OrnamentalDivider } from "./decorative-elements"

const storyTimeline = [
  {
    year: "2019",
    title: "First Meeting",
    description:
      "Priya and Arjun first crossed paths at a mutual friend's Diwali celebration. A conversation about their shared love for classical music turned into hours of talking.",
  },
  {
    year: "2020",
    title: "First Date",
    description:
      "Their first official date was at a cozy cafe in Bandra. Despite the world slowing down, their connection only grew stronger through countless video calls and shared playlists.",
  },
  {
    year: "2022",
    title: "Meeting the Families",
    description:
      "The families met over a traditional dinner. Between the laughter and shared stories, everyone knew this was meant to be. The blessings flowed as naturally as the conversation.",
  },
  {
    year: "2025",
    title: "The Proposal",
    description:
      "Under the stars at their favorite spot in Goa, Arjun asked Priya to be his forever. With happy tears and a resounding yes, they began planning their journey together.",
  },
]

export function OurStory() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Our Story</h2>
          <OrnamentalDivider className="mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every love story is beautiful, but ours is our favorite
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary/20 via-secondary to-secondary/20" />

          {storyTimeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-secondary border-4 border-background z-10" />

              {/* Content */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <span className="inline-block px-4 py-1 text-sm font-medium bg-secondary/20 text-secondary rounded-sm mb-3">
                  {item.year}
                </span>
                <h3 className="font-serif text-2xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>

              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
