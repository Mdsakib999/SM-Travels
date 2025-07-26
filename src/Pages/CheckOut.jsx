import { ArrowRight, User2 } from "lucide-react";

const CheckOut = () => {
  return (
    <div className="px-4 py-10 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Side - Payment Form */}
        <div className="lg:w-2/3 w-full space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
            Enter Your Payment Details
          </h1>
          <p className="bg-gray-200 text-gray-900 rounded-md py-6 px-4">
            Hey! You're saving <span className="font-semibold">$2560</span>{" "}
            using your coupon code.
          </p>

          <div className="space-y-6">
            {/* Accepted Cards */}
            <div className="flex items-center justify-between">
              <p className="font-bold text-lg md:text-2xl">We accept:</p>
              <div className="flex items-center gap-3">
                <img className="w-10 h-10" src="./assets/Visa.png" alt="Visa" />
                <img
                  className="w-10 h-10"
                  src="./assets/MasterCard.png"
                  alt="MasterCard"
                />
                <img
                  className="w-10 h-10"
                  src="./assets/AmericanExpress.png"
                  alt="AmericanExpress"
                />
              </div>
            </div>

            {/* Card Number */}
            <div>
              <label htmlFor="cardNumber" className="block font-medium mb-1">
                Card Number*
              </label>
              <input
                className="bg-gray-100 w-full p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
                type="number"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
              />
            </div>

            {/* Expiration Date and CVV */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <label className="block font-medium mb-1">
                  Expiration Date*
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="bg-gray-100 w-full p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div className="w-full">
                <label className="block font-medium mb-1">CVV/CVC*</label>
                <input
                  type="password"
                  placeholder="123"
                  maxLength="4"
                  className="bg-gray-100 w-full p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>

            {/* Card Holder Name */}
            <div>
              <label className="block font-medium mb-1">Name on Card*</label>
              <input
                type="text"
                placeholder="Card Holder's Full Name"
                className="bg-gray-100 w-full p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Proceed Button */}
            <button className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition">
              Proceed to Payment
            </button>
          </div>
        </div>

        {/* Right Side - Booking Summary */}
        <div className="lg:w-1/3 w-full space-y-6">
          <div className="bg-gray-100 p-5 rounded-md space-y-2">
            <div className="flex items-center justify-between">
              <p>Base Fare</p>
              <p>$38,660</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Discount</p>
              <p className="text-green-600">–$2580</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Other Services</p>
              <p>$20</p>
            </div>
            <hr />
            <div className="flex items-center justify-between font-bold text-lg">
              <p>Total Fare</p>
              <p>$36,500</p>
            </div>
          </div>

          <div className="bg-orange-500 text-white p-5 rounded-md space-y-3">
            <h2 className="text-xl font-semibold">Your Booking</h2>
            <hr className="border-orange-300" />
            <p className="flex items-center gap-x-3">
              Mumbai <ArrowRight className="w-4 h-4" /> New York
            </p>
            <p>25 Jan • 1 Stop • 05h 25m</p>
            <hr className="border-orange-300" />
            <p className="flex items-center gap-x-2 font-medium">
              <User2 className="w-4 h-4" /> Traveler Details
            </p>
            <p>Carolyn Ortiz</p>
            <p>Adult • Female • Dec-02-1990</p>
            <hr className="border-orange-300" />
            <p className="text-xl font-semibold">Review Booking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
