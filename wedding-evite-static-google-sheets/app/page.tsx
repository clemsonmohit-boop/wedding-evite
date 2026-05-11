import { HeroSection } from "@/components/wedding/hero-section"
import { Countdown } from "@/components/wedding/countdown"
import { VenueDetails } from "@/components/wedding/venue-details"
import { RSVPForm } from "@/components/wedding/rsvp-form"
import { Footer } from "@/components/wedding/footer"
import { FloatingPetals } from "@/components/wedding/decorative-elements"

export default function WeddingInvitation() {
  return (
    <main className="min-h-screen relative">
      <FloatingPetals />
      <HeroSection />
      <Countdown />
      <VenueDetails />
      <RSVPForm />
      <Footer />
    </main>
  )
}
