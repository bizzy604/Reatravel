"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DealsPage() {
  const deals = [
    {
      title: "Early Bird Summer Special",
      destination: "Paris, France",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
      originalPrice: 899,
      discountedPrice: 699,
      validity: "Book by May 31, 2025",
      description: "Including return flights, 4-star hotel for 5 nights, and city tour"
    },
    {
      title: "Last Minute Asia",
      destination: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc",
      originalPrice: 1299,
      discountedPrice: 999,
      validity: "Travel within next 30 days",
      description: "Round-trip flights, luxury accommodation, and airport transfers"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Special Deals & Offers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {deals.map((deal, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <img
                src={deal.image}
                alt={deal.destination}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full">
                Save ${deal.originalPrice - deal.discountedPrice}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
              <p className="text-gray-600 mb-4">{deal.description}</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-400 line-through">${deal.originalPrice}</span>
                <span className="text-2xl font-bold text-blue-600">${deal.discountedPrice}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">{deal.validity}</p>
              <Button className="w-full">Book Now</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}