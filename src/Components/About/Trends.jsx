const Trends = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="./assets/leftImage.png"
            alt="Popular Tour Plans"
            className="w-96"
          />
        </div>

        {/* Text and Icons Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-orange-600 font-semibold uppercase tracking-wide">
            Trend
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Our Popular Tour Plans
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-prose">
            Discover unforgettable adventures with our expertly curated tours.
            From breathtaking landscapes to cultural gems, our plans ensure a
            seamless and memorable experience for every traveler.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-4 sm:gap-6 lg:gap-8 mt-8">
            <img
              src="./assets/vacation.png"
              alt="Vacation Tours"
              className="w-16 h-16 sm:w-28 sm:h-28 object-contain hover:scale-105 transition-transform"
            />
            <img
              src="./assets/Honeymoon.png"
              alt="Honeymoon Packages"
              className="w-16 h-16 sm:w-28 sm:h-28 object-contain hover:scale-105 transition-transform"
            />
            <img
              src="./assets/event.png"
              alt="Event Tours"
              className="w-16 h-16 sm:w-28 sm:h-28 object-contain hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;
