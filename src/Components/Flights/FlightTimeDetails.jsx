import { IoAirplaneOutline } from "react-icons/io5";
import { SlPlane } from "react-icons/sl";

export const FlightTimeDetails = ({
  departTime,
  arriveTime,
  duration,
  departDate,
  arriveDate,
  from,
  to,
  reverse = false,
}) => {
  return (
    <div className="flex items-center justify-between">
      {/* Departure */}
      <div className="text-left">
        <p className="text-2xl font-bold text-gray-900">{departTime}</p>
        <p className="text-xs md:text-sm text-black font-semibold mb-1">
          {departDate}
        </p>
        <p className="text-xs md:text-sm text-gray-500 leading-tight">{from}</p>
      </div>

      {/* Duration and plane icon */}
      <div className="flex-1 flex flex-col items-center mx-8">
        <p className="text-sm md:text-lg text-black mb-4 font-bold">
          {duration}
        </p>
        <div className="relative w-full max-w-32">
          <div className="h-0.5 bg-gray-300 w-full"></div>
          <div
            className={
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            }
          >
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              {reverse ? (
                <SlPlane size={22} className="text-white" />
              ) : (
                <IoAirplaneOutline size={24} className="text-white" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Arrival */}
      <div className="text-right">
        <p className="text-2xl font-bold text-gray-900">{arriveTime}</p>
        <p className="text-xs md:text-sm text-black font-semibold mb-1 whitespace-nowrap">
          {arriveDate}
        </p>
        <p className="text-xs md:text-sm text-gray-500 leading-tight">{to}</p>
      </div>
    </div>
  );
};
