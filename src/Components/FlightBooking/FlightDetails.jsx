import { Eye } from "lucide-react";
import { FlightTimeDetails } from "../Flights/FlightTimeDetails";

export const FlightDetails = ({ flight }) => {
  if (!flight) return null;

  const hasSecondSegment = flight.timings && flight.timings.length > 1;

  let layoverDuration = null;
  if (hasSecondSegment) {
    const firstArrive = new Date(
      `${flight.timings[0].arriveDate} ${flight.timings[0].arriveTime}`
    );
    const secondDepart = new Date(
      `${flight.timings[1].departDate} ${flight.timings[1].departTime}`
    );
    const diffMs = secondDepart - firstArrive;

    if (diffMs > 0) {
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      layoverDuration = `${diffHours}h ${diffMinutes}m`;
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Flight Info Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <h2 className="text-lg sm:text-xl font-semibold">
            Travel class: {flight.travelClass}
          </h2>
          <button className="text-orange-600 flex items-center gap-2 text-sm hover:underline">
            <Eye size={16} />
            <span>Baggage & Fare Rules</span>
          </button>
        </header>

        {/* First Flight Segment */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="font-medium text-sm sm:text-base">
              <p>{flight.airline}</p>
              <p className="text-gray-600">{flight.code}</p>
            </div>

            <FlightTimeDetails {...flight.timings[0]} />
          </div>

          {/* Conditionally render layover info if second segment exists */}
          {hasSecondSegment && layoverDuration && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 sm:p-4 text-center">
              <p className="text-sm sm:text-base font-medium text-orange-800">
                Change of planes: {layoverDuration} Layover in between flights
              </p>
            </div>
          )}

          {/* Conditionally render second flight segment */}
          {hasSecondSegment && (
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="font-medium text-sm sm:text-base">
                <p>{flight.airline}</p>
                <p className="text-gray-600">{flight.code}</p>
              </div>

              <FlightTimeDetails {...flight.timings[1]} reverse />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
