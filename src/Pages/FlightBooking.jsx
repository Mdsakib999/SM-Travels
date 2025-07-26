import React, { useState } from "react";
import { ArrowRight, User2, Eye, Plane, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import {
  countryOptions,
  nationalityOptions,
  titleOptions,
} from "../utils/FlightBookingOptions";

const FlightBooking = () => {
  const [adults, setAdults] = useState([
    {
      id: 1,
      isOpen: true,
      data: { title: "Mr", firstName: "John", lastName: "Doe" },
    },
  ]);
  const [nextId, setNextId] = useState(2);

  const addAdult = () => {
    setAdults([
      ...adults,
      {
        id: nextId,
        isOpen: true,
        data: { title: "Mr", firstName: "", lastName: "" },
      },
    ]);
    setNextId(nextId + 1);
  };

  const removeAdult = (id) => {
    if (adults.length > 1) {
      setAdults(adults.filter((adult) => adult.id !== id));
    }
  };

  const toggleAdult = (id) => {
    setAdults(
      adults.map((adult) =>
        adult.id === id ? { ...adult, isOpen: !adult.isOpen } : adult
      )
    );
  };

  const updateAdult = (id, field, value) => {
    setAdults(
      adults.map((adult) =>
        adult.id === id
          ? { ...adult, data: { ...adult.data, [field]: value } }
          : adult
      )
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 mt-10">
      <div className="px-2 sm:px-4 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-4 sm:gap-6 lg:gap-10">
          {/* Main Content */}
          <section className="xl:w-2/3 w-full space-y-4 sm:space-y-6">
            {/* Flight Header */}
            <header className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 bg-white rounded-lg shadow-sm">
              <Plane size={60} className="text-orange-600 shrink-0" />
              <div className="min-w-0">
                <h1 className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                  <span className="truncate">Mumbai(BOM)</span>
                  <ArrowRight className="hidden sm:block shrink-0" size={24} />
                  <span className="truncate">New York(JFK)</span>
                </h1>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  25 Jan • 1 Stop • 05h 25m
                </p>
              </div>
            </header>

            {/* Flight Details */}
            <section className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Flight Info Header */}
                <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                  <h2 className="text-lg sm:text-xl font-semibold">
                    Travel class: Economy
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
                      Philippines Airline PA-645
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                      {/* Departure */}
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold">BOM</h3>
                        <p className="font-semibold">14:50</p>
                        <p className="text-sm text-gray-600">
                          Sun, 29 Jan 2025
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                          Chhatrapati Shivaji International Airport Terminal -
                          2, Gate - 25
                        </p>
                      </div>

                      {/* Flight Duration */}
                      <div className="text-center mx-4 sm:mx-6">
                        <p className="text-sm font-medium mb-5 text-center">
                          9hr 50min
                        </p>
                        <div className="relative flex items-center justify-center">
                          <div className="w-24 sm:w-32 lg:w-40 h-px bg-gray-300"></div>
                          <div className="absolute flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-600 text-white">
                            <Plane size={16} />
                          </div>
                        </div>
                      </div>

                      {/* Arrival */}
                      <div className="text-center sm:text-right">
                        <h3 className="text-xl sm:text-2xl font-bold">CDG</h3>
                        <p className="font-semibold">11:50</p>
                        <p className="text-sm text-gray-600">
                          Sun, 29 Jan 2025
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                          Ch. De Gaulle, Paris, France Terminal - 2E, Gate - 3
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Layover Info */}
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 sm:p-4 text-center">
                    <p className="text-sm sm:text-base font-medium text-orange-800">
                      Change of planes: 3h 15m Layover in France
                    </p>
                  </div>

                  {/* Second Flight Segment */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="font-medium text-sm sm:text-base">
                      Philippines Airline PA-645
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                      {/* Departure */}
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold">CDG</h3>
                        <p className="font-semibold">11:50</p>
                        <p className="text-sm text-gray-600">
                          Sun, 29 Jan 2025
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                          Ch. De Gaulle, Paris, France Terminal - 2E, Gate - 3
                        </p>
                      </div>

                      {/* Flight Duration */}
                      <div className="text-center mx-4 sm:mx-6">
                        <p className="text-sm font-medium mb-5 text-center">
                          5hr 50min
                        </p>
                        <div className="relative flex items-center justify-center">
                          <div className="w-24 sm:w-32 lg:w-40 h-px bg-gray-300"></div>
                          <div className="absolute flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-600 text-white">
                            <Plane size={16} />
                          </div>
                        </div>
                      </div>

                      {/* Arrival */}
                      <div className="text-center sm:text-right">
                        <h3 className="text-xl sm:text-2xl font-bold">JFK</h3>
                        <p className="font-semibold">7:35</p>
                        <p className="text-sm text-gray-600">
                          Sun, 29 Jan 2025
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                          John F Kennedy Intl-NY Terminal - 4, Gate - 08
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Information */}
            <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
              <header className="mb-4">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Important Information
                </h2>
                <hr className="border-gray-200" />
              </header>

              <article className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                    Passengers traveling to the United States, please note
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-700 list-disc pl-5">
                    <li>
                      Who can travel? All fully vaccinated travelers are allowed
                      to enter the country. All WHO-approved vaccines, including
                      Covishield and Covaxin, are accepted by the USA.
                    </li>
                    <li>
                      Destination restrictions: Non-vaccinated travelers from
                      India cannot enter. Any traveler transiting via EU/UK
                      cannot enter the USA.
                    </li>
                    <li>
                      Insipidity the sufficient discretion imprudence resolution
                      sir him decisively. Proceed how any engaged visitor.
                    </li>
                    <li>
                      Explained propriety off out perpetual his you. Feel sold
                      off felt nay rose met you. We so entreaties cultivated
                      astonished is.
                    </li>
                    <li>
                      Was sister for a few longer Mrs sudden talent become. Done
                      may bore quit evil old mile. If likely am of beauty
                      tastes.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                    A Note on Guidelines
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    While we do our best to get you the latest information, due
                    to the rapidly evolving nature of current events, sometimes
                    that is not possible. Please note, it is the sole
                    responsibility of the passenger to ensure his or her
                    eligibility to enter the destination or transit countries
                    (as applicable). We accept no liability in this regard.
                    Please check the travel rules of all regulatory websites
                    before booking as well as commencing.
                  </p>
                </div>
              </article>
            </section>

            {/* Traveler Details Form */}
            <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
              <header className="mb-4">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Traveler Details
                </h2>
                <hr className="border-gray-200" />
              </header>

              <div className="bg-orange-900 text-white p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded text-sm font-medium shrink-0">
                    New
                  </span>
                  <span className="text-sm sm:text-base">
                    Please make sure you enter the Name as per your passport
                  </span>
                </div>
              </div>

              <div className="flex justify-end mb-4">
                <button
                  onClick={addAdult}
                  className="bg-gray-100 hover:bg-gray-300 px-3 sm:px-4 py-2 rounded-md shadow text-sm sm:text-base font-medium transition-colors"
                >
                  Add New Adult
                </button>
              </div>

              {/* Adults Forms */}
              <div className="space-y-4">
                {adults.map((adult, index) => (
                  <div
                    key={adult.id}
                    className="rounded-md shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAdult(adult.id)}
                      className="w-full bg-gray-100 hover:bg-gray-200 px-3 sm:px-4 py-3 flex items-center justify-between transition-colors"
                    >
                      <span className="font-medium text-sm sm:text-base">
                        Adult {index + 1}
                      </span>
                      <div className="flex items-center gap-2">
                        {adults.length > 1 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeAdult(adult.id);
                            }}
                            className="text-red-600 hover:text-red-800 p-1"
                          >
                            <Minus size={16} />
                          </button>
                        )}
                        {adult.isOpen ? (
                          <Minus size={16} />
                        ) : (
                          <Plus size={16} />
                        )}
                      </div>
                    </button>

                    {adult.isOpen && (
                      <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                          {/* Title */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Title *
                            </label>
                            <select
                              value={adult.data.title}
                              onChange={(e) =>
                                updateAdult(adult.id, "title", e.target.value)
                              }
                              className="w-full border border-gray-300 outline-none rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            >
                              {titleOptions.map((title) => (
                                <option key={title} value={title}>
                                  {title}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* First Name */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              First Name *
                            </label>
                            <input
                              type="text"
                              value={adult.data.firstName}
                              onChange={(e) =>
                                updateAdult(
                                  adult.id,
                                  "firstName",
                                  e.target.value
                                )
                              }
                              className="w-full border border-gray-300 outline-none rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                              placeholder="Enter first name"
                            />
                          </div>

                          {/* Last Name */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              value={adult.data.lastName}
                              onChange={(e) =>
                                updateAdult(
                                  adult.id,
                                  "lastName",
                                  e.target.value
                                )
                              }
                              className="w-full border border-gray-300 outline-none rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                              placeholder="Enter last name"
                            />
                          </div>

                          {/* Date of Birth */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Date of Birth *
                            </label>
                            <input
                              type="date"
                              className="w-full border border-gray-300 outline-none rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            />
                          </div>

                          {/* Nationality */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Nationality *
                            </label>
                            <select className="w-full border border-gray-300 outline-none rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                              {nationalityOptions.map((nationality) => (
                                <option key={nationality} value={nationality}>
                                  {nationality}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Passport Number */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Passport Number *
                            </label>
                            <input
                              type="text"
                              className="w-full border border-gray-300 outline-none rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                              placeholder="Enter passport number"
                            />
                          </div>

                          {/* Passport Issuing Country */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Passport Issuing Country *
                            </label>
                            <select className="w-full border border-gray-300 outline-none rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                              {countryOptions.map((country) => (
                                <option key={country} value={country}>
                                  {country}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Passport Expiry */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Passport Expiry *
                            </label>
                            <input
                              type="date"
                              className="w-full border border-gray-300 outline-none rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact Information */}
              <div className="mt-6 sm:mt-8">
                <h3 className="font-bold text-lg sm:text-xl mb-4 text-gray-900">
                  Booking details will be sent to
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 outline-none rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 outline-none rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
              </div>

              <Link to="/checkout">
                <button className="cursor-pointer w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 sm:py-4 rounded-lg mt-6 transition-colors text-sm sm:text-base">
                  Proceed to Checkout
                </button>
              </Link>
            </section>
          </section>

          {/* Sidebar - Booking Summary */}
          <aside className="xl:w-1/3 w-full space-y-4 sm:space-y-6">
            {/* Price Breakdown */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm sm:text-base">
                  <span>Base Fare</span>
                  <span className="font-semibold">$38,660</span>
                </div>
                <div className="flex items-center justify-between text-sm sm:text-base">
                  <span>Discount</span>
                  <span className="text-green-600 font-semibold">–$2,580</span>
                </div>
                <div className="flex items-center justify-between text-sm sm:text-base">
                  <span>Other Services</span>
                  <span className="font-semibold">$20</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex items-center justify-between font-bold text-base sm:text-lg">
                  <span>Total Fare</span>
                  <span>$36,500</span>
                </div>
              </div>
            </div>

            {/* Offers & Discounts */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Offers & Discounts
              </h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  className="flex-1 border border-gray-300 outline-none rounded-md px-3 py-2 text-sm focus:ring focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Coupon Code"
                />
                <button className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Apply
                </button>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5">
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3">
                Cancellation & Date Change Charges
              </h3>
              <h4 className="text-orange-600 font-semibold mb-2">
                Non Refundable
              </h4>
              <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed">
                The Cancellation penalty on this booking will depend on how
                close to the departure date you cancel your ticket. View fare
                rules to know more.
              </p>
              <button className="flex items-center gap-2 text-orange-600 hover:underline text-sm">
                <Eye size={16} />
                <span>View Details</span>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default FlightBooking;
