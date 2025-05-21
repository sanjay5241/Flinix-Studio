"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle nav link click - close menu and smooth scroll
  const handleSectionNavigation = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="container mx-auto py-2 my-2 md:py-3 px-4 md:px-6 bg-black text-white relative z-50 rounded-[28px] md:rounded-[38px] border border-gray-800">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Flinix Logo" 
            width={80} 
            height={24} 
            className="w-[80px] md:w-[100px]"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-[rgba(255,140,0,1)] transition">
            Home
          </Link>
          <Link 
            href="#about" 
            className="text-white hover:text-[rgba(255,140,0,1)] transition"
            onClick={(e) => handleSectionNavigation(e, "#about")}
          >
            About Us
          </Link>
          <Link 
            href="#services" 
            className="text-white hover:text-[rgba(255,140,0,1)] transition"
            onClick={(e) => handleSectionNavigation(e, "#services")}
          >
            Services
          </Link>
          <Link 
            href="#portfolio" 
            className="text-white hover:text-[rgba(255,140,0,1)] transition"
            onClick={(e) => handleSectionNavigation(e, "#portfolio")}
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            className="bg-black text-white border border-white hover:bg-white hover:text-black px-6 py-2 rounded-full transition"
            onClick={(e) => handleSectionNavigation(e, "#contact")}
          >
            Contact Us
          </Link>
        </div>
        
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <div 
        className={`absolute top-12 md:top-16 right-4 bg-gray-800 p-4 rounded-md shadow-lg transition-all duration-300 transform ${
          isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        } w-48 md:hidden z-50 max-h-[calc(100vh-5rem)] overflow-y-auto`}
      >
        <Link href="/" className="block py-2 md:py-3 hover:text-[rgba(255,140,0,1)]">Home</Link>
        <Link href="#about" className="block py-2 md:py-3 hover:text-[rgba(255,140,0,1)]" onClick={(e) => handleSectionNavigation(e, "#about")}>About Us</Link>
        <Link href="#services" className="block py-2 md:py-3 hover:text-[rgba(255,140,0,1)]" onClick={(e) => handleSectionNavigation(e, "#services")}>Services</Link>
        <Link href="#portfolio" className="block py-2 md:py-3 hover:text-[rgba(255,140,0,1)]" onClick={(e) => handleSectionNavigation(e, "#portfolio")}>Projects</Link>
        <Link href="#contact" className="block py-2 md:py-3 hover:text-[rgba(255,140,0,1)]" onClick={(e) => handleSectionNavigation(e, "#contact")}>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
