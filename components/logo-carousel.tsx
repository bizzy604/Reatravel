"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const logos = [
  {
    name: "Axon Airlines",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Delta_Air_Lines_logo.svg/2560px-Delta_Air_Lines_logo.svg.png",
  },
  {
    name: "Jetstar",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/LogoJetstar.svg/2560px-LogoJetstar.svg.png",
  },
  {
    name: "Expedia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Expedia_2012_logo.svg/2560px-Expedia_2012_logo.svg.png",
  },
  {
    name: "Qantas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Qantas_Airways_Limited_logo_2016.svg/2560px-Qantas_Airways_Limited_logo_2016.svg.png",
  },
  {
    name: "Alitalia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/AlitaliaLogo.svg/2560px-AlitaliaLogo.svg.png",
  },
]

export function LogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex items-center justify-center gap-4 md:gap-8"
        animate={{
          x: `-${currentIndex * 100}%`,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        {logos.concat(logos).map((logo, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-20 sm:w-24 md:w-32 h-10 sm:h-12 md:h-16 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src={logo.logo || "/placeholder.svg"}
              alt={logo.name}
              width={90}
              height={45}
              className="object-contain filter grayscale hover:grayscale-0 transition-all"
              sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

