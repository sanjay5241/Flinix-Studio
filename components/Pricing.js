import React from 'react';
import Link from 'next/link';
import { CheckCircle } from 'react-feather'; // You may need to install react-feather

const Pricing = () => {
  return (
    <section className="py-12 sm:py-16  md:py-15 px-4 sm:px-15 md:px-8 rounded-[30px] sm:rounded-[40px] md:rounded-[60px] bg-white text-black relative overflow-hidden my-4 sm:my-6 md:my-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center pb-3">Affordable Pricing</h2>
        <p className="text-center text-sm sm:text-base mb-6 sm:mb-8 md:mb-12">Get premium design services at an affordable price without compromising quality.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 py-6 sm:py-8 md:py-10">
          {/* iOS Application Card */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 text-black border border-[rgba(255,140,0,1)]">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-4 sm:mb-6">iOS Application</h3>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✅</span>
                <span>Up to 15 App Screens (Home, Login, Dashboards, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✅</span>
                <span>Custom wireframes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✅</span>
                <span>High-Fidelity UI Design</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✅</span>
                <span>Clickable Interactive Prototype</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✅</span>
                <span>App Icon & Splash Screen Design</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✅</span>
                <span>Developer Handoff (Assets & Guidelines)</span>
              </li>
            </ul>

            <p className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Starting at ₹18,000 to 30000.</p>
            <Link href="#contact">
              <div className="bg-[rgba(255,140,0,1)] hover:bg-orange-600 text-black text-center py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base max-w-[200px] mx-auto">
                Get Started
              </div>
            </Link>
          </div>

          {/* Android Application Card */}
          <div className="bg-[#ff8c00] rounded-xl p-4 sm:p-6 text-black transform mb-5 md:-translate-y-4 lg:-translate-y-15 shadow-xl flex flex-col h-full md:mt-0">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-4 sm:mb-6">Android Application</h3>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow text-sm sm:text-base">
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✅</span>
                <span>Up to 15 Android-optimized screens</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✅</span>
                <span>Structured wireframes & clean UI</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✅</span>
                <span>Interactive prototype for testing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✅</span>
                <span>Seamless UX flow for Android users</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✅</span>
                <span>App icon, splash screen & dev assets</span>
              </li>
              <p className="font-bold mb-3 sm:mb-4 mt-3 sm:mt-5 text-sm sm:text-base">Starting at ₹15000 to 35000.</p>
            </ul>

            <div className="mt-auto">
              <Link href="#contact">
                <div className="bg-white hover:bg-gray-100 text-black text-center py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base max-w-[200px] mx-auto">
                  Get Started
                </div>
              </Link>
            </div>
          </div>

          {/* Website Development Card */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 text-black border border-[rgba(255,140,0,1)]">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-4 sm:mb-6">Website Development</h3>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✅</span>
                <span>Custom wireframes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✅</span>
                <span>High-fidelity UI design</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✅</span>
                <span>Mobile-responsive layout</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✅</span>
                <span>Clickable interactive prototype</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✅</span>
                <span>Developer handoff with assets & guidelines</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">✅</span>
                <span>SEO-friendly structure for better search engine visibility</span>
              </li>
            </ul>

            <p className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Starting at ₹7999 to 15000.</p>
            <Link href="#contact">
              <div className="bg-[rgba(255,140,0,1)] hover:bg-orange-600 text-black text-center py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base max-w-[200px] mx-auto">
                Get Started
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;