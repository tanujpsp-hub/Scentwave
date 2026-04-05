import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Scentwave from './pages/Scentwave';
import { SITE_CONTENT } from './constants';

const AppContent = () => {
  return (
    <div className="min-h-screen bg-brand-primary flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scentwave" element={<Scentwave />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber={SITE_CONTENT.whatsappNumber} />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
