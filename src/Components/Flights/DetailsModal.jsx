import { FlightTimeDetails } from "./FlightTimeDetails";

export const DetailsModal = ({ selectedFlight, setSelectedFlight }) => {
  const hasSecondSegment =
    selectedFlight.timings && selectedFlight.timings.length > 1;

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full relative p-6">
        <button
          onClick={() => setSelectedFlight(null)}
          className="absolute top-2 right-2 text-xs bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded"
        >
          Close
        </button>
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Flight Details
        </h2>
        <div className="flex flex-col gap-4">
          <FlightTimeDetails {...selectedFlight.timings[0]} />
          {hasSecondSegment && (
            <>
              <div className="w-full h-0.5 bg-gray-300"></div>
              <FlightTimeDetails {...selectedFlight.timings[1]} reverse />
            </>
          )}
        </div>

        <div className="mt-4 text-sm text-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <p>
            <strong>Airline:</strong> {selectedFlight.airline}
          </p>
          <p>
            <strong>Code:</strong> {selectedFlight.code}
          </p>
          <p>
            <strong>Class:</strong> {selectedFlight.travelClass}
          </p>
          <p>
            <strong>Price:</strong> ${selectedFlight.price.toLocaleString()}
          </p>
          <p>
            <strong>Duration:</strong>{" "}
            {parseInt(selectedFlight.timings[0]?.duration) +
              parseInt(selectedFlight.timings[1]?.duration)}{" "}
            hrs
          </p>

          <p>
            <strong>Refundable:</strong>{" "}
            {selectedFlight.refundable ? "Yes" : "No"}
          </p>
          <div className="col-span-3">
            <strong className="text-orange-500">Included Services:</strong>
            <ul className="list-disc list-inside mt-1 space-y-1">
              {selectedFlight.flightDetails.split(",").map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
