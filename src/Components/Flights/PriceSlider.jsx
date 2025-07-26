export const PriceSlider = ({ priceRange, onChange }) => {
  const percentage = ((priceRange - 7) / 29) * 100;

  return (
    <div className="border-t-2 border-gray-200">
      <h4 className="font-semibold text-gray-900 mb-3 text-sm mt-2">Price</h4>
      <div className="flex justify-between text-xs text-gray-500 mb-2">
        <span>${priceRange}K</span>
        <span>$36K</span>
      </div>

      <div className="relative">
        <input
          type="range"
          min="7"
          max="36"
          value={priceRange}
          onChange={onChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider z-0"
          style={{
            background: `linear-gradient(to right, #f97316 0%, #f97316 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
          }}
        />

        <style jsx>{`
          .slider::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            background: #f97316;
            border-radius: 50%;
            cursor: pointer;
            border: 3px solid white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: #f97316;
            border-radius: 50%;
            cursor: pointer;
            border: 3px solid white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </div>
    </div>
  );
};
