import { useRef } from "react";
import { PreHeading } from "../Shared/PreHeading";
import bgImg from "/assets/TourCategoriesBg.png";
import { FaRegClock } from "react-icons/fa";
import { TbCurrentLocation } from "react-icons/tb";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export const PopularDestination = () => {
  const swiperRef = useRef(null);

  const menuItems = [
    {
      id: 1,
      name: "Ghorepani Poon Hill Trek",
      location: "Bhutan, Pokhara",
      price: "569.00",
      duration: "5 Days",
      img: "/assets/Destination/ghorepani.jpg",
    },
    {
      id: 2,
      name: "Langtang Valley Trekking",
      location: "Bhutan, India, Pokhara",
      price: "600.00",
      duration: "6 Days",
      img: "/assets/Destination/langtang.jpg",
    },
    {
      id: 3,
      name: "Short Trek around Pokhara",
      location: "Bhutan, India, Tibet",
      price: "250.00",
      duration: "6 Days",
      img: "/assets/Destination/pokhara.jpg",
    },
    {
      id: 4,
      name: "Island Peak Climbing",
      location: "Nepal, Pokhara, Tibet",
      price: "569.00",
      duration: "3 Days",
      img: "/assets/Destination/island.jpg",
    },
    {
      id: 1,
      name: "Ghorepani Poon Hill Trek",
      location: "Bhutan, Pokhara",
      price: "569.00",
      duration: "5 Days",
      img: "/assets/Destination/ghorepani.jpg",
    },
    {
      id: 2,
      name: "Langtang Valley Trekking",
      location: "Bhutan, India, Pokhara",
      price: "600.00",
      duration: "6 Days",
      img: "/assets/Destination/langtang.jpg",
    },
    {
      id: 3,
      name: "Short Trek around Pokhara",
      location: "Bhutan, India, Tibet",
      price: "250.00",
      duration: "6 Days",
      img: "/assets/Destination/pokhara.jpg",
    },
    {
      id: 4,
      name: "Island Peak Climbing",
      location: "Nepal, Pokhara, Tibet",
      price: "569.00",
      duration: "3 Days",
      img: "/assets/Destination/island.jpg",
    },
  ];

  return (
    <div
      className="relative my-20 bg-cover bg-center py-10"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center justify-center gap-5">
        <PreHeading>Best Recommended Place</PreHeading>
        <h2 className="text-4xl font-extrabold text-black mb-3">
          Popular Destination we offer for all
        </h2>
        <p className="text-sm text-gray-600 w-full lg:max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          slidesPerGroup={4}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 40,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="w-full pt-10"
        >
          {menuItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                className="py-4"
              >
                <div className="bg-white rounded-xl mb-12 shadow overflow-hidden transition-all duration-300 mx-1 hover:scale-105">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 flex flex-col gap-2 text-left">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 gap-2">
                      <TbCurrentLocation className="text-orange-500" />
                      {item.location}
                    </div>
                    <div className="text-lg font-bold text-gray-800">
                      ${item.price}
                      <span className="text-sm font-normal text-gray-500">
                        {" "}
                        /Person
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaRegClock className="text-orange-500" />
                        {item.duration}
                      </div>
                      <button className="bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded-full text-sm font-semibold text-gray-700 flex items-center gap-2">
                        Book Now <span className="text-lg">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
