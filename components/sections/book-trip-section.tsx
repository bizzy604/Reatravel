import { motion } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"

export function BookTripSection() {
  const steps = [
    {
      title: "Choose Destination",
      description: "Select from our wide range of destinations worldwide",
      icon: "🌎"
    },
    {
      title: "Make Payment",
      description: "Easy and secure payment options available",
      icon: "💳"
    },
    {
      title: "Reach Airport",
      description: "Get detailed instructions for your journey",
      icon: "✈️"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Book your next trip in 3 easy steps</h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/destinations/rome.jpg"
                alt="Booking preview"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}