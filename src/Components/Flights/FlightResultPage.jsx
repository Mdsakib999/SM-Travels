import { FiltersPanel } from "./FiltersPanel";
import { FlightCard } from "./FlightCard";
import { PromoBanner } from "./PromoBanner";
import { Pagination } from "./Pagination";
import { useState, useEffect, useRef } from "react";
import { SlidersHorizontal } from "lucide-react";
import { dummyFlights } from "../../FakeDb/Flights";
import { DetailsModal } from "./DetailsModal";

export const FlightResultPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const topRef = useRef(null);
  const flightsPerPage = 6;

  // Calculate pagination logic
  const totalPages = Math.ceil(dummyFlights.length / flightsPerPage);
  const startIndex = (currentPage - 1) * flightsPerPage;
  const paginatedFlights = dummyFlights.slice(
    startIndex,
    startIndex + flightsPerPage
  );
  // Scroll to topRef when page changes
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);
  return (
    <>
      <div className="relative">
        {/* Mobile Filter Button */}
        <div className="lg:hidden px-4 pt-4">
          <button
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded shadow"
          >
            <SlidersHorizontal size={16} />
            Open Filters
          </button>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6 max-w-7xl mx-auto">
          {/* Sidebar for lg and modal for sm */}
          <div className="hidden lg:block w-full lg:w-64 shrink-0">
            <FiltersPanel />
          </div>

          {/* Filter Panel Modal on mobile */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 z-[99] bg-black/50 flex justify-center items-start pt-10 px-4">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-sm relative">
                <button
                  onClick={() => setShowFilters(false)}
                  className="absolute z-[100] top-2 right-2 text-xs bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded"
                >
                  Close
                </button>
                <FiltersPanel />
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1" ref={topRef}>
            {paginatedFlights.slice(0, 3).map((flight) => (
              <FlightCard
                key={flight.code}
                flight={flight}
                onShowDetails={() => setSelectedFlight(flight)}
              />
            ))}

            <PromoBanner />

            {paginatedFlights.slice(3).map((flight) => (
              <FlightCard
                key={flight.code}
                flight={flight}
                onShowDetails={() => setSelectedFlight(flight)}
              />
            ))}

            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
      {selectedFlight && (
        <DetailsModal
          selectedFlight={selectedFlight}
          setSelectedFlight={setSelectedFlight}
        />
      )}
    </>
  );
};
