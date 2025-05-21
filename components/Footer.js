"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Instagram, Twitter } from 'react-feather';


const Footer = () => {
  // Handle smooth scrolling for anchor links
  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Flinix Logo"
                width={100}
                height={100}
              />
            </Link>
            <p className="mb-6 text-gray-300 text-1xl">Flinix is a premium UI/UX design company that transforms ideas into elegant, user-centric digital experiences.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-[rgba(255,140,0,1)]">Home</Link></li>
              <li><Link href="#about" className="hover:text-[rgba(255,140,0,1)]" onClick={(e) => handleSmoothScroll(e, "#about")}>About</Link></li>
              <li><Link href="#services" className="hover:text-[rgba(255,140,0,1)]" onClick={(e) => handleSmoothScroll(e, "#services")}>Services</Link></li>
              <li><Link href="#portfolio" className="hover:text-[rgba(255,140,0,1)]" onClick={(e) => handleSmoothScroll(e, "#portfolio")}>Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#services" className="hover:text-[rgba(255,140,0,1)]" onClick={(e) => handleSmoothScroll(e, "#services")}>UI/UX Design</Link></li>
              <li><Link href="#services" className="hover:text-[rgba(255,140,0,1)]" onClick={(e) => handleSmoothScroll(e, "#services")}>Mobile App Design</Link></li>
              <li><Link href="#services" className="hover:text-[rgba(255,140,0,1)]" onClick={(e) => handleSmoothScroll(e, "#services")}>Website Design</Link></li>
              <li><Link href="#services" className="hover:text-[rgba(255,140,0,1)]" onClick={(e) => handleSmoothScroll(e, "#services")}>Wireframing & Prototyping</Link></li>
              <li><Link href="#services" className="hover:text-[rgba(255,140,0,1)]" onClick={(e) => handleSmoothScroll(e, "#services")}>Landing Page Optimization</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="break-words overflow-hidden">hello.flinix@gmail.com</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="break-words">Bengaluru, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">© 2025 All rights reserved</p>
          <div className="flex space-x-4">
            <Link href="http://linkedin.com/in/sanjay0101" className="text-gray-300 hover:text-[rgba(255,140,0,1)]">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://bit.ly/3SoOz5s" className="text-gray-300 hover:text-[rgba(255,140,0,1)]">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
