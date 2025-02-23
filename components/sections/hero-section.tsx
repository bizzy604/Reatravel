import { AviasalesWidget } from "@/components/aviasales-widget"
import { FlightCard } from "../flight-card"
import { FlightScheduleWidget } from "../flight-schedule-widget"

export function HeroSection() {
  return (
    <div 
      className="relative h-[600px] bg-cover bg-center"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&auto=format&fit=crop&q=80')" 
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 container mx-auto px-4 pt-32 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold text-black mb-6 max-w-2xl">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl">
          Find and book the best deals on flights to destinations worldwide. Your journey begins here.
        </p>
        <div className="max-w-4xl w-full mx-auto bg-white/95 backdrop-blur-sm rounded-lg p-6">
          <div className="p-4">
            <AviasalesWidget />
          </div>
        </div>
        </div>
      </div>
  )
}