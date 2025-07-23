import { FaPlay } from "react-icons/fa";

const MidBanner = () => {
  return (
    <div className="relative my-8 w-full min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
      <img
        className="w-full h-full min-h-80 object-cover brightness-50"
        src="/assets/about/aboutWomen.png"
        alt="midBanner"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl text-white font-serif italic text-center z-10">
            WonderLust
          </p>
          <span className="absolute bg-[#DF6951] text-white w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center z-20">
            <FaPlay
              size={14}
              className="xs:scale-100 sm:scale-125 md:scale-150"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
