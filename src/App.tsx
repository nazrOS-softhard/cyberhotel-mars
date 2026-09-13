import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import GamingModule from './pages/GamingModule';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import MenuPage from './pages/Menu';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contacts from './pages/Contacts';
import Booking from './pages/Booking';
import Deposit from './pages/Deposit';
import Partner from './pages/Partner';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/gaming" element={<GamingModule />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
