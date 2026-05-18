import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Dynamically import pages to optimize initial bundle size
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const FacilitiesPage = lazy(() => import('./pages/FacilitiesPage'));
const SafarisPage = lazy(() => import('./pages/SafarisPage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// A premium gold/navy themed transition loading spinner
function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-hotel-cream flex flex-col items-center justify-center z-50">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Pulsing golden and navy loader */}
        <div className="absolute inset-0 border-2 border-hotel-primary/10 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-t-amber-500 border-r-amber-500 rounded-full animate-spin"></div>
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border border-amber-500/10">
          <span className="font-serif italic text-hotel-primary font-bold text-lg select-none">S</span>
        </div>
      </div>
      <h3 className="mt-6 text-xs uppercase tracking-[0.4em] font-bold text-hotel-primary">The Staridge</h3>
      <span className="mt-2 text-[9px] uppercase tracking-[0.2em] text-gray-400 font-semibold animate-pulse">Lakeside Luxury Loading</span>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="facilities" element={<FacilitiesPage />} />
            <Route path="safaris" element={<SafarisPage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="booking" element={<BookingPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
