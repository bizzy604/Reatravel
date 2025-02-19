"use client";

import { Card } from "@/components/ui/card";
import { AviasalesWidget } from "@/components/aviasales-widget";

export default function FlightsPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Find Your Perfect Flight</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Search Flights</h2>
            <AviasalesWidget />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Book With Us</h2>
            <Card className="p-6">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  Best price guarantee
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  24/7 customer support
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  Flexible booking options
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  No hidden fees
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}