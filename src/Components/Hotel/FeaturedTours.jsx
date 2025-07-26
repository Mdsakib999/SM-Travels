import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";
import { featuredToursData } from "../../FakeDb/popularHotel";
import { customStyles } from "../../utils/customStyle";

const FeaturedTours = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 lg:pt-0">
      <style>{customStyles}</style>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-start">
        Our Featured Tours
      </h2>
      <p className="w-full max-w-xl text-gray-600 text-start mb-8">
        Discover unforgettable destinations hand-picked for amazing experiences
        around the world. Book now and start your adventure.
      </p>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000 }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {featuredToursData.map((tour, index) => (
          <SwiperSlide key={index}>
            <div className="w-full max-w-96 mx-auto">
              <div className="rounded-lg shadow-md overflow-hidden flex flex-col h-[300px]">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <div className="px-2 flex flex-col justify-between flex-1 mb-20 mt-5">
                <h3 className="font-semibold text-lg mb-2">{tour.name}</h3>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-1 text-orange-500">
                    <Star size={16} fill="currentColor" />{" "}
                    <span className="text-orange-500"> {tour.rating}</span>
                    <span className="text-gray-600">
                      ({tour.reviews} reviews)
                    </span>
                  </div>
                  <button className="cursor-pointer bg-orange-600 text-white text-xs px-4 py-2 rounded hover:bg-orange-500 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedTours;
