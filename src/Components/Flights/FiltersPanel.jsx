import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { PriceSlider } from "./PriceSlider";
import { CustomCheckbox } from "../Shared/CustomCheckbox";
import { StopButton } from "../Shared/StopButton";

export const FiltersPanel = () => {
  const [priceRange, setPriceRange] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState({
    refundableFare: false,
    oneStop: false,
    lateDeparture: false,
    nonStop: false,
  });
  const [onwardStopType, setOnwardStopType] = useState("");
  const [returnStopType, setReturnStopType] = useState("");
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedAirports, setSelectedAirports] = useState([]);

  const handleFilterChange = (filterName) =>
    setSelectedFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));

  const handleAirlineChange = (airline) =>
    setSelectedAirlines((prev) =>
      prev.includes(airline)
        ? prev.filter((a) => a !== airline)
        : [...prev, airline]
    );

  const handleAirportChange = (airport) =>
    setSelectedAirports((prev) =>
      prev.includes(airport)
        ? prev.filter((a) => a !== airport)
        : [...prev, airport]
    );

  const clearAll = () => {
    setSelectedFilters({
      refundableFare: false,
      oneStop: false,
      lateDeparture: false,
      nonStop: false,
    });
    setPriceRange(7);
    setOnwardStopType("");
    setReturnStopType("");
    setSelectedAirlines([]);
    setSelectedAirports([]);
  };

  return (
    <div className="w-full h-fit lg:w-64 bg-gray-50 rounded-lg overflow-hidden">
      <div className="p-4 space-y-6 h-[80vh] lg:h-full overflow-y-auto scrollbar-hide">
        {/* Popular Filters */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 text-sm">
            Popular Filters
          </h3>
          <div className="space-y-2">
            {[
              ["refundableFare", "Refundable Fare", 41],
              ["oneStop", "1 Stop", 20],
              ["lateDeparture", "Late Departure", 4],
              ["nonStop", "Non-Stop", 2],
            ].map(([key, label, count]) => (
              <CustomCheckbox
                key={key}
                checked={selectedFilters[key]}
                onChange={() => handleFilterChange(key)}
                count={count}
              >
                {label}
              </CustomCheckbox>
            ))}
          </div>
        </div>

        {/* Price Slider */}
        <PriceSlider
          priceRange={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />

        {/* Onward Stops */}
        <div className="border-t-2 border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3 text-sm mt-2">
            Onward Stops
          </h4>
          <div className="flex gap-2">
            {["Direct", "1 Stop", "2+ Stops"].map((stop) => (
              <StopButton
                key={stop}
                active={onwardStopType === stop}
                onClick={() => setOnwardStopType(stop)}
              >
                {stop}
              </StopButton>
            ))}
          </div>
        </div>

        {/* Return Stops */}
        <div className="border-t-2 border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3 text-sm mt-2">
            Return Stops
          </h4>
          <div className="flex gap-2">
            {["Direct", "1 Stop", "2+ Stops"].map((stop) => (
              <StopButton
                key={stop}
                active={returnStopType === stop}
                onClick={() => setReturnStopType(stop)}
              >
                {stop}
              </StopButton>
            ))}
          </div>
        </div>

        {/* Preferred Airline */}
        <div className="border-t-2 border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3 text-sm mt-2">
            Preferred Airline
          </h4>
          <div className="space-y-2">
            {["Blogzine", "Wizixo", "Folio airline", "Booking"].map(
              (airline) => (
                <CustomCheckbox
                  key={airline}
                  checked={selectedAirlines.includes(airline)}
                  onChange={() => handleAirlineChange(airline)}
                >
                  {airline}
                </CustomCheckbox>
              )
            )}
          </div>
        </div>

        {/* Layered Airport */}
        <div className="border-t-2 border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3 text-sm mt-2">
            Layered Airport
          </h4>
          <div className="space-y-2">
            {[
              { name: "Abu Dhabi", count: 1 },
              { name: "Amsterdam", count: 2 },
              { name: "Chicago", count: 2 },
              { name: "Doha", count: 3 },
            ].map((airport) => (
              <CustomCheckbox
                key={airport.name}
                checked={selectedAirports.includes(airport.name)}
                onChange={() => handleAirportChange(airport.name)}
                count={airport.count}
              >
                {airport.name}
              </CustomCheckbox>
            ))}
            <button className="text-xs flex items-center text-orange-500 hover:text-orange-600 mt-2 font-medium">
              See more <FaAngleDown />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between items-center p-4 bg-gray-50 border-t border-gray-100">
        <button
          onClick={clearAll}
          className="text-xs text-orange-500 hover:text-orange-600 font-medium cursor-pointer hover:underline transition-colors"
        >
          Clear all
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm rounded-md font-medium transition-colors shadow-sm">
          Filter Result
        </button>
      </div>
    </div>
  );
};
