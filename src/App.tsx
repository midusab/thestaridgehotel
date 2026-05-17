import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FacilitiesPage from './pages/FacilitiesPage';
import SafarisPage from './pages/SafarisPage';
import MenuPage from './pages/MenuPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';

export default function App() {
  return (
    <Router>
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
    </Router>
  );
}
