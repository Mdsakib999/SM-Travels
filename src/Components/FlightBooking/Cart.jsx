export const Cart = ({ flight }) => {
  if (!flight) return null;

  const baseFare = flight.price || 0;
  const discount = flight.discount || 0;
  const otherFees = flight.otherFees || 50;

  const totalFare = baseFare - discount + otherFees;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm sm:text-base">
          <span>Base Fare</span>
          <span className="font-semibold">${baseFare.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between text-sm sm:text-base">
          <span>Discount</span>
          <span className="text-green-600 font-semibold">
            –${discount.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm sm:text-base">
          <span>Other Services</span>
          <span className="font-semibold">${otherFees.toLocaleString()}</span>
        </div>
        <hr className="border-gray-200" />
        <div className="flex items-center justify-between font-bold text-base sm:text-lg">
          <span>Total Fare</span>
          <span>${totalFare.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};
