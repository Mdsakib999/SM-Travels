import { Eye } from "lucide-react";
import { FlightTimeDetails } from "./FlightTimeDetails";
import { FlightBadge } from "./FlightBadge";
import { Link } from "react-router-dom";

export const FlightCard = ({ flight, onShowDetails }) => {
  // Calculate total duration by summing all segments' durations in minutes and format
  const totalDuration = flight.timings
    .map((t) => parseDurationToMinutes(t.duration))
    .reduce((a, b) => a + b, 0);
  const formattedDuration = formatMinutesToDuration(totalDuration);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-4 hover:shadow-md transition-shadow overflow-hidden">
      {/* Header with airline and price */}
      <div className="flex justify-between items-start p-3">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
            {flight.airline.split(" ")[0].substring(0, 2).toUpperCase()}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-base mb-1 whitespace-nowrap">
              {flight.airline}
            </h3>
            <p className="text-sm text-gray-500">{flight.code}</p>
          </div>
        </div>

        <div className="text-right">
          <p className="font-medium text-gray-900 text-base mb-1">
            Travel Class: {flight.travelClass}
          </p>
        </div>
      </div>

      {/* Flight timing details */}
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-18 items-center px-4 md:px-6 py-1">
        {/* Map over timings array and render each segment */}
        <div className="w-full md:w-auto flex-1 space-y-6">
          {flight.timings.map((segment, index) => (
            <FlightTimeDetails
              key={index}
              {...segment}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        {/* Price and Booking */}
        <div className="text-center md:text-right w-full md:w-auto flex md:flex-col items-center gap-3">
          {/* Price */}
          <p className="text-xl md:text-3xl font-semibold md:font-bold text-gray-900 mb-0 order-1">
            ${flight.price.toLocaleString()}
          </p>

          {/* Flight Details (order 2 on mobile, 3 on md) */}
          <div
            className="flex items-center justify-center md:justify-end gap-1 order-2 md:order-3 cursor-pointer"
            onClick={onShowDetails}
          >
            <Eye size={14} className="text-orange-500" />
            <span className="text-sm text-orange-500 underline hover:text-orange-600">
              Flight Details
            </span>
          </div>

          {/* Book Now (order 3 on mobile, 2 on md) */}
          <Link
            to={`/flight-booking/${flight.id}`}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-semibold transition-colors w-1/3 md:w-auto order-3 md:order-2"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Bottom badges and info */}
      <div className="flex justify-between items-center px-6 py-2 bg-gray-50 rounded-2xl my-5 max-w-4xl mx-auto">
        <FlightBadge text="Only 10 Seat Left" variant="warning" />
        <div className="text-center text-gray-600 text-xs md:text-lg font-semibold md:font-medium">
          Total time: {formattedDuration}
        </div>
        <FlightBadge
          text={flight.refundable ? "Refundable" : "Non - Refundable"}
          variant={flight.refundable ? "success" : "danger"}
        />
      </div>
    </div>
  );
};

// Helper to parse "10hr 35min" => total minutes number
function parseDurationToMinutes(str) {
  let hours = 0;
  let mins = 0;
  const hrMatch = str.match(/(\d+)hr/);
  const minMatch = str.match(/(\d+)min/);
  if (hrMatch) hours = parseInt(hrMatch[1], 10);
  if (minMatch) mins = parseInt(minMatch[1], 10);
  return hours * 60 + mins;
}

// Helper to format minutes number => "Xhr Ymin"
function formatMinutesToDuration(totalMins) {
  const h = Math.floor(totalMins / 60);
  const m = totalMins % 60;
  return `${h}hr${m > 0 ? ` ${m}min` : ""}`;
}
