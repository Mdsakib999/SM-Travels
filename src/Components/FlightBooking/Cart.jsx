export const Cart = () => {
  return (
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
  );
};
