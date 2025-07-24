import { useState } from "react";
import { PreHeading } from "../Shared/PreHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const TopDestination = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const menuItems = [
    {
      id: 1,
      title: "Thailand",
      listing: "22 Listing",
      img: "/assets/TopDestination/Island.jpg",
    },
    {
      id: 2,
      title: "Nepal",
      listing: "22 Listing",
      img: "/assets/TopDestination/Nepal.jpg",
    },
    {
      id: 3,
      title: "Maldives",
      listing: "22 Listing",
      img: "/assets/TopDestination/Thiland.jpg",
    },
    {
      id: 4,
      title: "Island",
      listing: "22 Listing",
      img: "/assets/TopDestination/Maldives.jpg",
    },
    {
      id: 5,
      title: "Bali",
      listing: "22 Listing",
      img: "/assets/TopDestination/Island.jpg",
    },
  ];

  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    const totalCards = menuItems.length;

    // Normalize difference to be between -2 and 2
    let normalizedDiff = diff;
    if (Math.abs(diff) > totalCards / 2) {
      normalizedDiff = diff > 0 ? diff - totalCards : diff + totalCards;
    }

    return Math.max(-2, Math.min(2, normalizedDiff));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center justify-center gap-5 py-16">
      <PreHeading>Top Destination</PreHeading>
      <h2 className="text-4xl font-extrabold text-black mb-10">
        Popular Destination
      </h2>

      <div className="relative w-full max-w-5xl mx-auto h-[450px] my-10">
        <div className="relative w-full h-full flex items-center justify-center">
          {menuItems.map((item, index) => {
            const position = getCardPosition(index);
            const isCenter = position === 0;
            const isVisible = Math.abs(position) <= 2;

            if (!isVisible) return null;

            return (
              <div
                key={item.id}
                className={`absolute transition-all duration-700 ease-out cursor-pointer ${
                  isCenter ? "z-30" : Math.abs(position) === 1 ? "z-20" : "z-10"
                }`}
                style={{
                  transform: `
                    translateX(${position * 120}px) 
                    scale(${
                      isCenter ? 1 : Math.abs(position) === 1 ? 0.9 : 0.8
                    }) 
                    rotateY(${position * -5}deg)
                  `,
                  opacity: Math.abs(position) === 2 ? 0.6 : 1,
                }}
                onClick={() => {
                  if (!isCenter) {
                    setCurrentIndex(index);
                  }
                }}
              >
                <div
                  className={`relative rounded-3xl overflow-hidden shadow-2xl ${
                    isCenter ? "w-80 h-[500px]" : "w-72 max-h-[470px]"
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <h3
                          className={`font-bold ${
                            isCenter ? "text-2xl" : "text-xl"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`opacity-90 ${
                            isCenter ? "text-base" : "text-sm"
                          }`}
                        >
                          {item.listing}
                        </p>
                      </div>

                      {isCenter && (
                        <button className="mt-4 px-6 py-2 border-2 border-white/80 rounded-full text-sm font-medium hover:bg-white/20 transition-colors self-start">
                          View All →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
