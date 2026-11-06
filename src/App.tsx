import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import GrowthCharts from './components/GrowthCharts';
import PartnerStats from './components/PartnerStats';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function DynamicSEO() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about') {
      document.title = 'من نحن وسابقة أعمالنا | نَقْرَة للحلول الرقمية NAQRAH';
    } else if (location.pathname === '/contact') {
      document.title = 'تواصل معنا واطلب خدمتك | نَقْرَة للحلول الرقمية NAQRAH';
    } else {
      document.title = 'نَقْرَة للحلول الرقمية | NAQRAH - تسويق رقمي وتطوير مواقع وإنتاج ريلز';
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute(
        'href',
        `https://naqrah-agency-ten.vercel.app${location.pathname === '/' ? '/' : location.pathname}`
      );
    }
  }, [location]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <GrowthCharts />
      <PartnerStats />
    </>
  );
}

function AboutPage() {
  return (
    <div className="pt-16">
      <AboutUs />
      <PartnerStats />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router>
      <DynamicSEO />
      <div className="min-h-screen bg-oqab-cream text-[#1E1113] flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;