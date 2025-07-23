import { BiSolidPlaneAlt } from "react-icons/bi";
import { RiHotelFill, RiArrowLeftRightLine } from "react-icons/ri";
import { FaTree } from "react-icons/fa";
import { BsPassportFill } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import {
  allClass,
  allFares,
  allTravelers,
  allTrips,
  flightDetails,
} from "../utils/constant";

export const Banner = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [travelers, setTravelers] = useState(allTravelers[0]);
  const [classType, setClassType] = useState(allClass[0]);
  const [tripType, setTripType] = useState(allTrips[0]);
  const [fareType, setFareType] = useState(allFares[0]);

  return (
    <div className="relative w-full">
      <img
        className="brightness-75 w-full h-[300px] sm:h-[400px] md:h-[400px] object-cover object-center"
        src="/assets/homeBanner.png"
        alt="Banner"
      />
      <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-2 sm:px-4">
        {/* Header */}
        <header className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white">
            Welcome To SM Travels
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-200">
            Find Flights, Hotels, Visa & Holidays
          </p>
        </header>

        <section className="bg-white space-y-5 sm:space-y-8 rounded-xl shadow-2xl shadow-gray-300 text-black p-4 sm:p-6 md:p-10">
          {/* Category Icons */}
          <ul className="flex flex-wrap justify-center sm:justify-start items-center gap-4 pb-3 border-b">
            <li className="flex items-center gap-x-2">
              <BiSolidPlaneAlt className="text-orange-600" size={20} />
              <span className="text-xs sm:text-sm font-semibold">Flight</span>
            </li>
            <li className="flex items-center gap-x-2">
              <RiHotelFill className="text-orange-600" size={20} />
              <span className="text-xs sm:text-sm font-semibold">Hotel</span>
            </li>
            <li className="flex items-center gap-x-2">
              <FaTree className="text-orange-600" size={20} />
              <span className="text-xs sm:text-sm font-semibold">Holiday</span>
            </li>
            <li className="flex items-center gap-x-2">
              <BsPassportFill className="text-orange-600" size={20} />
              <span className="text-xs sm:text-sm font-semibold">Visa</span>
            </li>
            <li className="flex items-center gap-x-2">
              <FaMoneyBillWave className="text-orange-600" size={20} />
              <span className="text-xs sm:text-sm font-semibold">
                Pay Bills
              </span>
            </li>
          </ul>

          {/* Trip & Fare Type */}
          <div className="flex flex-wrap justify-between items-center gap-3">
            <div className="flex flex-wrap gap-2">
              {allTrips.map((type) => (
                <label
                  key={type}
                  className={`flex items-center gap-x-2 px-3 py-1.5 rounded cursor-pointer text-xs sm:text-sm ${
                    tripType === type
                      ? "bg-orange-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="tripType"
                    value={type}
                    checked={tripType === type}
                    onChange={() => setTripType(type)}
                    className="hidden"
                  />
                  <div
                    className={`w-3 h-3 rounded-full hidden md:inline-block ${
                      tripType === type ? "bg-white" : "bg-gray-400"
                    }`}
                  />
                  <p>{type}</p>
                </label>
              ))}
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
              <select
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="w-full sm:w-auto bg-gray-100 border border-gray-200 px-3 py-2.5 text-xs sm:text-sm rounded focus:outline-none focus:ring-0"
              >
                {allTravelers.map((person, i) => (
                  <option key={i}>{person}</option>
                ))}
              </select>

              <select
                value={classType}
                onChange={(e) => setClassType(e.target.value)}
                className="w-full sm:w-auto bg-orange-600 text-white px-3 py-2.5 text-xs sm:text-sm rounded focus:outline-none focus:ring-0"
              >
                {allClass.map((cls, i) => (
                  <option key={i}>{cls}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Flight Details, Dates, Search */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {flightDetails.map(({ code, city, airport }) => (
              <div
                key={code}
                className="border border-gray-300 p-3 rounded text-xs flex flex-col"
              >
                <div className="flex items-center gap-x-2">
                  <span className="text-xs sm:text-sm font-extrabold">
                    {code}
                  </span>
                  <span className="border-r-2 border-gray-400 h-6" />
                  <div className="ml-2 overflow-hidden">
                    <p className="font-semibold text-xs sm:text-sm">{city}</p>
                    <p className="text-xs text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis w-full sm:w-[100px]">
                      {airport}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="border border-gray-300 p-3 rounded w-full">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd MMM yyyy"
                className="w-full outline-none text-xs sm:text-sm"
              />
              <p className="text-xs text-gray-500">Departure</p>
            </div>

            <div className="border border-gray-300 p-3 rounded w-full">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd MMM yyyy"
                className="w-full outline-none text-xs sm:text-sm"
              />
              <p className="text-xs text-gray-500">Return</p>
            </div>

            <div className="flex items-center justify-center sm:justify-start border border-gray-300 rounded px-2 py-2 w-full">
              <input
                type="search"
                placeholder="search here"
                className="outline-none bg-transparent text-black placeholder-gray-400 text-xs sm:text-sm hidden sm:block"
              />
              <IoSearch size={25} className="inline-block text-orange-600 " />
            </div>
          </div>

          {/* Fare Type */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mt-3">
            {allFares.map((fare) => (
              <label
                key={fare}
                className={`flex items-center gap-x-2 px-3 py-1.5 rounded cursor-pointer text-xs sm:text-sm ${
                  fareType === fare ? "bg-orange-600 text-white" : "bg-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="fareType"
                  value={fare}
                  checked={fareType === fare}
                  onChange={() => setFareType(fare)}
                  className="hidden"
                />
                <div
                  className={`w-3 h-3 hidden md:inline-block rounded-full ${
                    fareType === fare ? "bg-white" : "bg-gray-400"
                  }`}
                />
                <p>{fare}</p>
              </label>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
