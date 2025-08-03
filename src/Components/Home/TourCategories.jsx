import { PreHeading } from "../Shared/PreHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import bgImg from "/assets/TourCategoriesBg.png";

export const TourCategories = () => {
  const menuItems = [
    { id: 1, name: "Wildlife", img: "/assets/Categories/wildlife.jpg" },
    { id: 2, name: "Walking", img: "/assets/Categories/walking.jpg" },
    { id: 3, name: "Cruises", img: "/assets/Categories/cruise.jpg" },
    { id: 4, name: "Hiking", img: "/assets/Categories/hiking.jpg" },
    { id: 5, name: "Airbirds", img: "/assets/Categories/airbirds.jpg" },
    { id: 6, name: "Wildlife", img: "/assets/Categories/wildlife.jpg" },
    { id: 7, name: "Walking", img: "/assets/Categories/walking.jpg" },
    { id: 8, name: "Cruises", img: "/assets/Categories/cruise.jpg" },
    { id: 9, name: "Hiking", img: "/assets/Categories/hiking.jpg" },
    { id: 10, name: "Airbirds", img: "/assets/Categories/airbirds.jpg" },
    { id: 11, name: "Wildlife", img: "/assets/Categories/wildlife.jpg" },
    { id: 12, name: "Walking", img: "/assets/Categories/walking.jpg" },
    { id: 13, name: "Cruises", img: "/assets/Categories/cruise.jpg" },
    { id: 14, name: "Hiking", img: "/assets/Categories/hiking.jpg" },
    { id: 5, name: "Airbirds", img: "/assets/Categories/airbirds.jpg" },
    { id: 6, name: "Wildlife", img: "/assets/Categories/wildlife.jpg" },
    { id: 7, name: "Walking", img: "/assets/Categories/walking.jpg" },
    { id: 8, name: "Cruises", img: "/assets/Categories/cruise.jpg" },
    { id: 15, name: "Hiking", img: "/assets/Categories/hiking.jpg" },
    { id: 16, name: "Airbirds", img: "/assets/Categories/airbirds.jpg" },
  ];
  const swiperRef = useRef(null);
  


  return (
    <div
      className="relative my-20 bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center justify-center gap-5">
        <PreHeading>Wonderful Place For You</PreHeading>
        <h2 className="text-4xl font-extrabold text-black mb-10">
          Tour Categories
        </h2>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={5}
          slidesPerGroup={5}

          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 20,
              
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="w-full"
        >
          {menuItems.map((item, i) => {
            const indexInGroup = i % 5;

            let cardClasses =
              "flex flex-col items-center justify-center text-center px-4 py-6 rounded-[20px] transition-all duration-300 transform hover:scale-105 mb-10";

            if (indexInGroup === 0) {
              cardClasses += " md:translate-y-4 md:-rotate-7";
            } else if (indexInGroup === 1) {
              cardClasses += " md:-translate-y-4 md:-rotate-5";
            } else if (indexInGroup === 2) {
              cardClasses += " md:-translate-y-5 md:rotate-0";
            } else if (indexInGroup === 3) {
              cardClasses += " md:-translate-y-2 md:rotate-7";
            } else if (indexInGroup === 4) {
              cardClasses += " md:translate-y-6 md:rotate-10";
            }

            return (
              <SwiperSlide key={`${item.id}-${i}`}>
                <div
                  className={cardClasses}
                  onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                  onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-56 object-cover rounded-[20px]"
                  />
                  <h3 className="text-lg font-semibold mt-4 text-teal-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-teal-600 mt-1">See More</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
