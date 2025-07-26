import { useState } from "react";
import { Star } from "lucide-react";
import { internationalHotelsData } from "../../FakeDb/popularHotel";

const PopularTour = () => {
  const tabs = Object.keys(internationalHotelsData);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-start">
        Popular Tour's Destination
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-y-5 space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md shadow-lg shadow-gray-300 cursor-pointer ${
              activeTab === tab
                ? "bg-orange-600 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {internationalHotelsData[activeTab].map((hotel, index) =>
          hotel.isMoreCard ? (
            <div
              key={index}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <img
                src={hotel.image}
                alt={hotel.label}
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-semibold mb-2 text-lg">{hotel.label}</p>
                <button className="w-full bg-orange-600 hover:bg-orange-500 duration-300 text-white py-2 rounded-md">
                  Explore More
                </button>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden h-[400px] flex flex-col relative"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="h-[200px] w-full object-cover"
              />
              {/* Rating Badge */}
              <div className="absolute right-4 top-8 -translate-y-1/2 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md z-10">
                {hotel.rating} / 5
              </div>
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-bold text-lg mb-1">{hotel.name}</h3>
                  <div className="flex mb-2">
                    {Array.from({ length: hotel.stars }).map((_, i) => (
                      <Star
                        fill="yellow"
                        key={i}
                        size={20}
                        className="text-yellow-300 border-0"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{hotel.address}</p>
                </div>
                <div className="mt-4 text-right text-orange-600 font-semibold">
                  Starts from ${hotel.price}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PopularTour;
