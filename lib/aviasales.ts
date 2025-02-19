"use client";

import axios from 'axios';

// Base URLs for different Aviasales API endpoints
const API_URL = 'https://api.travelpayouts.com/v1';
const FLIGHT_PRICES_URL = 'https://api.travelpayouts.com/aviasales/v3/prices_for_dates';

const API_KEY = process.env.NEXT_PUBLIC_AVIASALES_API_KEY;
const CLIENT_ID = process.env.NEXT_PUBLIC_AVIASALES_CLIENT_ID;

export interface FlightSearchParams {
  origin: string;      // Origin airport IATA code (e.g., 'LAX')
  destination: string; // Destination airport IATA code (e.g., 'JFK')
  departDate: string;  // Departure date in YYYY-MM-DD format
  returnDate?: string; // Optional return date for round trips
  adults: number;      // Number of adult passengers
  currency?: string;   // Currency code (default: 'USD')
}

export interface Flight {
  price: number;
  airline: string;
  flightNumber: string;
  departure: {
    time: string;
    airport: string;
  };
  arrival: {
    time: string;
    airport: string;
  };
  duration: number;
  stops: number;
}

export const searchFlights = async (params: FlightSearchParams): Promise<Flight[]> => {
  try {
    // Construct the API request parameters
    const requestParams = {
      origin: params.origin,
      destination: params.destination,
      departure_at: params.departDate,
      return_at: params.returnDate,
      currency: params.currency || 'USD',
      token: API_KEY,
      market: 'en',
      limit: 30, // Number of results to return
      page: 1,
      sorting: 'price', // Sort results by price
      direct: false, // Include flights with stops
      client_id: CLIENT_ID
    };

    // Make the API request
    const response = await axios.get(FLIGHT_PRICES_URL, {
      params: requestParams,
      headers: {
        'Accept-Encoding': 'gzip,deflate,compress'
      }
    });

    // Transform the API response into our Flight interface
    const flights = response.data.data.map((flight: any) => ({
      price: flight.price,
      airline: flight.airline,
      flightNumber: `${flight.airline}${flight.flight_number}`,
      departure: {
        time: flight.departure_at,
        airport: params.origin,
      },
      arrival: {
        time: flight.return_at || flight.departure_at, // For one-way flights
        airport: params.destination,
      },
      duration: flight.duration_to || 0,
      stops: flight.transfers || 0,
    }));

    return flights;
  } catch (error) {
    console.error('Error searching flights:', error);
    throw error;
  }
};

// Helper function to get airline information
export const getAirlineInfo = async (iata: string) => {
  try {
    const response = await axios.get(`${API_URL}/airlines`, {
      params: {
        token: API_KEY,
        iata
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching airline info:', error);
    return null;
  }
};

// Helper function to get airport information
export const getAirportInfo = async (iata: string) => {
  try {
    const response = await axios.get(`${API_URL}/airports`, {
      params: {
        token: API_KEY,
        iata
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching airport info:', error);
    return null;
  }
};