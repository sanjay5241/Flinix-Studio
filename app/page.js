"use client";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const FlinixWebsite = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default FlinixWebsite;
