export interface NavItem {
  label: string;
  href: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image?: string;
  reviews?: FacilityReview[];
}

export interface FacilityReview {
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface MenuItem {
  name: string;
  price: string;
  description: string;
  category: 'Local' | 'Continental' | 'Drinks' | 'Starters' | 'Desserts';
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface SafariPackage {
  title: string;
  duration: string;
  description: string;
  image: string;
}
