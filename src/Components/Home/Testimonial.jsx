import bgImg from "/assets/Testomonials/TestomonialImg.jpeg";
import towerImg from "/assets/Testomonials/tower.jpg";
import boatImg from "/assets/Testomonials/boat.jpg";
import loveSvg from "/assets/Testomonials/Frame85.png";
import { FaStar } from "react-icons/fa";

export const Testimonial = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-[600px] lg:min-h-[700px] flex items-center justify-center px-4 sm:px-6"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-0" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 py-10">
        {/* Left Content */}
        <div className="text-white max-w-lg flex flex-col gap-4">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Built on Trust
          </h3>
          <p className="text-base sm:text-lg lg:text-xl">
            Loved For Experience
          </p>
          <p className="text-sm sm:text-base text-white/90">
            Read stories from travelers who trusted us to craft their perfect
            journeys!
          </p>
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 transition text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-white font-semibold w-fit">
            View Testimonials
          </button>
        </div>

        {/* Right Content: Cards */}
        <div className="relative flex flex-wrap gap-6 justify-center items-center max-w-full">
          {/* Star Rating */}
          <div className="hidden lg:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-white rounded-full px-3 py-1 items-center gap-1 shadow-lg z-20">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className="text-yellow-500 w-4 h-4 sm:w-5 sm:h-5"
              />
            ))}
          </div>

          {/* Boat Card */}
          <div className="relative w-64 sm:w-72 xl:w-80 shadow-lg rounded-xl overflow-hidden">
            <img
              src={boatImg}
              alt="Boat"
              className="w-full h-full object-cover"
            />
            <img
              src={loveSvg}
              alt="Love Icon"
              className="absolute top-1/2 -left-8 w-10 sm:w-14 rotate-[-15deg] drop-shadow-lg hidden lg:block"
            />
          </div>

          {/* Tower Card */}
          <div className="w-64 sm:w-72 xl:w-80 shadow-lg rounded-xl overflow-hidden">
            <img
              src={towerImg}
              alt="Tower"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
