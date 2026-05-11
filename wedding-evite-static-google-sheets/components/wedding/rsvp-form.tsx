"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { OrnamentalDivider } from "./decorative-elements"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type AttendanceStatus = "attending" | "not-attending" | null

interface FormData {
  name: string
  email: string
  phone: string
  attendance: AttendanceStatus
  guestCount: string
  dietaryRestrictions: string
  events: string[]
  message: string
}

const eventOptions = [
  { id: "reception", label: "Reception - July 4th" },
  { id: "wedding", label: "Wedding - July 5th" },
]

export function RSVPForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    attendance: null,
    guestCount: "1",
    dietaryRestrictions: "",
    events: [],
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.attendance) return

    const scriptUrl = process.env.NEXT_PUBLIC_RSVP_SCRIPT_URL

    if (!scriptUrl) {
      alert("RSVP is not configured yet. Please add NEXT_PUBLIC_RSVP_SCRIPT_URL before publishing.")
      return
    }

    setIsSubmitting(true)

    try {
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          attendance: formData.attendance,
          guestCount: formData.guestCount,
          dietaryRestrictions: formData.dietaryRestrictions,
          events: formData.events.join(", "),
          message: formData.message,
        }),
      })

      setIsSubmitted(true)
    } catch (error) {
      console.error(error)
      alert("Failed to submit RSVP. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEventToggle = (eventId: string) => {
    setFormData((prev) => ({
      ...prev,
      events: prev.events.includes(eventId)
        ? prev.events.filter((e) => e !== eventId)
        : [...prev.events, eventId],
    }))
  }

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">RSVP</h2>
          <OrnamentalDivider className="mb-6" />
          <p className="text-muted-foreground">
            Kindly respond by June 15, 2026
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-16 px-8 bg-card border border-border rounded-sm"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-10 h-10 text-secondary"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="font-serif text-3xl text-foreground mb-4">Dhanyavaad!</h3>
              <p className="text-muted-foreground mb-2">
                Your response has been received.
              </p>
              <p className="text-muted-foreground">
                We are so excited to celebrate with you!
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-sm p-8 md:p-12"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-foreground">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 bg-input border-border focus:border-secondary"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2 bg-input border-border focus:border-secondary"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2 bg-input border-border focus:border-secondary"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Attendance */}
                <div>
                  <Label className="text-foreground mb-3 block">Will you be attending?</Label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: "attending" })}
                      className={`flex-1 py-3 px-4 border rounded-sm transition-colors ${
                        formData.attendance === "attending"
                          ? "bg-secondary text-secondary-foreground border-secondary"
                          : "bg-transparent border-border text-foreground hover:border-secondary/50"
                      }`}
                    >
                      Joyfully Accept
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: "not-attending" })}
                      className={`flex-1 py-3 px-4 border rounded-sm transition-colors ${
                        formData.attendance === "not-attending"
                          ? "bg-secondary text-secondary-foreground border-secondary"
                          : "bg-transparent border-border text-foreground hover:border-secondary/50"
                      }`}
                    >
                      Regretfully Decline
                    </button>
                  </div>
                </div>

                {formData.attendance === "attending" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6"
                  >
                    {/* Events */}
                    <div>
                      <Label className="text-foreground mb-3 block">Which events will you attend?</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {eventOptions.map((event) => (
                          <button
                            key={event.id}
                            type="button"
                            onClick={() => handleEventToggle(event.id)}
                            className={`py-3 px-4 border rounded-sm transition-colors text-sm ${
                              formData.events.includes(event.id)
                                ? "bg-secondary text-secondary-foreground border-secondary"
                                : "bg-transparent border-border text-foreground hover:border-secondary/50"
                            }`}
                          >
                            {event.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Guest Count */}
                    <div>
                      <Label htmlFor="guestCount" className="text-foreground">Number of Guests</Label>
                      <select
                        id="guestCount"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="mt-2 w-full py-2 px-3 bg-input border border-border rounded-sm text-foreground focus:border-secondary focus:outline-none"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Dietary Restrictions */}
                    <div>
                      <Label htmlFor="dietary" className="text-foreground">Dietary Restrictions</Label>
                      <Input
                        id="dietary"
                        type="text"
                        value={formData.dietaryRestrictions}
                        onChange={(e) =>
                          setFormData({ ...formData, dietaryRestrictions: e.target.value })
                        }
                        className="mt-2 bg-input border-border focus:border-secondary"
                        placeholder="Vegetarian, Jain, allergies, etc."
                      />
                    </div>
                  </motion.div>
                )}

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-foreground">Message for the Couple</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 bg-input border-border focus:border-secondary min-h-[100px]"
                    placeholder="Share your wishes..."
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={!formData.attendance || isSubmitting}
                  className="w-full py-6 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Submit RSVP"
                  )}
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
