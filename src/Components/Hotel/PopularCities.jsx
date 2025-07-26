import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import { citiesData } from "../../FakeDb/popularHotel";
import { Autoplay } from "swiper/modules";

const PopularCities = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const slidePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const slideNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 relative mb-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
        Popular Cities in Bangladesh
      </h2>

      {/* Left Arrow */}
      {!isBeginning && (
        <button
          onClick={slidePrev}
          className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-600 border border-gray-200 rounded-full p-2"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Right Arrow */}
      {!isEnd && (
        <button
          onClick={slideNext}
          className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-600 border border-gray-200 rounded-full p-2"
        >
          <ChevronRight size={20} />
        </button>
      )}

      <Swiper
        spaceBetween={20}
        onSwiper={handleSwiper}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {citiesData.map((city, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-[300px] flex flex-col mb-10">
              <img
                src={city.image}
                alt={city.name}
                className="h-2/3 w-full object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <h3 className="text-lg font-semibold mb-1">{city.name}</h3>
                <p className="text-gray-600 text-sm">{city.Hotels} Hotels</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularCities;
