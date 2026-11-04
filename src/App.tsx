import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import GrowthCharts from './components/GrowthCharts';
import PartnerStats from './components/PartnerStats';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
        {/* أداة تتبع الزوار من Vercel */}
        <Analytics />
      </div>
    </Router>
  );
}

export default App;