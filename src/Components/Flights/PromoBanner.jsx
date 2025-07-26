export const PromoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-200 p-4 rounded-lg my-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
          New
        </span>
        <span className="text-gray-700">
          Get <span className="text-orange-600 font-bold">12% off</span> on your
          First Flight
        </span>
      </div>
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
        Login / Signup
      </button>
    </div>
  );
};
