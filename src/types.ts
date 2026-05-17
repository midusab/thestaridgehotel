export interface NavItem {
  label: string;
  href: string;
}

export interface Facility {
  title: string;
  description: string;
  iconName: string;
  image?: string;
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
}

export interface SafariPackage {
  title: string;
  duration: string;
  description: string;
  image: string;
}
