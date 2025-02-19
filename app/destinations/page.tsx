"use client";

import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import { useState } from "react";

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const destinations = [
    {
      city: "Paris",
      country: "France",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
      description: "Experience the city of love and lights",
      price: "499",
      attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame"]
    },
    {
      city: "Tokyo",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc",
      description: "Discover the perfect blend of tradition and innovation",
      price: "799",
      attractions: ["Mount Fuji", "Senso-ji Temple", "Shibuya Crossing"]
    },
    {
      city: "Dubai",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      description: "Experience luxury and modern architecture",
      price: "899",
      attractions: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah"]
    },
    // Add more destinations as needed
  ];

  const filteredDestinations = destinations.filter(dest =>
    dest.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Popular Destinations</h1>
          <div className="relative mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search destinations..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img
                  src={dest.image}
                  alt={`${dest.city}, ${dest.country}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{dest.city}</h3>
                  <p className="text-sm text-white/90">{dest.country}</p>
                  <p className="text-lg font-bold mt-2">From ${dest.price}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">{dest.description}</p>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">Top Attractions:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {dest.attractions.map((attraction, i) => (
                      <li key={i}>{attraction}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}