const HeroSection = () => {
  return (
    <div className="relative w-full">
      {/* Banner Image */}
      <img
        className="brightness-75 w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover object-center"
        src="/assets/about/about.png"
        alt="Banner"
      />

      {/* Banner Text Overlay */}
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4">
        <header className="space-y-2 mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            About Us
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-200">
            SM TRAVEL — Making your journeys smooth, safe, and unforgettable.
          </p>
        </header>
      </div>
    </div>
  );
};

export default HeroSection;
