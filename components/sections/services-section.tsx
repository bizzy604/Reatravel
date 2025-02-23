import { motion } from "framer-motion"
import { MapPin, Plane, Shield, Headphones } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const ServiceCard = ({ icon, title, description, color }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${color} flex items-center justify-center mb-4`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

export function ServicesSection() {
  const services = [
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      title: "Calculated Weather",
      description: "Built Wicket longer admire do barton vanity itself do in it.",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <Plane className="h-8 w-8 text-white" />,
      title: "Best Flights",
      description: "Engrossed listening. Park gate sell they west hard for the.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Headphones className="h-8 w-8 text-white" />,
      title: "Local Events",
      description: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Customization",
      description: "We deliver outsourced aviation services for military customers.",
      color: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <section className="py-20 bg-gray-50 p-4">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer the best services in the travel industry to make your journey memorable and hassle-free.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}