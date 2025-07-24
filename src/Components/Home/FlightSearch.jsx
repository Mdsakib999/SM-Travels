import { useState } from "react";
import { RouteCard } from "./RouteCard";

export const FlightSearch = () => {
  const [activeTab, setActiveTab] = useState("International");

  const flightRoutes = [
    // Domestic Routes (within Bangladesh)
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Chittagong",
      toAirport: "Shah Amanat International Airport",
      type: "Domestic",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Sylhet",
      toAirport: "Osmani International Airport",
      type: "Domestic",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Cox's Bazar",
      toAirport: "Cox's Bazar Airport",
      type: "Domestic",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Jessore",
      toAirport: "Jessore Airport",
      type: "Domestic",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Barisal",
      toAirport: "Barisal Airport",
      type: "Domestic",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Rajshahi",
      toAirport: "Shah Makhdum Airport",
      type: "Domestic",
    },

    // International Routes
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Agartala",
      toAirport: "Agartala Airport",
      type: "International",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Hyderabad",
      toAirport: "Hyderabad International Airport",
      type: "International",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Madinah",
      toAirport: "Prince Mohammad bin Abdulaziz Airport",
      type: "International",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Colombo",
      toAirport: "Bandaranaike International Airport",
      type: "International",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Bangkok",
      toAirport: "Suvarnabhumi Airport",
      type: "International",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Delhi",
      toAirport: "Indira Gandhi International Airport",
      type: "International",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Chennai",
      toAirport: "Chennai International Airport",
      type: "International",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Kuala Lumpur",
      toAirport: "Kuala Lumpur International Airport",
      type: "International",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "London",
      toAirport: "London Heathrow Airport",
      type: "International",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Kathmandu",
      toAirport: "Tribhuvan International Airport",
      type: "International",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Kolkata",
      toAirport: "Netaji Subhash Chandra Bose International Airport",
      type: "International",
    },

    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Bangalore",
      toAirport: "Kempegowda International Airport",
      type: "International",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Washington",
      toAirport: "Washington Dulles International Airport",
      type: "International",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Dubai",
      toAirport: "Dubai International Airport",
      type: "International",
    },
    {
      from: "Dhaka",
      fromAirport: "Hazrat Shahjalal International Airport",
      to: "Singapore",
      toAirport: "Changi Airport",
      type: "International",
    },
  ];

  // Filter routes based on active tab
  const filteredRoutes = flightRoutes.filter(
    (route) => route.type === activeTab
  );

  return (
    <div className="max-w-7xl mx-auto p-6 my-20">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Search Cheapest Flight By Destination
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Effortlessly find cheap flight and air tickets to various destinations
          on ShareTrip. Explore routes, book online air tickets, and plan your
          next travel adventure.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
          <button
            onClick={() => setActiveTab("Domestic")}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === "Domestic"
                ? "bg-orange-500 text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Domestic
          </button>
          <button
            onClick={() => setActiveTab("International")}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === "International"
                ? "bg-orange-500 text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            International
          </button>
        </div>
      </div>

      {/* Flight Routes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRoutes.map((route, index) => (
          <RouteCard key={`${route.from}-${route.to}-${index}`} route={route} />
        ))}
      </div>
    </div>
  );
};
