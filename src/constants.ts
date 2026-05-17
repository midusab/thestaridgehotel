import { NavItem, Facility, SafariPackage, MenuItem, Testimonial } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Safaris', href: '/safaris' },
  { label: 'Menu', href: '/menu' },
  { label: 'Contact', href: '/contact' },
];

export const FACILITIES: Facility[] = [
  {
    title: 'Lakeside Dining',
    description: 'Experience gourmet meals with a breathtaking view of Lake Victoria.',
    iconName: 'Utensils',
    image: '/src/assets/images/lake_victoria_fish_dish_1779019237096.png'
  },
  {
    title: 'Luxury Suites',
    description: 'Elegantly furnished rooms with premium amenities and lake views.',
    iconName: 'Bed',
    image: '/src/assets/images/staridge_room_suite_1779019200923.png'
  },
  {
    title: 'Conference Center',
    description: 'State-of-the-art facilities for corporate meetings and events.',
    iconName: 'Users',
    image: '/src/assets/images/staridge_conference_room_1779032098064.png'
  },
  {
    title: 'Infinity Pool',
    description: 'A serene infinity pool to relax and enjoy the tropical sun.',
    iconName: 'Waves',
    image: '/src/assets/images/staridge_infinity_pool_1779033032109.png'
  },
  {
    title: 'Signature Lounge',
    description: 'Experience the vibrant atmosphere with artisan cocktails.',
    iconName: 'Wine',
    image: '/src/assets/images/starney_cocktail_1779032730867.png'
  },
  {
    title: 'Local Expeditions',
    description: 'Discover the hidden gems of Homa Bay with our expert guides.',
    iconName: 'Compass',
    image: '/src/assets/images/lake_simbi_boat_ride_1779032145529.png'
  },
];

export const SAFARI_PACKAGES: SafariPackage[] = [
  {
    title: 'Ruma National Park Tour',
    duration: 'Full Day',
    description: 'Discover the rare Roan Antelope and diverse wildlife in the valley of light.',
    image: '/src/assets/images/ruma_safari_view_1779019218201.png',
  },
  {
    title: 'Lake Victoria Boat Safari',
    duration: '3 Hours',
    description: 'Scenic boat rides to nearby islands with bird watching and sunset views.',
    image: '/src/assets/images/staridge_hotel_hero_1779019184489.png',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Homabay Nile Perch',
    price: 'KES 1,200',
    description: 'Freshly caught Tilapia deep fried or wet fried, served with Ugali and local greens.',
    category: 'Local',
  },
  {
    name: 'Staridge Special Platter',
    price: 'KES 2,500',
    description: 'A mix of grilled chicken, beef kebabs, and seasonal vegetables.',
    category: 'Continental',
  },
  {
    name: 'Grilled Red Snapper',
    price: 'KES 1,800',
    description: 'Served with lemon butter sauce and parsley potatoes.',
    category: 'Continental',
  },
  {
    name: 'Traditional Osuga & Ugali',
    price: 'KES 800',
    description: 'Locally sourced nightshade vegetables cooked in cream.',
    category: 'Local',
  },
  {
    name: 'Vegetable Spring Rolls',
    price: 'KES 550',
    description: 'Crispy pastry filled with seasonal garden vegetables.',
    category: 'Starters',
  },
  {
    name: 'Beef Samosas',
    price: 'KES 450',
    description: 'Traditional spiced beef triangles (3 pieces) served with lime.',
    category: 'Starters',
  },
  {
    name: 'Victoria Sunset Cocktail',
    price: 'KES 950',
    description: 'Signature mix of tropical juices and premium spirits.',
    category: 'Drinks',
  },
  {
    name: 'Fresh Mango Juice',
    price: 'KES 400',
    description: 'Locally grown Homa Bay mangoes blended to perfection.',
    category: 'Drinks',
  },
  {
    name: 'Warm Chocolate Lava Cake',
    price: 'KES 750',
    description: 'Gooey chocolate center served with vanilla bean gelato.',
    category: 'Desserts',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    role: 'Business Traveler',
    content: 'The conference facilities at Staridge are world-class. Combining a productive meeting with the calming views of Lake Victoria made our corporate retreat truly special.',
  },
  {
    name: 'David Ochieng',
    role: 'Local Resident',
    content: 'The best Nil perch in Homa Bay! The restaurant offers consistent quality and the service is always warm and welcoming. A true gem in our county.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'International Tourist',
    content: 'Our boat safari was breathtaking. The guides are incredibly knowledgeable about the local ecosystem. Staridge provided the perfect luxury base for exploring Western Kenya.',
  },
  {
    name: 'Michael Chen',
    role: 'Leisure Guest',
    content: 'The attention to detail in the Executive suites is remarkable. From the marble bathrooms to the personalized morning coffee, everything was perfect.',
  },
];
