import { ArrowRight, Plane } from "lucide-react";

export const FlightHeader = ({ flight }) => {
  if (!flight || !flight.timings) return null;

  const firstSegment = Array.isArray(flight.timings)
    ? flight.timings[0]
    : flight.timings;
  const lastSegment = Array.isArray(flight.timings)
    ? flight.timings[flight.timings.length - 1]
    : flight.timings;

  const totalDuration = Array.isArray(flight.timings)
    ? flight.timings.map((t) => t.duration).join(", ")
    : flight.timings.duration;

  const stopsCount = flight.stops?.onward + flight.stops?.return || 0;

  return (
    <header className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 p-4 bg-white rounded-lg shadow-sm">
      <Plane size={60} className="text-orange-600 shrink-0" />
      <div className="min-w-0">
        <h1 className="flex md:items-center gap-2 text-lg md:text-2xl font-bold text-gray-900">
          <span className="truncate">{firstSegment.from.split("\n")[0]}</span>
          <ArrowRight className="shrink-0" size={24} />
          <span className="truncate">{lastSegment.to.split("\n")[0]}</span>
        </h1>
        <p className="text-sm md:text-base text-gray-600 mt-1">
          {firstSegment.departDate} • {stopsCount} Stop
          {stopsCount !== 1 ? "s" : ""} • {totalDuration}
        </p>
      </div>
    </header>
  );
};
