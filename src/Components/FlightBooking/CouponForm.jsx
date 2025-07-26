export const CouponForm = () => {
  return (
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
  );
};
