
export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  imageUrl?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  status?: 'For Sale' | 'For Rent' | 'Sold' | 'Pending';
  yearBuilt?: number;
  lotSize?: string;
  propertyType?: string;
  description?: string;
  features?: string[];
  images?: string[];
  virtualTour?: boolean;
  agent?: Agent;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  photoUrl?: string;
  specialty?: string;
  isFeatured?: boolean;
  listingCount?: number;
  bio?: string;
  experience?: number;
  languages?: string[];
  certifications?: string[];
  areas?: string[];
  stats?: {
    totalSales?: number;
    activeListings?: number;
    soldLastYear?: number;
    averageDaysOnMarket?: number;
  };
  socialMedia?: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface SearchFilters {
  location?: string;
  propertyType?: string;
  price?: {
    min: number;
    max: number;
  };
  bedrooms?: string;
  bathrooms?: string;
  squareFeet?: {
    min: number;
    max: number;
  };
  yearBuilt?: {
    min: number;
    max: number;
  };
  keywords?: string;
  features?: string[];
  status?: string;
}

export interface IDXConfig {
  apiKey: string;
  apiUrl: string;
  version: string;
}
