"use client"

import { motion } from "framer-motion"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { DestinationsSection } from "@/components/sections/destinations-section"
import { BookTripSection } from "@/components/sections/book-trip-section"
import { StatsSection } from "@/components/sections/stats-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { NewsletterSection } from "@/components/sections/newsletter-section"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <DestinationsSection />
      <BookTripSection />
      <StatsSection />
      <TestimonialsSection />
      <PartnersSection />
      <NewsletterSection />
    </div>
  )
}