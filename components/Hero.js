import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import Stats from './Stats';

const Hero = () => {
  return (
    <section className="bg-white text-black rounded-b-[20px] sm:rounded-b-[30px] md:rounded-b-[60px] overflow-hidden px-2 sm:px-6 md:px-8 pb-8 sm:pb-12 md:pb-20 md:pt-5 lg:pt-5 xl:pt-10 relative">
      {/* Abstract geometric design elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="rgba(255,140,0,0.4)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.8,-0.7C87.6,14.9,82.7,29.8,74.9,43.2C67.2,56.7,56.7,68.7,43.8,76.9C30.9,85.2,15.4,89.6,0.4,88.9C-14.6,88.3,-29.1,82.6,-42.2,74.3C-55.2,66.1,-66.8,55.2,-73.5,42C-80.3,28.7,-82.3,13.4,-81.7,-1.7C-81.2,-16.8,-78.2,-33.5,-70.3,-47.4C-62.4,-61.3,-49.7,-72.2,-35.7,-79.2C-21.6,-86.1,-6.3,-89.2,7.4,-84.8C21.1,-80.3,30.7,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute top-20 right-0 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="rgba(255,140,0,0.3)" d="M48.2,-69.2C62.3,-61.8,73.2,-47.1,79,-30.6C84.8,-14.1,85.6,4.3,81.3,21.1C77,37.9,67.7,53.2,54.6,66.1C41.4,79,24.6,89.6,5.8,85.5C-12.9,81.4,-33.6,62.7,-47.1,45.3C-60.6,28,-66.9,11.9,-66.2,-3.9C-65.5,-19.8,-57.6,-35.3,-46.6,-43.2C-35.5,-51.1,-21.2,-51.5,-4.4,-55.5C12.3,-59.5,34,-76.7,48.2,-69.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="rgba(255,140,0,0.2)" d="M34.6,-55.3C46.3,-45.4,58.3,-38.4,67.4,-27.3C76.5,-16.1,82.7,-0.8,79.8,12.3C77,25.4,65,36.3,52.8,44.3C40.5,52.3,28,57.4,14.3,63.2C0.7,69,-14.2,75.5,-26.6,72.4C-39,69.3,-49,56.7,-57.2,43.6C-65.5,30.5,-72.1,17,-73.7,2.3C-75.4,-12.3,-72.1,-27.8,-63.3,-38.5C-54.5,-49.2,-40.2,-55,-27.4,-64.2C-14.6,-73.3,-3.3,-85.7,5.2,-84.3C13.7,-82.9,23,-65.2,34.6,-55.3Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      <div className='px-2 sm:px-4 md:px-20 relative z-100'>
        <Navbar />
      </div>

      <div className="pt-4 md:pt-20 md:pb:20 px-2 sm:px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 px-2 sm:px-0">
            {/* Design badge */}
            <div className="inline-block bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 mb-4 md:mb-6 border border-[rgba(255,140,0,1)] shadow-lg hover:shadow-orange-200 transition-all duration-300 whitespace-nowrap overflow-x-auto overflow-y-hidden max-w-full">
              <p className="text-xs sm:text-sm flex items-center">
                <span className="overflow-hidden text-ellipsis text-[9px] sm:text-xs font-medium">✍🏻 Great design is not just what it looks like but how it works</span>
              </p>
            </div>

            {/* Main heading with gradient text */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400">
                Design Your Vision
              </span>
              <br />
              Shape Your Success
            </h1>

            {/* Description with enhanced typography */}
            <p className="text-black mb-6 leading-relaxed max-w-[500px] text-sm sm:text-base">
              Transform your ideas into sleek, intuitive, and user-friendly digital designs. We craft seamless experiences that connect with your audience. Let us bring your vision to life with cutting-edge UI/UX design solutions.
            </p>

            {/* CTA buttons with animation */}
            <div className="flex flex-wrap w-full gap-3 md:gap-6">
              <Link
                href="#contact"
                className="flex-1 sm:flex-none bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-medium px-5 sm:px-12 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 text-center text-sm sm:text-base flex items-center justify-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Get Started</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="#portfolio"
                className="flex-1 sm:flex-none bg-white hover:bg-orange-50 text-orange-500 border-2 border-orange-400 px-5 sm:px-12 py-[10px] rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 text-center text-sm sm:text-base"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See Our Works
              </Link>
            </div>

            <div className="mt-6 md:mt-8 overflow-x-auto no-scrollbar max-w-full">
              <div className="inline-flex items-center whitespace-nowrap  sm:gap-6 px-6 sm:px-8 py-2 border border-orange-300 rounded-full text-xs sm:text-sm">
                <span className="flex-shrink-0 mr-1">Powered by:</span>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="flex-shrink-0 px-2 sm:px-4 py-0.5 border border-[rgba(255,140,0,1)] rounded-full">Figma</span>
                  <span className="flex-shrink-0 px-2 sm:px-4 py-0.5 border border-[rgba(255,140,0,1)] rounded-full">Photopea</span>
                  <span className="flex-shrink-0 px-2 sm:px-4 py-0.5 border border-[rgba(255,140,0,1)] rounded-full">Sketch</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column with showcase image and design elements - improved for mobile */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            {/* Main image with advanced layered design */}
            <div className="relative w-[70vw] h-[70vw] sm:w-[60vw] sm:h-[60vw] md:w-[45vw] md:h-[45vw] lg:w-[38vw] lg:h-[38vw] max-w-[480px] max-h-[480px] min-w-[280px] min-h-[280px] rounded-full overflow-hidden z-10">
              {/* Design frame with animated gradient border */}
              <div className="absolute inset-0 rounded-full border-2 border-orange-400 z-20 animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-[8px] rounded-full border border-orange-300 z-20"></div>

              {/* Rotating outer circle */}
              <div className="absolute inset-[-15px] rounded-full border-2 border-dashed border-orange-200 z-5 animate-spin" style={{ animationDuration: '20s' }}></div>

              <Image
                src="/hero.jpeg"
                alt="Design professionals working together"
                fill
                className="object-cover rounded-full"
                priority
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent z-15"></div>
            </div>

            {/* Floating UI/UX design elements - more mobile responsive */}
            <div className="hidden sm:block absolute top-[-5%] right-[15%] px-3 sm:px-4 py-1.5 sm:py-2 bg-white shadow-lg rounded-xl border-l-4 border-orange-500 z-20 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" viewBox="0 0 24 24" fill="none">
                  <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 5V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M17 7L19 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M19 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M17 17L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M12 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M7 17L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M5 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M5 5L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-xs sm:text-sm font-medium">UI Design</span>
              </div>
            </div>

            <div className="hidden sm:block absolute bottom-[10%] left-[5%] px-3 sm:px-4 py-1.5 sm:py-2 bg-white shadow-lg rounded-xl border-l-4 border-purple-500 z-20 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" viewBox="0 0 24 24" fill="none">
                  <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 10.5H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 10.5H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 10.5H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs sm:text-sm font-medium">UX Research</span>
              </div>
            </div>

            <div className="hidden sm:block absolute top-[30%] left-[-5%] px-3 sm:px-4 py-1.5 sm:py-2 bg-white shadow-lg rounded-xl border-l-4 border-blue-500 z-20 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" viewBox="0 0 24 24" fill="none">
                  <path d="M21 7.5V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M15 12H17.5M20 12H17.5M17.5 12V9.5M17.5 12V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M12 8H6V16H12V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs sm:text-sm font-medium">Wireframing</span>
              </div>
            </div>

            <div className="hidden sm:block absolute bottom-[-5%] right-[20%] px-3 sm:px-4 py-1.5 sm:py-2 bg-white shadow-lg rounded-xl border-l-4 border-green-500 z-20 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M14.5 9.5L10 14L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs sm:text-sm font-medium">Prototyping</span>
              </div>
            </div>

            {/* 3D Design element */}
            <div className="hidden sm:block absolute top-[45%] right-[0%] px-3 sm:px-4 py-1.5 sm:py-2 bg-white shadow-lg rounded-xl border-l-4 border-amber-500 z-20 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" viewBox="0 0 24 24" fill="none">
                  <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20L12 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 22L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 22L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 22L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 22L20 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 14L5.39075 12.8358C5.45725 12.7788 5.4906 12.7503 5.52659 12.7273C5.55801 12.7072 5.591 12.6915 5.625 12.6801C5.66397 12.6675 5.7054 12.6618 5.78825 12.6503L12 12L18.2117 12.6503C18.2946 12.6618 18.336 12.6675 18.375 12.6801C18.409 12.6915 18.442 12.7072 18.4734 12.7273C18.5094 12.7503 18.5428 12.7788 18.6093 12.8358L20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 6V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 11V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs sm:text-sm font-medium">3D Design</span>
              </div>
            </div>

            {/* Mobile-optimized design elements */}
            <div className="block sm:hidden absolute -top-2 right-0 px-2 py-1 bg-white shadow-md rounded-lg border-l-2 border-orange-500 z-20">
              <span className="text-[10px] font-medium">UI/UX</span>
            </div>

            <div className="block sm:hidden absolute bottom-0 left-0 px-2 py-1 bg-white shadow-md rounded-lg border-l-2 border-purple-500 z-20">
              <span className="text-[10px] font-medium">Design</span>
            </div>

            {/* Floating design elements - responsive */}
            <div className="absolute bottom-[35%] right-[20%] flex items-center gap-1 z-10">
              <div className="w-10 sm:w-16 h-1 bg-orange-400 rounded-full"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-orange-500 rounded-full"></div>
            </div>

            <div className="absolute top-[20%] left-[15%] flex items-center gap-1 z-10">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-orange-500 rounded-full"></div>
              <div className="w-8 sm:w-12 h-1 bg-orange-400 rounded-full"></div>
            </div>

            {/* Design ruler - responsive sizing */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 w-[60%] h-4 sm:h-6 bg-white/80 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center px-2 z-10">
              <div className="w-full h-1 sm:h-2 bg-orange-100 rounded-full flex items-center justify-between px-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`h-${i % 2 === 0 ? '2 sm:h-3' : '1 sm:h-2'} w-0.5 bg-orange-400`}></div>
                ))}
              </div>
            </div>

            {/* Design grid pattern - responsive sizing */}
            <div className="absolute top-[10%] right-[-5%] w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] opacity-30 z-0">
              <div className="grid grid-cols-4 grid-rows-4 gap-0.5 sm:gap-1 w-full h-full">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className={`rounded-sm ${i % 3 === 0 ? 'bg-orange-500' : 'bg-orange-300'}`}></div>
                ))}
              </div>
            </div>

            {/* Color palette circles - responsive */}
            <div className="absolute bottom-[15%] right-[30%] flex gap-0.5 sm:gap-1 z-10">
              <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-orange-500 animate-pulse" style={{ animationDuration: '1.5s' }}></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-purple-500 animate-pulse" style={{ animationDuration: '2s' }}></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-blue-500 animate-pulse" style={{ animationDuration: '2.5s' }}></div>
            </div>

            {/* Design element: dotted grid pattern - responsive */}
            <div className="absolute top-[45%] left-[5%] grid grid-cols-3 grid-rows-3 gap-0.5 sm:gap-1 opacity-50 z-0">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-orange-400"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative design elements at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[35px] sm:h-[50px] md:h-[70px] text-orange-50">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
