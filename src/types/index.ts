export interface School {
  id: string;
  name: string;
  description: string;
  domain: string;
  type: string;
  city: string;
  country: string;
  coordinates: [number, number];
  contact: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  pricing: {
    isFree: boolean;
    price: string;
  };
  certifications: string[];
  testimonials: Testimonial[];
  images: string[];
  logo: string;
  rating: number;
  studentsCount: number;
}

export interface Testimonial {
  id: string;
  studentName: string;
  content: string;
  rating: number;
  course: string;
}

export interface FilterState {
  domain: string;
  type: string;
  city: string;
  pricing: string;
  searchQuery: string;
}