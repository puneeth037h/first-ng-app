// hotel.model.ts
export interface Hotel {
    id: number;
    name: string;
    location: string;
    image: string;
    description: string;
    price: number;
    rating: number;
    roomImages: string[];
    services: string[];
    mapUrl: string;
  }
  