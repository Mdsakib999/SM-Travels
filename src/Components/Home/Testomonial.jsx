import bgImg from "/assets/Testomonials/TestomonialImg.jpeg";
import towerImg from "/assets/Testomonials/tower.jpg";
import boatImg from "/assets/Testomonials/boat.jpg";
import loveSvg from "/assets/Testomonials/Frame85.png";
import { FaStar } from "react-icons/fa";

export const Testomonial = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-[600px] lg:min-h-[700px] flex items-center justify-center px-4 sm:px-6"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-0"></div>

      {/* Main content wrapper */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
        {/* Left Text Content */}
        <div className="text-white max-w-lg flex flex-col gap-4 pt-10 lg:pt-0 lg:pl-10">
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
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg text-white font-semibold w-fit">
            View Testimonials
          </button>
        </div>

        {/* Image Cards Section */}
        <div className="relative w-full xl:w-auto flex flex-col md:flex-row lg:block items-center gap-6 md:gap-4 pb-10 lg:pb-0 lg:static">
          {/* Boat Card */}
          <div
            className="relative w-64 md:w-72 lg:w-52 xl:w-80 h-auto shadow-lg rounded-xl  z-10 
                  lg:absolute lg:top-10 lg:left-2/3 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2"
          >
            <img
              src={boatImg}
              alt="Boat"
              className="w-full h-full object-cover rounded-xl"
            />
            {/* Love Icon */}
            <img
              src={loveSvg}
              alt="Love Icon"
              className="absolute top-1/2 -left-10 w-12 sm:w-16 rotate-[-15deg] drop-shadow-lg hidden lg:block"
            />
          </div>

          {/* Star rating (visible only on lg) */}
          <div className="hidden lg:flex absolute lg:top-[-80px] xl:top-[-120px] lg:right-[33%] xl:right-[37%] transform -translate-x-1/2 bg-white rounded-full px-3 py-1 items-center justify-center gap-1 shadow-lg z-20">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className="text-yellow-500 w-4 h-4 sm:w-5 sm:h-5"
              />
            ))}
          </div>

          {/* Tower Card */}
          <div
            className="w-64 md:w-72 lg:w-52 xl:w-80 h-auto shadow-lg rounded-xl overflow-hidden z-0 
                  mt-6 md:mt-0 
                  lg:absolute lg:-top-10 lg:left-[80%]"
          >
            <img
              src={towerImg}
              alt="Tower"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
