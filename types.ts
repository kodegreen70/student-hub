export interface School {
  id: string;
  name: string;
  city: string;
  imageUrl: string;
  description: string;
  scholarships: Scholarship[];
  requirements: string[];
  facilities: string[];
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
}

export interface Scholarship {
  id: string;
  title: string;
  amount: number;
  deadline: string;
  requirements: string[];
  description: string;
}

export interface Photographer {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  location: string;
  experience: number;
  specialties: string[];
  availability: {
    weekdays: string[];
    weekends: string[];
  };
  portfolio: string[];
  bio: string;
  contactInfo: {
    email: string;
    phone: string;
  };
  reviews: {
    id: string;
    name: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}
