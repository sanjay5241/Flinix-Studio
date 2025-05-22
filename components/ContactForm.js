"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Linkedin, Instagram } from 'react-feather';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    services: '',
  });

  const [isClient, setIsClient] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const infoRef = useRef(null);

  useEffect(() => {
    setIsClient(true);

    // Add a small delay to ensure DOM is fully rendered
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsInfoVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { 
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px' // Trigger a bit earlier
        }
      );

      if (infoRef.current) {
        observer.observe(infoRef.current);
      }

      return () => {
        if (infoRef.current) {
          observer.unobserve(infoRef.current);
        }
      };
    }, 100);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message body with form data
    const subject = `New Form Submission from ${formData.name}`;
    const body = `
      Name: ${formData.name}
      Phone: ${formData.phone}
      Email: ${formData.email}
      Services Requested: ${formData.services}
    `;

    // Create mailto URL
    const mailtoURL = `mailto:hello.flinix@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the default mail client
    window.location.href = mailtoURL;

    console.log('Form submitted:', formData);

    // Show confirmation and reset form
    setTimeout(() => {
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        services: '',
      });
    }, 500);
  };

  return (
    <section id='contact' className="bg-black text-white py-8 sm:py-12 md:py-16">
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">Get In Touch</h2>
        <p className="text-center text-sm sm:text-base mb-6 sm:mb-8 md:mb-12 px-4">Have a project in mind? Contact us today and let's bring your vision to life!</p>

        <div className="bg-white text-black rounded-t-[30px] sm:rounded-t-[45px] md:rounded-t-[60px] overflow-hidden flex flex-wrap relative px-4 sm:px-6 md:px-25 pb-8 sm:pb-16 md:pb-20">
          {/* Left side - Form */}
          <div className="w-full md:w-3/5 p-4 sm:p-6 md:p-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-1">Contact us</h3>
            <p className="mb-4 sm:mb-6 text-gray-600 text-sm sm:text-base md:text-1.5xl">It will be simple, user-friendly, and encourage visitors to reach out.</p>

            {isClient ? (
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                <div>
                  <label htmlFor="name" className="block mb-1 sm:mb-2 text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-full bg-gray-100 border border-gray-300 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-1 sm:mb-2 text-sm">Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-full bg-gray-100 border border-gray-300 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 sm:mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-full bg-gray-100 border border-gray-300 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="services" className="block mb-1 sm:mb-2 text-sm">Services</label>
                  <input
                    type="text"
                    id="services"
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-full bg-gray-100 border border-gray-300 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white mt-6 sm:mt-8 md:mt-10 py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-gray-800 transition duration-300"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="h-96 flex items-center justify-center">
                <p>Loading form...</p>
              </div>
            )}
            <div className="bg-[rgba(255,140,0,1)] w-16 sm:w-24 md:w-35 h-full absolute -top-0 -right-0 z-0 hidden sm:block"></div>
          </div>

          {/* Right side - Contact information */}
          <div 
            ref={infoRef}
            className="w-full md:w-2/5 relative mt-8 md:mt-0 overflow-hidden"
          >
            <div 
              className={`bg-gray-800 text-white mx-4 sm:ml-auto sm:mr-4 my-4 p-4 sm:p-6 w-auto sm:w-13/12 relative z-10 mt-0 md:mt-39 transition-all duration-1000 ease-out transform ${
                isInfoVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-6">Information</h4>
              <div className="space-y-4 sm:space-y-6 md:space-y-10">
                <div className="flex items-center flex-wrap">
                  <Mail className="mr-2 text-[rgba(255,140,0,1)]" size={20} />
                  <a
                    href="mailto:hello.flinix@gmail.com"
                    className="text-xs sm:text-sm hover:text-orange-400 underline"
                  >
                    hello.flinix@gmail.com
                  </a>
                </div>
                 {/* <div className="flex items-center">
                  <Phone className="mr-2 text-[rgba(255,140,0,1)]" size={20} />
                  <a
                    href="tel:6374622404"
                    className="text-xs sm:text-sm hover:text-orange-400"
                  >
                    6374622404
                 </a>
                 </div> */}
                <div className="flex items-center">
                  <Linkedin className="mr-2 text-[rgba(255,140,0,1)]" size={20} />
                  <a
                    href="http://linkedin.com/in/sanjay0101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm truncate hover:text-orange-400 underline"
                  >
                    http://linkedin.com/in/sanjay0101
                  </a>
                </div>
                <div className="flex items-center">
                  <Instagram className="mr-2 text-[rgba(255,140,0,1)]" size={20} />
                  <a
                    href="https://bit.ly/3SoOz5s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm truncate hover:text-orange-400 underline"
                  >
                    @flinix_studio_
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
