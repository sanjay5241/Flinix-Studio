import Image from "next/image"

const Portfolio = () => {
  const projects = [
    {
      title: "Bcare+",
      description: "A smart healthcare app designed to simplify baby care with tracking, reminders, and expert tips.",
      image: "/1.png",
    },
    {
      title: "Bcare +",
      description: "Experience effortless parenting with a clean, intuitive iOS interface built for modern families.",
      image: "/2.png",
    },
    {
      title: "Bcare+ Web",
      description:
        "Designed with simplicity and care, it provides expert guidance, easy tracking tools, and trusted resources.",
      image: "/3.png",
    },
    {
      title: "Bcare+ Web",
      description:
        "Bcare+ is a smart companion app that helps parents track, manage, and nurture their baby's health with ease .",
      image: "/4.png",
    },
  ]

  return (
    <section
      id="portfolio"
      className="py-8 sm:py-12 px-4 md:px-8 mb-8 sm:mb-12 border-t border-b border-gray-600 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">Our Works</h2>
        <p className="text-base sm:text-xl text-center mb-8 sm:mb-12">
          Transform your app idea into a seamless, intuitive, and visually stunning iOS experience
        </p>

        {/* Horizontal scrollable view with hidden scrollbar */}
        <div className="-mx-4 px-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="flex space-x-6" style={{ minWidth: "max-content" }}>
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#444444] rounded-[20px] overflow-hidden shadow-lg border border-gray-800 flex-shrink-0"
                style={{ width: "280px", maxWidth: "320px", flexBasis: "280px" }}
              >
                <div className="relative h-[200px]">
                  <Image
                    src={project.image || "/laptop-placeholder.jpg"}
                    alt={project.title}
                    height={600}
                    width={400}
                    className="object-cover"
                  />
                </div>
                <div className="px-6 py-4 bg-[#444444]">
                  <p className="text-gray-200 mb-4 text-sm sm:text-base mt-10">{project.description}</p>
                  <div className="flex items-center">
                    <a
                      href="https://www.behance.net/sanjays104"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:opacity-80 transition-opacity"
                    >
                      <span className="text-xs sm:text-sm text-gray-300 hover:text-white cursor-pointer border-b border-gray-300 pb-0.5">
                        Know more
                      </span>
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio