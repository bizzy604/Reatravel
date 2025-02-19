"use client";

import { Plane, Search, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Testimonials } from "@/components/testimonials";
import { AviasalesWidget } from "@/components/aviasales-widget";
import { FlightScheduleWidget } from "@/components/flight-schedule-widget";
import { CalendarWidget } from "@/components/calendar-widget";

export default function Home() {
  const featuredDestinations = [
    {
      city: "Paris",
      country: "France",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop&q=60",
      price: "499",
    },
    {
      city: "Tokyo",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&auto=format&fit=crop&q=60",
      price: "799",
    },
    {
      city: "New York",
      country: "USA",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop&q=60",
      price: "399",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-[600px] bg-cover bg-center" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&auto=format&fit=crop&q=80')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 pt-32 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-black mb-6 max-w-2xl">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-2xl">
            Find and book the best deals on flights to destinations worldwide. Your journey begins here.
          </p>

          {/* Aviasales Widget */}
          <div className="max-w-4xl w-full mx-auto bg-white/95 backdrop-blur-sm rounded-lg p-6">
            <AviasalesWidget />
          </div>
        </div>
      </div>

      {/* Flight Tools Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Plan Your Journey</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Flight Schedule Widget */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Flight Schedules</h3>
            <FlightScheduleWidget />
          </div>
          
          {/* Calendar Widget */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Price Calendar</h3>
            <CalendarWidget />
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDestinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative h-64">
                <img
                  src={destination.image}
                  alt={`${destination.city}, ${destination.country}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{destination.city}</h3>
                  <p className="text-sm text-white/90">{destination.country}</p>
                  <p className="text-lg font-bold mt-2">From ${destination.price}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Best Flight Deals</h3>
              <p className="text-gray-600">Find the most competitive prices for your next journey</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Search</h3>
              <p className="text-gray-600">Simple and fast way to find your perfect flight</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Booking</h3>
              <p className="text-gray-600">Change your flight dates with no hassle</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}