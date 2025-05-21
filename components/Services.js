const Services = () => {
  const services = [
    {
      title: "Mobile App Design",
      features: [
        "Clean, modern UI",
        "Smooth user flow",
        "Modern and clean visuals",
        "Custom design for Android & iOS"
      ]
    },
    {
      title: "Website UX/UI Design",
      features: [
        "Seamless user journeys",
        "Intuitive, responsive layouts",
        "Elegant, modern interfaces"
      ]
    },
    {
      title: "Wireframing and Prototyping",
      features: [
        "Clear layout planning",
        "Interactive prototypes",
        "User journey mapping",
        "Fast revisions"
      ]
    },
    {
      title: "Landing Page Optimization",
      features: [
        "High-converting page layouts",
        "Clear call-to-action designs",
        "Fast loading and mobile-friendly",
        "Engaging, user-focused experience"
      ]
    }
  ];
  
  return (
    <section id="services" className="bg-white py-15 px-6 md:px-8 rounded-[30px] sm:rounded-[40px] md:rounded-[60px] bg-white text-black relative overflow-hidden ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">Our Services</h2>
        <p className="text-base sm:text-xl text-center mb-8 sm:mb-12">Shape the future of your brand with our expert UI/UX design skills.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 rounded-2xl overflow-hidden flex shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="p-6 flex-1">
                <h3 className="text-[rgba(255,140,0,1)] text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-10 bg-[rgba(255,140,0,1)] rounded-r-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;