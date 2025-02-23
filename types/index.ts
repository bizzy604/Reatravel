export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export interface Destination {
  image: string;
  title: string;
  price: string;
  duration: string;
}

export interface Stat {
  number: string;
  label: string;
  icon: string;
}

export interface BookingStep {
  color: string;
  icon: string;
  title: string;
  description: string;
}