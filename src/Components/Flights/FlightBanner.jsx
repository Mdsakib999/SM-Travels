import bgImg from "/assets/FlightBannerBg.webp";
import { useState } from "react";
import { ChevronDown, MapPin, Plane, Calendar, Users } from "lucide-react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

export const FlightBanner = () => {
  const [tripType, setTripType] = useState("one-way");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [selectedClass, setSelectedClass] = useState("economy");
  const [travelers, setTravelers] = useState(1);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSwapLocations = () => {
    setFromLocation(toLocation);
    setToLocation(fromLocation);
  };

  return (
    <div className="relative w-full mb-[550px] sm:mb-[350px] lg:mb-60">
      <img
        className="brightness-75 w-full h-[300px] sm:h-[400px] md:h-[400px] object-cover object-center"
        src={bgImg}
        alt="Banner"
      />
      <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-2 sm:px-4">
        {/* Header */}
        <header className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center mb-12 tracking-tight">
            Ready to take off?
          </h1>
        </header>

        <section className="bg-white space-y-5 sm:space-y-8 rounded-xl shadow-lg text-black p-4 sm:p-6 md:p-10">
          {/* Top Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 mb-6">
            {/* Trip Type Tabs */}
            <div className="flex gap-2 sm:gap-3">
              {["one-way", "round-trip"].map((type) => (
                <button
                  key={type}
                  onClick={() => setTripType(type)}
                  className={`px-4 sm:px-5 py-2.5 rounded font-medium text-sm transition-all duration-200 ${
                    tripType === type
                      ? "bg-orange-500 text-white shadow"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {type === "one-way" ? "One Way" : "Round Trip"}
                </button>
              ))}
            </div>

            {/* Class & Travelers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
              {/* Flight Class */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Flight Class
                </label>
                <div className="relative">
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-orange-500 outline-none appearance-none bg-white"
                  >
                    <option value="economy">Economy</option>
                    <option value="premium-economy">Premium Economy</option>
                    <option value="business">Business</option>
                    <option value="first">First Class</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Travelers */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  <Users className="inline w-4 h-4 mr-1 -mt-0.5" />
                  Travelers
                </label>
                <div className="relative">
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(parseInt(e.target.value))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-orange-500 outline-none appearance-none bg-white"
                  >
                    {[...Array(4)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i + 1 === 1 ? "Traveler" : "Travelers"}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* From */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline w-4 h-4 mr-1" />
                From
              </label>
              <input
                type="text"
                placeholder="Select Location"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <ChevronDown className="absolute right-3 top-12 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* To */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Plane className="inline w-4 h-4 mr-1" />
                To
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Select Location"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <button
                  onClick={handleSwapLocations}
                  className="absolute left-2 top-1/2 sm:-left-6 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow hover:bg-orange-600 hidden md:block"
                  aria-label="Swap locations"
                >
                  <FaArrowRightArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Departure */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline w-4 h-4 mr-1" />
                Departure
              </label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Return */}
            {tripType === "round-trip" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Return
                </label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors">
                Find Ticket
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
