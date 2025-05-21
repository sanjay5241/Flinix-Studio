const Stats = () => {
  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 py-15 sm:py-8 md:py-15 relative">
      {/* Large background text */}
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden opacity-10 z-0">
        <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold text-gray-400 tracking-wider select-none">FLINIX</h1>
      </div>
      
      {/* Stats bar */}
      <div className="rounded-3xl py-2 px-3 sm:px-4 md:px-8 flex flex-wrap justify-around relative z-10 text-base sm:text-xl md:text-2xl" 
          style={{background: "linear-gradient(90deg, rgba(51, 51, 51, 0.8) 0%, rgba(51, 51, 51, 0.8) 100%)"}}>
        <div className="text-center px-2 sm:px-4 md:px-6 py-2 w-1/2 xs:w-1/3 md:w-auto mb-2 md:mb-0">
          <h3 className="text-[rgba(255,140,0,1)]">100 +</h3>
          <p className="text-gray-300 text-sm sm:text-base">Projects</p>
        </div>
        
        <div className="text-center px-2 sm:px-4 md:px-6 py-2 w-1/2 xs:w-1/3 md:w-auto mb-2 md:mb-0">
          <h3 className="text-[rgba(255,140,0,1)]">2 +</h3>
          <p className="text-gray-300 text-sm sm:text-base">year Exp</p>
        </div>
        
        <div className="text-center px-2 sm:px-4 md:px-6 py-2 w-1/2 xs:w-1/3 md:w-auto mb-2 md:mb-0">
          <h3 className="text-[rgba(255,140,0,1)]">Figma</h3>
          <p className="text-gray-300 text-sm sm:text-base">Expert</p>
        </div>
        
        <div className="text-center px-2 sm:px-4 md:px-6 py-2 w-1/2 xs:w-1/3 md:w-auto mb-2 md:mb-0">
          <h3 className="text-[rgba(255,140,0,1)]">Fast</h3>
          <p className="text-gray-300 text-sm sm:text-base">Designing</p>
        </div>
        
        <div className="text-center px-2 sm:px-4 md:px-6 py-2 w-1/2 xs:w-1/3 md:w-auto">
          <h3 className="text-[rgba(255,140,0,1)]">Available</h3>
          <p className="text-gray-300 text-sm sm:text-base">24*7</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;