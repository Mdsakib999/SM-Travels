import { ArrowLeft, Home, MapPin, Compass } from "lucide-react";
import { Link } from "react-router-dom";

export const Error404 = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Decorative travel icons */}
        <div className="relative mb-8">
          <div className="absolute -top-4 -left-4 text-blue-300 animate-bounce">
            <MapPin size={32} />
          </div>
          <div className="absolute -top-8 -right-8 text-orange-300 animate-pulse">
            <Compass size={40} />
          </div>

          {/* Main 404 illustration */}
          <div className="relative  p-12 mx-auto max-w-lg">
            {/* Airplane icon as main image */}
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-16 h-16 text-white transform rotate-45"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </div>
            </div>

            {/* 404 Text */}
            <div className="mb-4">
              <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
                404
              </h1>
            </div>
          </div>
        </div>

        {/* Error message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Oops! Looks like you've wandered off the beaten path
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            The page you're looking for seems to have taken an unexpected
            detour.
          </p>
          <p className="text-gray-500">
            Don't worry, even the best explorers sometimes lose their way!
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/">
            <button className="group flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Home size={20} />
              <span>Go to Home</span>
              <div className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden">
                →
              </div>
            </button>
          </Link>

          <button
            onClick={handleGoBack}
            className="group flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-8 text-gray-400">
          <div className="animate-pulse text-4xl">✈️</div>
          <div className="animate-bounce text-4xl">🗺️</div>
          <div className="animate-pulse text-4xl">🧳</div>
          <div className="animate-bounce text-4xl">🏔️</div>
          <div className="animate-pulse text-4xl">🏖️</div>
        </div>

        {/* Subtle help text */}
        <p className="mt-6 text-sm text-gray-400">
          Need help? Contact our travel experts for assistance with your
          journey.
        </p>
      </div>
    </div>
  );
};
