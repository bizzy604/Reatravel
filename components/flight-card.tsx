"use client";

import { Flight } from "@/lib/aviasales";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Clock, ArrowRight } from "lucide-react";
import { format } from "date-fns";

interface FlightCardProps {
  flight: Flight;
  onSelect: (flight: Flight) => void;
}

export function FlightCard({ flight, onSelect }: FlightCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg font-bold">{flight.airline}</span>
            <span className="text-sm text-gray-500">Flight {flight.flightNumber}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div>
              <p className="text-2xl font-bold">
                {format(new Date(flight.departure.time), "HH:mm")}
              </p>
              <p className="text-sm text-gray-500">{flight.departure.airport}</p>
            </div>
            
            <div className="flex-1 flex items-center gap-2">
              <div className="h-[2px] flex-1 bg-gray-200 relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <Plane className="h-4 w-4 text-blue-500" />
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-2xl font-bold">
                {format(new Date(flight.arrival.time), "HH:mm")}
              </p>
              <p className="text-sm text-gray-500">{flight.arrival.airport}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{Math.floor(flight.duration / 60)}h {flight.duration % 60}m</span>
            </div>
            <div>
              {flight.stops === 0 ? "Direct" : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <p className="text-3xl font-bold text-blue-600">${flight.price}</p>
          <Button onClick={() => onSelect(flight)} className="w-full md:w-auto">
            Select <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}