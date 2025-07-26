import { useState } from "react";
import {
  countryOptions,
  nationalityOptions,
  titleOptions,
} from "../../FakeDb/FlightBookingOptions";
import { Link } from "react-router-dom";
import { Minus, Plus } from "lucide-react";
import { TiDelete } from "react-icons/ti";

export const TravelersDetailsForm = () => {
  const [adults, setAdults] = useState([
    {
      id: 1,
      isOpen: true,
      data: { title: "Mr", firstName: "", lastName: "" },
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
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
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
          <div key={adult.id} className="rounded-md shadow-md overflow-hidden">
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
                    <TiDelete size={26} />
                  </button>
                )}
                {adult.isOpen ? <Minus size={16} /> : <Plus size={16} />}
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
                        updateAdult(adult.id, "firstName", e.target.value)
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
                        updateAdult(adult.id, "lastName", e.target.value)
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
    </div>
  );
};
